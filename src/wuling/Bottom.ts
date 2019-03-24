module wuling{
    export class Bottom extends ui.bottomUI{
        constructor(){
            super();

			this.nanaicon.on(Laya.Event.CLICK, this, this.shownana);
			this.renwu.on(Laya.Event.CLICK,this,this.onclick);
			this.nanaView.nana.on(Laya.Event.COMPLETE, this, this.stop);
			this.nanaView.nana_0.on(Laya.Event.COMPLETE, this, this.stop2);
			this.goumai.on(Laya.Event.CLICK,this,this.onHander);
			this.huodong.visible = false;
			this.liwu.visible = false;
			this.renwu.visible = false;
			this.chengjiu.visible = false;


			var aninana:Laya.MovieClip =new Laya.MovieClip();
			this.nanatext.addChild(aninana);
			aninana.load("res/swf/nanaxiao.swf",true);
			aninana.scale(0.666,0.666);
			this.sanjiaoAni.visible =false;
			//任务动画
			var renwuAni:Laya.MovieClip = new Laya.MovieClip();
			this.renwu.addChild(renwuAni);
			renwuAni.load("res/swf/renwu.swf",true);
			renwuAni.scale(0.666,0.666);
			// this.nanaView.on(Laya.Event.CLICK, this, this.btmclick);
			
        }
		private onHander():void
		{
			module.mapModule.getInstance().obgcanku();
		}
		/**关闭大Nana动画 */
		public btmclick():void{
			if(this.nanaView.visible){
				this.nanaView.nana_0.play();
				Laya.Tween.clearAll(this.text1);
				Laya.Tween.to(this.text1,{alpha:0},10);
			}
		}

		private static _instance:Bottom;
		public static getInstance():Bottom
		{
			if(this._instance == null)
			{
				this._instance = new Bottom;
				Laya.stage.addChild(this._instance);
				// this._instance.show();
				this._instance.zOrder = 99999;
				this._instance.visible = false;
			}
			return this._instance;
		}


		private stop2():void{
			
            this.nanaView.nana_0.stop();
			this.nanaView.visible = false;
			this.nanaicon.visible = true;
			this.nanatext.visible = true;
			this.nanaicon.alpha = 1;
			this.nanaicon.scaleX = 1;
			this.nanaicon.scaleY = 1;
			this.nanatext.alpha = 1;
			this.nanatext.scaleX = 1;
			this.nanatext.scaleY = 1;
			this.chengjiu.alpha = 1;
			this.chengjiu.scaleX = 1;
			this.chengjiu.scaleY = 1;
			this.liwu.alpha = 1;
			this.liwu.scaleX = 1;
			this.liwu.scaleY = 1;
			this.renwu.alpha = 1;
			this.renwu.scaleX = 1;
			this.renwu.scaleY = 1;
			this.huodong.alpha = 1;
			this.huodong.scaleX = 1;
			this.huodong.scaleY = 1;
			// Laya.Tween.to(this.nanaicon, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
			// Laya.Tween.to(this.nanatext, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
			// Laya.Tween.to(this.chengjiu, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
			// Laya.Tween.to(this.liwu, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
			// Laya.Tween.to(this.renwu, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
			// Laya.Tween.to(this.huodong, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
        }
		private stop():void{
            this.nanaView.nana.stop();
			this.nanaView.nana.index=20;
        }
        
		//小nana点击事件
		private shownana():void{
			this.openNana();
			var menu:laya.ui.Dialog = new wuling.menu;
			menu.width = Laya.stage.width;
			Laya.stage.addChild(menu);
			menu.popup(true,true);
		}
		/**拆除建筑打开 */
		public caichu():void
		{
			this.openNana();
			this.text1.text = "要拆徐该建筑吗？";
			this.demolitionBox.alpha = 0;
			this.demolitionBox.visible = true;
			Laya.Tween.to(this.demolitionBox,{alpha:1},1000);
		}
		//打开大nana
		private openNana():void
		{
			//点击nana时随机对话
			var text1Wen:string;
			switch(Math.floor(Math.random() * 3 + 1))
			{
				case 1:
					text1Wen = "“我们一起继续管理工作吧！”";
					break;
				case 2:
					text1Wen = "“接下来我们要做什么呢？”";
					break;
				case 3:
					text1Wen = "“最近媒体都在谈论我们的智慧门店呢！”";
					break;
			}
			this.text1.text = text1Wen;

			if(wuling.map.getInstance().guide==true)
			{
				this.nanaicon.offAll();
				wuling.map.getInstance().newclick();
			}
			Laya.Tween.to(this.nanaicon, {scaleX: 1.9, scaleY: 1.9, alpha: 0}, 150);
			Laya.Tween.to(this.nanatext, {scaleX: 1.9, scaleY: 1.9, alpha: 0}, 150);
			Laya.Tween.to(this.chengjiu, {scaleX: 0.5, scaleY: 0.5, alpha: 0}, 150);
			Laya.Tween.to(this.liwu, {scaleX: 0.5, scaleY: 0.5, alpha: 0}, 150);
			Laya.Tween.to(this.renwu, {scaleX: 0.5, scaleY: 0.5, alpha: 0}, 150);
			Laya.Tween.to(this.huodong, {scaleX: 0.5, scaleY: 0.5, alpha: 0}, 150);
			Laya.timer.once(110, this, this.show);
			this.nanaicon.visible = false;
			this.nanaicon.visible = false;
			wuling.Bottom.getInstance().boximg.visible = false;
		}
		private show():void{
			this.nanaView.visible = true;
			this.nanaView.nana.play();
			Laya.timer.once(200,this,()=>{
				Laya.Tween.to(this.text1,{alpha:1},700);
			})
			
		}
		private onclick():void
		{
			// var mission:laya.ui.Dialog = new wuling.mission;
			// this.addChild(mission);
			this.openNana();
			var mission = wuling.mission.getInstance();
			mission.width = Laya.stage.width;
			mission.popup(true,true);
		}
        
		/**nana点击事件 */
		public nanaOnClick():void
		{
			this.nanaicon.on(Laya.Event.CLICK, this, this.shownana);
		}
		/**隐藏开始任务提示 */
		public missionPrompt():void
		{
			this.boximg.offAll();
			Laya.Tween.to(this.boximg,{alpha:0},1000,null,new Laya.Handler(this,()=>{
				this.boximg.visible =false;
			}));
		}
		/**开始任务提示点击事件 */
		public onMissionPrompt():void
		{
			this.boximg.on(Laya.Event.CLICK,this,()=>{
				this.missionPrompt();
				// var mission:laya.ui.Dialog = new wuling.mission;
				// wuling.map.getInstance().addChild(mission);
				var mission = wuling.mission.getInstance();
				mission.width = Laya.stage.width;
				//打开页面
				mission.popup(false,true);
			});
		}
		/**提示宝币不足 */
		public noJin():void
		{
			this.boximg.offAll();
			this.boximg.visible =true;
			this.boxText.text = "宝币不足";
			Laya.Tween.clearAll(this.boximg);
			Laya.timer.clearAll(this);
			Laya.Tween.to(this.boximg,{alpha:1},1000);
			Laya.timer.once(2000,this,()=>{
				Laya.Tween.to(this.boximg,{alpha:0},1000,null,new Laya.Handler(this,()=>{
				 this.boximg.visible =false;
			    }));
			});
		}

		/**提示能量不足 */
		public noNen():void
		{
			this.boximg.offAll();
			this.boximg.visible =true;
			this.boxText.text = "能量不足";
			Laya.Tween.clearAll(this.boximg);
			Laya.timer.clearAll(this);
			Laya.Tween.to(this.boximg,{alpha:1},1000);
			Laya.timer.once(2000,this,()=>{
				Laya.Tween.to(this.boximg,{alpha:0},1000,null,new Laya.Handler(this,()=>{
				 this.boximg.visible =false;
			    }));
			});
		}

		/**提示宝币和能量不足 */
		public noJinNen():void
		{
			this.boximg.offAll();
			this.boximg.visible =true;
			this.boxText.text = "宝币和能量不足";
			Laya.Tween.clearAll(this.boximg);
			Laya.timer.clearAll(this);
			Laya.Tween.to(this.boximg,{alpha:1},1000);
			Laya.timer.once(2000,this,()=>{
				Laya.Tween.to(this.boximg,{alpha:0},1000,null,new Laya.Handler(this,()=>{
				 this.boximg.visible =false;
			    }));
			});
		}
		/**打开小nana任务解说 */
		public missionText(data:string):void
		{
			this.boximg.offAll();
			this.boximg.visible =true;
			this.boxText.text = data;
			Laya.Tween.to(this.boximg,{alpha:1},1000);
		}

		/**关闭小nana任务解说 */
		public ShutDownMission():void
		{
			Laya.Tween.to(this.boximg,{alpha:0},1000,null,new Laya.Handler(this,()=>{
				this.boximg.visible =false;
			}));
		}
    }
}