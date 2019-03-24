/**
* name 
*/
module wuling{
	export class rankBtn extends ui.rankBtnUI{
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
			util.HttpRequestUtil.Modifybaobi(10000);
			this.offAll();
			util.HttpRequestUtil.sendGetRank();
		}

		private static _instance:rankBtn;
		public static getInstances():rankBtn
		{
			if(this._instance == null)
			{
				this._instance = new rankBtn;
				this._instance.right = 20;
				this._instance.y = 160;
				this._instance.zOrder = 999;
				
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}