/**
* name 
*/
module wuling{
	export class nenglianganniu extends ui.nenglianganniuUI{
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
			var nengliangtishi:laya.ui.Dialog = new wuling.nengliangtishi;
			this.parent.addChild(nengliangtishi);
			nengliangtishi.width = Laya.stage.width;
			//打开页面
			nengliangtishi.popup(false,true);
		}

		private static _instance:nenglianganniu;
		public static getInstances():nenglianganniu
		{
			if(this._instance == null)
			{
				this._instance = new nenglianganniu;
				this._instance.zOrder = 999999;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}