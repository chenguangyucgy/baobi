/**
* 任务数据处理页面
*/
module module{
	export class missionModule{
        
        /**所有任务进度 */
		private _taskProgress:Array<Object>=[];
		/**任务领取状况 */
		private _ToreceiveSituation:Array<Object> =[];
		/**任务保存进度种类 */
		public missionProgress:Array<Object> =[
			{conditions:"Mission2",missionNum:5},
			{conditions:"Mission3",missionNum:2},
			{conditions:"Mission4",missionNum:1},
			{conditions:"Mission5",missionNum:2},
			{conditions:"Mission6",missionNum:3},
			{conditions:"Mission7",missionNum:200},
			{conditions:"Mission8",missionNum:1},
			{conditions:"Mission9",missionNum:1},

		];
		/**任务数据 */
		public missionData:Array<Object>=[
			//shanNum,odl上一任务数据
			    {nametext:"收获宝币1",text:"收集顾客奖励宝币5次", num:1,"missionNum":5,shanNum:5,odl:"Mission2",conditions:"Mission2",rewardJin:20,reClass:true,tuiText:"累计收集5次顾客奖励的宝币即可完成这个任务哦。"},
				{nametext:"清洁环境",text:"配置2个小型垃圾桶", num:2,"missionNum":2,shanNum:5,odl:"Mission2",conditions:"Mission3",rewardJin:10,reClass:true,tuiText:"店里的卫生环境很重要，请配置两个垃圾桶吧。"},
				{nametext:"更换地板",text:"尝试更换1次方格地板", num:3,"missionNum":1,shanNum:2,odl:"Mission3",conditions:"Mission4",rewardJin:100,reClass:true,tuiText:"在设施里面选择不同的地板试试其他风格吧？"},
				{nametext:"新车驾临1",text:"配置2台310W任意颜色展车", num:4,"missionNum":2,shanNum:1,odl:"Mission4",conditions:"Mission5",rewardJin:100,reClass:true,tuiText:"超高性价比的大空间多功能家轿，现阶段不二之选。"},
				{nametext:"舒适感觉1",text:"配置3个休息凳", num:5,"missionNum":3,shanNum:2,odl:"Mission5",conditions:"Mission6",rewardJin:30,reClass:true,tuiText:"除了主要的设施，休闲舒适的搭配也很关键哦。"},
				{nametext:"财源广进1",text:"收获200个宝币", num:6,"missionNum":200,shanNum:3,odl:"Mission6",conditions:"Mission7",rewardJin:50,reClass:true,tuiText:"门店初具规模，我们来努力赚取宝币吧。"},
				{nametext:"新款地台1",text:"配置1个增高地台", num:7,"missionNum":1,shanNum:200,odl:"Mission7",conditions:"Mission8",rewardJin:10,reClass:true,tuiText:"我觉得吧，多配一个更亮眼的地台如何？"},
				{nametext:"全新感觉",text:"为NANA更换一次服装", num:8,"missionNum":1,shanNum:1,odl:"Mission8",conditions:"Mission9",rewardJin:100,reClass:true,tuiText:"虽然我是个AI，但也是喜欢换新造型的。"},


				];
		/**重新排列任务数组 */
		public missionChoose(arr:Array<Object>):Array<Object>
		{
			//buArr1:已解锁数据,buArr2:未解锁数据
			var buArr1:Array<Object>= [];
			var buArr2:Array<Object>= [];
			var buArr3:Array<Object>= [];
			if(this.ToreceiveSituation.length>0)
			{
				var LvNum = this.ToreceiveSituation[0];
				for(var i:number=0;i<arr.length;i++)
				{
					if(LvNum["GetMission"+(arr[i]["num"]+1)+"Prize"]==true)
					{
						buArr1.push(arr[i]);
					}else
					{
						buArr2.push(arr[i]);
					}
				}
				buArr3 = buArr2.concat(buArr1);
			}else
			{
				buArr2 = arr;
			}
			
			// return buArr3;
			return buArr2;
		}

		/**获取所有任务进度 */
		public get taskProgress():Array<Object>
		{
			return this._taskProgress;
		}
		/**设置所有任务进度 */
		public set taskProgress(ID:Array<Object>)
		{
			this._taskProgress = ID;
			if(this.renwutaojian==true)
			{
				// this.missionViews();
			}
			
		}

		public kaimission:boolean = false; 

		/**获取任务领取状况 */
		public get ToreceiveSituation():Array<Object>
		{
			return this._ToreceiveSituation;
		}
		/**判断显示一次叹号 true为显示 false为隐藏 */
		public shhi:boolean = true;
		/**设置任务领取状况 */
		public set ToreceiveSituation(ID:Array<Object>)
		{
			var arr = this._ToreceiveSituation;
			this._ToreceiveSituation = ID;
			if(this.kaimission==true&&arr!=this._ToreceiveSituation)
			{
				wuling.mission.getInstance().newData();
			}
			
			Laya.timer.once(100,this,()=>{

				for(var i:number=2;i<(this.missionData.length+2);i++)
				{
					if(this._taskProgress.length>0)
					{
						if(this._taskProgress[0][this.missionData[i-2]["conditions"]]>=this.missionData[i-2]["missionNum"])
						{
							if(this._ToreceiveSituation.length==0&&this.shhi==true)
							{
								wuling.Bottom.getInstance().renwu.visible =true;
								//打开小nana解说
								wuling.Bottom.getInstance().missionText(this.randomDialogue());
								return
							}
							if(this._ToreceiveSituation.length>0&&ID.length>0&&ID[0]["GetMission"+i+"Prize"]==false&&this.shhi==true)
							{
								wuling.Bottom.getInstance().renwu.visible =true;
								//打开小nana解说
								wuling.Bottom.getInstance().missionText(this.randomDialogue());
								return
							}
						}
					
					}
				}
				wuling.Bottom.getInstance().renwu.visible =false;
			});
		}
		/**判断任务是否完成 */
		public missionComplete():boolean
		{
			if(this._taskProgress.length>0)
			{
				for(var i=0;i<this.missionProgress.length;i++)
				{
					if(this._taskProgress[0][this.missionProgress[i]["conditions"]] < this.missionProgress[i]["missionNum"])
					{
						return false;
					}
					
				}
			}
			return true;
		}
		/**完成任务弹出任务界面 */
		public missionViews():void
		{
			this.renwutaojian = false;
			// var mission:laya.ui.Dialog = new wuling.mission;
			// wuling.map.getInstance().addChild(mission);
		    var mission = wuling.mission.getInstance();
			//打开页面
			mission.popup(false,true);
			wuling.Bottom.getInstance().renwu.visible =true;
		}
		

		/**设施总数任务 */
		public builNums(da:number):void
		{
			// if(module.missionModule.getInstance().taskProgress.length>0)
			// {
			// 	var Mission129:number=module.missionModule.getInstance().taskProgress[0]["Mission129"];
			// 	if(Mission129==null){Mission129=0}
			// 	if(Mission129<10&&module.missionModule.getInstance().taskProgress.length>0)
			// 	{
			// 		if(da==0)
			// 		{Mission129++;}
			// 		else
			// 		{Mission129 = Mission129-1;}
			// 		util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission129="+Mission129);
			// 	}
			// }
			
		}

		/**获取宝币 */
		public getJin(Mission:string,num:number,jin:number):void
		{
			if(module.missionModule.getInstance().taskProgress.length>0)
			{
			    var Mission2:number=module.missionModule.getInstance().taskProgress[0][Mission];
				if(Mission2==null){Mission2=0}
				if(Mission2<num&&module.missionModule.getInstance().taskProgress.length>0)
				{
					Mission2+=jin;
					util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&"+Mission+"="+Mission2);
					if(Mission2>=num&&Mission!="Mission141"){this.renwutaojian = true}
				}
			}
		}
		public renwutaojian:boolean =false;
		/**num 任务条件
		 * Mission任务
		 * 任务 */
		public onbaobi(Mission:string,num:number):void
		{
			if(module.missionModule.getInstance().taskProgress.length>0)
			{
				var Mission2:number=module.missionModule.getInstance().taskProgress[0][Mission];
				if(Mission2==null){Mission2=0}
				if(Mission2<num&&module.missionModule.getInstance().taskProgress.length>0)
				{
					Mission2+=1;
					util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&"+Mission+"="+Mission2);
					/**弹出界面条件 */
					if(Mission2>=num&&Mission!="Mission141"){this.renwutaojian = true}
				}
			}
		}
		
		/**消耗宝币 */
		public reJin(jin:number):void
		{
			// if(module.missionModule.getInstance().taskProgress.length>0)
			// {
			// var Mission104:number=module.missionModule.getInstance().taskProgress[0]["Mission104"];
			// if(Mission104==null){Mission104=0}
			// if(Mission104<100000&&module.missionModule.getInstance().taskProgress.length>0)
			// {
			// 	Mission104+=jin;
			// 	util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission104="+Mission104);
			// }
			// }
		}

		/**建筑任务 */
		public buildingMission(buClass:string):void
		{
			

		}
		/**是否加载对白 true:加载 fale:为不加载*/
		public loDialogue:boolean = true;
		/**任务完成随机对白 */
		public randomDialogue():string
		{
			var text1Wen:string;
			switch(Math.floor(Math.random() * 4 + 1))
			{
				case 1:
					text1Wen = "太好了，任务完成。";
					break;
				case 2:
					text1Wen = "有新的完成任务，请领取奖励。";
					break;
				case 3:
					text1Wen = "任务完成了，不庆祝一下？";
					break;
			    case 4:
					text1Wen = "轻松搞定任务，你真厉害！";
					break;
			}
			return text1Wen;
		}


		private static _instance:missionModule;
		public static getInstance():missionModule
		{
			if(this._instance == null)
			{
				this._instance = new missionModule;
			}
			return this._instance;
		}
		constructor(){

		}
	}
}