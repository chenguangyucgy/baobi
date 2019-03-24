var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var wuling;
(function (wuling) {
    var missionItem = /** @class */ (function (_super) {
        __extends(missionItem, _super);
        function missionItem() {
            var _this = _super.call(this) || this;
            /**任务数据 */
            _this.missionModule = module.missionModule.getInstance();
            _this.lingqu.on(Laya.Event.CLICK, _this, _this.onClick);
            return _this;
        }
        missionItem.prototype.miss = function (item, index) {
            var conditions = this.dataSource["conditions"];
            var missionNum = this.dataSource["missionNum"];
            var Rtext = this.dataSource["text"];
            var num = this.dataSource["num"];
            if (this.missionModule.taskProgress.length > 0) {
                if (this.missionModule.taskProgress[0][conditions] >= missionNum) {
                    this.lingqu.visible = true;
                    this.proText.text = missionNum + "/" + missionNum;
                    if (this.missionModule.ToreceiveSituation != undefined && this.missionModule.ToreceiveSituation.length > 0 && this.missionModule.ToreceiveSituation[0]["GetMission" + (num + 1) + "Prize"] == true) {
                        this.lingqu.visible = false;
                        this.reimg.skin = "mission/yiqu.png";
                    }
                }
                else {
                    this.lingqu.visible = false;
                    this.proText.text = this.missionModule.taskProgress[0][conditions] + "/" + missionNum;
                    this.reimg.skin = "mission/unfinished.png";
                }
            }
            this.renwu.text = Rtext;
            var numStr = String(this.dataSource["num"]);
            switch (numStr.length) {
                case 1:
                    this.one.skin = "mission/" + numStr.slice(0, 1) + ".png";
                    this.two.visible = false;
                    this.three.visible = false;
                    this.bg.skin = "mission/kuang110.png";
                    // this.two.visible =true;
                    // this.three.alpha = 0;
                    break;
                case 2:
                    this.one.skin = "mission/" + numStr.slice(0, 1) + ".png";
                    this.two.skin = "mission/10.png";
                    this.three.skin = "mission/" + numStr.slice(1) + ".png";
                    this.two.visible = true;
                    this.three.visible = true;
                    this.bg.skin = "mission/kuang99.png";
                    if (numStr.slice(1) == "0") {
                        this.one.skin = "mission/" + numStr.slice(0, 1) + ".png";
                        this.two.skin = "mission/10.png";
                        this.three.visible = false;
                        this.bg.skin = "mission/kuang1020.png";
                        if (numStr.slice(0, 1) == "1") {
                            this.one.skin = "mission/10.png";
                            this.two.visible = false;
                            this.bg.skin = "mission/kuang110.png";
                        }
                    }
                    else {
                        if (numStr.slice(0, 1) == "1") {
                            this.one.skin = "mission/10.png";
                            this.two.skin = "mission/" + numStr.slice(1) + ".png";
                            this.three.visible = false;
                            this.bg.skin = "mission/kuang1020.png";
                        }
                    }
                    // this.three.alpha = 0;
                    break;
                case 3:
                    this.one.skin = "mission/" + numStr.slice(0, 1) + ".png";
                    this.two.skin = "mission/" + numStr.slice(1, 2) + ".png";
                    this.three.skin = "mission/" + numStr.slice(2) + ".png";
                    this.two.visible = true;
                    this.three.visible = true;
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
        };
        missionItem.prototype.onClick = function () {
            util.HttpRequestUtil.sendGetReward("RoomID=" + module.Room.getInstance().RoomID + "&GetMission" + (this.dataSource["num"] + 1) + "Prize=1");
            this.add.x = 222;
            this.add.y = 34;
            this.add.visible = true;
            this.rewardjin();
            this.lingqu.disabled = true;
            this.lingqu.visible = false;
            this.reimg.skin = "mission/yiqu.png";
            this.add.alpha = 1;
            Laya.Tween.to(this.add, { alpha: 0, y: 0 }, 1000);
            wuling.Top.getInstance().jin += this.dataSource["rewardJin"];
            wuling.Top.getInstance().gabi();
        };
        //显示奖励金额
        missionItem.prototype.rewardjin = function () {
            var rewards = String(this.dataSource["rewardJin"]);
            switch (rewards.length) {
                case 1:
                    this.jin1.skin = "rankList/org" + rewards.slice(0, 1) + ".png";
                    this.jin2.visible = false;
                    this.jin3.visible = false;
                    this.jin4.visible = false;
                    break;
                case 2:
                    this.jin1.skin = "rankList/org" + rewards.slice(0, 1) + ".png";
                    this.jin2.skin = "rankList/org" + rewards.slice(1) + ".png";
                    this.jin2.visible = true;
                    this.jin3.visible = false;
                    this.jin4.visible = false;
                    break;
                case 3:
                    this.jin1.skin = "rankList/org" + rewards.slice(0, 1) + ".png";
                    this.jin2.skin = "rankList/org" + rewards.slice(1, 2) + ".png";
                    this.jin3.skin = "rankList/org" + rewards.slice(2) + ".png";
                    this.jin2.visible = true;
                    this.jin3.visible = true;
                    this.jin4.visible = false;
                    break;
                case 4:
                    this.jin1.skin = "rankList/org" + rewards.slice(0, 1) + ".png";
                    this.jin2.skin = "rankList/org" + rewards.slice(1, 2) + ".png";
                    this.jin3.skin = "rankList/org" + rewards.slice(2, 3) + ".png";
                    this.jin4.skin = "rankList/org" + rewards.slice(3) + ".png";
                    this.jin2.visible = true;
                    this.jin3.visible = true;
                    this.jin4.visible = true;
                    break;
            }
        };
        return missionItem;
    }(ui.missionItemUI));
    wuling.missionItem = missionItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=missionItem.js.map