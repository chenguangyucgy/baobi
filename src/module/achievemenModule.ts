/**
* name 
*/
module module{
	export class achievemenModule{
		constructor(){

		}

		private _getData:Array<Object> =[];

		public get getData():Array<Object>
		{
			return this._getData;
		}

		public set getData(data:Array<Object>)
		{
			this._getData = data;
		}

		private static _instance:achievemenModule;
		public static getInstance():achievemenModule
		{
			if(this._instance == null)
			{
				this._instance = new achievemenModule;
			}
			return this._instance;
		}
		
	}
}