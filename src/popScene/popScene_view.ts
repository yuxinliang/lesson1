class popScene_view extends mvc.view{
	public constructor() {
		super();
		this.skinName = popSceneSkin
	}
	 public create(){
		 var self  = this;
		 this.title.text = this._data.title;
		  this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			 self._control.eventHandler("goback");
		 },this);
	}
	private title:eui.Label;
	private btn:eui.Label;
}