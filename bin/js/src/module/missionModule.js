/**
* name
*/
var module;
(function (module) {
    var missionModule = /** @class */ (function () {
        function missionModule() {
            /**所有任务进度 */
            this._taskProgress = [];
            /**任务领取状况 */
            this._ToreceiveSituation = [];
            /**任务数据 */
            this.missionData = [
                { "text": "门店达到2级", "num": 1, "missionNum": 2, conditions: "Mission2", rewardJin: 10 },
                { "text": "门店达到3级", "num": 2, "missionNum": 3, conditions: "Mission2", rewardJin: 15 },
                { "text": "门店达到4级", "num": 3, "missionNum": 4, conditions: "Mission2", rewardJin: 20 },
                { "text": "门店达到5级", "num": 4, "missionNum": 5, conditions: "Mission2", rewardJin: 25 },
                { "text": "门店达到6级", "num": 5, "missionNum": 6, conditions: "Mission2", rewardJin: 30 },
                { "text": "门店达到7级", "num": 6, "missionNum": 7, conditions: "Mission2", rewardJin: 35 },
                { "text": "门店达到8级", "num": 7, "missionNum": 8, conditions: "Mission2", rewardJin: 40 },
                { "text": "门店达到9级", "num": 8, "missionNum": 9, conditions: "Mission2", rewardJin: 45 },
                { "text": "门店达到10级", "num": 9, "missionNum": 10, conditions: "Mission2", rewardJin: 50 },
                { "text": "门店达到11级", "num": 10, "missionNum": 11, conditions: "Mission2", rewardJin: 55 },
                { "text": "门店达到12级", "num": 11, "missionNum": 12, conditions: "Mission2", rewardJin: 60 },
                { "text": "门店达到13级", "num": 12, "missionNum": 13, conditions: "Mission2", rewardJin: 65 },
                { "text": "门店达到14级", "num": 13, "missionNum": 14, conditions: "Mission2", rewardJin: 70 },
                { "text": "门店达到15级", "num": 14, "missionNum": 15, conditions: "Mission2", rewardJin: 75 },
                { "text": "门店达到16级", "num": 15, "missionNum": 16, conditions: "Mission2", rewardJin: 80 },
                { "text": "门店达到17级", "num": 16, "missionNum": 17, conditions: "Mission2", rewardJin: 85 },
                { "text": "门店达到18级", "num": 17, "missionNum": 18, conditions: "Mission2", rewardJin: 90 },
                { "text": "门店达到19级", "num": 18, "missionNum": 19, conditions: "Mission2", rewardJin: 95 },
                { "text": "门店达到20级", "num": 19, "missionNum": 20, conditions: "Mission2", rewardJin: 100 },
                { "text": "门店达到21级", "num": 20, "missionNum": 21, conditions: "Mission2", rewardJin: 105 },
                { "text": "门店达到22级", "num": 21, "missionNum": 22, conditions: "Mission2", rewardJin: 110 },
                { "text": "门店达到23级", "num": 22, "missionNum": 23, conditions: "Mission2", rewardJin: 125 },
                { "text": "门店达到24级", "num": 23, "missionNum": 24, conditions: "Mission2", rewardJin: 120 },
                { "text": "门店达到25级", "num": 24, "missionNum": 25, conditions: "Mission2", rewardJin: 125 },
                { "text": "门店达到26级", "num": 25, "missionNum": 26, conditions: "Mission2", rewardJin: 130 },
                { "text": "门店达到27级", "num": 26, "missionNum": 27, conditions: "Mission2", rewardJin: 135 },
                { "text": "门店达到28级", "num": 27, "missionNum": 28, conditions: "Mission2", rewardJin: 140 },
                { "text": "门店达到29级", "num": 28, "missionNum": 29, conditions: "Mission2", rewardJin: 145 },
                { "text": "门店达到30级", "num": 29, "missionNum": 30, conditions: "Mission2", rewardJin: 150 },
                { "text": "到店人数达到10", "num": 30, "missionNum": 31, conditions: "Mission31", rewardJin: 3 },
            ];
        }
        Object.defineProperty(missionModule.prototype, "taskProgress", {
            /**获取所有任务进度 */
            get: function () {
                return this._taskProgress;
            },
            /**设置所有任务进度 */
            set: function (ID) {
                this._taskProgress = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(missionModule.prototype, "ToreceiveSituation", {
            /**获取任务领取状况 */
            get: function () {
                return this._ToreceiveSituation;
            },
            /**设置任务领取状况 */
            set: function (ID) {
                var _this = this;
                this._ToreceiveSituation = ID;
                Laya.timer.once(100, this, function () {
                    for (var i = 2; i < (_this.missionData.length + 2); i++) {
                        if (_this._taskProgress[0][_this.missionData[i - 2]["conditions"]] >= _this.missionData[i - 2]["missionNum"]) {
                            if (_this._ToreceiveSituation.length == 0) {
                                wuling.Bottom.getInstance().renwu.visible = true;
                                return;
                            }
                            if (_this._ToreceiveSituation.length > 0 && ID[0]["GetMission" + i + "Prize"] == false) {
                                wuling.Bottom.getInstance().renwu.visible = true;
                                return;
                            }
                        }
                    }
                    wuling.Bottom.getInstance().renwu.visible = false;
                });
            },
            enumerable: true,
            configurable: true
        });
        missionModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new missionModule;
            }
            return this._instance;
        };
        return missionModule;
    }());
    module.missionModule = missionModule;
})(module || (module = {}));
//# sourceMappingURL=missionModule.js.map