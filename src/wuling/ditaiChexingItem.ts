/**
* name 
*/
module wuling{
	export class ditaiChexingItem extends ui.ditaiChexingItemUI{
		/**placeItemModule数据*/
		private _placeItemModule:module.placeItemModule = module.placeItemModule.getInstance();
		constructor(){
			super();
			
		}
		public show(item:ditaiChexingItem, index:number):void
		{
			this.carImg.width = 172;
			this.carImg.height = 150;
			if(this._placeItemModule.i.carClass.skin ==this.dataSource["url"])
			{
				this.fanziImg.visible = true;
				this.bntImg.visible = false;
			}else
			{
				this.fanziImg.visible = false;
				this.bntImg.visible = true;
			}
			this.carImg.skin = this.dataSource["url"];
			this.carName.text = this.dataSource["carname"];
			if((module.Room.getInstance().RoomClass["RoomLevel"]+1)>=this.dataSource["suo"])
			{
				this.suoImg.visible = false;
				this.bntImg.on(Laya.Event.CLICK,this,this.onclick);
			}else
			{
				this.suoImg.visible = true;
				this.bntImg.off(Laya.Event.CLICK,this,this.onclick);
			}
			
			
			this.showJinNen();
		}

		private onclick():void
		{
			var jin = this.dataSource["jin"];
			var nen = this.dataSource["nen"];
			if(wuling.Top.getInstance().jin>=jin&&wuling.Top.getInstance().nen>=nen)
			{
			// if(this.dataSource["url"]=="ditaiChexing/320c.png"||this.dataSource["url"]=="ditaiChexing/320h.png"||this.dataSource["url"]=="ditaiChexing/320l.png"){
			// 	this._placeItemModule.i.carClass.x = 64;
			// 	this._placeItemModule.i.carClass.y = -29;
			// }else
			// {
			// 	this._placeItemModule.i.carClass.x = 27;
			// 	this._placeItemModule.i.carClass.y = -44;
			// }
			//消耗宝币任务
			module.missionModule.getInstance().reJin(jin);
			//减少宝币
			util.HttpRequestUtil.Modifybaobi(-jin);
			// wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-jin;
			// wuling.Top.getInstance().gabi();
			//减少能量
			wuling.Top.getInstance().nen = wuling.Top.getInstance().nen-nen;
			wuling.Top.getInstance().nens();

			this._placeItemModule.i.carClass.skin = this.dataSource["url"];
			//加载车动画
			this._placeItemModule.i.buiCarAin();
			//获取对应图片名字
			var imgPng= this.dataSource["url"].slice(13);
			var imgName = imgPng.slice(0,-4);
			//后台保存
			util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+this._placeItemModule.i.RoomObjectID+"&Commons="+imgName);

			this._placeItemModule.i._mc1.visible = true;
			this._placeItemModule.i.hideenDom();
			//播放建筑棚动画
			this._placeItemModule.i.Aniplay();
			this._placeItemModule.i.imgBtn.visible =false;
			// this._placeItemModule.i.spani.addChild(this._placeItemModule.i._mc1);


			//新手教程
			if(wuling.map.getInstance().guide==true)
			{
				module.personModule.getInstance().huNum =0;
				wuling.map.getInstance().newclick();
			}
			
			wuling.ditaiChexing.getInstance().close();
			if(wuling.map.getInstance().guide == false)
			{
				wuling.map.getInstance().person1.figureStart();
				wuling.map.getInstance().person2.figureStart();
				wuling.map.getInstance().person3.figureStart();
				wuling.map.getInstance().person4.figureStart();
				wuling.map.getInstance().person5.figureStart();
				wuling.Bottom.getInstance().nanaOnClick();

			}
			//任意颜色展车任务
			if(imgName=="Wred310"||imgName=="Wl310"||imgName=="Wqh310")
			{
				if(module.missionModule.getInstance().ToreceiveSituation.length>0)
				{
					var ToreceiveSituation = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission4Prize"]
					// var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission4"];
					if(ToreceiveSituation==true)
					{
						module.missionModule.getInstance().onbaobi("Mission5",2);
					}
				}

			}
		}else
		{
			//判断不足条件
			if(wuling.Top.getInstance().jin<jin)
			{
				//宝币不足
				wuling.Bottom.getInstance().noJin();
			}else
			{
				//能量不足
				wuling.Bottom.getInstance().noNen();
			}
			if(wuling.Top.getInstance().jin<jin&&wuling.Top.getInstance().nen<nen)
			{
				//宝币和能量不足
				wuling.Bottom.getInstance().noJinNen();
			}
		}
			// wuling.map.getInstance().namecar[this._placeItemModule.i].carClass.skin = this.dataSource["url"];
		}
		private onHender():void
		{
			this._placeItemModule.i._mc1.stop();
			this._placeItemModule.i.imgBtn.visible =true;
			this._placeItemModule.i.spani.visible = false;
			//新手教程
			if(wuling.map.getInstance().guide==true)
			{
				// wuling.map.getInstance().newTaskPersin();
				// wuling.map.getInstance().newclick();
				// Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
				// Laya.timer.once(700,this,()=>{
				// 	wuling.Bottom.getInstance().text1.text ="帅气!第一款车型已经驾临门店啦!";
				// 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
				// });
				// Laya.timer.once(3400,this,()=>{
				// 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
				// 	wuling.map.getInstance().newTaskPersin();
				// });
				// Laya.timer.once(4100,this,()=>{
				// 	wuling.Bottom.getInstance().text1.text ="现在慢慢等待顾客的到来吧！";
				// 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
				// });

			}
		}
        //宝币，能量
		private showJinNen():void
		{
			var jin:string = String(this.dataSource["jin"]);
			switch(jin.length)
            {
                case 0:
                    this.jin4.skin = "sheshi/o0.png";
                    this.jin3.alpha = 0;
					this.jin2.alpha = 0;
					this.jin1.alpha = 0;
                    break;
                case 1:
                    this.jin4.skin = "sheshi/o"+jin.slice(0,1)+".png";
                    this.jin3.alpha = 0;
					this.jin2.alpha = 0;
					this.jin1.alpha = 0;
                    break;
                case 2:
                    this.jin4.skin = "sheshi/o"+jin.slice(1)+".png";
                    this.jin3.skin = "sheshi/o"+jin.slice(0,1)+".png";
                    this.jin3.alpha = 1;
					this.jin2.alpha = 0;
					this.jin1.alpha = 0;
                    break;
				case 3:
                    this.jin4.skin = "sheshi/o"+jin.slice(2)+".png";
                    this.jin3.skin = "sheshi/o"+jin.slice(1,2)+".png";
					this.jin2.skin = "sheshi/o"+jin.slice(0,1)+".png";
                    this.jin3.alpha = 1;
					this.jin2.alpha = 1;
					this.jin1.alpha = 0;
                    break;
				case 4:
                    this.jin4.skin = "sheshi/o"+jin.slice(3)+".png";
                    this.jin3.skin = "sheshi/o"+jin.slice(2,3)+".png";
					this.jin2.skin = "sheshi/o"+jin.slice(1,2)+".png";
					this.jin1.skin = "sheshi/o"+jin.slice(0,1)+".png";
                    this.jin3.alpha = 1;
					this.jin2.alpha = 1;
					this.jin1.alpha = 1;
                    break;
            }
            
			var nen:string = String(this.dataSource["nen"]);
			switch(nen.length)
            {
                case 0:
                    this.nen2.skin = "sheshi/o0.png";
                    this.nen1.alpha = 0;
                    break;
                case 1:
                    this.nen2.skin = "sheshi/o"+nen.slice(0,1)+".png";
                    this.nen1.alpha = 0;
                    break;
                case 2:
                    this.nen2.skin = "sheshi/o"+nen.slice(1)+".png";
                    this.nen1.skin = "sheshi/o"+nen.slice(0,1)+".png";
                    this.nen1.alpha = 1;
                    break;
            }
		}
	}
}