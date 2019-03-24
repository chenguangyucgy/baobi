/**
* name 
*/
module wuling{
	export class missionItem extends ui.missionItemUI{
		/**任务数据 */
		private missionModule:module.missionModule = module.missionModule.getInstance();
		constructor(){
			super();
			this.lingqu.on(Laya.Event.CLICK, this, this.onClick);
		}
		public miss(item:missionItem, index:number):void
		{
			var nametext:string = this.dataSource["nametext"];
			var conditions = this.dataSource["conditions"];
			var missionNum = this.dataSource["missionNum"];
			var odl = this.dataSource["odl"];
			var shanNum = this.dataSource["shanNum"];
			var Rtext = this.dataSource["text"];
			var num = this.dataSource["num"];
			var tuiText = this.dataSource["tuiText"];

			this.missionName.text = nametext;
			if(this.missionModule.taskProgress.length>0)
			{

				// if(this.missionModule.taskProgress[0][odl]>= shanNum)
				// {
				// 	this.suoimg.visible =false;
				// }else
				// {
				// 	this.suoimg.visible =true;
				// }
				if(this.missionModule.ToreceiveSituation.length>0&&this.missionModule.ToreceiveSituation[0]["GetMission"+num+"Prize"]==true)
				{
					if(this.missionModule.ToreceiveSituation[0]["GetMission"+(num+1)+"Prize"]==false)
					{
						// wuling.Bottom.getInstance().text1.text = tuiText;
					}
					this.suoimg.visible =false;
				}else
				{
					this.suoimg.visible =true;
				}
				if(num==1){this.suoimg.visible =false;}

				if(this.missionModule.taskProgress.length>0)
				{
					if(this.missionModule.taskProgress[0][conditions]>= missionNum)
					{
						this.lingqu.visible =true;
						this.lingqu.disabled = false;
						this.proText.text = missionNum+"/"+missionNum;
						
						if(this.missionModule.ToreceiveSituation!=undefined&&this.missionModule.ToreceiveSituation.length>0&&this.missionModule.ToreceiveSituation[0]["GetMission"+(num+1)+"Prize"]==true){
							this.lingqu.visible =false;
							this.lingqu.disabled = true;
							this.reimg.skin = "mission/yiqu.png";
						}
					}else
					{
						this.lingqu.visible =false;
						this.lingqu.disabled = true;
						if(this.missionModule.taskProgress[0][conditions]==null){this.missionModule.taskProgress[0][conditions]=0};
						this.proText.text = this.missionModule.taskProgress[0][conditions]+"/"+missionNum;
						this.reimg.skin = "mission/unfinished.png";
					}
					
				}
				//完成任务显示的对白
				if(this.lingqu.visible==true)
				{
					module.missionModule.getInstance().shhi=false;
					var strData:string = module.missionModule.getInstance().randomDialogue();
					wuling.Bottom.getInstance().text1.text = strData;
				}else if(index==0&&module.missionModule.getInstance().loDialogue==true)
				{
					wuling.Bottom.getInstance().text1.text = this.dataSource["tuiText"];
				}
				
			}
			this.renwu.text = Rtext;

			var numStr:string = String(this.dataSource["num"]);
			switch(numStr.length)
            {
                case 1:
                    this.one.skin = "mission/"+numStr.slice(0,1)+".png";
					this.two.visible =false;
					this.three.visible= false;
					this.four.visible =false;
					this.five.visible =false;
					// this.bg.skin = "mission/kuang110.png";
                    // this.two.visible =true;
					// this.three.alpha = 0;
                    break;
                case 2:
                    this.one.skin = "mission/"+numStr.slice(0,1)+".png";
                    this.two.skin = "mission/10.png";
					this.three.skin = "mission/"+numStr.slice(1)+".png";
                    this.two.visible =true;
					this.three.visible= true;
					this.four.visible =false;
					this.five.visible =false;
					// this.bg.skin = "mission/kuang99.png";
					if(numStr.slice(1)=="0")
					{
						 this.one.skin = "mission/"+numStr.slice(0,1)+".png";
                         this.two.skin = "mission/10.png";
						 this.three.visible= false;
						//  this.bg.skin = "mission/kuang1020.png";
						 if(numStr.slice(0,1)=="1")
						 {
							 this.one.skin = "mission/10.png";
							 this.two.visible = false;
							//  this.bg.skin = "mission/kuang110.png";
						 }
					}else
					{
						if(numStr.slice(0,1)=="1")
						 {
							 this.one.skin = "mission/10.png";
							 this.two.skin = "mission/"+numStr.slice(1)+".png";
							 this.three.visible= false;
							//  this.bg.skin = "mission/kuang1020.png";
						 }	
					}
					// this.three.alpha = 0;
                    break;
				case 3:
                    this.one.skin = "mission/"+numStr.slice(0,1)+".png";
                    this.two.skin = "mission/100.png";
					this.three.skin = "mission/"+numStr.slice(1,2)+".png";
					this.four.skin = "mission/10.png";
					this.five.skin = "mission/"+numStr.slice(2)+".png";
					// this.bg.skin = "mission/kuang100.png";
                    this.two.visible= true;
					this.three.visible= true;
					this.four.visible =true;
					this.five.visible =true;
					if(numStr=="100")
					{
						 this.two.visible= false;
						 this.three.visible= true;
						 this.four.visible =false;
						 this.five.visible =false;
						 this.three.skin = "mission/100.png";
					}else
					{
						if(numStr.slice(1,2)=="0")
						{
							this.two.skin = "mission/100.png";
							this.three.skin = "mission/0.png";
							this.four.skin = "mission/"+numStr.slice(2)+".png";
							this.five.visible =false;
						}
						if(numStr.slice(2)=="0")
						{
							this.two.skin = "mission/100.png";
							this.three.skin = "mission/"+numStr.slice(1,2)+".png";
							this.four.skin = "mission/10.png";
							this.five.visible =false;
						}
					}
					
					
                    break;
            }
			// if(index < 10)
			// {
			// 	this.one.skin = "mission/"+num+".png";
			// }else if(index >= 10 && index <19){
			// 	// this.bg.skin = "mission/kuang1020.png";
			// 	// this.two.visible = true;
			// 	// this.one.index = 9;
			// 	// this.two.index = index%10;
			// }
		}
		private onClick():void{
			//刷新页面不加载对白
			module.missionModule.getInstance().loDialogue=false;
			util.HttpRequestUtil.sendGetReward("RoomID="+module.Room.getInstance().RoomID+"&GetMission"+(this.dataSource["num"]+1)+"Prize=1");
			this.add.x = 222;
			this.add.y = 34;
			this.add.visible = true;
			this.rewardjin();
			this.lingqu.disabled = true;
			this.lingqu.visible =false;
			this.reimg.skin = "mission/yiqu.png";
			this.add.alpha = 1;
			Laya.SoundManager.playSound("res/music/wanchengrenwu.mp3");
			Laya.Tween.to(this.add, {alpha: 0, y: 0}, 1000);
			// wuling.mission.getInstance().onDon();
			var zeImg:Laya.Image = new Laya.Image();
			zeImg.skin = "map/mo.png";
			Laya.stage.addChild(zeImg);
			zeImg.left = 0;
			zeImg.right = 0;
			zeImg.top = 0;
			zeImg.bottom = 0;
			zeImg.alpha = 0;
			zeImg.mouseEnabled =true;
			zeImg.mouseThrough =false;
			zeImg.zOrder = 99999999;
			var shen:Laya.MovieClip =new Laya.MovieClip();

						var spAni:Laya.Box = new Laya.Box();
						spAni.centerX =0;
						shen.x =-340;
						shen.y = 0;
						shen.scale(1.333,1.333);
						spAni.zOrder =9999;
						shen.load("res/swf/renani.swf",true);
						spAni.width = 720;
						Laya.stage.addChild(spAni);
						spAni.addChild(shen);
						shen.playTo(0,79,new Laya.Handler(this,()=>{
							//可以加载对白
							module.missionModule.getInstance().loDialogue=true;
							//  wuling.mission.getInstance().Don();
							//完成任务提示
							if(this.suoimg.visible==false&&this.dataSource!=null)
							{
								wuling.Bottom.getInstance().text1.text = this.dataSource["tuiText"];
							}
							//下次感叹号可以显示
							module.missionModule.getInstance().shhi =true;
							zeImg.destroy();
							shen.destroy();
						}));
			
			if(this.dataSource["reClass"]==true)
			{
				// wuling.Top.getInstance().jin+=this.dataSource["rewardJin"];
			    // wuling.Top.getInstance().gabi();
				util.HttpRequestUtil.Modifybaobi(this.dataSource["rewardJin"]);
				//增加宝币任务
				// module.missionModule.getInstance().getJin(this.dataSource["rewardJin"]);
			}else
			{
				wuling.Top.getInstance().nen+=this.dataSource["rewardJin"];
			    wuling.Top.getInstance().nens();
			}
		}

        //显示奖励金额
		private rewardjin():void
		{
			var rewards:string = String(this.dataSource["rewardJin"]);
			switch(rewards.length)
            {
                case 1:
                    this.jin1.skin = "rankList/org"+rewards.slice(0,1)+".png";
					this.jin2.visible =false;
					this.jin3.visible =false;
					this.jin4.visible = false;
                    break;
                case 2:
                    this.jin1.skin = "rankList/org"+rewards.slice(0,1)+".png";
					this.jin2.skin = "rankList/org"+rewards.slice(1)+".png";
                    this.jin2.visible= true;
					this.jin3.visible= false;
					this.jin4.visible= false;
                    break;
				case 3:
                    this.jin1.skin = "rankList/org"+rewards.slice(0,1)+".png";
					this.jin2.skin = "rankList/org"+rewards.slice(1,2)+".png";
					this.jin3.skin = "rankList/org"+rewards.slice(2)+".png";
                    this.jin2.visible= true;
					this.jin3.visible= true;
					this.jin4.visible= false;
                    break;
				case 4:
                    this.jin1.skin = "rankList/org"+rewards.slice(0,1)+".png";
					this.jin2.skin = "rankList/org"+rewards.slice(1,2)+".png";
					this.jin3.skin = "rankList/org"+rewards.slice(2,3)+".png";
					this.jin4.skin = "rankList/org"+rewards.slice(3)+".png";
                    this.jin2.visible= true;
					this.jin3.visible= true;
					this.jin4.visible= true;
                    break;
			}
		}
	}
}