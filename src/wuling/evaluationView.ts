/**
* name 
*/
module wuling{
	export class evaluationView extends ui.evaluationViewUI{
		constructor(){
			super();
			this.returnBtn.on(Laya.Event.CLICK,this,this.onReturn);
		}
		private onReturn():void
		{
			this.visible = false;
			wuling.shareBtn.getInstance().visible = true;
		}
		public onEvent():void
		{
			this.tiBtn.on(Laya.Event.CLICK,this,this.onClick);
			this.xin1.on(Laya.Event.CLICK,this,this.onXin);
			this.xin2.on(Laya.Event.CLICK,this,this.onXin);
			this.xin3.on(Laya.Event.CLICK,this,this.onXin);
			this.xin4.on(Laya.Event.CLICK,this,this.onXin);
			this.xin5.on(Laya.Event.CLICK,this,this.onXin);
		}

		private static _instance:evaluationView;
		public static getInstance():evaluationView
		{
			if(this._instance == null)
			{
				this._instance = new evaluationView;
				this._instance.zOrder =999999;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
		
		//确定跳转链接
		private onClick():void
		{
			Laya.Browser.window.location.href = "http://www.wulingyouxi.club/game/wuling9103/";
			// window.open("http://www.wulingyouxi.club/game/wuling9062/");
		}
		//星星点击触发函数
		private onXin(even:Laya.Event):void
		{
			switch (even.currentTarget) {
				case this.xin1:
					this.xin1.alpha = 1;
					this.xin2.alpha = 0;
					this.xin3.alpha = 0;
					this.xin4.alpha = 0;
					this.xin5.alpha = 0;
					this.text1.skin = "share/text1.png"
					break;
				case this.xin2:
					this.xin1.alpha = 1;
					this.xin2.alpha = 1;
					this.xin3.alpha = 0;
					this.xin4.alpha = 0;
					this.xin5.alpha = 0;
					this.text1.skin = "share/text2.png"					
					break;
				case this.xin3:
					this.xin1.alpha = 1;
					this.xin2.alpha = 1;
					this.xin3.alpha = 1;
					this.xin4.alpha = 0;
					this.xin5.alpha = 0;
					this.text1.skin = "share/text3.png"					
					break;
				case this.xin4:
					this.xin1.alpha = 1;
					this.xin2.alpha = 1;
					this.xin3.alpha = 1;
					this.xin4.alpha = 1;
					this.xin5.alpha = 0;
					this.text1.skin = "share/text4.png"					
					break;
				case this.xin5:
					this.xin1.alpha = 1;
					this.xin2.alpha = 1;
					this.xin3.alpha = 1;
					this.xin4.alpha = 1;
					this.xin5.alpha = 1;
					this.text1.skin = "share/text5.png"					
					break;
			}
		}
	}
}