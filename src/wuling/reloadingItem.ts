/**
* name 
*/
module wuling{
	export class reloadingItem extends ui.reloadingItemUI{
		constructor(){
			super();
			this.buyBtn.on(Laya.Event.CLICK,this,this.onclick);
			this.huangBtn.on(Laya.Event.CLICK,this,this.onclick);
			

		}
		private _e:wuling.reloading
		public show(e:wuling.reloading):void
		{
			this._e =e;
			this.nanaimg.skin = module.reloadingVo[this.dataSource["class"]];
			this.NImg.skin = this.dataSource["nameImg"];
			this.jinNum();
			if((module.Room.getInstance().RoomClass["RoomLevel"]+1)>=this.dataSource["Lv"])
			{
				var BuySuit = this.dataSource["BuySuit"];
				if(module.reloadingModule.getInstance().reloadingData[BuySuit]==true)
				{
					this.huangBtn.visible = true;
					
				}else
				{
					this.jinimg.visible = true;
					this.buyBtn.visible = true;
				}
			}else
			{
				this.lockText.text = "门店到达"+this.dataSource["Lv"]+"级";
				this.theLockBtn.visible = true;
				this.lockText.visible = true;
			}
			if(this.dataSource["id"]==0)
			{
				this.huangBtn.visible = true;
				this.jinimg.visible = false;
				this.buyBtn.visible = false;
			}
			if(module.Room.getInstance().RoomClass["GarmentType"]==this.dataSource["id"])
			{
				this.huangBtn.visible = false;
				this.jinimg.visible = false;
				this.buyBtn.visible = false;
				this.useBtn.visible = true;
			}
		}
		/**更换nana */
		private huan():void
		{
			wuling.Bottom.getInstance().nanaView.nanaImg.skin = module.reloadingVo[this.dataSource["class"]];
			this._e.list.array = module.reloadingModule.getInstance().ItemData;
			if(this.dataSource["id"]==0)
			{
				wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana.png";
			}
			if(this.dataSource["id"]==1)
			{
				wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana1.png";
			}
			if(this.dataSource["id"]==2)
			{
				wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana2.png";
			}
			if(this.dataSource["id"]==3)
			{
				wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana3.png";
			}
		}
		/**金币数处理 */
		private jinNum():void
		{
			var nowNum:number = this.dataSource["jin"];
			nowNum = Math.abs(nowNum);
			for(var i:number = 1; i<= 5; i++){
                    if(nowNum>0){
                        this["nameimg"+i].alpha = 1;
                        this["nameimg"+i].skin = "ssInfo/bo"+(nowNum%10)+".png";
						var a= nowNum%10;
						nowNum = Math.floor(nowNum/10);
                    }else{
                        this["nameimg"+i].alpha = 0;
                    }
                }
		}
		private onclick(event:Laya.Event):void
		{
			switch (event.currentTarget) {
				case this.buyBtn:
				    if(wuling.Top.getInstance().jin>=this.dataSource["jin"])
					{
						util.HttpRequestUtil.sendUpdateReloading("RoomID="+module.Room.getInstance().RoomID+"&"+this.dataSource["BuySuit"]+"=1");
						// wuling.Top.getInstance().jin = wuling.Top.getInstance().jin-this.dataSource["jin"];
						// wuling.Top.getInstance().gabi();
						util.HttpRequestUtil.Modifybaobi(-this.dataSource["jin"]);
						this.buyBtn.visible =false;
						this.jinimg.visible = false;
						this.huangBtn.visible = true;
					}
					break;
				case this.huangBtn:
					this.huangBtn.visible =false;
					this.useBtn.visible = true;
					util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&GarmentType="+this.dataSource["id"]);
					// Laya.Tween.to(wuling.Bottom.getInstance().nanaView.nanaImg,{alpha:0},1000,null,new Laya.Handler(this,()=>{
					Laya.timer.clear(this,this.huan);
					Laya.timer.once(1600,this,this.huan);
					// 	Laya.Tween.to(wuling.Bottom.getInstance().nanaView.nanaImg,{alpha:1},1000);
					// }));
					//换装动画
					var aniBox:Laya.Box = new Laya.Box();
					var huanAni:Laya.MovieClip = new Laya.MovieClip();
					huanAni.load("res/swf/huan.swf",true);
					Laya.stage.addChild(aniBox);
					aniBox.addChild(huanAni);
					aniBox.left = -100;
					aniBox.bottom = 1880;
					aniBox.zOrder = 999999;
					huanAni.playTo(0,79,new Laya.Handler(this,()=>{
							huanAni.removeSelf();
							aniBox.removeSelf();
							wuling.Bottom.getInstance().text1.text = "哇~我换上新衣服了~";
							//为NANA更换一次服装任务
							if(module.missionModule.getInstance().ToreceiveSituation.length>0&&module.missionModule.getInstance().taskProgress.length>0)
							{
								var ToreceiveSituation1 = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission8Prize"];
								var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission9"];
								if(ToreceiveSituation1==true&&Mission2<1)
								{
									this._e.shutDown();
									module.missionModule.getInstance().onbaobi("Mission9",1);
								}
							}
					}));
					
					break;
				default:
					break;
			}
		}
	}
}