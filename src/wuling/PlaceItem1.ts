/**
* name 
*/
module wuling{
	export class PlaceItem1 extends ui.PlaceItem1UI{
		/**获取map页面*/
		private _map:map = wuling.map.getInstance();
		/**placeItemModule数据*/
		private _placeItemModule:module.placeItemModule = module.placeItemModule.getInstance();
		/**当前放置的坐标的下标*/
		public _zb:number = null;
		public _i:number = 0;
		//建筑等级
		public ObjectLevel:number =1;
		//建筑id
		public RoomObjectID:number;
        //建筑数据
		public builObj:Object ={};
		//接待人数
		public Jd:number = 0;

		//宝币
		public jin:wuling.goldCoins=new wuling.goldCoins;
		//是否新建宝币
		public newjin:boolean =true;

		/**动画1*/
		public _mc1:Laya.Animation = new Laya.Animation();

		/**建筑动画 */
		public show0Play:Laya.Animation = new Laya.Animation();
		public show1Play:Laya.Animation = new Laya.Animation();
		public carClassPlay:Laya.Animation = new Laya.Animation();

		private _arr:Array<any> = [{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true}]
		constructor(){
			super();
			this.onMonitor();
			//取消
			this.cancel.on(Laya.Event.CLICK,this,this.onclick);
		    //点击确定
			this.ensure.on(Laya.Event.CLICK,this,this.onclick);
			//移动
			this.shift.on(Laya.Event.CLICK,this,this.onclick);
			//弹出拆除键盘
			this.demolition.on(Laya.Event.CLICK,this,this.onclick);
			//车型
			this.carModels.on(Laya.Event.CLICK,this,this.onclick);
			//设施类型
			this.checks.on(Laya.Event.CLICK,this,this.onclick);
			this.showhome();
			this.hideenDom();
			this.imgBtn.gray = true;
			this.ensure.gray = true;
			this._map.digeBox.visible = true;
			this._map.diClick.visible =false;
			this.zOrder = 4000;
			this.pivotX = 132;
			this.pivotY = 127;
			this.rotate.visible =false;
			//新手指引
			if(wuling.map.getInstance().guide==true)
			{
				this.ensure.on(Laya.Event.MOUSE_OVER,this,this.stopPanel);
			}
		}
		/**mapImg上添加可点宝币 */
		public jings():void
		{ 
		    if(this.newjin ==true)
			{
				this.jin.x = this.x;
				this.jin.y = this.y-270;
				// this.jin.alpha = 0;
				this.jin.zOrder =99999;
				wuling.map.getInstance().mapImg.addChild(this.jin);
				this.newjin =false;
			}
			// this.jin.visible =true;
		}

        /**播放建筑棚动画 */
		public Aniplay():void
		{
			module.AnimationModule.getInstance().aniCling(this._mc1);
			Laya.timer.once(19*100,this,()=>{
				this._mc1.stop();
				this._mc1.visible = false;
			    this.imgBtn.visible =true;
			})
		}

		/**加载建筑动画资源 */
		public buiAin():void
		{
			var imgname:string = module.buildingModule.getInstance().shearStr(this.show1.skin);
			if(module.aniFramesNumder[imgname]!=0)
			{
				 this.show1.alpha = 0;
				 module.AnimationModule.getInstance().aniMo(this.show1Play,imgname);
				 this.show1Ani.addChild(this.show1Play);
			}else
			{
				this.show1.alpha = 1;
			}
			this.buiCarAin();
			this.buiAinDi();
		}
		/**加载车动画 */
		public buiCarAin():void
		{
			if(this.carClass.skin!=null)
			{
				var carname:string = module.buildingModule.getInstance().shearStrCar(this.carClass.skin);
				this.carClass.alpha = 0;
				module.AnimationModule.getInstance().aniMo(this.carClassPlay,carname);
				this.carClassAni.addChild(this.carClassPlay);
			}else
			{
				this.carClass.alpha = 1;
			}
		}

		/**加载地台动画资源 */
		public buiAinDi():void
		{
			if(this.show0.skin=="place/d100032.png"||this.show0.skin=="place/show4a.png"||this.show0.skin=="place/show4.png"
			||this.show0.skin=="place/d100033.png"||this.show0.skin=="place/show5a.png"||this.show0.skin=="place/show5.png")
			{
				var diname:string = module.buildingModule.getInstance().shearStr(this.show0.skin);
				if(module.aniFramesNumder[diname]!=0)
				{
						this.show0.alpha = 0;
						module.AnimationModule.getInstance().aniMo(this.show0Play,diname);
						this.show0Ani.addChild(this.show0Play);
				}else
				{
					this.show0.alpha = 1;
				}
			}
		}

		private static _instance:PlaceItem1;
		public static getInstance():PlaceItem1
		{
			if(this._instance == null)
			{
				this._instance = new PlaceItem1;
				var map = wuling.map.getInstance().mapImg;
				this._instance.x = map.width/2;
				this._instance.y = map.height/2;
				wuling.map.getInstance().mapImg.addChild(this._instance);
			}
			return this._instance;
		}

		/**拖动 */
		private onMonitor():void
		{
			this.imgBtn.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
			this.imgBtn.on(Laya.Event.MOUSE_OUT,this,this.startPanel);
			this.imgBtn.on(Laya.Event.MOUSE_OVER,this,this.stopPanel);
		}

        /**拖动设置*/
		private onStartDrag(e):void
		{
			this.on(Laya.Event.DRAG_MOVE,this,this.dragMove);
			var wu= wuling.map.getInstance();
			var dragRegion = new Laya.Rectangle(wu.width/2,wu.height/2,2900,2000);
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			this.startDrag(dragRegion, false, 0);
		}

		/**监听拖动 */
		private dragMove():void
		{
			/**隐藏宝币 */
			this.jin.visible =false;

			this.imgBtn.gray = true;
			this.ensure.gray = true;
			//选择坐标集合
			// this.chooseGroup();
			
			//吸附、放置条件
			// this.conditions();
		}

        /**拖动时禁止panel滑动*/
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
			this._mc1.stop();
		}

		/**保存当前坐标 */
		private oldzuobiaoX:number=0;
		private oldzuobiaoY:number=0;
		/**保存当前层级 */
		private oldzOrder:number=0;
		private oldzb:number=0;

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
					}
				    /**回复nana点击事件 */
					wuling.Bottom.getInstance().nanaOnClick();
					if(this.oldzuobiaoX==0&&this.oldzuobiaoY==0)
					{
						//从数据中移除自己
						var PlaceItem1Number = this._map.namecar.indexOf(this);
						if(PlaceItem1Number!=-1){this._map.namecar.splice(PlaceItem1Number,1)}
						//从父容器中删除自己
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
						this._zb = this.oldzb;
						this.shieldingCoordinates();
						/**显示宝币 */
			            this.jin.visible =true;
						this.imgBtn.offAll();
						this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
						this.cancel.visible =false;
						this.ensure.visible =false;
						this.imgBtn.gray = false;
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
				/**显示宝币 */
				if(this.imgBtn.gray == false)
				{
					if(this.jin.jin>0)
					{
						this.jin.visible=true;
						this.jin.x = this.x;
						this.jin.y = this.y-270;
					}else
					{
						this.jin.visible=false;
						this.jin.x = this.x;
						this.jin.y = this.y-270;
					}
					if(wuling.map.getInstance().guide==false)
					{
						wuling.map.getInstance().person1.figureStart();
						wuling.map.getInstance().person2.figureStart();
						wuling.map.getInstance().person3.figureStart();
						wuling.map.getInstance().person4.figureStart();
						wuling.map.getInstance().person5.figureStart();
						wuling.Bottom.getInstance().nanaOnClick();
					}
					
							/**回复nana点击事件 */
					        wuling.Bottom.getInstance().nanaOnClick();
							this.Mission();
							this.imgBtn.offAll();
							this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
							this.cancel.visible =false;
							this.ensure.visible =false;
							// this.rotate.visible = false;
							this._map.digeBox.visible = false;
							this._map.diClick.visible = true;
							this._placeItemModule.editMode = false;
							this.zOrder = this._placeItemModule.showStage[this._zb]["c"];
							//屏蔽坐标
							this.shieldingCoordinates();
							//保存坐标
							util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID="+this.RoomObjectID+"&ObjectPosX="+this.x+"&ObjectPosY="+this.y+"&Hierarchy="+this.zOrder+"&Area="+this._zb+"");
							//建筑盆动画
							//新手教程
							if(this._map.guide==true)
							{
								this.ensure.off(Laya.Event.MOUSE_OVER,this,this.stopPanel);
								wuling.Bottom.getInstance().nanaicon.offAll();
								this._map.newclick();
							}
							if(this.oldzuobiaoX==0&&this.oldzuobiaoY==0)
							{
								//配置1个增高地台任务
								if(module.missionModule.getInstance().ToreceiveSituation.length>0&&this.show0.skin =="place/d100015.png")
								{
									var ToreceiveSituation = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission7Prize"];
									// var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission7"];
									if(ToreceiveSituation==true)
									{
										module.missionModule.getInstance().onbaobi("Mission8",1);
									}
								}
								//获取建筑数据
								util.HttpRequestUtil.sendGetbuilding("RoomID="+module.Room.getInstance().RoomID);
								this.jianBot.visible =true;
								this.jianBot.x =54;
								this.jianBot.y =-100;
								this.jianBot.alpha =0;
								var jinLen:string = String(this.builObj["jin"]);
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
								// wuling.Top.getInstance().this.builObj["jin"]();
								wuling.Top.getInstance().nens();
								this.spani.visible = true;
								this._mc1.x = this.x-140;
								this._mc1.y = this.y-210;
								this.imgBtn.visible =false;
								//加载建筑棚动画资源
								module.AnimationModule.getInstance().aniCling(this._mc1);
								Laya.timer.once(19*100,this,()=>{
								this._mc1.visible =false;
								this._mc1.stop();
								this.imgBtn.visible =true;
								if(this._map.guide==false)
									{
										wuling.map.getInstance().person1.happy();
										wuling.map.getInstance().person2.happy();
										wuling.map.getInstance().person3.happy();
										wuling.map.getInstance().person4.happy();
										wuling.map.getInstance().person5.happy();
									}
								
			                    this.spani.visible = false;
								});

							}
							
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
					this.oldzb =this._zb;
					

				    this._map.digeBox.visible = true;
					this._map.diClick.visible =false;
					this.cancel.visible =true;
					this.ensure.visible =true;
					this.ensure.gray =false;
					Laya.timer.clear(this,this.oncancel);
					// this.rotate.visible =true;
					this.zOrder = 3001;
					this._placeItemModule.editMode = true;
					//回复坐标点
					this.replyCoordinates();
					this.showhome();
					this.imgBtn.offAll();
					this.hideenDom();
					this.onMonitor();
					break;
				//打开移除
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
				     var PlaceItem1Number = this._map.namecar.indexOf(this);
					 if(PlaceItem1Number!=-1){this._map.namecar.splice(PlaceItem1Number,1)}
				     //从父容器中移除自己
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
			    //选择车型
				case this.carModels:
				    /**禁止nana点击 */
				    wuling.Bottom.getInstance().nanaicon.offAll();
					Laya.timer.clear(this,this.oncancel);
				    this.chooseGroup();
				    // var ditai:laya.ui.Dialog = new wuling.ditaiChexing;
					// Laya.stage.addChild(ditai);
					wuling.ditaiChexing.getInstance();
					this.carSet();
					//新手教程
					if(this._map.guide==true)
					{
						this._map.newclick();
					}
					// ditai.popup(true,true);
					 break;
				//建筑数据
				case this.checks:
					 /**禁止nana点击 */
					 if(this._map.guide==true)
					 {
						 this.imgBtn.on(Laya.Event.CLICK,this,this.oncancel)
					 }
					 wuling.Bottom.getInstance().nanaicon.offAll();
					 Laya.timer.clear(this,this.oncancel);
				     var ewq = this.show1.skin.slice(6);
					 var mowei = ewq.slice(0,-4);
				     var vcvc = this.imgBtn.name;
					 //img 图片名字,RoomObjectID 建筑id,ObjectLevel 建筑等级,zi 自身对象,id 建筑尺寸类型 
				     module.buildingModule.getInstance().buildingImg = {img:mowei,RoomObjectID:this.RoomObjectID,ObjectLevel:this.ObjectLevel,zi:this,id:this.imgBtn.name,Jd:this.Jd};
                     var rankList:laya.ui.Dialog = new wuling.ssInfo;
					 this.parent.addChild(rankList);
					 rankList.width = Laya.stage.width;
					 //打开页面
					 rankList.popup(false,true);
					 this.carSet();
				     break;
				default:
					break;
			}
		}
		/**放置车型小键盘设置 */
		public carSet():void
		{
			Laya.timer.clear(this,this.oncancel);
			this.hideenDom();
			this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);

		}
        /**3,4任务 */
		private Mission():void
		{
			// if(module.missionModule.getInstance().taskProgress.length>0&&module.missionModule.getInstance().taskProgress[0]["Mission5"]<5)
			// {
			// 	var carNam:number = 0;
			// 	for(var i:number=0;i<this._map.namecar.length;i++)
			// 	{
			// 	  if(this._map.namecar[i].show0.skin =="place/d100016.png"||this._map.namecar[i].show0.skin =="place/d100015.png"||this._map.namecar[i].show0.skin =="place/d100014.png")
			// 	  {
			// 		carNam++;
			// 		if(carNam==1&&module.missionModule.getInstance().taskProgress[0]["Mission4"]<1)
			// 		{
			// 			util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission4="+carNam);
			// 		}
			// 	  }
			// 	}
				
			// 	util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission5="+carNam);
			// }
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

		/**隐藏操作 */
		public hideenDom():void
		{
			this.checks.visible = false;
			this.shift.visible = false;
			this.demolition.visible = false;
			this.carModels.visible = false;
		}
		/**显示操作 */
		public showDom():void
		{
			if(this._placeItemModule.editMode == false)
			{
				this.checks.visible = true;
				this.shift.visible = true;
				this.demolition.visible = true;
			    this.carModels.visible = true;
				this.imgBtn.offAll();
				Laya.timer.clear(this,this.oncancel);
				//新手教程改
				if(this._map.guide==false)
				{
					this.imgBtn.on(Laya.Event.CLICK,this,this.oncancel)
					Laya.timer.once(2000,this,this.oncancel);
					wuling.map.getInstance().person1.figureStatic();
					wuling.map.getInstance().person2.figureStatic();
					wuling.map.getInstance().person3.figureStatic();
					wuling.map.getInstance().person4.figureStatic();
					wuling.map.getInstance().person5.figureStatic();
				}else
				{
					this._map.newclick();
				}
				
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
		}
		/**恢复imgBtn的点击事件 */
		public imgBtnOn():void
		{
			this.imgBtn.on(Laya.Event.CLICK,this,this.showDom);
			//取消
			this.cancel.on(Laya.Event.CLICK,this,this.onclick);
		    //点击确定
			this.ensure.on(Laya.Event.CLICK,this,this.onclick);
			//移动
			this.shift.on(Laya.Event.CLICK,this,this.onclick);
			//拆除
			this.demolition.on(Laya.Event.CLICK,this,this.onclick);
		}
		/**移除imgBtn的点击事件 */
		public onOff():void
		{
			this.imgBtn.offAll();
			//取消
			this.cancel.offAll();
		    //点击确定
			this.ensure.offAll();
			//移动
			this.shift.offAll();
			//拆除
			this.demolition.offAll();
		}
		/**选择对应坐标组 */
		private chooseGroup():void
		{
			this._placeItemModule.showStage[this._zb]["x"] = this.x;
			this._placeItemModule.showStage[this._zb]["y"] = this.y;
			var num:number= this._placeItemModule.removeStage.indexOf(this._placeItemModule.showStage[this._zb]);
			this._placeItemModule.i = this;
		}
		/**吸附、放置条件 */
		private conditions():void
		{
			var taoNum:number = 7;
		  if(module.Room.getInstance().RoomClass["RoomLevel"]>=4&&module.Room.getInstance().RoomClass["RoomLevel"]<9)
		  {
			  taoNum = 13;
		  }
		  if(module.Room.getInstance().RoomClass["RoomLevel"]>=9&&module.Room.getInstance().RoomClass["RoomLevel"]<14)
		  {
			  taoNum = 19;
		  }
		  if(module.Room.getInstance().RoomClass["RoomLevel"]>=14)
		  {
			  taoNum = 25;
		  }
		  for(var i:number=0;i<taoNum;i++)
		  {
			  if(this._placeItemModule.removeStage.indexOf(this._placeItemModule.showStage[i]) ==-1)
			  {
				if(this.x>this._placeItemModule.showStage[i]["x"]-100&&this.x<this._placeItemModule.showStage[i]["x"]+100&&this.y>this._placeItemModule.showStage[i]["y"]-100&&this.y<this._placeItemModule.showStage[i]["y"]+100&&this._arr[i]["a"]==true)
				{
					this.x = this._placeItemModule.showStage[i]["x"];
					this.y = this._placeItemModule.showStage[i]["y"];
					this.off(Laya.Event.DRAG_MOVE,this,this.dragMove);
					this.imgBtn.gray = false;
					this.ensure.gray = false;
					this._zb =i;
				}
			  }
		  }
		}
		/**屏蔽坐标 */
		public shieldingCoordinates():void
		{
			this._placeItemModule.removeStage.push(this._placeItemModule.showStage[this._zb]);
		}
        /**回复坐标 */
		public replyCoordinates():void
		{
			var num:number = this._placeItemModule.removeStage.indexOf(this._placeItemModule.showStage[this._zb]);
			this._placeItemModule.removeStage.splice(num,1);
		}
		/**判断坐标点是否有坐标 */
		private showhome():void
		{
			this._arr = [{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true},{a:true}];
			for(var i:number=0;i<this._placeItemModule.zuobiao.length;i++)
			{
				for(var a:number=0;a<this._placeItemModule.zuobiao.length;a++)
				{
					var num:number= this._placeItemModule.zuobiao[i].indexOf(this._placeItemModule.zbData[a]);
					if(num>=0)
					{
						this._arr[i]["a"] = false;
					}
				}
				
			}
		}

	}
}