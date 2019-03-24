/**
* name 
*/
module wuling{
	export class ssInfo extends ui.ssInfoUI{
		constructor(){
			super();
			//禁止nana点击
			wuling.Bottom.getInstance().nanaicon.offAll();
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			this.gb.on(Laya.Event.CLICK, this, this.onclick);
			this.imgBtn.skin = "place1/"+buildingImg["img"]+".png";
			this.buidingname.text = module.buildingVo[buildingImg["img"]];
			this.lvimg.skin = "ssInfo/org"+buildingImg["ObjectLevel"]+".png";
			//满意度
			this.manNum(buildingImg["img"]);
			//接待人数
			this.JdNum(buildingImg["Jd"]);
			if(buildingImg["id"]=="fixed")
			{
				//前台
                this.shenBtn.on(Laya.Event.CLICK,this,this.frontDesks);
				if(buildingImg["ObjectLevel"]==0){this.lvimg.skin = "ssInfo/org1.png";}

			}else if(buildingImg["id"]=="fixed1")
			{
				//AI控制台
				this.shenBtn.on(Laya.Event.CLICK,this,this.Operation);
				if(buildingImg["ObjectLevel"]==0){this.lvimg.skin = "ssInfo/org1.png";}
			}else
			{
				//建筑
				this.shenBtn.on(Laya.Event.CLICK,this,this.onHander);
			}
            //升级条件
			var upgrade:Object = module.upgrade[buildingImg["img"]];
			if(module.buildingShen[buildingImg["img"]]==undefined||buildingImg["ObjectLevel"]>=upgrade["deLv"]||module.Room.getInstance().RoomClass["RoomLevel"]<(upgrade["Lv"]-1)||wuling.Top.getInstance().zanNum<upgrade["man"])
			{
				this.shenBtn.visible = false;
				if(module.buildingShen[buildingImg["img"]]!=undefined&&buildingImg["ObjectLevel"]<upgrade["deLv"])
				{
					this.tiaoBox.visible = true;
				    this.tiaoLv();
				}
			}

			if(this.shenBtn.visible==true)
			{
				//对话框内容
				var duiData = "升级需要"+upgrade["jin"]+"宝币和"+upgrade["nen"]+"能量";
				//显示nana对话框
				wuling.Bottom.getInstance().missionText(duiData);
			}
		}
		private onclick():void
		{
			this.close();
			//隐藏nana对话框
			wuling.Bottom.getInstance().ShutDownMission();
			
			wuling.map.getInstance().person1.figureStart();
			wuling.map.getInstance().person2.figureStart();
			wuling.map.getInstance().person3.figureStart();
			wuling.map.getInstance().person4.figureStart();
			wuling.map.getInstance().person5.figureStart();
			wuling.Bottom.getInstance().nanaOnClick();
		}
		/**条件等级 条件满意度*/
		private tiaoLv():void
		{
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			//升级条件
			var upgrade:Object = module.upgrade[buildingImg["img"]];
			var nowNum:number = upgrade["Lv"];
			nowNum = Math.abs(nowNum);
			for(var i:number = 1; i< 3; i++){
                    if(nowNum>0){
                        this["tLvImg"+i].alpha = 1;
                        this["tLvImg"+i].skin = "ssInfo/"+(nowNum%10)+".png";
						var a= nowNum%10;
						nowNum = Math.floor(nowNum/10);
                    }else{
                        this["tLvImg"+i].alpha = 0;
                    }
                }
			var ManNum:number = upgrade["man"];
			for(var i:number = 1; i< 6; i++){
                    if(ManNum>0){
                        this["manImg"+i].alpha = 1;
                        this["manImg"+i].skin = "ssInfo/"+(ManNum%10)+".png";
						var a= ManNum%10;
						ManNum = Math.floor(ManNum/10);
                    }else{
                        this["manImg"+i].alpha = 0;
                    }
                }
		}
        /**满意度数据设置 */
		private manNum(name:string):void
		{
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			//升级条件
			var upgrade:Object = module.upgrade[buildingImg["img"]];
			//判断是否为车台
			if(upgrade["classID"]==1)
			{
				var zi:PlaceItem1 = buildingImg["zi"];
				if(zi.carClass.skin !=null)
				{
					var car1:String = zi.carClass.skin;
					var car2 = car1.slice(13);
					var car3 = car2.slice(0,-4);
					var carName:string = buildingImg["img"];
					var now1Num:number = module.buildingMan[carName];
					var now2Num:number = module.buildingMan[car3];
					var nowNum:number = now1Num+now2Num;
				}else{
					var nowNum:number = module.buildingMan[name];
				}
			}else
			{
				var nowNum:number = module.buildingMan[name];
			}

			nowNum = Math.abs(nowNum);
			for(var i:number = 1; i<= 3; i++){
                    if(nowNum>0){
                        this["man"+i].alpha = 1;
                        this["man"+i].skin = "ssInfo/bo"+(nowNum%10)+".png";
						var a= nowNum%10;
						nowNum = Math.floor(nowNum/10);
                    }else{
                        this["man"+i].alpha = 0;
						this["man1"].alpha = 1;
                    }
                }
		}
		/**互动人数数据设置 */
		private JdNum(Num:number):void
		{
			var nowNum:number = Num;
			nowNum = Math.abs(nowNum);
			for(var i:number = 1; i<= 6; i++){
                    if(nowNum>0){
                        this["Jd"+i].alpha = 1;
                        this["Jd"+i].skin = "ssInfo/bo"+(nowNum%10)+".png";
						var a= nowNum%10;
						nowNum = Math.floor(nowNum/10);
                    }else{
                        this["Jd"+i].alpha = 0;
						this["Jd1"].alpha = 1;
                    }
                }
		}
		/**判断是否跳出函数false为跳出turn为不跳出 */
		private dapFun:boolean = true;
		/**判断宝币或者能量是否满足 */
		private judgeConditions():void
		{
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			//升级条件
			var upgrade:Object = module.upgrade[buildingImg["img"]];
			//判断不足条件
			if(upgrade["jin"]>wuling.Top.getInstance().jin&&upgrade["nen"]>wuling.Top.getInstance().nen)
			{
				//宝币和能量不足
				wuling.Bottom.getInstance().boxText.text = "宝币和能量不足";
				this.dapFun = false;
				return
			}
			if(upgrade["jin"]>wuling.Top.getInstance().jin)
			{
				//宝币不足
				wuling.Bottom.getInstance().boxText.text = "宝币不足";
				this.dapFun = false;
				return
			}
			if(upgrade["nen"]>wuling.Top.getInstance().nen)
            {
				//能量不足
				wuling.Bottom.getInstance().boxText.text = "能量不足";
				this.dapFun = false;
				return
			}
			this.dapFun = true;
		}
		/**升级消耗宝币和能量 */
		private consumeJinNen():void
		{
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			//升级条件
			var upgrade:Object = module.upgrade[buildingImg["img"]];
			//减少宝币和能量
			util.HttpRequestUtil.Modifybaobi(-upgrade["jin"]);
			// wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-upgrade["jin"];
			wuling.Top.getInstance().nen =wuling.Top.getInstance().nen-upgrade["nen"];
			// wuling.Top.getInstance().gabi();
			wuling.Top.getInstance().nens();
		}

		private onHander():void
		{
			this.judgeConditions();
			if(this.dapFun==false){return}
			this.close();
			//隐藏nana对话框
			wuling.Bottom.getInstance().ShutDownMission();
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			//升级条件
			var upgrade:Object = module.upgrade[buildingImg["img"]];
		   if(upgrade["classID"]==2)
		   {
			    var zi:PlaceItem2 = buildingImg["zi"];
				zi._mc.visible = true;
				//加载建筑棚动画资源
			    module.AnimationModule.getInstance().aniCling(zi._mc);
				
				zi._mc.zOrder = zi.zOrder+0.5;
				Laya.timer.once(19*100,this,()=>{
						zi._mc.stop();
						zi._mc.visible = false;
				});
				if(buildingImg["ObjectLevel"]==1)
				{
					//升级
					util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+buildingImg["RoomObjectID"]+"&ObjectLevel=2");
					zi.imgBtn.skin = "place/"+buildingImg["img"]+"a.png";
					zi.ObjectLevel =2;
				}
				if(buildingImg["ObjectLevel"]==2)
				{
					//升级
					util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+buildingImg["RoomObjectID"]+"&ObjectLevel=3");
					zi.imgBtn.skin = "place/"+buildingImg["img"]+"b.png";
					zi.ObjectLevel =3;
				}
				zi.buiAin();
		   }
		//    var sli:string = buildingImg["img"];
		//    if(sli.slice(0,4)=="show")
		  if(upgrade["classID"]==1)
		   {
			   var zicar:PlaceItem1 = buildingImg["zi"];
			   zicar._mc1.visible = true;
			   //加载建筑棚动画资源
			   module.AnimationModule.getInstance().aniCling(zicar._mc1);
			   zicar._mc1.zOrder = zicar.zOrder+0.5;
				Laya.timer.once(19*100,this,()=>{
						zicar._mc1.stop();
						zicar._mc1.visible = false;
				});
			   if(buildingImg["ObjectLevel"]==1)
			   {
				   //升级
					util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+buildingImg["RoomObjectID"]+"&ObjectLevel=2");
					zicar.show1.skin = "place/"+buildingImg["img"]+"a.png";
					zicar.show1.x = 75;
					zicar.show1.y = -22;
					zicar.ObjectLevel =2;
					if(buildingImg["img"]=="show4"||buildingImg["img"]=="show5")
					{
						zicar.show0.skin = "place/"+buildingImg["img"]+"a.png";
					}
			   }
			   if(buildingImg["ObjectLevel"]==2)
			   {
				   //升级
					util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+buildingImg["RoomObjectID"]+"&ObjectLevel=3");
					zicar.show1.skin = "place/"+buildingImg["img"]+"b.png";
					zicar.show1.x = 90;
					zicar.show1.y = -25;
					zicar.ObjectLevel =3;
			   }
			   zicar.buiAin();
			   

		   }
		   this.consumeJinNen();
		   this.figureStart();
		}

        //前台点击
		private frontDesks():void
		{
			this.judgeConditions();
			if(this.dapFun==false){return}
			this.close();
			//隐藏nana对话框
			wuling.Bottom.getInstance().ShutDownMission();
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			var ciling:Laya.Animation = new Laya.Animation();
			//加载建筑棚动画
			module.AnimationModule.getInstance().aniCling(ciling);
			if(buildingImg["ObjectLevel"]==1)
			{
				// ciling.x = ciling.x-16;
			    // ciling.y = ciling.y-33;
				wuling.map.getInstance().qiantai.load("res/swf/frontDesk1.swf",true);
				wuling.map.getInstance().frontDesk.y =wuling.map.getInstance().frontDesk.y -12;
				util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&FrontLevel=2");
			}
			if(buildingImg["ObjectLevel"]==2)
			{
				// ciling.x = ciling.x-30;
			    // ciling.y = ciling.y-15;
				wuling.map.getInstance().qiantai.load("res/swf/frontDesk2.swf",true);
				wuling.map.getInstance().frontDesk.x += 14;
				wuling.map.getInstance().frontDesk.y =wuling.map.getInstance().frontDesk.y -18;
				util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&FrontLevel=3");
			}
			wuling.map.getInstance().qiantai.alpha = 0;
			
			ciling.zOrder = wuling.map.getInstance().frontDesk.zOrder;
			ciling.x = wuling.map.getInstance().frontDesk.x-50;
			ciling.y = wuling.map.getInstance().frontDesk.y-30;
			Laya.timer.once(19*100,this,()=>{
				ciling.destroy();
				wuling.map.getInstance().qiantai.alpha = 1;
				wuling.map.getInstance().qiantai.playTo(0,1);
			})
			// Laya.timer.once(300,this,()=>{
			// 	wuling.map.getInstance().qiantai.playTo(0,1);
			// });
			this.consumeJinNen();
			this.figureStart();

		}
		//互动台点击
		private Operation():void
		{
			this.judgeConditions();
			if(this.dapFun==false){return}
			this.close();
			//隐藏nana对话框
			wuling.Bottom.getInstance().ShutDownMission();
			//建筑数据
			var buildingImg = module.buildingModule.getInstance().buildingImg;
			var ciling:Laya.Animation = new Laya.Animation();
			//加载建筑棚动画
			module.AnimationModule.getInstance().aniCling(ciling);
			if(buildingImg["ObjectLevel"]==1)
			{
				// ciling.x = ciling.x-16;
			    
				wuling.map.getInstance().platform.load("res/swf/operatingFloor1.swf",true);
				wuling.map.getInstance().platform_ball.y =wuling.map.getInstance().platform_ball.y -22;
				wuling.map.getInstance().platform_ball.x =wuling.map.getInstance().platform_ball.x -22;
				util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&OperationLevel=2");
			}
			if(buildingImg["ObjectLevel"]==2)
			{
				// ciling.x = ciling.x-30;
			    // ciling.y = ciling.y-15;
				wuling.map.getInstance().platform.load("res/swf/operatingFloor2.swf",true);
				wuling.map.getInstance().platform_ball.x += 14;
				wuling.map.getInstance().platform_ball.y =wuling.map.getInstance().platform_ball.y +10;
				util.HttpRequestUtil.sendSetLevel("UserID="+module.Room.getInstance().RoomClass["UserID"]+"&"+"RoomID="+module.Room.getInstance().RoomID+"&OperationLevel=3");
			}
			wuling.map.getInstance().platform.alpha = 0;

			ciling.zOrder = wuling.map.getInstance().platform_ball.zOrder;
			ciling.x = wuling.map.getInstance().platform_ball.x-20;
			ciling.y = wuling.map.getInstance().platform_ball.y-10;
			Laya.timer.once(19*100,this,()=>{
				ciling.destroy();
				wuling.map.getInstance().platform.alpha = 1;
			})
			// Laya.timer.once(300,this,()=>{
			// 	wuling.map.getInstance().platform.playTo(0,1);
			// });
			this.consumeJinNen();
			this.figureStart();
		}

        /**恢复人物行动和nana点击事件 */
		private figureStart():void
		{
			wuling.map.getInstance().person1.figureStart();
			wuling.map.getInstance().person2.figureStart();
			wuling.map.getInstance().person3.figureStart();
			wuling.map.getInstance().person4.figureStart();
			wuling.map.getInstance().person5.figureStart();
			wuling.Bottom.getInstance().nanaOnClick();
		}
		// private static _instance:ssInfo;
		// public static getInstance():ssInfo
		// {
		// 	if(this._instance == null)
		// 	{
		// 		this._instance = new ssInfo;
		// 		Laya.stage.addChild(this._instance);
		// 		// this._instance.show();
		// 		this._instance.zOrder = 99999;
		// 	}
		// 	return this._instance;
		// }
	}
}