/**
* name
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
                xhr.send("http://47.101.48.107/CrRoomObject.ashx?" + Action + RoomID + Url + this.UserKey, "", "get", "text");
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
            xhr.send("http://47.101.48.107/CrRoomObject.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
                namecar[namecar.length - 1].RoomObjectID = Obj["data"][0]["RoomObjectID"];
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
            xhr.send("http://47.101.48.107/CrRoomObject.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
                nameObject[nameObject.length - 1].RoomObjectID = Obj["data"][0]["RoomObjectID"];
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
                xhr.send("http://47.101.48.107/CrRoomObject.ashx?" + Action + RoomID + Url + this.UserKey, "", "get", "text");
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
            xhr.send("http://47.101.48.107/CrRoomObject.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
            if (Obj["succeed"] == true) {
                module.buildingModule.getInstance().buildingAll = Obj["data"];
            }
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
                this.sendGetbuilding("RoomID=" + Obj["data"][0]["RoomID"]);
                Laya.timer.once(100, this, function () {
                    _this.sendUpdataMisson("RoomID=" + Obj["data"][0]["RoomID"] + "&Mission1=1");
                    _this.sendGetMission("RoomID=" + module.Room.getInstance().RoomID);
                });
                module.Room.getInstance().RoomID = Obj["data"][0]["RoomID"];
                module.Room.getInstance().RoomClass = Obj["data"][0];
                module.Room.getInstance().message = Obj["message"];
                wuling.Loading.getInstances();
                wuling.login.getInstance().removeSelf();
            }
        };
        HttpRequestUtil.errorHandlerAddGet = function (e) {
        };
        //User-------------------------------------------------------------------------------------------------------------------------------------------------------
        /**
         * 登录下发用户数据
         * @param Url 添加的内容
         */
        HttpRequestUtil.sendDenGet = function (Url) {
            var Action = "Action=add&";
            var xhr = new Laya.HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandlerDenGet);
            xhr.once(Laya.Event.ERROR, this, this.errorHandlerDenGet);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandlerDenGet);
            xhr.send(this.http + Action + Url + this.UserKey, "", "get", "text");
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
            var Obj = JSON.parse(data);
            if (Obj["succeed"] == true) {
                wuling.login.getInstance().removeSelf();
                this.sendGetbuilding("RoomID=" + Obj["data"][0]["RoomID"]);
                Laya.timer.once(100, this, function () {
                    _this.sendUpdataMisson("RoomID=" + Obj["data"][0]["RoomID"] + "&Mission1=1");
                    _this.sendGetMission("RoomID=" + module.Room.getInstance().RoomID);
                });
                module.Room.getInstance().RoomID = Obj["data"][0]["RoomID"];
                module.Room.getInstance().RoomClass = Obj["data"][0];
                module.Room.getInstance().message = Obj["message"];
                //门店升级任务
                util.HttpRequestUtil.sendUpdataMisson("RoomID=" + module.Room.getInstance().RoomID + "&Mission2=" + (Obj["data"][0]["RoomLevel"] + 1));
                wuling.Loading.getInstances();
                wuling.Top.getInstance().topLv(Obj["data"][0]["RoomLevel"]);
                wuling.login.getInstance().removeSelf();
            }
        };
        HttpRequestUtil.errorHandlerDenGet = function (e) {
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
            xhr.send("http://47.101.48.107/CrMisson.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
                module.missionModule.getInstance().taskProgress = Obj["data"];
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
            xhr.send("http://47.101.48.107/CrPrize.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
                module.missionModule.getInstance().ToreceiveSituation = Obj["data"];
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
            xhr.send("http://47.101.48.107/CrMisson.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
                this.sendGetMission("RoomID=" + module.Room.getInstance().RoomID);
                this.sendGetCondition("RoomID=" + module.Room.getInstance().RoomID);
            }
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
            xhr.send("http://47.101.48.107/CrPrize.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
            xhr.send("http://47.101.48.107/CrRoom.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
            xhr.send("http://47.101.48.107/CrRoom.ashx?" + Action + Url + this.UserKey, "", "get", "text");
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
                if (module.Room.getInstance().RoomClass["RoomLevel"] != Obj["data"][0]["RoomLevel"]) {
                    util.HttpRequestUtil.sendUpdataMisson("RoomID=" + module.Room.getInstance().RoomID + "&Mission2=" + (Obj["data"][0]["RoomLevel"] + 1));
                }
                module.Room.getInstance().RoomClass = Obj["data"][0];
                wuling.Top.getInstance().topLv(Obj["data"][0]["RoomLevel"]);
                if (module.mapModule.getInstance().loadingMap == true) {
                    wuling.map.getInstance().onclick();
                }
            }
        };
        HttpRequestUtil.errorHandlerGetRoomClass = function (e) {
        };
        /**请求头*/
        HttpRequestUtil.http = "http://47.101.48.107/CrRoom.ashx?";
        /**UserKey*/
        HttpRequestUtil.UserKey = "&UserKey=5FAE486F210FAE290B328C25033084555F12F020E5A6127F";
        HttpRequestUtil.ArrObjZi = [];
        return HttpRequestUtil;
    }());
    util.HttpRequestUtil = HttpRequestUtil;
})(util || (util = {}));
//# sourceMappingURL=HttpRequestUtil.js.map