/**
* name 
*/
module wuling{
	export class begin extends ui.beginUI{
		constructor(){
			super();
			Laya.Tween.to(this.zhmd, {y:78}, 400,null,Laya.Handler.create(this, this.zhTween),800);
			this.into.on(Laya.Event.CLICK,this,this.onclick);
		}
		private onclick():void
		{
			this.visible =false;
			// wuling.shareBtn.getInstance();
			wuling.map.getInstance();
			// wuling.map.getInstance().mapImg.mouseEnabled =false;
			wuling.Bottom.getInstance();
			// wuling.Bottom.getInstance().mouseEnabled = false;
			wuling.Top.getInstance();
			this.removeSelf();
		}


		private zhTween():void{
			Laya.Tween.to(this.zhmd, {y:72}, 100,null,Laya.Handler.create(this, ()=>{
				Laya.Tween.to(this.zhmd, {y:73}, 100);
			}));
			Laya.Tween.to(this.into, {alpha: 1, scaleX: 0.7, scaleY: 0.7}, 300,null,Laya.Handler.create(this, this.intoTween));
		}



		private intoTween():void{
			Laya.Tween.to(this.into, {alpha: 0.7, scaleX: 0.555, scaleY: 0.555}, 400,null,Laya.Handler.create(this, this.intoTween2));
		}


		private intoTween2():void{
			Laya.Tween.to(this.into, {alpha: 1, scaleX: 0.7, scaleY: 0.7}, 400,null,Laya.Handler.create(this, this.intoTween));
		}


		private static _instance:begin;
		public static getInstance():begin
		{
			if(this._instance == null)
			{
				this._instance = new begin;
				Laya.stage.addChild(this._instance);
				this._instance.zOrder =999999;
			}
			return this._instance;
		}
	}
}