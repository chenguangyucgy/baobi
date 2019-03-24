/**
* name 
*/
module wuling{
	export class person extends ui.personUI{
		//类型
		public odd:number = (Math.floor(Math.random() * 2 + 0));
		//姓名
		public personName:string;
		//满意度
		private manyi:number = 0;
		//就绪
		private jiuxu:boolean = true;
		//控制星星个数
		public xing:number = 0;
		//互动概率
		public huNum:number =module.personModule.getInstance().huNum;
		private hud:boolean = true;
		private customer:Array<any> = [
			{"bei":"guke/G01/clip_01bg.png", "zheng":"guke/G01/clip_01zg.png"},
			{"bei":"guke/G02/clip_02bg.png", "zheng":"guke/G02/clip_02zg.png"},
			{"bei":"guke/G03/clip_03bg.png", "zheng":"guke/G03/clip_03zg.png"},
			{"bei":"guke/G04/clip_04bg.png", "zheng":"guke/G04/clip_04zg.png"},
			{"bei":"guke/G05/clip_05bg.png", "zheng":"guke/G05/clip_05zg.png"},
			{"bei":"guke/G06/clip_06bg.png", "zheng":"guke/G06/clip_06zg.png"},
			{"bei":"guke/G07/clip_07bg.png", "zheng":"guke/G07/clip_07zg.png"},
			{"bei":"guke/G08/clip_08bg.png", "zheng":"guke/G08/clip_08zg.png"},
			{"bei":"guke/G09/clip_09bg.png", "zheng":"guke/G09/clip_09zg.png"},
			{"bei":"guke/G10/clip_10bg.png", "zheng":"guke/G10/clip_10zg.png"},
			{"bei":"guke/G11/clip_11bg.png", "zheng":"guke/G11/clip_11zg.png"},
			{"bei":"guke/G12/clip_12bg.png", "zheng":"guke/G12/clip_12zg.png"},
			{"bei":"guke/G13/clip_13bg.png", "zheng":"guke/G13/clip_13zg.png"},
			{"bei":"guke/G14/clip_14bg.png", "zheng":"guke/G14/clip_14zg.png"},
			{"bei":"guke/G15/clip_15bg.png", "zheng":"guke/G15/clip_15zg.png"},
			{"bei":"guke/G16/clip_16bg.png", "zheng":"guke/G16/clip_16zg.png"},
			{"bei":"guke/G17/clip_17bg.png", "zheng":"guke/G17/clip_17zg.png"},
			{"bei":"guke/G18/clip_18bg.png", "zheng":"guke/G18/clip_18zg.png"}
		];
		private gukeFuz:any;
		private tween: Laya.Tween;
		private tween2: Laya.Tween;

		constructor(){
			super();
			// wuling.map.getInstance().
			// this.top.xing1.visible = true;
			Laya.timer.once(100, this, this.begin);
			this.pianhao();
			// this.top1.zan.on(Laya.Event.CLICK, this, this.zanAdd, [1]);
		}

		private shou:Laya.Tween;
		private zanHidd():void//手势赞隐藏
		{
			this.shou = Laya.Tween.to(this.top1.zan, {alpha: 0}, 500, null, Laya.Handler.create(this, this.addZan), 1500);
		}
		private addZan():void//增加赞动画
		{
			this.jiuxu = true;
			// this.manyi > 100 ? 100 : this.manyi;
			if(this.manyi > 100){
				this.manyi = 100;
			}
			this.zanAdd();
			this.itemZan.x = 45;
			for(var i:number = 1; i<4; i++){
				if(this.manyi == 0){
					this["item" + i].alpha = 0;
					this.itemZan.x -= 15;
				}else{
					this["item" + i].alpha = 1;
					this["item" + i].skin = "rankList/org"+(this.manyi%10)+".png";
					this.manyi = Math.floor(this.manyi/10);
				}
				
			}
			this.manyi = 0;
			Laya.Tween.to(this.add, {alpha: 1, y: 20}, 1000, null, Laya.Handler.create(this, ()=>{Laya.Tween.to(this.add, {alpha: 0}, 300)}))
		}

		private zanAdd(who:number = 0):void
		{
			if(who == 1){
				Laya.Tween.clear(this.shou);
				this.top1.zan.alpha = 0;
				this.addZan();
				// Laya.Tween.to(this.top1.zan, {alpha: 0}, 0, null, Laya.Handler.create(this, this.addZan));
			}
			var zNum:wuling.Top = wuling.Top.getInstance();
			zNum.manyi += this.manyi;
			zNum.zan();
		}

		private first:number = 0;
		private Lnum:number = 0;
		private begin():void
		{
			this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
			this.persons.skin = this.gukeFuz.bei;
			this.persons.scaleX = -1;
			this.persons.alpha = 1;
			// Laya.Tween.to(this, {x:1426,y:1827}, 10000);
			var num = module.personModule.getInstance().luoNum;
			// var num = 1;
			// Math.floor(Math.random() *num)
			var shuNum = Math.floor(Math.random() *num);
			this.Lnum = shuNum;
			switch(shuNum)
			{
				case 0:
					this.lux1();
					break;
				case 1:
					this.lux2();
					break;
				case 2:
					this.lux3();
					break;
				case 3:
					this.lux4();
					break;
				case 4:
					this.lux6();
					break;
				case 5:
					this.lux7();
					break;
				case 6:
					this.lux5();
					break;
				case 7:
					this.lux8();
					break;
			}
			var lastName:Array<string> = ["赵","严","苗","雷","欧阳","甄","何","司马","祝","梁"];//wcg
			var givenName:Array<string> = ["梦琪","忆柳","尔岚","凝天","元枫","涵瑶","思菱","迎曼","静芙","依凝"];
			this.personName = lastName[Math.floor(Math.random() * 10 + 0)] + givenName[Math.floor(Math.random() * 10 + 0)];
		}


		//顾客进入触发入口动画回调
		private entOnce:boolean = true;
		private entrance(who):void{
			// console.log(who.x,who.y);
			//任务1,2
			this.huNum =module.personModule.getInstance().huNum;
			if(who.x>1266 && who.x<1274 && who.y>1924 && who.y<1929 && this.entOnce){//3
				this.entOnce = false;
				wuling.map.getInstance().men_left.play();
				wuling.map.getInstance().men_right.play();
				wuling.map.getInstance().qiantai.play();
				wuling.map.getInstance()._mc.play();
				Laya.timer.once(1390, this, this.stopEn);
			}else if(who.x>1287 && who.x<1293 && who.y>1953 && who.y<1958 && this.entOnce){//4
				this.entOnce = false;
				wuling.map.getInstance().men_left.play();
				wuling.map.getInstance().men_right.play();
				wuling.map.getInstance().qiantai.play();
				wuling.map.getInstance()._mc.play();
				Laya.timer.once(1390, this, this.stopEn);
			}else if(who.x>1172 && who.x<1178 && who.y>1852 && who.y<1857 && this.entOnce){//5
				this.entOnce = false;
				wuling.map.getInstance().men_left.play();
				wuling.map.getInstance().men_right.play();
				wuling.map.getInstance().qiantai.play();
				wuling.map.getInstance()._mc.play();
				Laya.timer.once(1390, this, this.stopEn);
			}else if(who.x>1170 && who.x<1177 && who.y>1881 && who.y<1887 && this.entOnce){//6
				this.entOnce = false;
				wuling.map.getInstance().men_left.play();
				wuling.map.getInstance().men_right.play();
				wuling.map.getInstance().qiantai.play();
				wuling.map.getInstance()._mc.play();
				Laya.timer.once(1390, this, this.stopEn);
			}else if(who.x>1291 && who.x<1299 && who.y>1929 && who.y<1935 && this.entOnce){//7
				this.entOnce = false;
				wuling.map.getInstance().men_left.play();
				wuling.map.getInstance().men_right.play();
				wuling.map.getInstance().qiantai.play();
				wuling.map.getInstance()._mc.play();
				Laya.timer.once(1390, this, this.stopEn);
			}
		}
		private stopEn():void{
			// this.gukeNumder();
			var room:Object = module.Room.getInstance().RoomClass;
			var roomID:number = module.Room.getInstance().RoomID;
			//记录到店人数
			util.HttpRequestUtil.sendSetLevel("UserID="+room["UserID"]+"&"+"RoomID="+roomID+"&RoomSupportNum="+(room["RoomSupportNum"]+1));
			this.entOnce = true;
			Laya.timer.clear(this,this.stopEn);
			wuling.map.getInstance().men_left.stop();
			wuling.map.getInstance().men_left.index=0;
			wuling.map.getInstance().men_right.stop();
			wuling.map.getInstance().men_right.index=0;
			wuling.map.getInstance().qiantai.stop();
			wuling.map.getInstance().qiantai.index=0;
			wuling.map.getInstance()._mc.stop();
		}
		//出口动画
		private closeDoor():void{
			wuling.map.getInstance().renshu--;
			if(wuling.map.getInstance().renshu == 0 && wuling.map.getInstance()._ck.index == 9){
				wuling.map.getInstance()._ck.playTo(22,29);
			}
			this.pianhao();
			this.x = -75;
			this.y = 2792;
			this.alpha = 1;
			Laya.timer.once((Math.floor(Math.random() * 7 + 2)*1000), this, ()=>{
				this.begin();
			});
			this.xing = 0;
			this.odd = (Math.floor(Math.random() * 2 + 0));
			for(var i:number=1; i<6; i++){
				this.top1["xing"+i].visible = false;
			}
			this.manyi = 0;
		} 
		/**偏好等级 */
		public renlv:string = "details/B.png";
		/**偏好等级设置 */
		private pianhao():void
		{
			var num = Math.floor(Math.random()*100);
			if(num>0&&num<50){this.renlv="details/B.png"};
			if(num>=50&&num<76){this.renlv="details/A.png"};
			if(num>=76&&num<92){this.renlv="details/S.png"};
			if(num>=92&&num<98){this.renlv="details/SS.png"};
		}
		//**宝币1 */
		// private goldCoins1(item:PlaceItem1):void
		// {
		// 	var goldCoins:wuling.goldCoins = new wuling.goldCoins;
		// 	goldCoins.x = item.x-50;
		// 	goldCoins.y = item.y-250;
		// 	goldCoins.zOrder =10000;
		// 	wuling.map.getInstance().mapImg.addChild(goldCoins);
		// }
        //**宝币2 */
		// private goldCoins2(item2:PlaceItem2):void
		// {
		// 	var goldCoins:wuling.goldCoins = new wuling.goldCoins;
		// 	goldCoins.x = item2.x+60;
		// 	goldCoins.y = item2.y-130;
		// 	goldCoins.zOrder =10000;
		// 	wuling.map.getInstance().mapImg.addChild(goldCoins);
		// }

		/**互动执行 */
		public huPerform(placeIItem2:wuling.PlaceItem2):void
		{
			this.perXX();
			//禁止imgBtn点击事件
			placeIItem2.onOff();
			this.hud = false;
			this.tween.pause();
			placeIItem2.tujiAni.interval =100;

			//接待人数增加
			placeIItem2.Jd +=1;
			util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+placeIItem2.RoomObjectID+"&InteractionNum="+placeIItem2.Jd+"");
		}
		
		/**互动执行动画后 */
		public huAni(placeIItem:wuling.PlaceItem2,wuMan:string):void
		{
			placeIItem.tujiAni.stop();
			placeIItem.tujiAni.index = 0;
			//恢复imgBtn点击事件
			placeIItem.imgBtnOn();
			placeIItem.jings();
			placeIItem.jin.setJin(wuMan);
			this.manyi = placeIItem.jin.perzan;

			//判断人物是否应该暂停
			if(module.personModule.getInstance().figureControl==true)
			{
				this.alpha=1;
				this.tween.resume();
			}
			//恢复人物可互动
			Laya.timer.once(300, this, ()=>{
				this.hud = true;
			})
		}
		/**车互动执行 */
		public huPerformCar(placeIItem1:wuling.PlaceItem1):void
		{
			this.perXX();
			//禁止imgBtn点击事件
			placeIItem1.onOff();
			placeIItem1.show1Play.interval = 100;
			this.hud = false;
			this.tween.pause();
			//接待人数增加
			placeIItem1.Jd +=1;
            util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+placeIItem1.RoomObjectID+"&InteractionNum="+placeIItem1.Jd+"");
			if(placeIItem1.show0.skin=="place/d100032.png"||placeIItem1.show0.skin=="place/show4a.png"||placeIItem1.show0.skin=="place/show4.png"
			||placeIItem1.show0.skin=="place/d100033.png"||placeIItem1.show0.skin=="place/show5a.png"||placeIItem1.show0.skin=="place/show5.png")
			{
				placeIItem1.show0Play.interval = 100;
				placeIItem1.show0Play.play(0,false);
			}
		}
		/**车互动执行动画后 */
		public huAniCar(placeIItem1:wuling.PlaceItem1,wuMan:string):void
		{
			placeIItem1.show1Play.stop();
			//恢复imgBtn点击事件
			placeIItem1.imgBtnOn();
			if(placeIItem1.show0.skin!=null)
			{
				var show0:String = placeIItem1.show0.skin;
				var show02 = show0.slice(6);
				var show03 = show02.slice(0,-4);
			}	
			if(placeIItem1.carClass.skin !=null)
			{
				placeIItem1.jings();
				placeIItem1.jin.setJin(show03);
				var car1:String = placeIItem1.carClass.skin;
				var car2 = car1.slice(13);
				var car3 = car2.slice(0,-4);
				var carName:string = show03;
				var now1Num:number = module.buildingMan[carName];
				var now2Num:number = module.buildingMan[car3];
				var nowNum:number = now1Num+now2Num;
				this.manyi = nowNum;
			}else
			{
				this.manyi = module.buildingMan[wuMan];
			}

			//判断人物是否应该暂停
			if(module.personModule.getInstance().figureControl==true)
			{
				this.tween.resume();
			}
			//恢复人物可互动
			Laya.timer.once(300, this, ()=>{
				this.hud = true;
			})
		}
		/**恢复可以互动 */
		public huDonF():void
		{
			Laya.timer.once(300, this, ()=>{
					this.hud = true;
				})
		}
		//路线1互动
		private lux1hd():void
		{
			var dot = module.personData.getInstance();
			var namecar=wuling.map.getInstance().namecar;
			var nameObject=wuling.map.getInstance().nameObject;
			// console.log(this.x, this.y);
			if(this.x > 1175 && this.x <1178&& this.y > 1570 && this.y <1573 && this.hud && dot.dotfun1)//点1
			{
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1316&&namecar[i].y == 1513&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun1 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun1 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==0&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun1 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun1 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1520 && this.x <1523&& this.y > 1427 && this.y <1430 && this.hud && dot.dotfun4){//点2
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1592&&namecar[i].y == 1337&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun4 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -1;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun4 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							if(wuling.map.getInstance().guide==true&&module.personModule.getInstance().interactNew==true)
								{
									module.personModule.getInstance().huNum =8;
									module.personModule.getInstance().interactNew =false;
									Laya.timer.clear(wuling.map.getInstance(),wuling.map.getInstance().follow);
									wuling.map.getInstance().newclick();
									//恢复显示位置
									Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar,{value:752},1000,null,new Laya.Handler(this,()=>{
										 
									}));
									Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar,{value:612},1000,null,new Laya.Handler(this,()=>{
										 
									}));
									
								}
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==1&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun4 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -1;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun4 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1685 && this.x <1688 && this.y > 1532 && this.y <1535 && this.hud && dot.dotfun5){//点3
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1842&&namecar[i].y == 1497&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun5 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun5 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==2&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							
							this.huPerform(placeIItem);
							dot.dotfun5 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun5 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1966 && this.x <1969 && this.y > 1625 && this.y <1628 && this.hud && dot.dotfun6){//点4
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2087&&namecar[i].y == 1657&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun6 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun6 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==3&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun6 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun6 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2427 && this.x <2431 && this.y > 1557 && this.y <1561 && this.hud && dot.dotfun9){//点5
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2367&&namecar[i].y == 1480&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun9 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun9 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==6&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun9 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun9 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}
		}
		//路线1
		private lux1():void
		{
			if(this.first === 0)
				{
					if(wuling.map.getInstance().guide){
						var zb:Array<any> = [{x:-75,y:2792}];
						var ite: number = Math.floor(Math.random() * 1 + 0);
					}else{
						var zb:Array<any> = [{x:1393,y:1725},{x:1121,y:1532},{x:1403,y:1353},{x:1897,y:1667},{x:2128,y:1528},{x:2304,y:1638},{x:2634,y:1425},{x:2302,y:1185}];
						var ite: number = Math.floor(Math.random() * 8 + 0);
						if(ite == module.personData.getInstance().yfun1){
							ite = Math.floor(Math.random() * 8 + 0);
						}else{
							module.personData.getInstance().yfun1 = ite;
						}
					}
					this.x = zb[ite].x;
					this.y = zb[ite].y;
					this.first = 1;
				}
		
			
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder=3049;
					this.tween = Laya.Tween.to(this, {x:1393,y:1725, update:Laya.Handler.create(this, this.entrance, [this], false)}, 10000, null, Laya.Handler.create(this, this.lux1));
					break;
				case 1393://2
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = 1;
					this.zOrder=3001;
					this.tween = Laya.Tween.to(this, {x:1121,y:1532, update:Laya.Handler.create(this, this.lux1hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux1));
					break;
				case 1121://3
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.zOrder=1915;
					this.tween = Laya.Tween.to(this, {x:1403,y:1353}, 3000, null, Laya.Handler.create(this, this.lux1));
					break;
				case 1403://4
					this.persons.skin = this.gukeFuz.zheng;
					this.persons.scaleX = -1;
					this.zOrder=1915;
					this.tween = Laya.Tween.to(this, {x:1897,y:1667, update:Laya.Handler.create(this, this.lux1hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux1));
					break;
				case 1897://5
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.zOrder=1885;
					this.tween = Laya.Tween.to(this, {x:2128,y:1528, update:Laya.Handler.create(this, this.lux1hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux1));
					break;
				case 2128://6
					this.persons.skin = this.gukeFuz.zheng;
					this.persons.scaleX = -1;
					this.zOrder=1825;
					this.tween = Laya.Tween.to(this, {x:2304,y:1638}, 3000, null, Laya.Handler.create(this, this.lux1));
					break;
				case 2304://7
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.zOrder=2001;
					this.tween = Laya.Tween.to(this, {x:2634,y:1425, update:Laya.Handler.create(this, this.lux1hd, [this], false)}, 3600, null, Laya.Handler.create(this, this.lux1));
					break;
				case 2634://8
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = 1;
					this.zOrder=600;
					this.tween = Laya.Tween.to(this, {x:2302,y:1185}, 6000, null, Laya.Handler.create(this, this.lux1));
					break;
				case 2302://9
				    this.zOrder = 500;
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}
		//路线2互动
		private lux2hd():void
		{
			var dot = module.personData.getInstance();
			var namecar=wuling.map.getInstance().namecar;
			var nameObject=wuling.map.getInstance().nameObject;
			// console.log(this.x, this.y);
			if(this.x > 1901 && this.x <1904 && this.y > 1892 && this.y <1896 && this.hud&& dot.dotfun3){//点1
				if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
					
				}
			}else if(this.x >=2005 && this.x <=2008 && this.y >= 1724 && this.y <=1727 && this.hud&& dot.dotfun6){//点2
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2087&&namecar[i].y == 1657&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun6 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun6 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==3&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun6 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun6 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1771 && this.x <1774 && this.y > 1578 && this.y <1581 && this.hud&& dot.dotfun5){//点3
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1842&&namecar[i].y == 1497&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun5 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun5 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==2&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun5 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun5 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1493 && this.x <1497 && this.y > 1293 && this.y <1296 && this.hud&& dot.dotfun4){//点4
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1592&&namecar[i].y == 1337&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun4 =false;
							var pifu:string = this.persons.skin;
							this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun4 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							if(wuling.map.getInstance().guide==true&&module.personModule.getInstance().interactNew==true)
								{
									module.personModule.getInstance().huNum =8;
									module.personModule.getInstance().interactNew =false;
									Laya.timer.clear(wuling.map.getInstance(),wuling.map.getInstance().follow);
									wuling.map.getInstance().newclick();
									//恢复显示位置
									Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar,{value:752},1000,null,new Laya.Handler(this,()=>{
										 
									}));
									Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar,{value:612},1000,null,new Laya.Handler(this,()=>{
										 
									}));
									
								}
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==1&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun4 =false;

							var pifu:string = this.persons.skin;
							this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun4 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1794 && this.x <1797 && this.y > 1235 && this.y <1237 && this.hud&& dot.dotfun7){//点5
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1871&&namecar[i].y == 1158&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun7 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun7 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==4&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun7 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun7 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2031 && this.x <2034 && this.y > 1383 && this.y <1386 && this.hud&& dot.dotfun8){//点6
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2120&&namecar[i].y == 1320&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun8 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun8 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==5&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun8 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun8 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}
		}
		//路线2
		private lux2():void
		{
			if(this.first === 0){
					if(wuling.map.getInstance().guide){
						var zb:Array<any> = [{x:-75,y:2792}];
						var ite: number = Math.floor(Math.random() * 1 + 0);
					}else{
					var zb:Array<any> = [{x:1810,y:1953},{x:2087,y:1776},{x:1405,y:1350},{x:1693,y:1172},{x:2127,y:1444},{x:2393,y:1275},{x:2302,y:1185}];
					var ite: number = Math.floor(Math.random() * 7 + 0);
					if(ite == module.personData.getInstance().yfun2){
							ite = Math.floor(Math.random() * 7 + 0);
						}else{
							module.personData.getInstance().yfun2 = ite;
						}
					}
					this.x = zb[ite].x;
					this.y = zb[ite].y;
					this.first = 1;
				}
			
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder = 3050;
					this.tween = Laya.Tween.to(this, {x:1531,y:1784, update:Laya.Handler.create(this, this.entrance, [this], false)}, 10000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 1531://2
					this.persons.skin = this.gukeFuz.zheng;
					this.persons.scaleX = -1;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:1810,y:1953}, 3000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 1810://3
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.zOrder = 2001;
					this.tween = Laya.Tween.to(this, {x:2087,y:1776, update:Laya.Handler.create(this, this.lux2hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 2087://4
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = 1;
					this.zOrder = 1915;
					this.tween = Laya.Tween.to(this, {x:1405,y:1350, update:Laya.Handler.create(this, this.lux2hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 1405://5
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.zOrder = 1825;
					this.tween = Laya.Tween.to(this, {x:1693,y:1172, update:Laya.Handler.create(this, this.lux2hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 1693://6
					this.persons.skin = this.gukeFuz.zheng;
					this.persons.scaleX = -1;
					this.zOrder = 1825;
					this.tween = Laya.Tween.to(this, {x:2127,y:1444, update:Laya.Handler.create(this, this.lux2hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 2127://7
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.zOrder = 1795;
					this.tween = Laya.Tween.to(this, {x:2393,y:1275}, 3000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 2393://8
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = 1;
					this.zOrder=600;
					this.tween = Laya.Tween.to(this, {x:2302,y:1185}, 2000, null, Laya.Handler.create(this, this.lux2));
					break;
				case 2302://9
				    this.zOrder = 500;
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}

		//路线3互动
		private lux3hd():void
		{
			var dot = module.personData.getInstance();
			var namecar=wuling.map.getInstance().namecar;
			var nameObject=wuling.map.getInstance().nameObject;
			
			if(this.x > 1894 && this.x < 1897 && this.y >1898 && this.y <1900 && this.hud){//点1
			// 	this.hud = false;
			//  for(var i:number=0;i<namecar.length;i++)
			//   {
			// 	if(namecar){}
			// 	var placeIItem1 = namecar[i];  
			// 	if(Math.floor(Math.random() * 10 + 1)>=7){//触发几率
			// 		var durl:String = placeIItem1.show1.skin;
			// 		var durl2 = durl.slice(6);
			// 		var durl3 = durl2.slice(0,-4);
			// 		var car:String = placeIItem1.carClass.skin;

			// 		this.huPerformCar(placeIItem1);

			// 		var pifu:string = this.persons.skin;
			// 		this.persons.scaleX = -this.persons.scaleX;
			// 		this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
			// 		///播放动画
			// 		placeIItem1.show1Play.play(0,false);
			// 		if(car != null){placeIItem1.carClassPlay.play();}
			// 		var time1 = module.aniFramesNumder[durl3] * 50;
			// 		Laya.timer.once(time1,this,()=>{
			// 			this.huAniCar(placeIItem1,durl3);
			// 			if(car!=null){
			// 				placeIItem1.carClassPlay.gotoAndStop(0);
			// 			}
			// 			//---互动完恢复行走
			// 			this.persons.skin = pifu;
			// 			this.persons.scaleX = -this.persons.scaleX;
			// 			Laya.timer.once(300, this, ()=>{
			// 				this.hud = true;
			// 			})
			// 		})
			// 	}else
			// 	{
			// 		Laya.timer.once(300, this, ()=>{
			// 				this.hud = true;
			// 			})
			// 	}
			//   }
			}else if(this.x > 1720 && this.x < 1723 && this.y >1702 && this.y <1705 && this.hud){//点2
				// if(Math.floor(Math.random() * 10 + 1)>=11){//触发几率
				// 	this.hud = false;
				// 	var pifu:string = this.persons.skin;
				// 	this.tween.pause();
				// 	// this.persons.scaleX = -this.persons.scaleX;
				// 	this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
				// 	//互动完恢复行走
				// 	Laya.timer.once(2000, this, ()=>{
				// 		this.persons.skin = pifu;
				// 		this.tween.resume();
				// 		// this.persons.scaleX = -this.persons.scaleX;
				// 		Laya.timer.once(300, this, ()=>{
				// 			this.hud = true;
				// 		})
				// 	})
				// }
			}else if(this.x > 1231 && this.x < 1234 && this.y >1591 && this.y <1594 && this.hud&&dot.dotfun1 ==true){//点3
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1316&&namecar[i].y == 1513&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun1 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
							this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun1 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==0&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						  {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun1 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
							this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun1 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						 }
						}
					}
					this.huDonF();
			}else if(this.x > 943 && this.x < 946 && this.y >1407 && this.y <1410 && this.hud&&dot.dotfun10 ==true){//点4
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1034&&namecar[i].y == 1331&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun10 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun10 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
						        this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==7&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun10 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun10 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
						            this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1182 && this.x < 1185 && this.y >1115 && this.y <1118 && this.hud&&dot.dotfun11 ==true){//点5
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1312&&namecar[i].y == 1154&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun11 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun11 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==8&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun11 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun11 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1433 && this.x < 1446 && this.y >1014 && this.y <1026 && this.hud&&dot.dotfun12 ==true){//点6
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1589&&namecar[i].y == 976&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun12 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun12 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==9&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun12 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun12 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1739 && this.x < 1759 && this.y >1227 && this.y <1247 && this.hud&&dot.dotfun7 ==true){//点7
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1871&&namecar[i].y == 1158&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun7 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun7 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==4&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun7 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun7 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2010 && this.x < 2018 && this.y >1387 && this.y <1405 && this.hud&&dot.dotfun8 ==true){//点8
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2120&&namecar[i].y == 1320&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun8 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun8 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==5&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun8 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun8 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2238 && this.x < 2258 && this.y >1543 && this.y <1563 && this.hud&&dot.dotfun9 ==true){//点9
					
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2367&&namecar[i].y == 1480&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun9 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun9 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==6&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun9 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun9 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2763 && this.x < 2766 && this.y >1697 && this.y <1700 && this.hud&&dot.dotfun15 ==true){//点10
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2646&&namecar[i].y == 1660&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun9 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun9 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==12&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun9 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun9 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}
		}
		//路线3
		private lux3():void
		{
			if(this.first === 0){
				var zb:Array<any> = [{x:1717,y:2009},{x:2080,y:1785},{x:1834,y:1634},{x:1561,y:1802},{x:837,y:1340},{x:1386,y:987},{x:2629,y:1784},{x:2910,y:1607},{x:2300,y:1224}];
				var ite: number = Math.floor(Math.random() * 9 + 0);
				this.x = zb[ite].x;
				this.y = zb[ite].y;
				this.first = 1;
			}
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder = 3050;
					this.tween = Laya.Tween.to(this, {x:1426,y:1827, update:Laya.Handler.create(this, this.entrance, [this], false)}, 10000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 1426://2
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:1717,y:2009}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 1717://3
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2001;
					this.tween = Laya.Tween.to(this, {x:2080,y:1785, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 2080://4
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1915;
					this.tween = Laya.Tween.to(this, {x:1834,y:1634}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 1834://5
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1975;
					this.tween = Laya.Tween.to(this, {x:1561,y:1802, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 1561://6
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2001;
					this.tween = Laya.Tween.to(this, {x:837,y:1340, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 837://7
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 915;
					this.tween = Laya.Tween.to(this, {x:1056,y:1196, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 1056://7
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 885;
					this.tween = Laya.Tween.to(this, {x:1386,y:987, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 1386://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 825;
					this.tween = Laya.Tween.to(this, {x:1572,y:1130, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 1572://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1825;
					this.tween = Laya.Tween.to(this, {x:2345,y:1613, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 2345://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 2765;
					this.tween = Laya.Tween.to(this, {x:2629,y:1784, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 2629://9
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2765;
					this.tween = Laya.Tween.to(this, {x:2910,y:1607, update:Laya.Handler.create(this, this.lux3hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux3));
					break;
				case 2910://10
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 600;
					this.tween = Laya.Tween.to(this, {x:2300,y:1224}, 6500, null, Laya.Handler.create(this, this.lux3));
					break;
				case 2300://11
				    this.zOrder = 500;
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}
		//路线4互动
		private lux4hd():void
		{
			var dot = module.personData.getInstance();
			var namecar=wuling.map.getInstance().namecar;
			var nameObject=wuling.map.getInstance().nameObject;
			// console.log(this.x, this.y);
			if(this.x > 1411 && this.x < 1431 && this.y >1566 && this.y <1586 && this.hud&&dot.dotfun1 ==true){//点1

				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1316&&namecar[i].y == 1513&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun1 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun1 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==0&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun10 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun10 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 940 && this.x < 944 && this.y >1273 && this.y <1276 && this.hud&&dot.dotfun10 ==true){//点2
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1034&&namecar[i].y == 1331&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun10 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun10 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==7&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun10 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun10 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1544 && this.x < 1547 && this.y >1253 && this.y <1256 && this.hud&&dot.dotfun4 ==true){//点3

				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1592&&namecar[i].y == 1337&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun4 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun4 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==1&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun4 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun4 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1786 && this.x < 1789 && this.y >1243 && this.y <1246 && this.hud&&dot.dotfun7 ==true){//点4
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1871&&namecar[i].y == 1158&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun7 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun7 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==4&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun7 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun7 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2257 && this.x < 2260 && this.y >1545 && this.y <1548 && this.hud&&dot.dotfun9 ==true){//点5
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2367&&namecar[i].y == 1480&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun9 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun9 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==6&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun9 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun9 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2291 && this.x < 2294 && this.y >1771 && this.y <1773 && this.hud&&dot.dotfun14 ==true){//点6
			
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2368&&namecar[i].y == 1836&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun14 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun14 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==11&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun14 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun14 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2184 && this.x < 2204 && this.y >2068 && this.y <2088 && this.hud&&dot.dotfun13 ==true){//点7
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2092&&namecar[i].y == 2016&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun13 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun13 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==10&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun13 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun13 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2801 && this.x < 2804 && this.y >1598 && this.y <1601 && this.hud&&dot.dotfun15 ==true){//点8
					
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2646&&namecar[i].y == 1660&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun15 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun15 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==12&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun15 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun15 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2257 && this.x < 2260 && this.y >1245 && this.y <1248 && this.hud&&dot.dotfun8 ==true){//点9
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2120&&namecar[i].y == 1320&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun8 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun8 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==5&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun8 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun8 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1476 && this.x < 1479 && this.y >1046 && this.y <1049 && this.hud&&dot.dotfun12 ==true){//点10
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1589&&namecar[i].y == 976&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun12 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun12 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==9&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun12 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
                            this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun12 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}
		}
		//路线4
		private lux4():void
		{
			if(this.first === 0){
				var zb:Array<any> = [{x:1807,y:1328},{x:1223,y:1702},{x:758,y:1392},{x:1112,y:1166},{x:1396,y:1349},{x:1678,y:1174},{x:2451,y:1670},{x:1815,y:2082},{x:1991,y:2197},{x:2860,y:1637},{x:1810,y:954},{x:1568,y:1108},{x:1386,y:986},{x:1669,y:812}];
				var ite: number = Math.floor(Math.random() * 14 + 0);
				this.x = zb[ite].x;
				this.y = zb[ite].y;
				this.first = 1;
			}
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder = 3050;
					this.tween = Laya.Tween.to(this, {x:1471,y:1848, update:Laya.Handler.create(this, this.entrance, [this], false)}, 10000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1471://1
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder = 1975;
					this.tween = Laya.Tween.to(this, {x:1817,y:1647, update:Laya.Handler.create(this, this.entrance, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1817://1
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder = 1885;
					this.tween = Laya.Tween.to(this, {x:2058,y:1485, update:Laya.Handler.create(this, this.entrance, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 2058://2
					this.persons.scaleX = 1;
					this.zOrder = 1855;
					this.tween = Laya.Tween.to(this, {x:1807,y:1328}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1807://3
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1855;
					this.tween = Laya.Tween.to(this, {x:1579,y:1478, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1579://3
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1945;
					this.tween = Laya.Tween.to(this, {x:1223,y:1702, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1223://4
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:758,y:1392}, 6000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 758://5
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 975;
					this.tween = Laya.Tween.to(this, {x:1112,y:1166, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3300, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1112://6
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1396,y:1349}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1396://7
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1005;
					this.tween = Laya.Tween.to(this, {x:1678,y:1174, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1678://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1825;
					this.tween = Laya.Tween.to(this, {x:2451,y:1670, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 2451://9
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1735;
					this.tween = Laya.Tween.to(this, {x:1815,y:2082, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 6500, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1815://10
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:1991,y:2197}, 2000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1991://11
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2945;
					this.tween = Laya.Tween.to(this, {x:2337,y:1996, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 2337://11
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2855;
					this.tween = Laya.Tween.to(this, {x:2623,y:1813, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 2623://11
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2760;
					this.tween = Laya.Tween.to(this, {x:2860,y:1637, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 2860://12
					this.persons.scaleX = -1;
					this.persons.scaleX = -this.persons.scaleX;
					this.zOrder = 600;
					this.tween = Laya.Tween.to(this, {x:1810,y:954, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 14000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1810://13
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 825;
					this.tween = Laya.Tween.to(this, {x:1568,y:1108}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1568://14
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 825;
					this.tween = Laya.Tween.to(this, {x:1386,y:986, update:Laya.Handler.create(this, this.lux4hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1386://15
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 795;
					this.tween = Laya.Tween.to(this, {x:1669,y:812}, 3000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 1669://16
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 795;
					this.tween = Laya.Tween.to(this, {x:2269,y:1191}, 6000, null, Laya.Handler.create(this, this.lux4));
					break;
				case 2269://11
				    this.zOrder = 500;
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}
		//路线5互动
		private lux5hd():void
		{
			// console.log(this.x, this.y);
			if(this.x > 1690 && this.x < 1693 && this.y >1605 && this.y <1608 && this.hud){//点1
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
					console.log(1);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1740 && this.x < 1743 && this.y >1764 && this.y <1767 && this.hud){//点2
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
					console.log(2);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2440 && this.x < 2443 && this.y >2233 && this.y <2236 && this.hud){//点3
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(3);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2520 && this.x < 2523 && this.y >2067 && this.y <2070 && this.hud){//点4
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(4);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2260 && this.x < 2263 && this.y >1899 && this.y <1902 && this.hud){//点5
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(5);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1985 && this.x < 1988 && this.y >1720 && this.y <1723 && this.hud){//点6
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(6);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1750 && this.x < 1753 && this.y >1568 && this.y <1571 && this.hud){//点7
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(7);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1480 && this.x < 1483 && this.y >1393 && this.y <1396 && this.hud){//点8
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(8);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1205 && this.x < 1208 && this.y >1215 && this.y <1218 && this.hud){//点9
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(9);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 982 && this.x < 985 && this.y >917 && this.y <920 && this.hud){//点10
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
					console.log(10);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1244 && this.x < 1247 && this.y >885 && this.y <888 && this.hud){//点11
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(11);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1501 && this.x < 1503 && this.y >1051 && this.y <1054 && this.hud){//点12
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(12);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1771 && this.x < 1774 && this.y >1225 && this.y <1228 && this.hud){//点13
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(13);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2040 && this.x < 2043 && this.y >1400 && this.y <1403 && this.hud){//点14
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(14);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2282 && this.x < 2285 && this.y >1556 && this.y <1559 && this.hud){//点15
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(15);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2550 && this.x < 2553 && this.y >1729 && this.y <1732 && this.hud){//点16
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(16);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 3000 && this.x < 3003 && this.y >1875 && this.y <1878 && this.hud){//点17
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.persons.scaleX = -this.persons.scaleX;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(17);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}
		}
		//路线5
		private lux5():void
		{
			if(this.first === 0){
				var zb:Array<any> = [{x:1838,y:1705},{x:1536,y:1898},{x:2246,y:2351},{x:2618,y:2131},{x:866,y:995},{x:1142,y:819},{x:2891,y:1950},{x:3159,y:1774},{x:2305,y:1207}];
				var ite: number = Math.floor(Math.random() * 9 + 0);
				this.x = zb[ite].x;
				this.y = zb[ite].y;
				this.first = 1;
			}
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.tween = Laya.Tween.to(this, {x:1594,y:1541, update:Laya.Handler.create(this, this.entrance, [this], false)}, 13000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 1594://2
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1838,y:1705, update:Laya.Handler.create(this, this.lux5hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 1838://3
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1536,y:1898, update:Laya.Handler.create(this, this.lux5hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 1536://4
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2246,y:2351}, 9000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 2246://5
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2618,y:2131, update:Laya.Handler.create(this, this.lux5hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 2618://6
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:866,y:995, update:Laya.Handler.create(this, this.lux5hd, [this], false)}, 21000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 866://7
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1142,y:819, update:Laya.Handler.create(this, this.lux5hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 1142://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2891,y:1950, update:Laya.Handler.create(this, this.lux5hd, [this], false)}, 21000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 2891://9
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:3159,y:1774, update:Laya.Handler.create(this, this.lux5hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 3159://10
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2305,y:1207}, 11000, null, Laya.Handler.create(this, this.lux5));
					break;
				case 2305://11
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}
		//路线6互动
		private lux6hd():void
		{   
			var dot = module.personData.getInstance();
			var namecar=wuling.map.getInstance().namecar;
			var nameObject=wuling.map.getInstance().nameObject;
			if(this.x > 1201 && this.x < 1204 && this.y >1589 && this.y <1592 && this.hud&&dot.dotfun1 ==true){//点1
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1316&&namecar[i].y == 1513&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun1 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun1 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==0&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun1 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun1 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 953 && this.x < 956 && this.y >1258 && this.y <1261 && this.hud&&dot.dotfun10 ==true){//点2
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1034&&namecar[i].y == 1331&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun10 =false;
							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun10 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==7&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun10 =false;

							var pifu:string = this.persons.skin;
					        this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun10 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 681 && this.x < 684 && this.y >1101 && this.y <1104 && this.hud&&dot.dotfun16 ==true){//点3
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 789&&namecar[i].y == 1168&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun16 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun16 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==13&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun16 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun16 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 955 && this.x < 958 && this.y >1055 && this.y <1058 && this.hud&&dot.dotfun17 ==true){//点4
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1067&&namecar[i].y == 992&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun17 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun17 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==14&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun17 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun17 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1210 && this.x < 1213 && this.y >1220 && this.y <1223 && this.hud&&dot.dotfun11 ==true){//点5
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1312&&namecar[i].y == 1154&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun11 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun11 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==8&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun11 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun11 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1511 && this.x < 1513 && this.y >1415 && this.y <1418 && this.hud&&dot.dotfun4 ==true){//点6
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1592&&namecar[i].y == 1337&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun4 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun4 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==1&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun4 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun4 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1760 && this.x < 1763 && this.y >1577 && this.y <1580 && this.hud&&dot.dotfun5 ==true){//点7
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1842&&namecar[i].y == 1497&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun5 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun5 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==2&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun5 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun5 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1984 && this.x < 1987 && this.y >1722 && this.y <1725 && this.hud&&dot.dotfun6 ==true){//点8
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2087&&namecar[i].y == 1657&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun6 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun6 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==3&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun6 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun6 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1910 && this.x < 1913 && this.y >1885 && this.y <1888 && this.hud){//点9
				// this.hud = false;
				// for(var i:number=0;i<namecar.length;i++)
				// {
				// 	if(namecar[i].x == 1034&&namecar[i].y == 1331&&namecar[i].imgBtn.gray==false)
				// 	{
				// 		var placeIItem1 = namecar[i];
				// 		if(Math.floor(Math.random() * 10 + 1)>=7){//触发几率
				// 			var durl:String = placeIItem1.show1.skin;
				// 			var durl2 = durl.slice(6);
				// 			var durl3 = durl2.slice(0,-4);
				// 			var car:String = placeIItem1.carClass.skin;

				// 			this.huPerformCar(placeIItem1);

				// 			dot.dotfun10 =false;
				// 			var pifu:string = this.persons.skin;
				// 	        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
				// 			//播放动画
				// 			placeIItem1.show1Play.play(0,false);
				// 			if(car != null){placeIItem1.carClassPlay.play();}
				// 			var time1 = module.aniFramesNumder[durl3] * 50;
				// 			Laya.timer.once(time1,this,()=>{
				// 				this.huAniCar(placeIItem1,durl3);
				// 				if(car!=null){
				// 					placeIItem1.carClassPlay.gotoAndStop(0);
				// 				}
				// 				dot.dotfun10 =true;
				// 				//---互动完恢复行走
				// 				this.persons.skin = pifu;
				// 			})
							
				// 		}else{this.huDonF();}
				// 		return
				// 	  }
				//  }

				//  for(var i:number=0;i<nameObject.length;i++)
				// 	{
				// 		if(nameObject[i]._i==7&&nameObject[i].imgBtn.gray==false)
				// 		{
				// 		  if(module.aniFramesNumder[durl3]>0)
				// 		   {
				// 			if(Math.floor(Math.random() * 10 + 1)>=7){//触发几率
				// 			var placeIItem = nameObject[i];
				// 			var durl:String = placeIItem.imgBtn.skin;
				// 			var durl2 = durl.slice(6);
				// 			var durl3 = durl2.slice(0,-4);
				// 			this.huPerform(placeIItem);
				// 			dot.dotfun10 =false;

				// 			var pifu:string = this.persons.skin;
				// 	        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
				// 				//------------------------------------------------------

				// 				//播放动画
				// 				placeIItem.tujiAni.play(0,false);
				// 				var time = module.aniFramesNumder[durl3] * 50;
				// 				Laya.timer.once(time,this,()=>{
				// 					this.huAni(placeIItem,durl3);
				// 					dot.dotfun10 =true;
									
				// 					//---互动完恢复行走
				// 					this.persons.skin = pifu;
				// 				});

				// 			}else{this.huDonF();}
				// 			return 
				// 		}
				// 		}
				// 	}
				// this.huDonF();
			}else if(this.x > 1995 && this.x < 1998 && this.y >2085 && this.y <2088 && this.hud&&dot.dotfun13 ==true){//点10
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2092&&namecar[i].y == 2016&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun13 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun13 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==10&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun13 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun13 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2522 && this.x < 2525 && this.y >2069 && this.y <2072 && this.hud&&dot.dotfun20 ==true){//点11
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2619&&namecar[i].y == 1997&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun20 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun20 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==17&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun20 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun20 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2793 && this.x < 2796 && this.y >1889 && this.y <1892 && this.hud&&dot.dotfun21 ==true){//点12
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2894&&namecar[i].y == 1817&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun21 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun21 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==18&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun21 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun21 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2511 && this.x < 2514 && this.y >1706 && this.y <1709 && this.hud&&dot.dotfun15 ==true){//点13
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2646&&namecar[i].y == 1660&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun15 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun15 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==12&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun15 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun15 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2252 && this.x < 2255 && this.y >1538 && this.y <1541 && this.hud&&dot.dotfun9 ==true){//点14
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2367&&namecar[i].y == 1480&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun9 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun9 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==6&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun9 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun9 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2010 && this.x < 2013 && this.y >1381 && this.y <1384 && this.hud&&dot.dotfun8 ==true){//点15
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2120&&namecar[i].y == 1320&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun8 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun8 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==5&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun8 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun8 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1743 && this.x < 1747 && this.y >1208 && this.y <1211 && this.hud&&dot.dotfun7 ==true){//点16
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1871&&namecar[i].y == 1158&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun7 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun7 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==4&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun7 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun7 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1455 && this.x < 1458 && this.y >1021 && this.y <1024 && this.hud&&dot.dotfun12 ==true){//点17
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1589&&namecar[i].y == 976&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun12 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun12 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==9&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun12 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun12 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1221 && this.x < 1224 && this.y >869 && this.y <872 && this.hud&&dot.dotfun18 ==true){//点18
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1342&&namecar[i].y == 812&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun18 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun18 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==15&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun18 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun18 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}
		}
		//路线6
		private lux6():void
		{
			if(this.first === 0){
				var zb:Array<any> = [{x:1113,y:1526},{x:1359,y:1378},{x:1057,y:1190},{x:760,y:1393},{x:493,y:1217},{x:862,y:995},{x:2082,y:1786},{x:1785,y:1962},{x:2091,y:2142},{x:2366,y:1966},{x:2620,y:2134},{x:2895,y:1955},{x:1139,y:816},{x:1428,y:643},{x:2260,y:1214}];
				var ite: number = Math.floor(Math.random() * 15 + 0);
				this.x = zb[ite].x;
				this.y = zb[ite].y;
				this.first = 1;
			}
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder = 3050;
					this.tween = Laya.Tween.to(this, {x:1393,y:1725, update:Laya.Handler.create(this, this.entrance, [this], false)}, 10000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1393://2
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = 1;
					this.zOrder=3001;
					this.tween = Laya.Tween.to(this, {x:1113,y:1526, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1113://3
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=1915;
					this.tween = Laya.Tween.to(this, {x:1359,y:1378}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1359://4
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=975;
					this.tween = Laya.Tween.to(this, {x:1057,y:1190}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1057://5
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder=975;
					this.tween = Laya.Tween.to(this, {x:760,y:1393, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 760://6
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=3001;
					this.tween = Laya.Tween.to(this, {x:493,y:1217}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 493://7
					this.persons.scaleX = -1;	
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=945;
					this.tween = Laya.Tween.to(this, {x:862,y:995, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 862://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder=915;
					this.tween = Laya.Tween.to(this, {x:1396,y:1343, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1396://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder=1915;
					this.tween = Laya.Tween.to(this, {x:2082,y:1786, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 2082://9
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;	
					this.zOrder=2005;
					this.tween = Laya.Tween.to(this, {x:1785,y:1962, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1785://10
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder=3001;
					this.tween = Laya.Tween.to(this, {x:2091,y:2142, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 2091://11
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=2945;
					this.tween = Laya.Tween.to(this, {x:2366,y:1966}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 2366://12
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder=2915;
					this.tween = Laya.Tween.to(this, {x:2620,y:2134, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 2620://13
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=2885;
					this.tween = Laya.Tween.to(this, {x:2895,y:1955}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 2895://14
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=2825;
					this.tween = Laya.Tween.to(this, {x:2453,y:1670, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 2453://14
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=1825;
					this.tween = Laya.Tween.to(this, {x:1676,y:1165, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1676://14
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=825;
					this.tween = Laya.Tween.to(this, {x:1139,y:816, update:Laya.Handler.create(this, this.lux6hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1139://15
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder=765;
					this.tween = Laya.Tween.to(this, {x:1428,y:643}, 3000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 1428://16
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder=600;
					this.tween = Laya.Tween.to(this, {x:2260,y:1214}, 12000, null, Laya.Handler.create(this, this.lux6));
					break;
				case 2260://17
				    this.zOrder = 500;
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}
		//路线7互动
		private lux7hd():void
		{
			var dot = module.personData.getInstance();
			var namecar=wuling.map.getInstance().namecar;
			var nameObject=wuling.map.getInstance().nameObject;
			// console.log(this.x, this.y);
			if(this.x > 1470 && this.x < 1473 && this.y >1744 && this.y <1747 && this.hud&&dot.dotfun2 ==true){//点1
				
				// this.hud = false;
				// for(var i:number=0;i<namecar.length;i++)
				// {
				// 	if(namecar[i].x == 1342&&namecar[i].y == 812&&namecar[i].imgBtn.gray==false)
				// 	{
				// 		var placeIItem1 = namecar[i];
				// 		if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
				// 			var durl:String = placeIItem1.show1.skin;
				// 			var durl2 = durl.slice(6);
				// 			var durl3 = durl2.slice(0,-4);
				// 			var car:String = placeIItem1.carClass.skin;

				// 			this.huPerformCar(placeIItem1);

				// 			dot.dotfun18 =false;
				// 			var pifu:string = this.persons.skin;
				// 			this.persons.scaleX = -this.persons.scaleX;
				// 	        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
				// 			//播放动画
				// 			placeIItem1.show1Play.play(0,false);
				// 			if(car != null){placeIItem1.carClassPlay.play();}
				// 			var time1 = module.aniFramesNumder[durl3] * 50;
				// 			Laya.timer.once(time1,this,()=>{
				// 				this.huAniCar(placeIItem1,durl3);
				// 				if(car!=null){
				// 					placeIItem1.carClassPlay.gotoAndStop(0);
				// 				}
				// 				dot.dotfun18 =true;
				// 				//---互动完恢复行走
				// 				this.persons.skin = pifu;
				// 				this.persons.scaleX = -this.persons.scaleX;
				// 			})
							
				// 		}else{this.huDonF();}
				// 		return
				// 	  }
				//  }

				//  for(var i:number=0;i<nameObject.length;i++)
				// 	{
				// 		if(nameObject[i]._i==15&&nameObject[i].imgBtn.gray==false)
				// 		{
				// 		  if(module.aniFramesNumder[durl3]>0)
				// 		   {
				// 			if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
				// 			var placeIItem = nameObject[i];
				// 			var durl:String = placeIItem.imgBtn.skin;
				// 			var durl2 = durl.slice(6);
				// 			var durl3 = durl2.slice(0,-4);
				// 			this.huPerform(placeIItem);
				// 			dot.dotfun18 =false;

				// 			var pifu:string = this.persons.skin;
				// 			this.persons.scaleX = -this.persons.scaleX;
				// 	        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
				// 				//------------------------------------------------------

				// 				//播放动画
				// 				placeIItem.tujiAni.play(0,false);
				// 				var time = module.aniFramesNumder[durl3] * 50;
				// 				Laya.timer.once(time,this,()=>{
				// 					this.huAni(placeIItem,durl3);
				// 					dot.dotfun18 =true;
									
				// 					//---互动完恢复行走
				// 					this.persons.skin = pifu;
				// 					this.persons.scaleX = -this.persons.scaleX;
				// 				});

				// 			}else{this.huDonF();}
				// 			return 
				// 		}
				// 		}
				// 	}
				// this.huDonF();
			}else if(this.x > 1226 && this.x < 1229 && this.y >1585 && this.y <1588 && this.hud&&dot.dotfun1 ==true){//点2
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1316&&namecar[i].y == 1513&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun1 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun1 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==0&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun1 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun1 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1160 && this.x < 1163 && this.y >1254 && this.y <1257 && this.hud&&dot.dotfun10 ==true){//点3
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1034&&namecar[i].y == 1331&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun10 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun10 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==7&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun10 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun10 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 690 && this.x < 693 && this.y >1239 && this.y <1242 && this.hud&&dot.dotfun16 ==true){//点4
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 789&&namecar[i].y == 1168&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun16 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun16 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==13&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun16 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun16 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 455 && this.x < 458 && this.y >1085 && this.y <1088 && this.hud&&dot.dotfun22 ==true){//点5
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 544&&namecar[i].y == 1008&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun22 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun22 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==19&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun22 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun22 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 707 && this.x < 710 && this.y >893 && this.y <896 && this.hud&&dot.dotfun23 ==true){//点6
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 817&&namecar[i].y == 830&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun23 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun23 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==20&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun23 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun23 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 990 && this.x < 993 && this.y >722 && this.y <725 && this.hud&&dot.dotfun24 ==true){//点7

				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1095&&namecar[i].y == 652&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun24 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun24 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==21&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun24 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun24 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1253 && this.x < 1256 && this.y >751 && this.y <754 && this.hud&&dot.dotfun18 ==true){//点8
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1342&&namecar[i].y == 812&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun18 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun18 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==15&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun18 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun18 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 952 && this.x < 955 && this.y >940 && this.y <943 && this.hud&&dot.dotfun17 ==true){//点9
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1067&&namecar[i].y == 992&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun17 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun17 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==14&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun17 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun17 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1235 && this.x < 1238 && this.y >1236 && this.y <1239 && this.hud&&dot.dotfun11 ==true){//点10
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1312&&namecar[i].y == 1154&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun11 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun11 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==8&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun11 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun11 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}
			else if(this.x > 1480 && this.x < 1483 && this.y >1394 && this.y <1397 && this.hud&&dot.dotfun4 ==true){//点11
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1592&&namecar[i].y == 1337&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun4 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun4 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==1&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun4 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun4 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1771 && this.x < 1774 && this.y >1581 && this.y <1584 && this.hud&&dot.dotfun5 ==true){//点12
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1842&&namecar[i].y == 1497&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun5 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun5 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==2&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun5 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun5 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1990 && this.x < 1993 && this.y >1722 && this.y <1725 && this.hud&&dot.dotfun6 ==true){//点13
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2087&&namecar[i].y == 1657&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun6 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun6 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==3&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun6 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun6 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2280 && this.x < 2283 && this.y >1909 && this.y <1912 && this.hud&&dot.dotfun14 ==true){//点14
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2368&&namecar[i].y == 1836&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun14 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun14 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==11&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun14 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun14 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2235 && this.x < 2238 && this.y >2116 && this.y <2119 && this.hud&&dot.dotfun19 ==true){//点15
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2337&&namecar[i].y == 2173&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun19 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun19 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==16&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun19 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun19 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2525 && this.x < 2528 && this.y >2248 && this.y <2251 && this.hud&&dot.dotfun25 ==true){//点16
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2584&&namecar[i].y == 2333&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun25 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun25 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==22&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun25 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun25 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2981 && this.x < 2984 && this.y >2195 && this.y <2198 && this.hud&&dot.dotfun26 ==true){//点17
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2864&&namecar[i].y == 2155&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun26 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun26 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==23&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun26 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun26 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2711 && this.x < 2714 && this.y >2062 && this.y <2065 && this.hud&&dot.dotfun20 ==true){//点18
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2619&&namecar[i].y == 1997&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun20 =false;
							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun20 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								// this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==17&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun20 =false;

							var pifu:string = this.persons.skin;
							// this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun20 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									// this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 3020 && this.x < 3023 && this.y >1864 && this.y <1867 && this.hud&&dot.dotfun21 ==true){//点19
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2894&&namecar[i].y == 1817&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun21 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun21 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==18&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun21 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun21 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2790 && this.x < 2793 && this.y >1582 && this.y <1585 && this.hud&&dot.dotfun15 ==true){//点20
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2646&&namecar[i].y == 1660&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun15 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun15 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==12&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun15 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun15 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2493 && this.x < 2496 && this.y >1387 && this.y <1390 && this.hud&&dot.dotfun9 ==true){//点21
				
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2367&&namecar[i].y == 1480&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun9 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun9 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==6&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun9 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun9 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 2222 && this.x < 2225 && this.y >1382 && this.y <1385 && this.hud&&dot.dotfun8 ==true){//点22
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 2120&&namecar[i].y == 1320&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun8 =false;
							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun8 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==5&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun8 =false;

							var pifu:string = this.persons.skin;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun8 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1996 && this.x < 1999 && this.y >1202 && this.y <1205 && this.hud&&dot.dotfun7 ==true){//点23
				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1871&&namecar[i].y == 1158&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun7 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun7 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==4&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun7 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun7 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}else if(this.x > 1723 && this.x < 1726 && this.y >1010 && this.y <1013 && this.hud&&dot.dotfun12 ==true){//点24

				this.hud = false;
				for(var i:number=0;i<namecar.length;i++)
				{
					if(namecar[i].x == 1589&&namecar[i].y == 976&&namecar[i].imgBtn.gray==false)
					{
						var placeIItem1 = namecar[i];
						if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							var durl:String = placeIItem1.show1.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
							var car:String = placeIItem1.carClass.skin;

							this.huPerformCar(placeIItem1);

							dot.dotfun12 =false;
							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
							//播放动画
							placeIItem1.show1Play.play(0,false);
							if(car != null){placeIItem1.carClassPlay.play();}
							var time1 = module.aniFramesNumder[durl3] * 50;
							Laya.timer.once(time1,this,()=>{
								this.huAniCar(placeIItem1,durl3);
								if(car!=null){
									placeIItem1.carClassPlay.gotoAndStop(0);
								}
								dot.dotfun12 =true;
								//---互动完恢复行走
								this.persons.skin = pifu;
								this.persons.scaleX = -this.persons.scaleX;
							})
							
						}else{this.huDonF();}
						return
					  }
				 }

				 for(var i:number=0;i<nameObject.length;i++)
					{
						if(nameObject[i]._i==9&&nameObject[i].imgBtn.gray==false)
						{
							var placeIItem = nameObject[i];
							var durl:String = placeIItem.imgBtn.skin;
							var durl2 = durl.slice(6);
							var durl3 = durl2.slice(0,-4);
						  if(module.aniFramesNumder[durl3]>0)
						   {
							if(Math.floor(Math.random() * 10 + 1)>=this.huNum){//触发几率
							this.huPerform(placeIItem);
							dot.dotfun12 =false;

							var pifu:string = this.persons.skin;
							this.persons.scaleX = -this.persons.scaleX;
					        this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
								//------------------------------------------------------

								//播放动画
								placeIItem.tujiAni.play(0,false);
								var time = module.aniFramesNumder[durl3] * 50;
								Laya.timer.once(time,this,()=>{
									this.huAni(placeIItem,durl3);
									dot.dotfun12 =true;
									
									//---互动完恢复行走
									this.persons.skin = pifu;
									this.persons.scaleX = -this.persons.scaleX;
								});

							}else{this.huDonF();}
							return 
						}
						}
					}
				this.huDonF();
			}
		}
		//路线7
		private lux7():void
		{
			if(this.first === 0){
				var zb:Array<any> = [{x:1026,y:1454},{x:1250,y:1312},{x:1063,y:1192},{x:840,y:1336},{x:584,y:1171},{x:828,y:1035},{x:767,y:998},{x:536,y:1139},{x:350,y:1016},{x:627,y:841},{x:813,y:963},{x:1088,y:786},{x:898,y:662},{x:1130,y:520},{x:1378,y:676},{x:864,y:998},{x:2421,y:2000},{x:2061,y:2229},{x:2500,y:2513},{x:2384,y:2337},{x:2806,y:2314},{x:2835,y:1988},{x:2424,y:1994},{x:2888,y:1953},{x:1341,y:946}];
				var ite: number = Math.floor(Math.random() * 25 + 0);
				this.x = zb[ite].x;
				this.y = zb[ite].y;
				this.first = 1;
			}
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.zOrder = 3050;
					this.tween2 = Laya.Tween.to(this, {x:1531,y:1784, update:Laya.Handler.create(this, this.entrance, [this], false)}, 10000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1531://2
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:1026,y:1454, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1026://3
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1005;
					this.tween = Laya.Tween.to(this, {x:1250,y:1312}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1250://4
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 915;
					this.tween = Laya.Tween.to(this, {x:1063,y:1192, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1063://5
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 975;
					this.tween = Laya.Tween.to(this, {x:840,y:1336}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 840://6
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:584,y:1171, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 584://7
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 945;
					this.tween = Laya.Tween.to(this, {x:828,y:1035}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 828://8
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 945;
					this.tween = Laya.Tween.to(this, {x:767,y:998}, 1300, null, Laya.Handler.create(this, this.lux7));
					break;
				case 767://9
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 945;
					this.tween = Laya.Tween.to(this, {x:536,y:1139}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 536://10
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1000;
					this.tween = Laya.Tween.to(this, {x:350,y:1016, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 350://11
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 915;
					this.tween = Laya.Tween.to(this, {x:627,y:841}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 627://12
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 915;
					this.tween = Laya.Tween.to(this, {x:813,y:963, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 813://13
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.zOrder = 855;
					this.tween = Laya.Tween.to(this, {x:1088,y:786}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1088://14
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 825;
					this.tween = Laya.Tween.to(this, {x:898,y:662, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 898://15
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 735;
					this.tween = Laya.Tween.to(this, {x:1130,y:520}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1130://16
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 600;
					this.tween = Laya.Tween.to(this, {x:1378,y:676}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1378://17
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 765;
					this.tween = Laya.Tween.to(this, {x:1121,y:837, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1121://17
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 855;
					this.tween = Laya.Tween.to(this, {x:864,y:998, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 864://18
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 915;
					this.tween = Laya.Tween.to(this, {x:1350,y:1310, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1350://18
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1915;
					this.tween = Laya.Tween.to(this, {x:2141,y:1819, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2141://18
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 2915;
					this.tween = Laya.Tween.to(this, {x:2421,y:2000, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2421://19
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 2945;
					this.tween = Laya.Tween.to(this, {x:2061,y:2229, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3300, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2061://20
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:2500,y:2513}, 6000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2500://21
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:2582,y:2459}, 1000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2582://22
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 3001;
					this.tween = Laya.Tween.to(this, {x:2384,y:2337}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2384://23
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2975;
					this.tween = Laya.Tween.to(this, {x:2613,y:2197, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2613://24
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 2915;
					this.tween = Laya.Tween.to(this, {x:2806,y:2314}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2806://25
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2915;
					this.tween = Laya.Tween.to(this, {x:3157,y:2080, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 3157://26
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2825;
					this.tween = Laya.Tween.to(this, {x:2835,y:1988}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2835://27
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 2885;
					this.tween = Laya.Tween.to(this, {x:2611,y:2127, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2611://28
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2915;
					this.tween = Laya.Tween.to(this, {x:2424,y:1994}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2424://29
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2855;
					this.tween = Laya.Tween.to(this, {x:2695,y:1827}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2695://30
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 2825;
					this.tween = Laya.Tween.to(this, {x:2888,y:1953}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2888://31
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 2795;
					this.tween = Laya.Tween.to(this, {x:3122,y:1800, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 3122://32
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 600;
					this.tween = Laya.Tween.to(this, {x:2361,y:1301, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2361://33---
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1795;
					this.tween = Laya.Tween.to(this, {x:2112,y:1453, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2112://34
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1825;
					this.tween = Laya.Tween.to(this, {x:1863,y:1285}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1863://35
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1765;
					this.tween = Laya.Tween.to(this, {x:2099,y:1142, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2099://36
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 600;
					this.tween = Laya.Tween.to(this, {x:1907,y:1018}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1907://37
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 1005;
					this.tween = Laya.Tween.to(this, {x:1672,y:1168}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1672://38
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1005;
					this.tween = Laya.Tween.to(this, {x:1572,y:1107}, 1000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1572://39
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 1005;
					this.tween = Laya.Tween.to(this, {x:1816,y:954, update:Laya.Handler.create(this, this.lux7hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1816://40
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 600;
					this.tween = Laya.Tween.to(this, {x:1619,y:837}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1619://41
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 795;
					this.tween = Laya.Tween.to(this, {x:1392,y:983}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1392://42
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 795;
					this.tween = Laya.Tween.to(this, {x:1341,y:946}, 900, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1341://43
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.zOrder = 795;
					this.tween = Laya.Tween.to(this, {x:1610,y:770}, 3000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 1610://44
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.zOrder = 600;
					this.tween = Laya.Tween.to(this, {x:2292,y:1204}, 9000, null, Laya.Handler.create(this, this.lux7));
					break;
				case 2292://45
				    this.zOrder = 500;
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}
		//路线8互动
		private lux8hd():void
		{
			// console.log(this.x, this.y);
			if(this.x > 1453 && this.x < 1456 && this.y >1758 && this.y <1761 && this.hud){//点1
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					// this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(1);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						// this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1724 && this.x < 1727 && this.y >1754 && this.y <1757 && this.hud){//点2
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
					console.log(2);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2004 && this.x < 2007 && this.y >1583 && this.y <1586 && this.hud){//点3
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
					console.log(3);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1990 && this.x < 1993 && this.y >2091 && this.y <2094 && this.hud){//点4
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(4);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2432 && this.x < 2435 && this.y >2240 && this.y <2243 && this.hud){//点5
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(5);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2706 && this.x < 2709 && this.y >2373 && this.y <2376 && this.hud){//点6
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(6);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2757 && this.x < 2760 && this.y >2219 && this.y <2222 && this.hud){//点7
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(7);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2540 && this.x < 2543 && this.y >2079 && this.y <2082 && this.hud){//点8
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(8);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2273 && this.x < 2276 && this.y >1906 && this.y <1909 && this.hud){//点9
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(9);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 3251 && this.x < 3254 && this.y >2023 && this.y <2026 && this.hud){//点10
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(10);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2795 && this.x < 2798 && this.y >1896 && this.y <1899 && this.hud){//点11
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(11);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2536 && this.x < 2539 && this.y >1724 && this.y <1727 && this.hud){//点12
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(12);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 2266 && this.x < 2269 && this.y >1546 && this.y <1549 && this.hud){//点13
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(13);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1724 && this.x < 1727 && this.y >1553 && this.y <1556 && this.hud){//点14
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(14);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1733 && this.x < 1736 && this.y >1370 && this.y <1373 && this.hud){//点15
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(15);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1990 && this.x < 1993 && this.y >1206 && this.y <1209 && this.hud){//点16
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(16);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1415 && this.x < 1418 && this.y >1585 && this.y <1588 && this.hud){//点17
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(17);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 470 && this.x < 473 && this.y >939 && this.y <942 && this.hud){//点18
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
					console.log(18);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 701 && this.x < 704 && this.y >1245 && this.y <1248 && this.hud){//点19
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(19);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 960 && this.x < 963 && this.y >1416 && this.y <1419 && this.hud){//点20
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(20);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1414 && this.x < 1417 && this.y >1208 && this.y <1211 && this.hud){//点21
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(21);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 955 && this.x < 958 && this.y >1058 && this.y <1061 && this.hud){//点22
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(22);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 710 && this.x < 713 && this.y >897 && this.y <900 && this.hud){//点23
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.scaleX = -this.persons.scaleX;
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(23);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						this.persons.scaleX = -this.persons.scaleX;
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 996 && this.x < 999 && this.y >722 && this.y <725 && this.hud){//点24
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
					console.log(24);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}else if(this.x > 1251 && this.x < 1254 && this.y >756 && this.y <759 && this.hud){//点25
				if(Math.floor(Math.random() * 10 + 1)>=0){//触发几率
					this.perXX();
					this.hud = false;
					var pifu:string = this.persons.skin;
					this.tween.pause();
					this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"zd.png";
					console.log(25);
					//互动完恢复行走
					Laya.timer.once(2000, this, ()=>{
						this.persons.skin = pifu;
						this.tween.resume();
						Laya.timer.once(300, this, ()=>{
							this.hud = true;
						})
					})
				}
			}
		}
		//路线8
		private lux8():void
		{
			if(this.first === 0){
				var zb:Array<any> = [{x:1594,y:1836},{x:2305,y:1636},{x:2075,y:2147},{x:2562,y:2162},{x:1617,y:1864},{x:2497,y:2510},{x:2177,y:1844},{x:3083,y:2135},{x:3121,y:1796},{x:2119,y:1449},{x:1587,y:1466},{x:1902,y:1021},{x:1548,y:1501},{x:268,y:1070},{x:765,y:993},{x:1025,y:1459},{x:1343,y:1015},{x:622,y:839},{x:1155,y:819},{x:1154,y:525},{x:1635,y:768},{x:1579,y:1103},{x:1677,y:797}];
				var ite: number = Math.floor(Math.random() * 23 + 0);
				this.x = zb[ite].x;
				this.y = zb[ite].y;
				this.first = 1;
			}
			switch(this.x)
			{
				case -75://1
					this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
					this.persons.skin = this.gukeFuz.bei;
					this.persons.scaleX = -1;
					this.persons.alpha = 1;
					this.tween2 = Laya.Tween.to(this, {x:1393,y:1725, update:Laya.Handler.create(this, this.entrance, [this], false)}, 10000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1393://2
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1594,y:1836, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1594://3
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2118,y:1516, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2118://4
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2305,y:1636}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2305://5
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1792,y:1961}, 6000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1792://6
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2075,y:2147, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3300, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2075://7
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2316,y:2002}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2316://8
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2562,y:2162}, 3300, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2562://9
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2332,y:2305, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2332://10
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1617,y:1864}, 9000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1617://11
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1556,y:1907}, 1000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1556://12
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2497,y:2510}, 12000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2497://13
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2854,y:2282, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3300, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2854://14
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2177,y:1844, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 9000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2177://15
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2406,y:1702}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2406://16
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:3083,y:2135}, 9000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 3083://17
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:3361,y:1955, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 3361://18
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:3121,y:1796}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 3121://19
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2879,y:1951}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2879://20
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2119,y:1449, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 10500, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2119://21
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1839,y:1626}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1839://22
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1587,y:1466, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1587://23
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:2100,y:1140, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 6000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2100://24
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1902,y:1021}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1902://25
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1349,y:1377}, 6000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1349://26
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1548,y:1501}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1548://27
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1235,y:1707, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1235://28
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:268,y:1070}, 12000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 268://29
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:581,y:871, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3300, null, Laya.Handler.create(this, this.lux8));
					break;
				case 581://30
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:765,y:993}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 765://31
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:541,y:1140}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 541://32
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1025,y:1459, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 6500, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1025://33
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1535,y:1133, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 6500, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1535://34
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1343,y:1015}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1343://35
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1115,y:1163}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1115://36
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:622,y:839, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 6200, null, Laya.Handler.create(this, this.lux8));
					break;
				case 622://37
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:902,y:665}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 902://38
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1155,y:819, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1155://39
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1383,y:677, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1383://40
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1154,y:525, update:Laya.Handler.create(this, this.lux8hd, [this], false)}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1154://41
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1193,y:490}, 1000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1193://42
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1635,y:768}, 6000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1635://43
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1333,y:951}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1333://44
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:1579,y:1103}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1579://45
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1815,y:953}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1815://46
					this.persons.scaleX = 1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1621,y:839}, 3000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1621://47
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					this.tween = Laya.Tween.to(this, {x:1677,y:797}, 800, null, Laya.Handler.create(this, this.lux8));
					break;
				case 1677://48
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.zheng;
					this.tween = Laya.Tween.to(this, {x:2298,y:1206}, 9000, null, Laya.Handler.create(this, this.lux8));
					break;
				case 2298://49
					if(wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29){
						wuling.map.getInstance()._ck.playTo(1,9);
					}else{
						if(wuling.map.getInstance()._ck.index>=1 && wuling.map.getInstance()._ck.index <= 9){

						}else{
							wuling.map.getInstance()._ck.playTo(1,9);
						}
						
					}
					wuling.map.getInstance().renshu++;
					this.persons.scaleX = -1;
					this.persons.skin = this.gukeFuz.bei;
					Laya.Tween.to(this, {x:2398,y:1157, alpha: 0}, 1500, null, Laya.Handler.create(this, this.closeDoor));
					break;
			}
		}

		private hapfin:boolean = true;//wcg
		public happy():void
		{
			if(this.hapfin){
				this.hapfin = false;
				if(this.persons.skin.slice(16, 18) !== "zd" && this.persons.skin.slice(16, 18) !== "bd"){
				var gk:string = this.persons.skin;
				if(this.tween){
					this.tween.pause();//resume
					this.persons.clipX = 37;
					this.persons.skin = "guke/G"+gk.slice(6,8)+"/clip_"+gk.slice(6,8)+"hp.png";
				}
				Laya.timer.once(3000, this, ()=>{
					this.persons.clipX = 21;
					if(this.tween)
					{
						this.tween.resume();//resume
						
						this.hapfin = true;
					}
					this.persons.skin = gk;
				});
				}
			}
		}

		public oldLu:string
        /**暂停活动人物 */
		public figureStatic():void
		{
			this.hapfin = false;
			if(this.tween){
				this.tween.pause();
				// this.oldLu =this.persons.skin;
				this.alpha =0;
				if(module.personModule.getInstance().addFigure==true)
				{
				  module.personModule.getInstance().figureControl =false;	
				}				
				// this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png"
			}
		}
        /**开始人物活动 */
		public figureStart():void
		{
			this.hapfin = true;
			if(this.tween){
				this.tween.resume();
				this.alpha =1;
				module.personModule.getInstance().figureControl =true;
	            // this.persons.skin = this.oldLu;
				
			}
		}

 
        /**互动星星 */
		private perXX():void
		{
			if(this.jiuxu){
				this.jiuxu = false;
				Laya.Tween.to(this.top1.zan, {alpha: 1}, 1000, null, Laya.Handler.create(this, this.zanHidd));
				this.add.y = 50;
			}
			if(this.xing<6)
			{
				this.xing++;
			}
			if(this.xing<6){
				this.top1["xing"+this.xing].visible = true;
				switch(this.xing){
					case 1:
						this.top1.xingYi.x = 41;
						break;
					case 2:
						this.top1.xingYi.x = 30;
						break;
					case 3:
						this.top1.xingYi.x = 18;
						break;
					case 4:
						this.top1.xingYi.x = 3;
						break;
					case 5:
						this.top1.xingYi.x = (-6);
						break;
				}
			}
		}

		/**门店人数任务 */
		// public Mission32:number=module.missionModule.getInstance().taskProgress[0]["Mission32"];
		// private gukeNumder():void
		// {
		// 	if(module.missionModule.getInstance().taskProgress.length>0)
		// 	{
		// 	var Mission32:number=module.missionModule.getInstance().taskProgress[0]["Mission32"]
		// 	if(Mission32<1000&&module.missionModule.getInstance().taskProgress.length>0)
		// 	{
		// 		Mission32++;
		// 	    util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission32="+Mission32);
		// 	}
		// 	}
		// }

	}
}