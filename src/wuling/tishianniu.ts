/**
* name 
*/
module wuling{
	export class tishianniu extends ui.tishianniuUI{
		constructor(){
             super();
			 this.DClisk();
		}
		/**添加点击事件 */
		public DClisk():void
		{
			this.on(Laya.Event.CLICK,this,this.onClick);
		}

		/**点击执函数 */
		private onClick():void
		{
			this.offAll();
			var wanfa:laya.ui.Dialog = new wuling.wanfa;
			this.parent.addChild(wanfa);
			wanfa.width = Laya.stage.width;
			//打开页面
			wanfa.popup(false,true);
		}

		private static _instance:tishianniu;
		public static getInstances():tishianniu
		{
			if(this._instance == null)
			{
				this._instance = new tishianniu;
				this._instance.zOrder = 999;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}