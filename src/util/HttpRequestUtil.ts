/**
* 接口 
*/
module util{
	export class HttpRequestUtil{
        /**请求头*/
        public static http:string = "http://47.101.48.107/index/index/CrRoom.html?";
		/**UserKey*/
		public static UserKey:string = "&UserKey=5FAE486F210FAE290B328C25033084555F12F020E5A6127F";
		/**产生宝币总值 */
        public static cNum:number =0;
		/**消耗宝币总值 */
		public static jNum:number =0;
//building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
		 * 更改建筑内容
		 * @param Url 更新的内容
		 */
        public static sendUpdataBuilding(Url:string):void
		{
			if(module.Room.getInstance().RoomID!=null)
			{
				var xhr:Laya.HttpRequest = new Laya.HttpRequest();
				var Action:string = "Action=update&";
				var RoomID:string = "RoomID="+module.Room.getInstance().RoomID+"&";
				xhr.http.timeout = 10000;//设置超时时间；
				xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerUpdataBuilding);
				xhr.once(Laya.Event.ERROR,this,this.errorHandlerUpdataBuilding);
				xhr.on(Laya.Event.PROGRESS,this,this.processHandlerUpdataBuilding);
				xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?"+Action+RoomID+Url+this.UserKey,"","get","text");
			}
		}

		public static processHandlerUpdataBuilding(data:Object):void
		{
			//console.log(data);
			
		}

		public static ArrObjZi:Array<Object> =[];
		/**
		 * 获取后台返回的数据
		 * @param data 后台返回的数据
		 */
		public static completeHandlerUpdataBuilding(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 
			 }
			
		}
		public static errorHandlerUpdataBuilding(e:Object):void
		{
		}
//building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
		 * 添加小物品
		 * @param Url 发送的内容
		 */
		public static sendAddBuilding1(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=add&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerAddBuilding1);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerAddBuilding1);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerAddBuilding1);
			xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerAddBuilding1(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerAddBuilding1(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 var namecar = wuling.map.getInstance().namecar;
			 if(Obj["succeed"]==true)
			 {
				 namecar[namecar.length-1].RoomObjectID =Obj["data"]["RoomObjectID"];
			 }
			
		}
		public static errorHandlerAddBuilding1(e:Object):void
		{
		}
//building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
		 * 添加小物品2
		 * @param Url 发送的内容
		 */
		public static sendAddBuilding2(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=add&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerAddBuilding2);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerAddBuilding2);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerAddBuilding2);
			xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerAddBuilding2(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerAddBuilding2(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 var nameObject = wuling.map.getInstance().nameObject;
			 if(Obj["succeed"]==true)
			 {
				//   this.sendGetbuilding("RoomID="+module.Room.getInstance().RoomID);
				 nameObject[nameObject.length-1].RoomObjectID =Obj["data"]["RoomObjectID"];
			 }
			
		}
		public static errorHandlerAddBuilding2(e:Object):void
		{
		}
//building-------------------------------------------------------------------------------------------------------------------------------------------------------
/**
		 * 删除小物品
		 * @param Url 发送的内容
		 */
		public static sendRemoveBuilding(Url:string):void
		{
			if(module.Room.getInstance().RoomID!=null)
			{
				var xhr:Laya.HttpRequest = new Laya.HttpRequest();
				var Action = "Action=delete&";
				var RoomID:string = "RoomID="+module.Room.getInstance().RoomID+"&";
				xhr.http.timeout = 10000;//设置超时时间；
				xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerRemoveBuilding1);
				xhr.once(Laya.Event.ERROR,this,this.errorHandlerRemoveBuilding1);
				xhr.on(Laya.Event.PROGRESS,this,this.processHandlerRemoveBuilding1);
				xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?"+Action+RoomID+Url+this.UserKey,"","get","text");
			}
			
		}

		public static processHandlerRemoveBuilding1(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerRemoveBuilding1(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 var namecar = wuling.map.getInstance().namecar;
			 if(Obj["succeed"]==true)
			 {
		        this.sendGetbuilding("RoomID="+module.Room.getInstance().RoomID);
			 }
			
		}
		public static errorHandlerRemoveBuilding1(e:Object):void
		{
		}

//building-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 获取全部建筑数据
		 * @param Url 发送的内容
		 */
		public static sendGetbuilding(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerGetbuilding);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerGetbuilding);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerGetbuilding);
			xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerGetbuilding(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerGetbuilding(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			//  if(Obj["succeed"]==true)
			//  {
				 module.buildingModule.getInstance().buildingAll = Obj["data"];
			//  }
			
		}
		public static errorHandlerGetbuilding(e:Object):void
		{
		}

//User-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 添加和获取用户数据
		 * @param Url 添加的内容
		 */
		public static sendAddGet(Url:string):void
		{
			var Action = "Action=add&";
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerAddGet);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerAddGet);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerAddGet);
			
			xhr.send(this.http+Action+Url+this.UserKey,"","get","text");
		}

		public static processHandlerAddGet(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerAddGet(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 this.sendGetbuilding("RoomID="+Obj["data"]["RoomID"]);
				 Laya.timer.once(100,this,()=>{
					 this.sendUpdataMisson("RoomID="+Obj["data"]["RoomID"]+"&Mission1=1");
					 this.sendGetMission("RoomID="+module.Room.getInstance().RoomID);
				 });
				 
				 module.Room.getInstance().RoomID = Obj["data"]["RoomID"];
				 module.Room.getInstance().RoomClass =Obj["data"];
				 
				 wuling.Loading.getInstances();
				 wuling.login.getInstance().removeSelf();
			 }else
			 {
				 module.Room.getInstance().message =Obj["message"];
			 }
			
		}
		public static errorHandlerAddGet(e:Object):void
		{
		}

		constructor(){

		}
       
	   /**用户名*/
       public static userName:string ="";
//User-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 新用户登录下发用户数据
		 * @param Url 添加的内容
		 */
		public static sendDenGet(Url:string):void
		{
			var Action = "Action=add&";
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerDenGet);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerDenGet);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerDenGet);
			
			xhr.send("http://47.101.48.107/index/index/CrRoom.html?"+Action+Url+this.UserKey,"","get","text");
		}

		public static processHandlerDenGet(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerDenGet(data:any):void
		{	
			this.userName = wuling.login.getInstance().userID.text;
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 wuling.login.getInstance().removeSelf();
				 this.sendGetbuilding("RoomID="+Obj["data"]["RoomID"]);
				 Laya.timer.once(100,this,()=>{
					 this.sendUpdataMisson("RoomID="+Obj["data"]["RoomID"]+"&Mission1=1");
					 this.sendGetMission("RoomID="+module.Room.getInstance().RoomID);
				 });
				 module.Room.getInstance().RoomID = Obj["data"]["RoomID"];
				 module.Room.getInstance().RoomClass =Obj["data"];
				 //门店升级任务
				//  util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission2="+(Obj["data"][0]["RoomLevel"]+1));

				 wuling.Loading.getInstances();
				 wuling.Top.getInstance().topLv(Obj["data"]["RoomLevel"]);
				 //获取token
				 this.getToken();
				 wuling.login.getInstance().removeSelf();
				 util.HttpRequestUtil.sendGetAchievement("RoomID="+module.Room.getInstance().RoomID);
			 }else
			 {
				 module.Room.getInstance().message =Obj["message"];
				 this.sendDenGetOld("UserID="+wuling.login.getInstance().userID.text+"&RoomSupportNum=0")
			 }
			
		}
		public static errorHandlerDenGet(e:Object):void
		{
		}

//User-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 旧用户登录下发用户数据
		 * @param Url 添加的内容
		 */
		public static sendDenGetOld(Url:string):void
		{
			var Action = "Action=get&";
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerDenGetOld);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerDenGetOld);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerDenGetOld);
			
			xhr.send("http://47.101.48.107/index/index/CrRoom.html?"+Action+Url+this.UserKey,"","get","text");
		}

		public static processHandlerDenGetOld(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerDenGetOld(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 wuling.login.getInstance().removeSelf();
				 this.sendGetbuilding("RoomID="+Obj["data"]["RoomID"]);
				 Laya.timer.once(100,this,()=>{
					 this.sendUpdataMisson("RoomID="+Obj["data"]["RoomID"]+"&Mission1=1");
					 this.sendGetMission("RoomID="+module.Room.getInstance().RoomID);
				 });
				 module.Room.getInstance().RoomID = Obj["data"]["RoomID"];
				 module.Room.getInstance().RoomClass =Obj["data"];
				 wuling.Top.getInstance().manyi = Obj["data"]["RoomValue"];
				 wuling.Top.getInstance().zan();
				 //门店升级任务
				//  util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission2="+(Obj["data"][0]["RoomLevel"]+1));

				 wuling.Loading.getInstances();
				 wuling.Top.getInstance().topLv(Obj["data"]["RoomLevel"]);
				 this.jNum = module.Room.getInstance().RoomClass["outbnum"];
				 this.cNum = module.Room.getInstance().RoomClass["createbnum"];
				 //获取token
				 this.getToken();
				 wuling.login.getInstance().removeSelf();
				 util.HttpRequestUtil.sendGetAchievement("RoomID="+module.Room.getInstance().RoomID);
			 }
			
		}
		public static errorHandlerDenGetOld(e:Object):void
		{
		}
//Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 获取任务进度状况
		 * @param Url 发送的内容
		 */
		public static sendGetMission(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerGetMission);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerGetMission);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerGetMission);
			xhr.send("http://47.101.48.107/index/index/Crmisson.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerGetMission(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerGetMission(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 module.missionModule.getInstance().taskProgress =[Obj["data"]];
				 var missionProgress:Array<Object> = module.missionModule.getInstance().missionProgress
				 for(var i=0;i<missionProgress.length;i++)
				 {
					 if(Obj["data"][missionProgress[i]["conditions"]]==missionProgress[i]["missionNum"])
					 {
						 if(i+1==missionProgress.length||Obj["data"][missionProgress[i+1]["conditions"]]<missionProgress[i+1]["missionNum"])
						 {
							 this.sendGetCondition("RoomID="+module.Room.getInstance().RoomID);
						 }
					 }
				 }
			 }
			
		}
		public static errorHandlerGetMission(e:Object):void
		{
		}

//Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 获取任务奖励领取请况
		 * @param Url 发送的内容
		 */
		public static sendGetCondition(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerGetCondition);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerGetCondition);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerGetCondition);
			xhr.send("http://47.101.48.107/index/index/CrPrize.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerGetCondition(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerGetCondition(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 module.missionModule.getInstance().ToreceiveSituation =[Obj["data"]];
 			 }
			
		}
		public static errorHandlerGetCondition(e:Object):void
		{
		}
//Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 更新任务进度
		 * @param Url 发送的内容
		 */
		public static sendUpdataMisson(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=update&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerUpdataMisson);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerUpdataMisson);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerUpdataMisson);
			xhr.send("http://47.101.48.107/index/index/Crmisson.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerUpdataMisson(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerUpdataMisson(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
			 }
			 this.sendGetMission("RoomID="+module.Room.getInstance().RoomID);
			//  this.sendGetCondition("RoomID="+module.Room.getInstance().RoomID);
			
		}
		public static errorHandlerUpdataMisson(e:Object):void
		{
		}

//Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 领取任务奖励
		 * @param Url 发送的内容
		 */
		public static sendGetReward(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=update&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerGetReward);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerGetReward);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerGetReward);
			xhr.send("http://47.101.48.107/index/index/CrPrize.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerGetReward(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerGetReward(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 this.sendGetCondition("RoomID="+module.Room.getInstance().RoomID);
			 }
			
		}
		public static errorHandlerGetReward(e:Object):void
		{
		}
//shopInfo-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 更新房间属性
		 * @param Url 发送的内容
		 */
		public static sendSetLevel(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=update&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerSetLevel);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerSetLevel);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerSetLevel);
			xhr.send("http://47.101.48.107/index/index/CrRoom.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerSetLevel(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerSetLevel(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 this.sendGetRoomClass("RoomID="+module.Room.getInstance().RoomID);
			 }
			
		}
		public static errorHandlerSetLevel(e:Object):void
		{
		}

//shopInfo-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 获取房间属性
		 * @param Url 发送的内容
		 */
		public static sendGetRoomClass(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get2&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerGetRoomClass);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerGetRoomClass);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerGetRoomClass);
			xhr.send("http://47.101.48.107/index/index/CrRoom.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerGetRoomClass(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerGetRoomClass(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 //门店升级任务
				//  if(module.Room.getInstance().RoomClass["RoomLevel"]!=Obj["data"][0]["RoomLevel"])
				//  {
				// 	 util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission2="+(Obj["data"][0]["RoomLevel"]+1));
				//  }
				 module.Room.getInstance().RoomClass =Obj["data"];
				 wuling.Top.getInstance().topLv(Obj["data"]["RoomLevel"]);
				 if(module.mapModule.getInstance().loadingMap==true)
				 {
					 wuling.map.getInstance().onclick();
				 }
				 util.HttpRequestUtil.sendGetReloading("RoomID="+module.Room.getInstance().RoomID);
			 }
			
		}
		public static errorHandlerGetRoomClass(e:Object):void
		{
		}
//reloading-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 获取“角色表情包跟服装”领取情况
		 * @param Url 发送的内容
		 */
		public static sendGetReloading(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerGetReloading);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerGetReloading);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerGetReloading);
			xhr.send("http://47.101.48.107/index/index/CrPlayerLook.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerGetReloading(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerGetReloading(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			//  if(Obj["succeed"]==true&&Obj["data"].length>0)
			 if(Obj["succeed"]==true)
			 {
				 module.reloadingModule.getInstance().reloadingData =Obj["data"];
			 }
			
		}
		public static errorHandlerGetReloading(e:Object):void
		{
		}

//reloading-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * “角色表情包跟服装”领取
		 * @param Url 发送的内容
		 */
		public static sendUpdateReloading(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=update&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerUpdateReloading);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerUpdateReloading);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerUpdateReloading);
			xhr.send("http://47.101.48.107/index/index/CrPlayerLook.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerUpdateReloading(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerUpdateReloading(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 util.HttpRequestUtil.sendGetReloading("RoomID="+module.Room.getInstance().RoomID);
			 }
			
		}
		public static errorHandlerUpdateReloading(e:Object):void
		{
		}
//achievement成就-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * \成就领取
		 * @param Url 发送的内容
		 */
		public static sendUpdateAchievement(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=update&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerUpdateAchievement);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerUpdateAchievement);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerUpdateAchievement);
			xhr.send("http://47.101.48.107/index/index/CrAchievement.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerUpdateAchievement(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerUpdateAchievement(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 util.HttpRequestUtil.sendGetAchievement("RoomID="+module.Room.getInstance().RoomID);
			 }
			
		}
		public static errorHandlerUpdateAchievement(e:Object):void
		{
		}
//achievement成就-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * \获取成就领取情况
		 * @param Url 发送的内容
		 */
		public static sendGetAchievement(Url:string):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerGetAchievement);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerGetAchievement);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerGetAchievement);
			xhr.send("http://47.101.48.107/index/index/CrAchievement.html?"+Action+Url+this.UserKey,"","get","text");
			
		}

		public static processHandlerGetAchievement(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerGetAchievement(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["succeed"]==true)
			 {
				 module.achievemenModule.getInstance().getData =[Obj["data"]];
			 }
			
		}
		public static errorHandlerGetAchievement(e:Object):void
		{
		}

		//获取token接口-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 获取
		 * @param Url 发送的内容
		 */
		private static token:string = "";
		public static getToken():void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间;
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlergetToken);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlergetToken);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlergetToken);
			// xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addCustomer","unionid=o5rW10y5yWBbMbepzsKgmYk1TiW0&openId=ojpcy1rWz47LZOTrJgfHGC8JYfWQ&name=光宇&nickName=光宇&phone=16620480537&dealerCode=B530003","post","text");
			// xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addCustomer","openId=ojpcy1rWz47LZOTrJgfHGC8JYfWQ&nickName=光宇&dealerCode=B530003","post","text");
			xhr.send("https://wlc.smart360.cc/wz/tapi/au/user/tapiLogin","loginName=api&password=111111Aa","post","text");
			
		}

		public static processHandlergetToken(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlergetToken(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["state"]==200)
			 {
				this.token = Obj["data"]["token"];
				this.getbaobi();
			 }
			
		}
		public static errorHandlergetToken(e:Object):void
		{
		}

		//获取宝币信息接口-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 获取宝币
		 * @param Url 发送的内容
		 */
		public static getbaobi():void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlergetbaobi);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlergetbaobi);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlergetbaobi);
			xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/getCustomer","token="+this.token+"&unionId="+this.userName+"&openId=ojpcy1uDOpV67-JcgGKJ1RfLVKfQ","post","text");
			
		}

		public static processHandlergetbaobi(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlergetbaobi(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 //判断用户是否存在
			 if(Obj["state"]==200)
			 {
				wuling.Top.getInstance().jin = Obj["data"]["coin"];
				wuling.Top.getInstance().gabi();
			 }else
			 {
				 this.loginUser();
			 }
			
		}
		public static errorHandlergetbaobi(e:Object):void
		{
			alert(e);
		}
		//注册宝币账号接口-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 注册
		 * @param Url 发送的内容
		 */
		public static loginUser():void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerloginUser);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerloginUser);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerloginUser);
			xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addCustomer","token="+this.token+"&unionId="+this.userName+"&openId="+this.userName+"&nickName="+this.userName+"&dealerCode=9450019&avatarUrl=1rr&gender=1&province=1rr&city=1rr","post","text");
			
		}

		public static processHandlerloginUser(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerloginUser(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			//  alert("成功"+data);
			 if(Obj["state"]==200)
			 {
				this.getbaobi();
			 }
		}
		public static errorHandlerloginUser(e:Object):void
		{
			alert("失败"+e);
		}

		//宝币增减接口-------------------------------------------------------------------------------------------------------------------------------------------------------
		/**
		 * 宝币增减
		 * @param Url 发送的内容
		 */
		public static Modifybaobi(num:number):void
		{
			var xhr:Laya.HttpRequest = new Laya.HttpRequest();
			var Action = "Action=get&";
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandlerModifybaobi);
			xhr.once(Laya.Event.ERROR,this,this.errorHandlerModifybaobi);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandlerModifybaobi);
			xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addOrDelCoin","token="+this.token+"&wxUnionId="+this.userName+"&coin="+num+"&desc=zzzzzz","post","text");
			//判断宝币消耗产生
			if(num<0){
			   this.jNum = this.jNum-num;
			}else
			{
				this.cNum = this.cNum+num;
			}
		}

		public static processHandlerModifybaobi(data:Object):void
		{
			//console.log(data);
			
		}

		/**
		 * 返回数据
		 * @param data 返回的数据
		 */
		public static completeHandlerModifybaobi(data:any):void
		{	
			 var Obj:Array<Object> = JSON.parse(data);
			 if(Obj["state"]==200)
			 {
				this.getbaobi();
			 }
		}
		public static errorHandlerModifybaobi(e:Object):void
		{
			alert(e);
		}

		/**
		 * 获取排行榜
		 */
	public static sendGetRank(): void {
		var xhr: Laya.HttpRequest = new Laya.HttpRequest();
		var Action = "Action=order&";
		xhr.http.timeout = 10000;//设置超时时间；
		xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetRank);
		xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetRank);
		xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetRank);
		xhr.send("http://47.101.48.107/index/index/CrRoom.html?" + Action + this.UserKey + "&count=100&Fname=RoomCoin","","get", "text");

	}

	public static processHandlerGetRank(data: Object): void {

	}

	/**
	  * 返回数据
	  * @param data 返回的数据
	  */
	public static completeHandlerGetRank(data: any): void {
		var Obj: Array<Object> = JSON.parse(data);
		if (Obj["succeed"] == true) {
			wuling.rankList.getInstance().setRankData(Obj["data"]);
			for(var i = 0; i < Obj["data"].length; i++)
			{
				if(module.Room.getInstance().RoomID == Obj["data"][i]["RoomID"])
				{
					wuling.rankList.getInstance().myRank.text = (i + 1) + "";
					break;
				}
			}
			wuling.rankList.getInstance().show();
		}

	}
	public static errorHandlerGetRank(e: Object): void {
		
	}
		
	}
}