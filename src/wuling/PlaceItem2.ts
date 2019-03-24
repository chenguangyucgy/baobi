/**
* name 
*/
module wuling{
	export class PlaceItem2 extends ui.PlaceItem2UI{
		/**获取map页面*/
		private _map:map = wuling.map.getInstance();
		/**placeItemModule数据*/
		public _placeItemModule:module.placeItemModule = module.placeItemModule.getInstance();
		/**当前放置的坐标的下标*/
		public _zb:number = null;
		public _i:number = 0;
		//建筑数据
		public builObj:Object ={};
		//建筑等级
		public ObjectLevel:number =1;
		//接待人数
		public Jd:number = 0; 

		public RoomObjectID:number;
		//宝币
		public jin:wuling.goldCoins=new wuling.goldCoins;
		//是否新建宝币
		public newjin:boolean =true;
		/**建筑棚动画*/
		public _mc:Laya.Animation = new Laya.Animation();
		/**建筑棚层级 */
		public _mczOrder:number =0;
		/**建筑动画*/
		public tujiAni:Laya.Animation = new Laya.Animation();
		private _arr:Array<any> = [{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true}]
		constructor(){
			super();
			this.onMonitor();
			//取消---新手指引改
			if(wuling.map.getInstance().guide==false)
			{
				this.cancel.on(Laya.Event.CLICK,this,this.onclick);
			}
		    //点击确定
			this.ensure.on(Laya.Event.CLICK,this,this.onclick);
			//移动
			this.shift.on(Laya.Event.CLICK,this,this.onclick);
			//拆除
			this.demolition.on(Laya.Event.CLICK,this,this.onclick);
			//设施数据
			this.checks.on(Laya.Event.CLICK,this,this.onclick);
			this.showhome();
			this.hideenDom();
			this.imgBtn.gray = true;
			this.abiImg.gray = true;
			this.ensure.gray = true;
			this._map.digeBox.visible = true;
			this._map.diClick.visible = false;
			this.zOrder = 4000;
			this.cancel.x = 107;
			this.ensure.x = 30;
			this.rotate.visible =false;
			//新手指引
			if(wuling.map.getInstance().guide==true)
			{
				this.ensure.on(Laya.Event.MOUSE_OVER,this,this.stopPanel);
			}
		}
		/**加载建筑动画资源 */
		public buiAin():void
		{
			var imgname:string = module.buildingModule.getInstance().shearStr(this.imgBtn.skin);
			if(module.aniFramesNumder[imgname]!=0)
			{
				 this.imgBtn.alpha = 0;
				 this.abiImg.alpha = 1;
				 module.AnimationModule.getInstance().aniMo(this.tujiAni,imgname);
				 this.abiImg.addChild(this.tujiAni);
			}else
			{
				this.imgBtn.alpha = 1;
				this.abiImg.alpha = 0;
			}
		}
		/**mapImg上添加可点宝币 */
		public jings():void
		{ 
		    if(this.newjin ==true)
			{
				this.jin.x = this.x+70;
				this.jin.y = this.y-160;
				// this.jin.alpha = 0;
				this.jin.zOrder =99999;
				wuling.map.getInstance().mapImg.addChild(this.jin);
				this.newjin =false;
			}
			// this.jin.visible =true;
		}

		/**拖动 */
		private onMonitor():void
		{
			this.imgBtn.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
			this.imgBtn.on(Laya.Event.MOUSE_OUT,this,this.startPanel);
			this.imgBtn.on(Laya.Event.MOUSE_OVER,this,this.stopPanel);
			this.on(Laya.Event.DRAG_MOVE,this,this.dragMove);
		}

        /**拖动设置*/
		private onStartDrag(e):void
		{
			var wu= wuling.map.getInstance();
			var dragRegion = new Laya.Rectangle((wu.width/2)-300,(wu.height/2)-350,3300,2200);
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			this.startDrag(dragRegion, false, 10);
		}

		/**监听拖动 */
		private dragMove():void
		{
			/**隐藏宝币 */
			this.jin.visible =false;
		
			this.imgBtn.gray = true;
			this.abiImg.gray = true;
			this.ensure.gray = true;
			//选择坐标集合
			this.chooseGroup();
			
			//吸附、放置条件
			// this.conditions();
		}

        /**开始panel滑动*/
		private startPanel(event:Laya.Event):void
		{
			this.conditions();
			var wu= wuling.map.getInstance();
			wu.pan.hScrollBar.mouseWheelEnable = true;
			wu.pan.vScrollBar.mouseWheelEnable = true;
			wu.pan.hScrollBar.touchScrollEnable = true;
			wu.pan.vScrollBar.touchScrollEnable = true;
	
		}
		/**拖动时禁止panel滑动*/
		private stopPanel(event:Laya.Event):void
		{
			var wu= wuling.map.getInstance();

			wu.pan.hScrollBar.mouseWheelEnable = false;
			wu.pan.vScrollBar.mouseWheelEnable = false;
			wu.pan.hScrollBar.touchScrollEnable = false;
			wu.pan.vScrollBar.touchScrollEnable = false;
		}
		private renderHandler():void
		{
			this._mc.stop();
		}
        
		/**保存当前坐标 */
		private oldzuobiaoX:number=0;
		private oldzuobiaoY:number=0;
		private oldzOrder:number=0;
		private oldzd:number=0;
		private oldi:number=0;
		

		private onclick(event:Laya.Event):void
		{
			switch (event.currentTarget) {
				//取消
				case this.cancel:
				if(wuling.map.getInstance().guide==false)
				{
					wuling.map.getInstance().person1.figureStart();
					wuling.map.getInstance().person2.figureStart();
					wuling.map.getInstance().person3.figureStart();
					wuling.map.getInstance().person4.figureStart();
					wuling.map.getInstance().person5.figureStart();
					wuling.Bottom.getInstance().nanaOnClick();
				}
				    if(this.oldzuobiaoX==0&&this.oldzuobiaoY==0&&this._i!=25)
					{
						//从数据中移除自己
						var PlaceItem1Number = this._map.nameObject.indexOf(this);
						if(PlaceItem1Number!=-1){this._map.nameObject.splice(PlaceItem1Number,1)}
						//从父容器删除自己
						this.removeSelf();
						//删除后台数据
					    util.HttpRequestUtil.sendRemoveBuilding("RoomObjectID="+this.RoomObjectID);
						//删除宝币
						this.jin.destroy(true);
					}else
					{
						this.x =this.oldzuobiaoX;
						this.y =this.oldzuobiaoY;
						this.zOrder =this.oldzOrder;
						this.imgBtn.offAll();
						this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
						this.cancel.visible =false;
						this.ensure.visible =false;
						//屏蔽坐标
						this.shieldingCoordinates();
						/**显示宝币 */
			            this.jin.visible =true;
						this.imgBtn.gray = false;
						this.abiImg.gray = false;
						this.ensure.gray = false;
					}
					this._map.digeBox.visible = false;
					this._map.diClick.visible = true;
					this._placeItemModule.editMode = false;
					/**回复nana点击事件 */
					wuling.Bottom.getInstance().nanaOnClick();
					break;
				//确定
				case this.ensure:
				if(this.imgBtn.gray == false)
				 {
				    if(this.jin.jin>0){
						/**显示宝币 */
			            this.jin.visible =true;
						this.jin.x = this.x+70;
				        this.jin.y = this.y-160;
					 }else
					 {
						 this.jin.visible =false;
						 this.jin.x = this.x+70;
						 this.jin.y = this.y-160;
					 }
					
							/**回复nana点击事件 */
					        wuling.Bottom.getInstance().nanaOnClick();
							this.imgBtn.offAll();
							this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
							this.cancel.visible =false;
							this.ensure.visible =false;
							// this.rotate.visible = false;
							this._map.digeBox.visible = false;
							this._map.diClick.visible = true;
							this._placeItemModule.editMode = false;
							this.zOrder = this._placeItemModule.zuobiao[this._i][this._zb]["c"];
							
							/**如果建筑坐标变了则播放建筑盆 */
							if(this.oldzuobiaoX==0&&this.oldzuobiaoY==0)
							{
								//获取建筑数据
								util.HttpRequestUtil.sendGetbuilding("RoomID="+module.Room.getInstance().RoomID);
								this.jianBot.visible =true;
								this.jianBot.x =104;
								this.jianBot.y =-100;
								this.jianBot.alpha =0;
								var jinLen:string = String(this.builObj["jin"]);

								//配置2个小型垃圾桶任务
								if(module.missionModule.getInstance().ToreceiveSituation.length>0&&this.imgBtn.skin =="place/d10007.png")
								{
									var ToreceiveSituation = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission2Prize"]
									// var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission2"];
									if(ToreceiveSituation==true)
									{
										module.missionModule.getInstance().onbaobi("Mission3",2);
									}
								}
								//配置3个休息凳任务
								if(module.missionModule.getInstance().ToreceiveSituation.length>0&&this.imgBtn.skin =="place/m10002.png")
								{
									var ToreceiveSituation = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission5Prize"]
									// var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission5"];
									if(ToreceiveSituation==true)
									{
										module.missionModule.getInstance().onbaobi("Mission6",3);
									}
								}

						switch(jinLen.length)
						{
							case 0:
								this.jin1.skin = "rankList/org0.png";
								this.jin2.alpha = 0;
								this.jin3.alpha = 0;
								this.jin4.alpha = 0;
								break;
							case 1:
								this.jin1.skin = "rankList/org"+jinLen+".png";
								this.jin2.alpha = 0;
								this.jin3.alpha = 0;
								this.jin4.alpha = 0;
								break;
							case 2:
								this.jin1.skin = "rankList/org"+Number(jinLen.slice(0,1))+".png";
								this.jin2.skin = "rankList/org"+Number(jinLen.slice(1))+".png";
								this.jin2.alpha = 1;
								this.jin3.alpha = 0;
								this.jin4.alpha = 0;
								break;
							case 3:
								this.jin1.skin = "rankList/org"+Number(jinLen.slice(0,1))+".png";
								this.jin2.skin = "rankList/org"+Number(jinLen.slice(1,2))+".png";
								this.jin3.skin = "rankList/org"+Number(jinLen.slice(2))+".png";
								this.jin2.alpha = 1;
								this.jin3.alpha = 1;
								this.jin4.alpha = 0;
								break;
							case 4:
								this.jin1.skin = "rankList/org"+Number(jinLen.slice(0,1))+".png";
								this.jin2.skin = "rankList/org"+Number(jinLen.slice(1,2))+".png";
								this.jin3.skin = "rankList/org"+Number(jinLen.slice(2,3))+".png";
								this.jin4.skin = "rankList/org"+Number(jinLen.slice(3))+".png";
								this.jin2.alpha = 1;
								this.jin3.alpha = 1;
								this.jin4.alpha = 1;
								break;
						       }
								Laya.Tween.to(this.jianBot,{y:-200,alpha:1},500,null);
								Laya.timer.once(1000,this,()=>{
									Laya.Tween.to(this.jianBot,{y:-300,alpha:0},500,null);
								});
								//设施总数任务增
								module.missionModule.getInstance().builNums(0);
								//消耗宝币任务
								module.missionModule.getInstance().reJin(this.builObj["jin"]);
								//建筑任务
								module.missionModule.getInstance().buildingMission(this.builObj["url"]);
								//减少宝币和能量
								util.HttpRequestUtil.Modifybaobi(-this.builObj["jin"]);
								// wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-this.builObj["jin"];
								wuling.Top.getInstance().nen =wuling.Top.getInstance().nen-this.builObj["nen"];
								// wuling.Top.getInstance().gabi();
								wuling.Top.getInstance().nens();
								// var cling:Laya.MovieClip =new Laya.MovieClip
                                /**判断为装饰品时不播放建设工棚 */
								if(this.imgBtn.skin.slice(6,7)=="m"||this.imgBtn.skin=="place/d10007.png"|| this.imgBtn.skin=="place/d100022.png" || this.imgBtn.skin=="place/d100018.png" || this.imgBtn.skin=="place/d10001.png" || this.imgBtn.skin=="place/d10002.png")
								{
									this._mc.visible =false;
								}else
								{
									this._mc.visible =true;
									this.imgBtn.visible =false;
									this.abiImg.visible =false;
								}
								this._mc.x=this._placeItemModule.zuobiao[this._i][0]["x"]-37;
								this._mc.y=this._placeItemModule.zuobiao[this._i][0]["y"]-200;
								this._mc.zOrder =this._placeItemModule.zuobiao[this._i][0]["c"]+0.5;
								this._mczOrder = this._mc.zOrder;
								
								//加载建筑棚动画资源
								module.AnimationModule.getInstance().aniCling(this._mc);
								/**新手教程 */
								if(wuling.map.getInstance().guide==true)
								{
								   wuling.map.getInstance().nextStep();
								   this.ensure.off(Laya.Event.MOUSE_OVER,this,this.stopPanel);
								}
								Laya.timer.once(19*100,this,()=>{
								this._mc.visible =false;
								this._mc.stop();
								this.imgBtn.visible =true;
								this.abiImg.visible =true;
								if(this._map.guide==false&&this.imgBtn.skin.slice(6,7)!="m")
									{
										wuling.map.getInstance().person1.happy();
										wuling.map.getInstance().person2.happy();
										wuling.map.getInstance().person3.happy();
										wuling.map.getInstance().person4.happy();
										wuling.map.getInstance().person5.happy();
									}
								//新手教程
								if(wuling.map.getInstance().guide==true)
								{
									// wuling.map.getInstance().nextStep();
									wuling.map.getInstance().newclick();
								}
							    });
								
								// }
							}
							// if(wuling.map.getInstance().guide==false)
							// {
								wuling.map.getInstance().person1.figureStart();
								wuling.map.getInstance().person2.figureStart();
								wuling.map.getInstance().person3.figureStart();
								wuling.map.getInstance().person4.figureStart();
								wuling.map.getInstance().person5.figureStart();
								wuling.Bottom.getInstance().nanaOnClick();
							// }

							//屏蔽坐标
							this.shieldingCoordinates();
							//保存坐标
							util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+this.RoomObjectID+"&ObjectPosX="+this.x+"&ObjectPosY="+this.y+"&Hierarchy="+this.zOrder+"&Area="+this._zb+"&CreatedBy="+this._i+"");
						}
					break;
				//移动
				case this.shift:
				    /**禁止nana点击 */
				    wuling.Bottom.getInstance().nanaicon.offAll();
					//取消---新手指引改
					if(wuling.map.getInstance().guide==false)
					{
						this.cancel.on(Laya.Event.CLICK,this,this.onclick);
					}			
				    this.oldzuobiaoX =this.x;
					this.oldzuobiaoY =this.y;
					this.oldzOrder =this.zOrder;
					this.oldzd =this._zb;
				    this._map.digeBox.visible = true;
					this._map.diClick.visible = false;
					this.cancel.visible =true;
					this.ensure.visible =true;
					this.ensure.gray =false;
					// this.rotate.visible =true;
					this.zOrder = 3001;
					Laya.timer.clear(this,this.oncancel);
					this._placeItemModule.editMode = true;
					
					//回复坐标点
					this.replyCoordinates();
					this.showhome();
					this.imgBtn.offAll();
					this.hideenDom();
					this.onMonitor();
					break;
				//打开拆除
				case this.demolition:
				    var Bottom = wuling.Bottom.getInstance();
				    /**打开Nana提示 */
				    Bottom.caichu();
					Laya.timer.clear(this,this.oncancel);
					this._map.diClick.visible =false;
					this._placeItemModule.editMode = true;
					Bottom.determine.offAll();
					Bottom.abolish.offAll();
					this.imgBtn.offAll();
					this.hideenDom();
					//确定拆除
					Bottom.determine.on(Laya.Event.CLICK,this,this.onclick);
					//取消拆除
					Bottom.abolish.on(Laya.Event.CLICK,this,this.onclick);
					this.stopren();
					 break;
				//确定拆除
				case wuling.Bottom.getInstance().determine:
				     //从数据中移除自己
				     var PlaceItem1Number = this._map.nameObject.indexOf(this);
					 if(PlaceItem1Number!=-1){this._map.nameObject.splice(PlaceItem1Number,1)}
				     //移除自己
				     this.removeSelf();
					 //回复坐标点
					 this.replyCoordinates();
					 //删除后台数据
					util.HttpRequestUtil.sendRemoveBuilding("RoomObjectID="+this.RoomObjectID);
					//设施总数任务减
					module.missionModule.getInstance().builNums(1);
					/**回复nana点击事件 */
					 wuling.Bottom.getInstance().nanaOnClick();
					 this._placeItemModule.editMode = false;
					 this._map.diClick.visible =true;
					 wuling.Bottom.getInstance().demolitionBox.visible = false;
					 wuling.Bottom.getInstance().btmclick();
					 this.playren();
					 //删除宝币
					 this.jin.destroy(true);
					 break;
				//取消拆除
				case wuling.Bottom.getInstance().abolish:
				     /**回复nana点击事件 */
					 wuling.Bottom.getInstance().nanaOnClick();
					 this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
					 this._placeItemModule.editMode = false;
					 this._map.diClick.visible =true;
					 wuling.Bottom.getInstance().demolitionBox.visible = false;
					 wuling.Bottom.getInstance().btmclick();
					 this.playren();
					 break;
				//建筑数据
				case this.checks:
                     var ewq = this.imgBtn.skin.slice(6);
					 var mowei = ewq.slice(0,-4);
				     //img 图片名字,RoomObjectID 建筑id,ObjectLevel 建筑等级,zi 自身对象,id 建筑尺寸类型 
				     module.buildingModule.getInstance().buildingImg = {img:mowei,RoomObjectID:this.RoomObjectID,ObjectLevel:this.ObjectLevel,zi:this,id:this.imgBtn.name,Jd:this.Jd};
                     var rankList:laya.ui.Dialog = new wuling.ssInfo;
					 this.parent.addChild(rankList);
					 rankList.width = Laya.stage.width;
					 //打开页面
					 rankList.popup(false,true);
				     break;
				default:
					break;
			}
		}

		/**隐藏操作 */
		private hideenDom():void
		{
			this.checks.visible = false;
			this.shift.visible = false;
			this.demolition.visible = false;
		}
		/**显示操作 */
		public showDom():void
		{
			if(this._placeItemModule.editMode == false)
			{
				this.checks.visible = true;
				this.shift.visible = true;
				this.demolition.visible = true;
				this.imgBtn.offAll();
				Laya.timer.clear(this,this.oncancel);
				Laya.timer.once(2000,this,this.oncancel);
				this.imgBtn.on(Laya.Event.CLICK,this,this.oncancel);

				wuling.map.getInstance().person1.figureStatic();
				wuling.map.getInstance().person2.figureStatic();
				wuling.map.getInstance().person3.figureStatic();
				wuling.map.getInstance().person4.figureStatic();
				wuling.map.getInstance().person5.figureStatic();
				
			}
		}
		private oncancel():void
		{
			this.hideenDom();
			this.imgBtn.offAll();
			this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
			wuling.map.getInstance().person1.figureStart();
			wuling.map.getInstance().person2.figureStart();
			wuling.map.getInstance().person3.figureStart();
			wuling.map.getInstance().person4.figureStart();
			wuling.map.getInstance().person5.figureStart();
			wuling.Bottom.getInstance().nanaOnClick();
		}
		/**暂停人物活动 */
		private stopren():void
		{
			wuling.map.getInstance().person1.figureStatic();
			wuling.map.getInstance().person2.figureStatic();
			wuling.map.getInstance().person3.figureStatic();
			wuling.map.getInstance().person4.figureStatic();
			wuling.map.getInstance().person5.figureStatic();
		}
		/**开始人物活动 */
		private playren():void
		{
			wuling.map.getInstance().person1.figureStart();
			wuling.map.getInstance().person2.figureStart();
			wuling.map.getInstance().person3.figureStart();
			wuling.map.getInstance().person4.figureStart();
			wuling.map.getInstance().person5.figureStart();
		}
		/**恢复imgBtn的点击事件 */
		public imgBtnOn():void
		{
			this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
			//移动
			this.shift.on(Laya.Event.CLICK,this,this.onclick);
			//拆除
			this.demolition.on(Laya.Event.CLICK,this,this.onclick);
		}
		/**移除imgBtn的点击事件 */
		public onOff():void
		{
			this.imgBtn.offAll();
			//移动
			this.shift.offAll();
			//拆除
			this.demolition.offAll();
		}
		/**选择对应坐标组 */
		private chooseGroup():void
		{
			//L1-------------------------------------------------------------------------------------
			if(this.x <=1358&&this.x>=1104&&this.y<=1500&&this.y>=1334)
			{
			     this._i = 0;
				 return
			}
			if(this.x <=1624&&this.x>=1382&&this.y<=1315&&this.y>=1154)
			{
			     this._i = 1;
				 return
			}
			if(this.x <=1876&&this.x>=1630&&this.y<=1472&&this.y>=1317)
			{
			     this._i = 2;
				 return
			}
			if(this.x <=2119&&this.x>=1878&&this.y<=1633&&this.y>=1478)
			{
			     this._i = 3;
				 return
			}
			if(this.x <=1905&&this.x>=1658&&this.y<=1137&&this.y>=979)
			{
			     this._i = 4;
				 return
			}
			if(this.x <=2154&&this.x>=1910&&this.y<=1297&&this.y>1142)
			{
			     this._i = 5;
				 return
			}
			if(this.x <=2401&&this.x>=2154&&this.y<=1458&&this.y>=1302)
			{
			     this._i = 6;
				 return
			}

			//L2-------------------------------------------------------------------------------------
			if(module.Room.getInstance().RoomClass["RoomLevel"]>=4)
			{
				if(this.x <=1069&&this.x>=824&&this.y<=1308&&this.y>=1154)
				{
					this._i = 7;
					return
				}
				if(this.x <=1345&&this.x>=1103&&this.y<=1131&&this.y>=975)
				{
					this._i = 8;
					return
				}
				if(this.x <=1620&&this.x>=1379&&this.y<=954&&this.y>=799)
				{
					this._i = 9;
					return
				}
				if(this.x <=2125&&this.x>=1878&&this.y<=1993&&this.y>=1835)
				{
					this._i = 10;
					return
				}
				if(this.x <=2402&&this.x>=2158&&this.y<=1813&&this.y>=1659)
				{
					this._i = 11;
					return
				}
				if(this.x <=2681&&this.x>=2435&&this.y<=1635&&this.y>=1479)
				{
					this._i = 12;
					return
				}
			}

            //L3-------------------------------------------------------------------------------------
			if(module.Room.getInstance().RoomClass["RoomLevel"]>=9)
			{
				if(this.x <=826&&this.x>=580&&this.y<=1145&&this.y>=987)
				{
					this._i = 13;
					return
				}
				if(this.x <=1100&&this.x>=857&&this.y<=966&&this.y>=809)
				{
					this._i = 14;
					return
				}
				if(this.x <=1381&&this.x>=1137&&this.y<=787&&this.y>=632)
				{
					this._i = 15;
					return
				}
				if(this.x <=2372&&this.x>=2130&&this.y<=2146&&this.y>=1992)
				{
					this._i = 16;
					return
				}
				if(this.x <=2653&&this.x>=2411&&this.y<=1971&&this.y>=1817)
				{
					this._i = 17;
					return
				}
				if(this.x <=2930&&this.x>=2686&&this.y<=1793&&this.y>=1637)
				{
					this._i = 18;
					return
				}
			}

			//L4-------------------------------------------------------------------------------------
			if(module.Room.getInstance().RoomClass["RoomLevel"]>=14)
			{
				if(this.x <=578&&this.x>=334&&this.y<=983&&this.y>=826)
				{
					this._i = 19;
					return
				}
				if(this.x <=853&&this.x>=612&&this.y<=805&&this.y>=650)
				{
					this._i = 20;
					return
				}
				if(this.x <=1133&&this.x>=889&&this.y<=626&&this.y>=471)
				{
					this._i = 21;
					return
				}
				if(this.x <=2623&&this.x>=2379&&this.y<=2309&&this.y>=2153)
				{
					this._i = 22;
					return
				}
				if(this.x <=2898&&this.x>=2656&&this.y<=2129&&this.y>=1973)
				{
					this._i = 23;
					return
				}
				if(this.x <=3178&&this.x>=2935&&this.y<=1952&&this.y>=1797)
				{
					this._i = 24;
					return
				}
			}
			
			this._i = 25;
		}
		private showhome():void
		{   
			this._arr = [{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true}];
			for(var s:number=0;s<this._placeItemModule.removeStage.length;s++)
			{
				var num:number= this._placeItemModule.showStage.indexOf(this._placeItemModule.removeStage[s]);
				if(num>=0)
					{
						this._arr[num]["a"] = false;
					}
			}
		}
		/**吸附、放置条件 */
		private conditions():void
		{
		  for(var i:number=0;i<this._placeItemModule.zuobiao[this._i].length;i++)
			{
				var numF:number = 20;
				if(this.imgBtn.name=="40"){numF=100}
				if(this.x>this._placeItemModule.zuobiao[this._i][i]["x"]-numF&&this.x<this._placeItemModule.zuobiao[this._i][i]["x"]+numF&&this.y>this._placeItemModule.zuobiao[this._i][i]["y"]-numF&&this.y<this._placeItemModule.zuobiao[this._i][i]["y"]+20&&this._arr[this._i]["a"]==true)
				{
					if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i]) ==-1)
					{
						if(this.imgBtn.name =="1")
						{
							this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
							this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
							this.imgBtn.gray = false;
							this.abiImg.gray = false;
							this.ensure.gray = false;
							// this.zOrder = this._zuobiao[i]["c"];
							this._zb =i;
						}
						
						if(this.imgBtn.name =="2"&&this._placeItemModule.zuobiao[this._i][i+4]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}
						if(this.imgBtn.name =="3"&&this._placeItemModule.zuobiao[this._i][i+12]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+8]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+12]) ==-1)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}

						if(this.imgBtn.name =="20"&&this._placeItemModule.zuobiao[this._i][i+5]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}
						if(this.imgBtn.name =="21"&&this._placeItemModule.zuobiao[this._i][i+9]!=undefined&&this._i!=25)
						{
							
							
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+8]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+9]) ==-1)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}
						if(this.imgBtn.name =="22"&&this._placeItemModule.zuobiao[this._i][i+1]!=undefined&&this._i!=25)
						{
							if(i!=3&&i!=7&&i!=11&&i!=15)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}
						if(this.imgBtn.name =="30"&&this._placeItemModule.zuobiao[this._i][i+14]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+2]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+6]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+8]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+9]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+10]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+12]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+13]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+14]) ==-1)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}
						if(this.imgBtn.name =="31"&&this._placeItemModule.zuobiao[this._i][i+18]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+2]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+6]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+8]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+9]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+10]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+12]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+13]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+14]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+16]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+17]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+18]) ==-1)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}
						if(this.imgBtn.name =="32"&&this._placeItemModule.zuobiao[this._i][i+6]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+2]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+6]) ==-1)
							{
								if(i!=2&&i!=3&&i!=6&&i!=7&&i!=10&&i!=11&&i!=14&&i!=15)
								{
									this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
									this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
									this.imgBtn.gray = false;
									this.abiImg.gray = false;
									this.ensure.gray = false;
									// this.zOrder = this._zuobiao[i]["c"];
									this._zb =i;
								}
							}
						}
						if(this.imgBtn.name =="40"&&this._placeItemModule.zuobiao[this._i][i+19]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+2]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+3]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+6]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+7]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+8]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+9]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+10]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+11]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+12]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+13]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+14]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+15]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+16]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+17]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+18]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+19]) ==-1)
							{
								this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
								this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
								this.imgBtn.gray = false;
								this.abiImg.gray = false;
								this.ensure.gray = false;
								// this.zOrder = this._zuobiao[i]["c"];
								this._zb =i;
							}
						}
						if(this.imgBtn.name =="42"&&this._placeItemModule.zuobiao[this._i][i+7]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+2]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+3]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+6]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+7]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+8]) ==-1)
							{
								if(i==0||i==4||i==8||i==12)
								{
									this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
									this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
									this.imgBtn.gray = false;
									this.abiImg.gray = false;
									this.ensure.gray = false;
									// this.zOrder = this._zuobiao[i]["c"];
									this._zb =i;

								}
							}
						}
						if(this.imgBtn.name =="43"&&this._placeItemModule.zuobiao[this._i][i+11]!=undefined&&this._i!=25)
						{
							if(this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+1]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+2]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+3]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+4]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+5]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+6]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+7]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+8]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+9]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+10]) ==-1
							&&this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i+11]) ==-1)
							{
								if(i==0||i==4||i==8)
								{
									this.x= this._placeItemModule.zuobiao[this._i][i]["x"];
									this.y= this._placeItemModule.zuobiao[this._i][i]["y"];
									this.imgBtn.gray = false;
									this.abiImg.gray = false;
									this.ensure.gray = false;
									// this.zOrder = this._zuobiao[i]["c"];
									this._zb =i;
								}
								
							}
						}
					}
				}

			}
		}
		/**屏蔽坐标 */
		public shieldingCoordinates():void
		{
			if(this._zb !=null)
			{
				//1x1
				if(this.imgBtn.name =="1")
				{
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					// this._zuobiao.splice(this._zb,1);
				}
				//1x2
				if(this.imgBtn.name =="2")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				}
				//1x4
				if(this.imgBtn.name =="3")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+8]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+12]);
				}
				//2x1
				if(this.imgBtn.name =="22")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				}
				//2x2
				if(this.imgBtn.name =="20")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				}
				//2x3
				if(this.imgBtn.name =="21")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+8]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+9]);
				}
				//3x2
				if(this.imgBtn.name =="32")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+2]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+6]);
				}
				//3x4
				if(this.imgBtn.name =="30")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+2]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+6]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+8]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+9]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+10]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+12]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+13]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+14]);
				}
				//3x5
				if(this.imgBtn.name =="31")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+2]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+6]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+8]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+9]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+10]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+12]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+13]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+14]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+16]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+17]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+18]);
				}
				//4x5
				if(this.imgBtn.name =="40")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+2]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+3]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+6]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+7]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+8]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+9]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+10]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+11]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+12]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+13]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+14]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+15]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+16]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+17]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+18]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+19]);
				}
				//4x2
				if(this.imgBtn.name =="42")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+2]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+3]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+6]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+7]);
				}
				//4x3
				if(this.imgBtn.name =="43")
				{	
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+1]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+2]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+3]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+4]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+5]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+6]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+7]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+8]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+9]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+10]);
					this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb+11]);
				}
			}
		}
        /**回复坐标 */
		public replyCoordinates():void
		{
			if(this.imgBtn.name =="1")
			{
				var num:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num,1);
			}
			if(this.imgBtn.name =="2")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num2,1);
			}
			if(this.imgBtn.name =="3")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+8]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+12]);
				this._placeItemModule.zbData.splice(num4,1);
			}
			if(this.imgBtn.name =="20")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num4,1);
			}

			if(this.imgBtn.name =="21")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num4,1);
				var num5:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+8]);
				this._placeItemModule.zbData.splice(num5,1);
				var num6:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+9]);
				this._placeItemModule.zbData.splice(num6,1);
			}

			if(this.imgBtn.name =="22")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
			}

			if(this.imgBtn.name =="30")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+2]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num4,1);
				var num5:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num5,1);
				var num6:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+6]);
				this._placeItemModule.zbData.splice(num6,1);
				var num7:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+8]);
				this._placeItemModule.zbData.splice(num7,1);
				var num8:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+9]);
				this._placeItemModule.zbData.splice(num8,1);
				var num9:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+10]);
				this._placeItemModule.zbData.splice(num9,1);
				var num10:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+12]);
				this._placeItemModule.zbData.splice(num10,1);
				var num11:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+13]);
				this._placeItemModule.zbData.splice(num11,1);
				var num12:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+14]);
				this._placeItemModule.zbData.splice(num12,1);
			}
			if(this.imgBtn.name =="32")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+2]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num4,1);
				var num5:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num5,1);
				var num6:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+6]);
				this._placeItemModule.zbData.splice(num6,1);
			}

			if(this.imgBtn.name =="31")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+2]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num4,1);
				var num5:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num5,1);
				var num6:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+6]);
				this._placeItemModule.zbData.splice(num6,1);
				var num7:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+8]);
				this._placeItemModule.zbData.splice(num7,1);
				var num8:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+9]);
				this._placeItemModule.zbData.splice(num8,1);
				var num9:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+10]);
				this._placeItemModule.zbData.splice(num9,1);
				var num10:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+12]);
				this._placeItemModule.zbData.splice(num10,1);
				var num11:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+13]);
				this._placeItemModule.zbData.splice(num11,1);
				var num12:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+14]);
				this._placeItemModule.zbData.splice(num12,1);
				var num13:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+16]);
				this._placeItemModule.zbData.splice(num13,1);
				var num14:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+17]);
				this._placeItemModule.zbData.splice(num14,1);
				var num15:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+18]);
				this._placeItemModule.zbData.splice(num15,1);
			}

			if(this.imgBtn.name =="40")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+2]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+3]);
				this._placeItemModule.zbData.splice(num4,1);
				var num5:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num5,1);
				var num6:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num6,1);
				var num7:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+6]);
				this._placeItemModule.zbData.splice(num7,1);
				var num8:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+7]);
				this._placeItemModule.zbData.splice(num8,1);
				var num9:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+8]);
				this._placeItemModule.zbData.splice(num9,1);
				var num10:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+9]);
				this._placeItemModule.zbData.splice(num10,1);
				var num11:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+10]);
				this._placeItemModule.zbData.splice(num11,1);
				var num12:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+11]);
				this._placeItemModule.zbData.splice(num12,1);
				var num13:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+12]);
				this._placeItemModule.zbData.splice(num13,1);
				var num14:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+13]);
				this._placeItemModule.zbData.splice(num14,1);
				var num15:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+14]);
				this._placeItemModule.zbData.splice(num15,1);
				var num16:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+15]);
				this._placeItemModule.zbData.splice(num16,1);
				var num17:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+16]);
				this._placeItemModule.zbData.splice(num17,1);
				var num18:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+17]);
				this._placeItemModule.zbData.splice(num18,1);
				var num19:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+18]);
				this._placeItemModule.zbData.splice(num19,1);
				var num20:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+19]);
				this._placeItemModule.zbData.splice(num20,1);
			}
			if(this.imgBtn.name =="42")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+2]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+3]);
				this._placeItemModule.zbData.splice(num4,1);
				var num5:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num5,1);
				var num6:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num6,1);
				var num7:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+6]);
				this._placeItemModule.zbData.splice(num7,1);
				var num8:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+7]);
				this._placeItemModule.zbData.splice(num8,1);
			}
			if(this.imgBtn.name =="43")
			{
				var num1:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
				this._placeItemModule.zbData.splice(num1,1);
				var num2:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+1]);
				this._placeItemModule.zbData.splice(num2,1);
				var num3:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+2]);
				this._placeItemModule.zbData.splice(num3,1);
				var num4:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+3]);
				this._placeItemModule.zbData.splice(num4,1);
				var num5:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+4]);
				this._placeItemModule.zbData.splice(num5,1);
				var num6:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+5]);
				this._placeItemModule.zbData.splice(num6,1);
				var num7:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+6]);
				this._placeItemModule.zbData.splice(num7,1);
				var num8:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+7]);
				this._placeItemModule.zbData.splice(num8,1);
				var num9:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+8]);
				this._placeItemModule.zbData.splice(num9,1);
				var num10:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+9]);
				this._placeItemModule.zbData.splice(num10,1);
				var num11:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+10]);
				this._placeItemModule.zbData.splice(num11,1);
				var num12:number = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb+11]);
				this._placeItemModule.zbData.splice(num12,1);
			}
		}
		

	}
}