class homeScene_view extends mvc.view{
	public constructor() {
		super();
		this.skinName = homeSceneSkin
	}
	 public create(){
		 this.title.text = this._data.title;
		 var self = this;
		 this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			 self._control.eventHandler("changeScene");
		 },this);
		 this.popBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			 self._control.eventHandler("popScene");
		 },this);
		 this.updataBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			 self._control.eventHandler("updataScene");
		 },this);
	}
	public updataTitle(str:string){
		this.title.text = str;
	}
	private title:eui.Label;
	private btn:eui.Button;
	private popBtn:eui.Button;
	private updataBtn:eui.Button;
}