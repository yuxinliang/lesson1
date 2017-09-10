class homeScene_model extends mvc.model{
	public constructor() {
		super()
	}
	public updataName(str:string,callback:Function){
		callback(str+"updata");
	}
}