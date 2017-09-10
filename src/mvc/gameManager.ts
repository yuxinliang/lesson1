module mvc {
	export class gameManager {
		private static currentControl: control;
		private static gmanager: gameManager;
		private ctlStack =[];
		public static getInstance(): gameManager {
			if (!gameManager.gmanager) {
				gameManager.gmanager = new gameManager();
			}
			return gameManager.gmanager;
		}
		public open(modulelName: string) {
			var ctl: control = eval("new " + modulelName + "_control();");
			ctl._create(modulelName);
			if(ctl.vtype == 1 && gameManager.currentControl){
				gameManager.currentControl.release();
				gameManager.currentControl = ctl;
				for(var i=0;i<this.ctlStack.length;i++){
					this.ctlStack[i].release();
				}
				this.ctlStack.length = 0;
			}else{
				//放到一个堆里
				this.ctlStack.push(ctl);
			}
		}
		public closeScene(ctl:control){
			if(ctl.vtype != 1){
				var  len = this.ctlStack.length;
				for(var i=0;i<len;i++){
					if(this.ctlStack[i].cname == ctl.cname){
						ctl.release();
						this.ctlStack.splice(i,1);
						break;
					}
				}
			}
		}
		public changeScene(modulelName: string) {
			if (gameManager.currentControl) {
				gameManager.currentControl.release();
			}
			var ctl: control = eval("new " + modulelName + "_control();");
			ctl._create(modulelName);
			gameManager.currentControl = ctl;
		}
	}
}