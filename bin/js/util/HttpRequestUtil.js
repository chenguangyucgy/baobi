/**
* 接口
*/
var util;
(function (util) {
    var HttpRequestUtil = /** @class */ (function () {
        function HttpRequestUtil() {
        }
        //building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 更改建筑内容
         * @param Url 更新的内容
         */
        HttpRequestUtil.sendUpdataBuilding = function (Url) {
            if (module.Room.getInstance().RoomID != null) {
                var xhr = new Laya.HttpRequest();
                var Action = "Action=update&";
                var RoomID = "RoomID=" + module.Room.getInstance().RoomID + "&";
                xhr.http.timeout = 10000; //设置超时时间；
                xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerUpdataBuilding);
                xhr.once(Laya.Event.ERROR, this, this.errorHandlerUpdataBuilding);
                xhr.on(Laya.Event.PROGRESS, this, this.processHandlerUpdataBuilding);
                xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?" + Action + RoomID + Url + this.UserKey, "", "get", "text");
            }
        };
        HttpRequestUtil.processHandlerUpdataBuilding = function (data) {
            //console.log(data);
        };
        /**
         * 获取后台返回的数据
         * @param data 后台返回的数据
         */
        HttpRequestUtil.completeHandlerUpdataBuilding = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
            }
        };
        HttpRequestUtil.errorHandlerUpdataBuilding = function (e) {
        };
        //building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 添加小物品
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendAddBuilding1 = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=add&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerAddBuilding1);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerAddBuilding1);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerAddBuilding1);
            xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerAddBuilding1 = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerAddBuilding1 = function (data) {
            var Obj = JSON.parse(data);
            var namecar = wuling.map.getInstance().namecar;
            if (Obj["succeed"] == true) {
                namecar[namecar.length - 1].RoomObjectID = Obj["data"]["RoomObjectID"];
            }
        };
        HttpRequestUtil.errorHandlerAddBuilding1 = function (e) {
        };
        //building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 添加小物品2
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendAddBuilding2 = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=add&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerAddBuilding2);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerAddBuilding2);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerAddBuilding2);
            xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerAddBuilding2 = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerAddBuilding2 = function (data) {
            var Obj = JSON.parse(data);
            var nameObject = wuling.map.getInstance().nameObject;
            if (Obj["succeed"] == true) {
                //   this.sendGetbuilding("RoomID="+module.Room.getInstance().RoomID);
                nameObject[nameObject.length - 1].RoomObjectID = Obj["data"]["RoomObjectID"];
            }
        };
        HttpRequestUtil.errorHandlerAddBuilding2 = function (e) {
        };
        //building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
                 * 删除小物品
                 * @param Url 发送的内容
                 */
        HttpRequestUtil.sendRemoveBuilding = function (Url) {
            if (module.Room.getInstance().RoomID != null) {
                var xhr = new Laya.HttpRequest();
                var Action = "Action=delete&";
                var RoomID = "RoomID=" + module.Room.getInstance().RoomID + "&";
                xhr.http.timeout = 10000; //设置超时时间；
                xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerRemoveBuilding1);
                xhr.once(Laya.Event.ERROR, this, this.errorHandlerRemoveBuilding1);
                xhr.on(Laya.Event.PROGRESS, this, this.processHandlerRemoveBuilding1);
                xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?" + Action + RoomID + Url + this.UserKey, "", "get", "text");
            }
        };
        HttpRequestUtil.processHandlerRemoveBuilding1 = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerRemoveBuilding1 = function (data) {
            var Obj = JSON.parse(data);
            var namecar = wuling.map.getInstance().namecar;
            if (Obj["succeed"] == true) {
                this.sendGetbuilding("RoomID=" + module.Room.getInstance().RoomID);
            }
        };
        HttpRequestUtil.errorHandlerRemoveBuilding1 = function (e) {
        };
        //building-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 获取全部建筑数据
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendGetbuilding = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetbuilding);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetbuilding);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetbuilding);
            xhr.send("http://47.101.48.107/index/index/CrRoomObject.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetbuilding = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerGetbuilding = function (data) {
            var Obj = JSON.parse(data);
            //  if(Obj["succeed"]==true)
            //  {
            module.buildingModule.getInstance().buildingAll = Obj["data"];
            //  }
        };
        HttpRequestUtil.errorHandlerGetbuilding = function (e) {
        };
        //User-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 添加和获取用户数据
         * @param Url 添加的内容
         */
        HttpRequestUtil.sendAddGet = function (Url) {
            var Action = "Action=add&";
            var xhr = new Laya.HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerAddGet);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerAddGet);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerAddGet);
            xhr.send(this.http + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerAddGet = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerAddGet = function (data) {
            var _this = this;
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                this.sendGetbuilding("RoomID=" + Obj["data"]["RoomID"]);
                Laya.timer.once(100, this, function () {
                    _this.sendUpdataMisson("RoomID=" + Obj["data"]["RoomID"] + "&Mission1=1");
                    _this.sendGetMission("RoomID=" + module.Room.getInstance().RoomID);
                });
                module.Room.getInstance().RoomID = Obj["data"]["RoomID"];
                module.Room.getInstance().RoomClass = Obj["data"];
                wuling.Loading.getInstances();
                wuling.login.getInstance().removeSelf();
            }
            else {
                module.Room.getInstance().message = Obj["message"];
            }
        };
        HttpRequestUtil.errorHandlerAddGet = function (e) {
        };
        //User-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 新用户登录下发用户数据
         * @param Url 添加的内容
         */
        HttpRequestUtil.sendDenGet = function (Url) {
            var Action = "Action=add&";
            var xhr = new Laya.HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerDenGet);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerDenGet);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerDenGet);
            xhr.send("http://47.101.48.107/index/index/CrRoom.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerDenGet = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerDenGet = function (data) {
            var _this = this;
            this.userName = wuling.login.getInstance().userID.text;
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                wuling.login.getInstance().removeSelf();
                this.sendGetbuilding("RoomID=" + Obj["data"]["RoomID"]);
                Laya.timer.once(100, this, function () {
                    _this.sendUpdataMisson("RoomID=" + Obj["data"]["RoomID"] + "&Mission1=1");
                    _this.sendGetMission("RoomID=" + module.Room.getInstance().RoomID);
                });
                module.Room.getInstance().RoomID = Obj["data"]["RoomID"];
                module.Room.getInstance().RoomClass = Obj["data"];
                //门店升级任务
                //  util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission2="+(Obj["data"][0]["RoomLevel"]+1));
                wuling.Loading.getInstances();
                wuling.Top.getInstance().topLv(Obj["data"]["RoomLevel"]);
                //获取token
                this.getToken();
                wuling.login.getInstance().removeSelf();
                util.HttpRequestUtil.sendGetAchievement("RoomID=" + module.Room.getInstance().RoomID);
            }
            else {
                module.Room.getInstance().message = Obj["message"];
                this.sendDenGetOld("UserID=" + wuling.login.getInstance().userID.text + "&RoomSupportNum=0");
            }
        };
        HttpRequestUtil.errorHandlerDenGet = function (e) {
        };
        //User-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 旧用户登录下发用户数据
         * @param Url 添加的内容
         */
        HttpRequestUtil.sendDenGetOld = function (Url) {
            var Action = "Action=get&";
            var xhr = new Laya.HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerDenGetOld);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerDenGetOld);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerDenGetOld);
            xhr.send("http://47.101.48.107/index/index/CrRoom.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerDenGetOld = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerDenGetOld = function (data) {
            var _this = this;
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                wuling.login.getInstance().removeSelf();
                this.sendGetbuilding("RoomID=" + Obj["data"]["RoomID"]);
                Laya.timer.once(100, this, function () {
                    _this.sendUpdataMisson("RoomID=" + Obj["data"]["RoomID"] + "&Mission1=1");
                    _this.sendGetMission("RoomID=" + module.Room.getInstance().RoomID);
                });
                module.Room.getInstance().RoomID = Obj["data"]["RoomID"];
                module.Room.getInstance().RoomClass = Obj["data"];
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
                util.HttpRequestUtil.sendGetAchievement("RoomID=" + module.Room.getInstance().RoomID);
            }
        };
        HttpRequestUtil.errorHandlerDenGetOld = function (e) {
        };
        //Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 获取任务进度状况
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendGetMission = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetMission);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetMission);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetMission);
            xhr.send("http://47.101.48.107/index/index/Crmisson.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetMission = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerGetMission = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                module.missionModule.getInstance().taskProgress = [Obj["data"]];
                var missionProgress = module.missionModule.getInstance().missionProgress;
                for (var i = 0; i < missionProgress.length; i++) {
                    if (Obj["data"][missionProgress[i]["conditions"]] == missionProgress[i]["missionNum"]) {
                        if (i + 1 == missionProgress.length || Obj["data"][missionProgress[i + 1]["conditions"]] < missionProgress[i + 1]["missionNum"]) {
                            this.sendGetCondition("RoomID=" + module.Room.getInstance().RoomID);
                        }
                    }
                }
            }
        };
        HttpRequestUtil.errorHandlerGetMission = function (e) {
        };
        //Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 获取任务奖励领取请况
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendGetCondition = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetCondition);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetCondition);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetCondition);
            xhr.send("http://47.101.48.107/index/index/CrPrize.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetCondition = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerGetCondition = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                module.missionModule.getInstance().ToreceiveSituation = [Obj["data"]];
            }
        };
        HttpRequestUtil.errorHandlerGetCondition = function (e) {
        };
        //Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 更新任务进度
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendUpdataMisson = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=update&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerUpdataMisson);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerUpdataMisson);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerUpdataMisson);
            xhr.send("http://47.101.48.107/index/index/Crmisson.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerUpdataMisson = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerUpdataMisson = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
            }
            this.sendGetMission("RoomID=" + module.Room.getInstance().RoomID);
            //  this.sendGetCondition("RoomID="+module.Room.getInstance().RoomID);
        };
        HttpRequestUtil.errorHandlerUpdataMisson = function (e) {
        };
        //Mission-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 领取任务奖励
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendGetReward = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=update&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetReward);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetReward);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetReward);
            xhr.send("http://47.101.48.107/index/index/CrPrize.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetReward = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerGetReward = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                this.sendGetCondition("RoomID=" + module.Room.getInstance().RoomID);
            }
        };
        HttpRequestUtil.errorHandlerGetReward = function (e) {
        };
        //shopInfo-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 更新房间属性
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendSetLevel = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=update&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerSetLevel);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerSetLevel);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerSetLevel);
            xhr.send("http://47.101.48.107/index/index/CrRoom.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerSetLevel = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerSetLevel = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                this.sendGetRoomClass("RoomID=" + module.Room.getInstance().RoomID);
            }
        };
        HttpRequestUtil.errorHandlerSetLevel = function (e) {
        };
        //shopInfo-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 获取房间属性
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendGetRoomClass = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get2&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetRoomClass);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetRoomClass);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetRoomClass);
            xhr.send("http://47.101.48.107/index/index/CrRoom.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetRoomClass = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerGetRoomClass = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                //门店升级任务
                //  if(module.Room.getInstance().RoomClass["RoomLevel"]!=Obj["data"][0]["RoomLevel"])
                //  {
                // 	 util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission2="+(Obj["data"][0]["RoomLevel"]+1));
                //  }
                module.Room.getInstance().RoomClass = Obj["data"];
                wuling.Top.getInstance().topLv(Obj["data"]["RoomLevel"]);
                if (module.mapModule.getInstance().loadingMap == true) {
                    wuling.map.getInstance().onclick();
                }
                util.HttpRequestUtil.sendGetReloading("RoomID=" + module.Room.getInstance().RoomID);
            }
        };
        HttpRequestUtil.errorHandlerGetRoomClass = function (e) {
        };
        //reloading-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 获取“角色表情包跟服装”领取情况
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendGetReloading = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetReloading);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetReloading);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetReloading);
            xhr.send("http://47.101.48.107/index/index/CrPlayerLook.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetReloading = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerGetReloading = function (data) {
            var Obj = JSON.parse(data);
            //  if(Obj["succeed"]==true&&Obj["data"].length>0)
            if (Obj["succeed"] == true) {
                module.reloadingModule.getInstance().reloadingData = Obj["data"];
            }
        };
        HttpRequestUtil.errorHandlerGetReloading = function (e) {
        };
        //reloading-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * “角色表情包跟服装”领取
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendUpdateReloading = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=update&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerUpdateReloading);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerUpdateReloading);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerUpdateReloading);
            xhr.send("http://47.101.48.107/index/index/CrPlayerLook.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerUpdateReloading = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerUpdateReloading = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                util.HttpRequestUtil.sendGetReloading("RoomID=" + module.Room.getInstance().RoomID);
            }
        };
        HttpRequestUtil.errorHandlerUpdateReloading = function (e) {
        };
        //achievement成就-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * \成就领取
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendUpdateAchievement = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=update&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerUpdateAchievement);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerUpdateAchievement);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerUpdateAchievement);
            xhr.send("http://47.101.48.107/index/index/CrAchievement.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerUpdateAchievement = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerUpdateAchievement = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                util.HttpRequestUtil.sendGetAchievement("RoomID=" + module.Room.getInstance().RoomID);
            }
        };
        HttpRequestUtil.errorHandlerUpdateAchievement = function (e) {
        };
        //achievement成就-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * \获取成就领取情况
         * @param Url 发送的内容
         */
        HttpRequestUtil.sendGetAchievement = function (Url) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetAchievement);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetAchievement);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetAchievement);
            xhr.send("http://47.101.48.107/index/index/CrAchievement.html?" + Action + Url + this.UserKey, "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetAchievement = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerGetAchievement = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                module.achievemenModule.getInstance().getData = [Obj["data"]];
            }
        };
        HttpRequestUtil.errorHandlerGetAchievement = function (e) {
        };
        HttpRequestUtil.getToken = function () {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间;
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlergetToken);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlergetToken);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlergetToken);
            // xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addCustomer","unionid=o5rW10y5yWBbMbepzsKgmYk1TiW0&openId=ojpcy1rWz47LZOTrJgfHGC8JYfWQ&name=光宇&nickName=光宇&phone=16620480537&dealerCode=B530003","post","text");
            // xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addCustomer","openId=ojpcy1rWz47LZOTrJgfHGC8JYfWQ&nickName=光宇&dealerCode=B530003","post","text");
            xhr.send("https://wlc.smart360.cc/wz/tapi/au/user/tapiLogin", "loginName=api&password=111111Aa", "post", "text");
        };
        HttpRequestUtil.processHandlergetToken = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlergetToken = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["state"] == 200) {
                this.token = Obj["data"]["token"];
                this.getbaobi();
            }
        };
        HttpRequestUtil.errorHandlergetToken = function (e) {
        };
        //获取宝币信息接口-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 获取宝币
         * @param Url 发送的内容
         */
        HttpRequestUtil.getbaobi = function () {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlergetbaobi);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlergetbaobi);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlergetbaobi);
            xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/getCustomer", "token=" + this.token + "&unionId=" + this.userName + "&openId=ojpcy1uDOpV67-JcgGKJ1RfLVKfQ", "post", "text");
        };
        HttpRequestUtil.processHandlergetbaobi = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlergetbaobi = function (data) {
            var Obj = JSON.parse(data);
            //判断用户是否存在
            if (Obj["state"] == 200) {
                wuling.Top.getInstance().jin = Obj["data"]["coin"];
                wuling.Top.getInstance().gabi();
            }
            else {
                this.loginUser();
            }
        };
        HttpRequestUtil.errorHandlergetbaobi = function (e) {
            alert(e);
        };
        //注册宝币账号接口-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 注册
         * @param Url 发送的内容
         */
        HttpRequestUtil.loginUser = function () {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerloginUser);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerloginUser);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerloginUser);
            xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addCustomer", "token=" + this.token + "&unionId=" + this.userName + "&openId=" + this.userName + "&nickName=" + this.userName + "&dealerCode=9450019&avatarUrl=1rr&gender=1&province=1rr&city=1rr", "post", "text");
        };
        HttpRequestUtil.processHandlerloginUser = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerloginUser = function (data) {
            var Obj = JSON.parse(data);
            //  alert("成功"+data);
            if (Obj["state"] == 200) {
                this.getbaobi();
            }
        };
        HttpRequestUtil.errorHandlerloginUser = function (e) {
            alert("失败" + e);
        };
        //宝币增减接口-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 宝币增减
         * @param Url 发送的内容
         */
        HttpRequestUtil.Modifybaobi = function (num) {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=get&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerModifybaobi);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerModifybaobi);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerModifybaobi);
            xhr.send("https://wlc.smart360.cc/wz/tapi/htGame/addOrDelCoin", "token=" + this.token + "&wxUnionId=" + this.userName + "&coin=" + num + "&desc=zzzzzz", "post", "text");
            //判断宝币消耗产生
            if (num < 0) {
                this.jNum = this.jNum - num;
            }
            else {
                this.cNum = this.cNum + num;
            }
        };
        HttpRequestUtil.processHandlerModifybaobi = function (data) {
            //console.log(data);
        };
        /**
         * 返回数据
         * @param data 返回的数据
         */
        HttpRequestUtil.completeHandlerModifybaobi = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["state"] == 200) {
                this.getbaobi();
            }
        };
        HttpRequestUtil.errorHandlerModifybaobi = function (e) {
            alert(e);
        };
        /**
         * 获取排行榜
         */
        HttpRequestUtil.sendGetRank = function () {
            var xhr = new Laya.HttpRequest();
            var Action = "Action=order&";
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerGetRank);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerGetRank);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerGetRank);
            xhr.send("http://47.101.48.107/index/index/CrRoom.html?" + Action + this.UserKey + "&count=100&Fname=RoomCoin", "", "get", "text");
        };
        HttpRequestUtil.processHandlerGetRank = function (data) {
        };
        /**
          * 返回数据
          * @param data 返回的数据
          */
        HttpRequestUtil.completeHandlerGetRank = function (data) {
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                wuling.rankList.getInstance().setRankData(Obj["data"]);
                for (var i = 0; i < Obj["data"].length; i++) {
                    if (module.Room.getInstance().RoomID == Obj["data"][i]["RoomID"]) {
                        wuling.rankList.getInstance().myRank.text = (i + 1) + "";
                        break;
                    }
                }
                wuling.rankList.getInstance().show();
            }
        };
        HttpRequestUtil.errorHandlerGetRank = function (e) {
        };
        /**请求头*/
        HttpRequestUtil.http = "http://47.101.48.107/index/index/CrRoom.html?";
        /**UserKey*/
        HttpRequestUtil.UserKey = "&UserKey=5FAE486F210FAE290B328C25033084555F12F020E5A6127F";
        /**产生宝币总值 */
        HttpRequestUtil.cNum = 0;
        /**消耗宝币总值 */
        HttpRequestUtil.jNum = 0;
        HttpRequestUtil.ArrObjZi = [];
        /**用户名*/
        HttpRequestUtil.userName = "";
        //获取token接口-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 获取
         * @param Url 发送的内容
         */
        HttpRequestUtil.token = "";
        return HttpRequestUtil;
    }());
    util.HttpRequestUtil = HttpRequestUtil;
})(util || (util = {}));
//# sourceMappingURL=HttpRequestUtil.js.map