/**
* name 
*/
module wuling{
	export class baobianniu extends ui.baobianniuUI{
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
			var baobitishi:laya.ui.Dialog = new wuling.baobitishi;
			this.parent.addChild(baobitishi);
			baobitishi.width = Laya.stage.width;
			//打开页面
			baobitishi.popup(false,true);
		}

		private static _instance:baobianniu;
		public static getInstances():baobianniu
		{
			if(this._instance == null)
			{
				this._instance = new baobianniu;
				this._instance.zOrder = 999999;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}