/**
* name 
*/
module wuling{
	export class huoDong extends ui.huoDongUI{
		constructor(){
             super();
			 Laya.timer.once(5000,this,()=>{
				 this.returnBtn.on(Laya.Event.CLICK,this,this.DClick);
			 });
		}

		public DClick():void
		{
			this.removeSelf();
		}

		private static _instance:huoDong;
		public static getInstances():huoDong
		{
			if(this._instance == null)
			{
				this._instance = new huoDong;
				this._instance.zOrder = 999999999;
				this._instance.width = Laya.stage.width;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}