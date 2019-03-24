/**
* name 
*/
module wuling{
	export class manyiduanniu extends ui.manyiduanniuUI{
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
			var manyidutishi:laya.ui.Dialog = new wuling.manyidutishi;
			this.parent.addChild(manyidutishi);
			manyidutishi.width = Laya.stage.width;
			//打开页面
			manyidutishi.popup(false,true);
		}

		private static _instance:manyiduanniu;
		public static getInstances():manyiduanniu
		{
			if(this._instance == null)
			{
				this._instance = new manyiduanniu;
				this._instance.zOrder = 999999;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}