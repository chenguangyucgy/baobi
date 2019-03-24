/**
* 服装跟换数据 
*/
module module{
	export class reloadingModule{
		/**服装信息 */
        private _reloadingData:Object = {};
		/**Item内容 */
		private _ItemData:Array<Object> = [
			{id:0,use:true,Lv:0,BuySuit:"BuySuit1",jin:0,class:"r0",nameImg:"reloading/huangName1.png"}
			,{id:1,use:false,Lv:5,BuySuit:"BuySuit2",jin:1000,class:"r1",nameImg:"reloading/huangName2.png"}
			,{id:2,use:false,Lv:10,BuySuit:"BuySuit3",jin:3000,class:"r2",nameImg:"reloading/huangName3.png"}
			,{id:3,use:false,Lv:15,BuySuit:"BuySuit4",jin:5000,class:"r3",nameImg:"reloading/huangName4.png"}
		];







		/**获取服装信息 */
        public get reloadingData():Object
		{
			return this._reloadingData;
		}
		/**设置服装信息 */
		public set reloadingData(content:Object)
		{
			this._reloadingData = content;
		}

		/**获取Item内容 */
        public get ItemData():Array<Object>
		{
			return this._ItemData;
		}
		/**设置Item内容 */
		public set ItemData(content:Array<Object>)
		{
			this._ItemData = content;
		}

		



		private static _instance:reloadingModule;
		public static getInstance():reloadingModule
		{
			if(this._instance == null)
			{
				this._instance = new reloadingModule;
			}
			return this._instance;
		}
		constructor(){

		}
	}
}