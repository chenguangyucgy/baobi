/**
* name 
*/
module wuling{
	export class shopInfo extends ui.shopInfoUI{
		constructor(){
			super();
			this.gb.on(Laya.Event.CLICK,this,this.onclick);
			this.upgradeBtn.on(Laya.Event.CLICK,this,this.onclick);
			this.levelImg.skin = "sheshi/o"+(module.Room.getInstance().RoomClass["RoomLevel"]+1)+".png";
            //满级隐藏升级按钮
            if(module.Room.getInstance().RoomClass["RoomLevel"]==29){this.upgradeBtn.visible=false}

			this.gabi();
			this.gabi3();
			this.gabi5();
            this.gabi7();
            this.gabi9();
            
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
			
		}
		private static _instance:shopInfo;
		public static getInstance():shopInfo
		{
			if(this._instance == null)
			{
				this._instance = new shopInfo;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
		private onclick(event:Laya.Event):void
		{
			switch (event.currentTarget) {
				case this.gb:
					 this.close();
                    //  wuling.Bottom.getInstance().text1.text = "“欢迎来到宝骏智慧门店，马上开始您的管理工作吧！”";
                     wuling.map.getInstance().person1.figureStart();
                     wuling.map.getInstance().person2.figureStart();
                     wuling.map.getInstance().person3.figureStart();
                     wuling.map.getInstance().person4.figureStart();
                     wuling.map.getInstance().person5.figureStart();
                     wuling.Bottom.getInstance().nanaOnClick();
					 wuling.Bottom.getInstance().btmclick();
					
					break;
			    case this.upgradeBtn:
                     var  shopInData = module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]];
					 if(module.Room.getInstance().RoomClass["RoomLevel"]<29&&wuling.Top.getInstance().jin>=shopInData["expend"]&&wuling.Top.getInstance().zanNum>=shopInData["man"])
					 {
                         Laya.SoundManager.playSound("res/music/mendianshengji.mp3",1);
                         //成就
                        //  if(module.Room.getInstance().RoomClass["RoomLevel"]>=0)
                        //  {
                        //      if(module.missionModule.getInstance().taskProgress.length>0)
                        //         {
                        //             if(module.missionModule.getInstance().taskProgress[0]["Mission141"]==0)
                        //             {
                        //                 module.missionModule.getInstance().onbaobi("Mission141",1);
                        //             }
                        //         }
                        //  }
                         //禁止再一次点击
                         this.upgradeBtn.mouseEnabled = false;

						//  wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-(module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["expend"]);
                         //消耗宝币任务
						//  module.missionModule.getInstance().reJin(module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["expend"]);
                        util.HttpRequestUtil.Modifybaobi(-(module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["expend"]));
						//  wuling.Top.getInstance().gabi();
						 var diImg1 = wuling.map.getInstance().diImg.skin.slice(6);
						 var diImg2 = Number(diImg1.slice(0,-4))+1;
						//  this.levelImg.skin = "sheshi/o"+(module.Room.getInstance().RoomClass["RoomLevel"]+2)+".png";
						 wuling.Top.getInstance().lv = module.Room.getInstance().RoomClass["RoomLevel"]+2;
						 var shen:Laya.MovieClip =new Laya.MovieClip();
                         var spAni:Laya.Box = new Laya.Box();
                         spAni.centerX =0;
                         shen.x =0;
						 shen.scale(0.666,0.666);
						 spAni.zOrder =9999;
						 shen.load("res/swf/shen.swf",true);
                         spAni.width = 720;
						 Laya.stage.addChild(spAni);
                         spAni.addChild(shen);
						 shen.playTo(0,81,new Laya.Handler(this,()=>{
						 shen.destroy();
                         this.upgradeBtn.mouseEnabled =true;
						}));
						this.gabi2();
						this.gabi4();
						this.gabi6();
                        this.gabi7();
                        this.gabi8();
                        var ditou = module.Room.getInstance().RoomClass["RoomStyle"].slice(6);
                        var ditou2 = Number(ditou.slice(0,-4))+1;
                        if(ditou==""){ditou2+=1}
                        
						 if((module.Room.getInstance().RoomClass["RoomLevel"]+1)==4||(module.Room.getInstance().RoomClass["RoomLevel"]+1)==9||(module.Room.getInstance().RoomClass["RoomLevel"]+1)==14){
                           util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&RoomLevel="+(module.Room.getInstance().RoomClass["RoomLevel"]+1)+"&RoomStyle=map/di"+ditou2+".png");
						   return
						 }
						 
						 util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&RoomLevel="+(module.Room.getInstance().RoomClass["RoomLevel"]+1));
                         //满级隐藏升级按钮
                        if(module.Room.getInstance().RoomClass["RoomLevel"]>=28){this.upgradeBtn.visible=false}
                        
						 //新手教程
						 if(wuling.map.getInstance().guide==true)
						 {
                             this.close();
                             wuling.map.getInstance().person1.figureStart();
                             wuling.map.getInstance().person2.figureStart();
                             wuling.map.getInstance().person3.figureStart();
                             wuling.map.getInstance().person4.figureStart();
                             wuling.map.getInstance().person5.figureStart();
                             wuling.Bottom.getInstance().nanaOnClick();
							 wuling.map.getInstance().newclick();
						 }
					 }
                     if(wuling.Top.getInstance().jin<module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["expend"])
                     {
                         wuling.Bottom.getInstance().text1.text ="宝币不足";
                     }else
                     if(wuling.Top.getInstance().zanNum<shopInData["man"])
                     {
                         wuling.Bottom.getInstance().text1.text ="满意度不足";
                     }
					
					break;
				default:
					break;
			}
			
		}
		//更新宝币数量请调用此函数
        public gabi():void
        {
            var jinLen:string = ""+module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["expend"]+"";
            switch(jinLen.length)
            {
                case 0:
                    this.jin1.skin = "shopInfo/0.png";
                    this.jin2.alpha = 0;
                    this.jin3.alpha = 0;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 1:
                    this.jin1.skin = "shopInfo/"+jinLen+".png";
                    this.jin2.alpha = 0;
                    this.jin3.alpha = 0;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 2:
				    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 0;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 3:
                    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1,2))+".png";
                    this.jin3.skin = "shopInfo/"+Number(jinLen.slice(2))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 1;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 4:
                    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1,2))+".png";
                    this.jin3.skin = "shopInfo/"+Number(jinLen.slice(2,3))+".png";
                    this.jin4.skin = "shopInfo/"+Number(jinLen.slice(3))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 1;
                    this.jin4.alpha = 1;
                    this.jin5.alpha = 0;
                    break;
                case 5:
                    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1,2))+".png";
                    this.jin3.skin = "shopInfo/"+Number(jinLen.slice(2,3))+".png";
                    this.jin4.skin = "shopInfo/"+Number(jinLen.slice(3,4))+".png";
					this.jin4.skin = "shopInfo/"+Number(jinLen.slice(4))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 1;
                    this.jin4.alpha = 1;
                    this.jin5.alpha = 1;
                    break;

            }
			
        }
		//更新宝币数量请调用此函数
        public gabi2():void
        {
            var jinLen:string = ""+module.shopInfoModule.getInstance().shopInData[(module.Room.getInstance().RoomClass["RoomLevel"]+1)]["expend"]+"";
            switch(jinLen.length)
            {
                case 0:
                    this.jin1.skin = "shopInfo/0.png";
                    this.jin2.alpha = 0;
                    this.jin3.alpha = 0;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 1:
                    this.jin1.skin = "shopInfo/"+jinLen+".png";
                    this.jin2.alpha = 0;
                    this.jin3.alpha = 0;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 2:
				    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 0;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 3:
                    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1,2))+".png";
                    this.jin3.skin = "shopInfo/"+Number(jinLen.slice(2))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 1;
                    this.jin4.alpha = 0;
                    this.jin5.alpha = 0;
                    break;
                case 4:
                    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1,2))+".png";
                    this.jin3.skin = "shopInfo/"+Number(jinLen.slice(2,3))+".png";
                    this.jin4.skin = "shopInfo/"+Number(jinLen.slice(3))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 1;
                    this.jin4.alpha = 1;
                    this.jin5.alpha = 0;
                    break;
                case 5:
                    this.jin1.skin = "shopInfo/"+Number(jinLen.slice(0,1))+".png";
                    this.jin2.skin = "shopInfo/"+Number(jinLen.slice(1,2))+".png";
                    this.jin3.skin = "shopInfo/"+Number(jinLen.slice(2,3))+".png";
                    this.jin4.skin = "shopInfo/"+Number(jinLen.slice(3,4))+".png";
					this.jin4.skin = "shopInfo/"+Number(jinLen.slice(4))+".png";
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 1;
                    this.jin4.alpha = 1;
                    this.jin5.alpha = 1;
                    break;

            }
		}
		//支持人数
		public gabi3():void
        {
            var supportNum = ""+module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["supportNum"]+""
            switch(supportNum.length)
            {

                case 1:
                    this.supportNum2.skin = "sheshi/o"+supportNum+".png";
                    this.supportNum2.alpha = 1;
                    this.supportNum.alpha = 0;
                    break;
                case 2:
				    this.supportNum.skin = "sheshi/o"+Number(supportNum.slice(0,1))+".png";
                    this.supportNum2.skin = "sheshi/o"+Number(supportNum.slice(1))+".png";
                    this.supportNum.alpha = 1;
                    break;
			}
		}
		//支持人数
		public gabi4():void
        {
            var supportNum = ""+module.shopInfoModule.getInstance().shopInData[(module.Room.getInstance().RoomClass["RoomLevel"]+1)]["supportNum"]+"";
            switch(supportNum.length)
            {

                case 1:
                    this.supportNum2.skin = "sheshi/o"+supportNum+".png";
                    this.supportNum2.alpha = 1;
                    this.supportNum.alpha = 0;
                    break;
                case 2:
				    this.supportNum.skin = "sheshi/o"+Number(supportNum.slice(0,1))+".png";
                    this.supportNum2.skin = "sheshi/o"+Number(supportNum.slice(1))+".png";
                    this.supportNum.alpha = 1;
                    break;
			}
		}
		//等级
		public gabi5():void
        {
            var lv = ""+module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["lv"]+""
            switch(lv.length)
            {

                case 1:
                    this.levelImg.skin = "sheshi/o"+lv+".png";
                    this.levelImg.alpha = 1;
                    this.levelImg2.alpha = 0;
                    break;
                case 2:
				    this.levelImg.skin = "sheshi/o"+Number(lv.slice(0,1))+".png";
                    this.levelImg2.skin = "sheshi/o"+Number(lv.slice(1))+".png";
                    this.levelImg2.alpha = 1;
                    break;
			}
		}
		//等级
		public gabi6():void
        {
            var lv = ""+module.shopInfoModule.getInstance().shopInData[(module.Room.getInstance().RoomClass["RoomLevel"]+1)]["lv"]+""
            switch(lv.length)
            {

                case 1:
                    this.levelImg.skin = "sheshi/o"+lv+".png";
                    this.levelImg.alpha = 1;
                    this.levelImg2.alpha = 0;
                    break;
                case 2:
				    this.levelImg.skin = "sheshi/o"+Number(lv.slice(0,1))+".png";
                    this.levelImg2.skin = "sheshi/o"+Number(lv.slice(1))+".png";
                    this.levelImg2.alpha = 1;
                    break;
			}
		}
        //评价值1
        public gabi7():void
        {
            var zanString:string = ""+module.shopInfoModule.getInstance().shopInData[module.Room.getInstance().RoomClass["RoomLevel"]]["man"]+"";
            switch(zanString.length)
            {
                case 0:
                    this.pin5.skin = "sheshi/o0.png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 0;
                    this.pin4.alpha = 0;
                    break;
                case 1:
                    this.pin5.skin = "sheshi/o"+zanString+".png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 0;
                    this.pin4.alpha = 0;
                    break;
                case 2:
				    this.pin4.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin5.skin = "sheshi/o"+Number(zanString.slice(1))+".png";
                     this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 0;
                    this.pin4.alpha = 1;
                    break;
                case 3:
                    this.pin3.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin4.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.pin5.skin = "sheshi/o"+Number(zanString.slice(2))+".png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 1;
                    this.pin4.alpha = 1;
                    break;
                case 4:
                    this.pin2.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin3.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.pin4.skin = "sheshi/o"+Number(zanString.slice(2,3))+".png";
                    this.pin5.skin = "sheshi/o"+Number(zanString.slice(3))+".png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 1;
                    this.pin3.alpha = 1;
                    this.pin4.alpha = 1;
                    break;
                case 5:
                    this.pin1.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin2.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.pin3.skin = "sheshi/o"+Number(zanString.slice(2,3))+".png";
                    this.pin4.skin = "sheshi/o"+Number(zanString.slice(3,4))+".png";
					this.pin5.skin = "sheshi/o"+Number(zanString.slice(4))+".png";
                    this.pin1.alpha = 1;
                    this.pin2.alpha = 1;
                    this.pin3.alpha = 1;
                    this.pin4.alpha = 1;
                    break;

            }
			
        }
        //评价值1
        public gabi8():void
        {
            var zanString:string = ""+module.shopInfoModule.getInstance().shopInData[(module.Room.getInstance().RoomClass["RoomLevel"]+1)]["man"]+"";
            switch(zanString.length)
            {
                case 0:
                    this.pin5.skin = "sheshi/o0.png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 0;
                    this.pin4.alpha = 0;
                    break;
                case 1:
                    this.pin5.skin = "sheshi/o"+zanString+".png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 0;
                    this.pin4.alpha = 0;
                    break;
                case 2:
				    this.pin4.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin5.skin = "sheshi/o"+Number(zanString.slice(1))+".png";
                     this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 0;
                    this.pin4.alpha = 1;
                    break;
                case 3:
                    this.pin3.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin4.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.pin5.skin = "sheshi/o"+Number(zanString.slice(2))+".png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 0;
                    this.pin3.alpha = 1;
                    this.pin4.alpha = 1;
                    break;
                case 4:
                    this.pin2.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin3.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.pin4.skin = "sheshi/o"+Number(zanString.slice(2,3))+".png";
                    this.pin5.skin = "sheshi/o"+Number(zanString.slice(3))+".png";
                    this.pin1.alpha = 0;
                    this.pin2.alpha = 1;
                    this.pin3.alpha = 1;
                    this.pin4.alpha = 1;
                    break;
                case 5:
                    this.pin1.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.pin2.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.pin3.skin = "sheshi/o"+Number(zanString.slice(2,3))+".png";
                    this.pin4.skin = "sheshi/o"+Number(zanString.slice(3,4))+".png";
					this.pin5.skin = "sheshi/o"+Number(zanString.slice(4))+".png";
                    this.pin1.alpha = 1;
                    this.pin2.alpha = 1;
                    this.pin3.alpha = 1;
                    this.pin4.alpha = 1;
                    break;

            }
			
        }
        //到店人数
        public gabi9():void
        {
            var a = module.Room.getInstance().RoomClass;
            var zanString:string = ""+module.Room.getInstance().RoomClass["RoomSupportNum"]+"";
            switch(zanString.length)
            {
                case 0:
                    this.ren5.skin = "sheshi/o0.png";
                    this.ren1.alpha = 0;
                    this.ren2.alpha = 0;
                    this.ren3.alpha = 0;
                    this.ren4.alpha = 0;
                    break;
                case 1:
                    this.ren5.skin = "sheshi/o"+zanString+".png";
                    this.ren1.alpha = 0;
                    this.ren2.alpha = 0;
                    this.ren3.alpha = 0;
                    this.ren4.alpha = 0;
                    break;
                case 2:
				    this.ren4.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.ren5.skin = "sheshi/o"+Number(zanString.slice(1))+".png";
                     this.ren1.alpha = 0;
                    this.ren2.alpha = 0;
                    this.ren3.alpha = 0;
                    this.ren4.alpha = 1;
                    break;
                case 3:
                    this.ren3.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.ren4.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.ren5.skin = "sheshi/o"+Number(zanString.slice(2))+".png";
                    this.ren1.alpha = 0;
                    this.ren2.alpha = 0;
                    this.ren3.alpha = 1;
                    this.ren4.alpha = 1;
                    break;
                case 4:
                    this.ren2.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.ren3.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.ren4.skin = "sheshi/o"+Number(zanString.slice(2,3))+".png";
                    this.ren5.skin = "sheshi/o"+Number(zanString.slice(3))+".png";
                    this.ren1.alpha = 0;
                    this.ren2.alpha = 1;
                    this.ren3.alpha = 1;
                    this.ren4.alpha = 1;
                    break;
                case 5:
                    this.ren1.skin = "sheshi/o"+Number(zanString.slice(0,1))+".png";
                    this.ren2.skin = "sheshi/o"+Number(zanString.slice(1,2))+".png";
                    this.ren3.skin = "sheshi/o"+Number(zanString.slice(2,3))+".png";
                    this.ren4.skin = "sheshi/o"+Number(zanString.slice(3,4))+".png";
					this.ren4.skin = "sheshi/o"+Number(zanString.slice(4))+".png";
                    this.ren1.alpha = 1;
                    this.ren2.alpha = 1;
                    this.ren3.alpha = 1;
                    this.ren4.alpha = 1;
                    break;

            }
			
        }
	}
}