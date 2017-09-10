class otherScene_control extends mvc.control{
	public constructor() {
		super();
	}
	public eventHandler(msg:string){
		switch(msg){
			case "gotoHome":{
				mvc.gameManager.getInstance().changeScene("homeScene");
				break;
			}
		}
	}
}