module mvc {
	export class control {
		protected _model:model;
		protected _view:view;
		protected _vtype:number = 1;
		protected _cname:string;
		public constructor() {
		}
		public _create(modelName:string){
			this._cname = modelName;
			var self = this;
			var stage = egret.MainContext.instance.stage;
			this._model = eval("new "+modelName+"_model();");
			this._model._create(modelName,(data)=>{
				self._view = eval("new "+modelName+"_view();")
				self._view._create(data,self);
				stage.addChild(self._view);
			});
		}
		public create(){
			
		}
		public eventHandler(msg:string){
		}
		public release(){
			if(this._view && this._view.parent){
				this._view.parent.removeChild(this._view);
			}
			this._model.release();
			this._view.release();
		}
		public get vtype(){
			return this._vtype;
		}
		public get cname(){
			return this._cname;
		}
		
	}
}