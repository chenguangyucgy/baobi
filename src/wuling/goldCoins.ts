/**
* name 
*/
module wuling{
	export class goldCoins extends ui.goldCoinsUI{
		/**获取互动产生满意度 */
		public perzan:number = 0;
		/**宝币数量 */
		public jin:number =0;
		/**增加宝币数 */
		public setJin(wuMan:string):void
		{
			if(this.jin<10)
			{
				// var manyi = Math.floor(Math.random() * 100+1);
				var manyi = module.buildingMan[wuMan];
				this.perzan = manyi;
				var jinNum = 0;
				if(manyi>=0&&manyi<10){var jingai = Math.floor(Math.random() * 100);if(jingai<35){jinNum=1}}
				if(manyi>=10&&manyi<20){var jingai = Math.floor(Math.random() * 100);if(jingai<45){jinNum=1}}
				if(manyi>=20&&manyi<30){var jingai = Math.floor(Math.random() * 100);if(jingai<55){jinNum=1}}
				if(manyi>=30&&manyi<40){var jingai = Math.floor(Math.random() * 100);if(jingai<65){jinNum=2}}
				if(manyi>=50&&manyi<70){var jingai = Math.floor(Math.random() * 100);if(jingai<75){jinNum=3}}
				if(manyi>=70&&manyi<=100){var jingai = Math.floor(Math.random() * 100);if(jingai<85){jinNum=3}}
				//新手教程
				if(wuling.map.getInstance().guide==true){jinNum=1}

				this.jin +=jinNum;
				if(this.jin>10){this.jin=10}
				// this.jin = 200;
				if(this.jin>0){this.visible = true}else{this.visible = false}

				//显示获取宝币的数量
				this.jina.skin = "rankList/org"+this.jin+".png";
				this.jinb.visible = false;
				if(this.jin==10)
				{
					this.jina.skin = "rankList/org0.png";
					this.jinb.skin = "rankList/org1.png";
				    this.jinb.visible = true;
				}
			}
			
		}
		constructor(){
			super();
			this.goldImg.on(Laya.Event.CLICK,this,this.onclick);
			this.on(Laya.Event.CLICK,this,this.onHander);
			// Laya.timer.once(700,this,this.onHander);
		}

		public onHander():void
		{
				   //新手教程
				   if(wuling.map.getInstance().guide==true)
				   {
					   wuling.map.getInstance().newclick();
					   wuling.map.getInstance().nextStep();
				   }
			       for(var i:number=0;i<this.jin*90;i=i+90)
					{
						Laya.timer.once(i,this,()=>{
							var jings = new wuling.jings;
							jings.x = this.x+10;
							jings.y = this.y;
							jings.zOrder =3001;
							wuling.map.getInstance().mapImg.addChild(jings);
						});
					}
					this.jinBtn.visible =true;
					this.jinBtn.x =10;
					this.jinBtn.y =-50;
					this.jinBtn.alpha =0;
					if(this.jin!=10)
					{
						this.jin1.skin = "rankList/org"+this.jin+".png";
						this.jin2.visible = false;
					}else
					{
						this.jin1.skin = "rankList/org1.png";
						this.jin2.skin = "rankList/org0.png";
						this.jin2.visible = true;
					}
					
					Laya.Tween.to(this.jinBtn,{y:-100,alpha:1},200,null);
					Laya.timer.once(300,this,()=>{
						Laya.Tween.to(this.jinBtn,{y:-200,alpha:0},200,null);
					});
					Laya.timer.once(this.jin*100,this,()=>{

						// wuling.Top.getInstance().jin+=this.jin;
						//增加宝币任务
						// module.missionModule.getInstance().getJin(this.jin);
						//收集宝币次数任务
						if(module.missionModule.getInstance().taskProgress.length>0)
						{
							var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission2"];
							if(Mission2<5)
							{
								module.missionModule.getInstance().onbaobi("Mission2",5);
							}
						}
						//收获200个宝币任务
						if(module.missionModule.getInstance().ToreceiveSituation.length>0)
						{
							var ToreceiveSituation = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission6Prize"];
							// var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission6"];
							if(ToreceiveSituation==true)
							{
								module.missionModule.getInstance().getJin("Mission7",200,this.jin);
							}
						}
						util.HttpRequestUtil.Modifybaobi(this.jin);
						// wuling.Top.getInstance().gabi();
						
						//宝币数量
						// var baobiNum= module.Room.getInstance().RoomClass["TadayCoiCount"] +this.jin;
						// util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&TadayCoiCount="+baobiNum);
						
					});
					Laya.timer.loop(100,this,()=>{
						Laya.Tween.to(this.coinsImg,{scaleX:0.7,scaleY:0.7},50,null,Laya.Handler.create(this,()=>{
						Laya.Tween.to(this.coinsImg,{scaleX:1,scaleY:1},50);
						}));
						Laya.Tween.to(this.apertureImg,{scaleX:1.7,scaleY:1.7,alpha:0.5},50,null,Laya.Handler.create(this,()=>{
							Laya.Tween.to(this.apertureImg,{scaleX:1,scaleY:1,alpha:1},1)
						}));
					});
				    Laya.SoundManager.playSound("res/music/huodebaobi.mp3");
					Laya.timer.once((this.jin+4)*101,this,()=>{
						// this.removeSelf();
						this.jin=0;
						this.visible =false;
						Laya.timer.clearAll(this);
					});
					
		}
		private onclick(event:Laya.Event):void
		{
			switch (event.currentTarget) {
				case this.goldImg:
					
					break;
			
				default:
					break;
			}
		}
	}
}