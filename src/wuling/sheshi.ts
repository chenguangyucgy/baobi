/**
* name 
*/
module wuling{
	export class sheshi extends ui.sheshiUI{
		constructor(){
			super();
			this.gb.on(Laya.Event.CLICK,this,this.onclick);
		}
		private static _instance:sheshi;
		public static getInstance():sheshi
		{
			if(this._instance == null)
			{
				this._instance = new sheshi;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
		private onclick(event:Laya.Event):void
		{
			this.close();
		}
	}
}