/**
* name 
*/
module wuling{
	export class setting extends ui.settingUI{
		constructor(){
			super();
			wuling.map.getInstance().person1.figureStatic();
			wuling.map.getInstance().person2.figureStatic();
			wuling.map.getInstance().person3.figureStatic();
			wuling.map.getInstance().person4.figureStatic();
			wuling.map.getInstance().person5.figureStatic();
			this.returnBtn.on(Laya.Event.CLICK,this,this.onclick);
			this.music.on(Laya.Event.CLICK, this, this.onclick);
			this.soundEffect.on(Laya.Event.CLICK, this, this.onclick);
		}
		private onclick(event:Laya.Event):void
		{
			switch (event.currentTarget) {
                case this.returnBtn:
                    this.close();
					wuling.map.getInstance().person1.figureStart();
					wuling.map.getInstance().person2.figureStart();
					wuling.map.getInstance().person3.figureStart();
					wuling.map.getInstance().person4.figureStart();
					wuling.map.getInstance().person5.figureStart();
					wuling.Bottom.getInstance().nanaOnClick();
					wuling.Bottom.getInstance().btmclick();
                    break;
				case this.music:
					this.music.x == 313 ? this.music.x = 263 : this.music.x = 313;
					var music =wuling.map.getInstance().music;
					var musicUrl =wuling.map.getInstance().musicUrl;
					if(this.music.x==313)
					{
						//停止音乐
						music.stopSound(musicUrl);
					}
					if(this.music.x==263)
					{
						//播放音乐
						music.playMusic(musicUrl, 0, new Laya.Handler(this, ()=>{}));
					}
					break;
				case this.soundEffect:
					this.soundEffect.x == 263 ? this.soundEffect.x = 313 : this.soundEffect.x = 263;
					if(this.soundEffect.x==313)
					{
						//停止音乐
						Laya.SoundManager.soundMuted = true;
					}
					if(this.soundEffect.x==263)
					{
						//播放音乐
						Laya.SoundManager.soundMuted = false;
					}
					break;
                default:
                    break;
            }
		}

		private static _instance:setting;
		public static getInstancess():setting
		{
			if(this._instance == null)
			{
				this._instance = new setting;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}