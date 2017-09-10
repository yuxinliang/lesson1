module mvc {
	export class view extends eui.Component{
		protected _data:any;
		protected _control:control;
		public constructor() {
			super();
		}
		//框架创建调用
		public _create(data,control){
			this._data = data;
			this._control = control;
			this.create();
		}
		//留给子类继承
		public create(){
		}
		public release() {
		}
	}
}