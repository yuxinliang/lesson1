class homeScene_control extends mvc.control {
	public constructor() {
		super();
	}

	public eventHandler(msg: string) {
		switch (msg) {
			case "changeScene": {
				mvc.gameManager.getInstance().changeScene("otherScene");
				break;
			}
			case "popScene": {
				mvc.gameManager.getInstance().open("popScene");
				break;
			}
			case "updataScene": {
				(<homeScene_model>this._model).updataName("homeScene", (str) => {
					(<homeScene_view>this._view).updataTitle(str);
				})
				break;
			}
		}
	}
}