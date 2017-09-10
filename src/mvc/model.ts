module mvc {
	export class model {
		protected _data: any;
		protected _name: string;
		public constructor() {
		}
		public _create(mname: string, callback: Function) {
			this._name = mname
			var self = this;
			mySocket.requestData(mname,(data) => {
				self._data = data;
				callback(data);
			})
		}
		public create(){
			
		}
		public getRequestData(data:any,callback:Function){
			var self = this;
			mySocket.requestData(data,(redata) => {
				self._data = redata;
				callback(redata);
			})
		}
		public release() {
		}

	}
}