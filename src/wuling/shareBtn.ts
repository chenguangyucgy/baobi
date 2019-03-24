/**
* name 
*/
module wuling{
	export class shareBtn extends ui.shareBtnUI{
		constructor(){
			super();
			this.shareImg.on(Laya.Event.CLICK,this,this.onClick);
		}

		private onClick():void
		{
			var evaluationView = wuling.evaluationView.getInstance();
			evaluationView.visible = true;
			this.visible = false;
			evaluationView.alpha = 0;
				//界面显示
				// Laya.timer.once(4000,this,()=>{
					Laya.Tween.to(evaluationView,{alpha:1},1000,null,new Laya.Handler(evaluationView,evaluationView.onEvent));
				// });
		}

		private static _instance:shareBtn;
		public static getInstance():shareBtn
		{
			if(this._instance == null)
			{
				this._instance = new shareBtn;
				Laya.stage.addChild(this._instance);
				// this._instance.show();
				this._instance.zOrder = 999999;
				this._instance.left = 184;
				this._instance.bottom = 30;
			}
			return this._instance;
		}
	}
}