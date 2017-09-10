class mySocket{
	public constructor() {
	}
	public static requestData(str:string,callback:Function){
		callback({title:str});
	}
}