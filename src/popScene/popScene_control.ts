class popScene_control extends mvc.popControl{
	public constructor() {
		super();
	}
	public eventHandler(msg:string){
		switch(msg){
			case "goback":{
				mvc.gameManager.getInstance().closeScene(this);
				break;
			}
		}
	}
}