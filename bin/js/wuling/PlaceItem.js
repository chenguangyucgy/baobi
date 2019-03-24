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
    var PlaceItem = /** @class */ (function (_super) {
        __extends(PlaceItem, _super);
        function PlaceItem() {
            var _this = _super.call(this) || this;
            /**获取map页面*/
            _this._map = wuling.map.getInstance();
            /**placeItemModule数据*/
            _this._placeItemModule = module.placeItemModule.getInstance();
            /**当前放置的坐标的下标*/
            _this._zb = null;
            _this._i = 0;
            //动画
            _this._mc = new Laya.MovieClip();
            _this._arr = [{ a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }];
            _this.onMonitor();
            //取消
            _this.cancel.on(Laya.Event.CLICK, _this, _this.onclick);
            //点击确定
            _this.ensure.on(Laya.Event.CLICK, _this, _this.onclick);
            //移动
            _this.shift.on(Laya.Event.CLICK, _this, _this.onclick);
            //拆除
            _this.demolition.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.showhome();
            _this.hideenDom();
            _this.imgBtn.gray = true;
            _this._map.digeBox.visible = true;
            _this.zOrder = 500;
            _this.cancel.x = 107;
            _this.ensure.x = 30;
            _this.rotate.visible = false;
            return _this;
        }
        /**拖动 */
        PlaceItem.prototype.onMonitor = function () {
            this.imgBtn.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
            this.imgBtn.on(Laya.Event.MOUSE_OUT, this, this.startPanel);
            this.imgBtn.on(Laya.Event.MOUSE_OVER, this, this.stopPanel);
            this.on(Laya.Event.DRAG_MOVE, this, this.dragMove);
        };
        /**拖动设置*/
        PlaceItem.prototype.onStartDrag = function (e) {
            var wu = wuling.map.getInstance();
            var dragRegion = new Laya.Rectangle(wu.width / 2, wu.height / 2, 2600, 1700);
            //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
            this.startDrag(dragRegion, true, 10);
        };
        /**监听拖动 */
        PlaceItem.prototype.dragMove = function () {
            this.imgBtn.gray = true;
            //选择坐标集合
            this.chooseGroup();
            //吸附、放置条件
            this.conditions();
        };
        /**拖动时禁止panel滑动*/
        PlaceItem.prototype.startPanel = function (event) {
            var wu = wuling.map.getInstance();
            wu.pan.hScrollBar.mouseWheelEnable = true;
            wu.pan.vScrollBar.mouseWheelEnable = true;
            wu.pan.hScrollBar.touchScrollEnable = true;
            wu.pan.vScrollBar.touchScrollEnable = true;
        };
        /**拖动时禁止panel滑动*/
        PlaceItem.prototype.stopPanel = function (event) {
            var wu = wuling.map.getInstance();
            wu.pan.hScrollBar.mouseWheelEnable = false;
            wu.pan.vScrollBar.mouseWheelEnable = false;
            wu.pan.hScrollBar.touchScrollEnable = false;
            wu.pan.vScrollBar.touchScrollEnable = false;
        };
        PlaceItem.prototype.renderHandler = function () {
            this._mc.stop();
        };
        PlaceItem.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                //取消
                case this.cancel:
                    this.removeSelf();
                    this._map.digeBox.visible = false;
                    this._placeItemModule.editMode = false;
                    break;
                //确定
                case this.ensure:
                    if (this.imgBtn.gray == false) {
                        this.imgBtn.offAll();
                        this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
                        this.cancel.visible = false;
                        this.ensure.visible = false;
                        // this.rotate.visible = false;
                        this._map.digeBox.visible = false;
                        this._placeItemModule.editMode = false;
                        this.zOrder = this._placeItemModule.zuobiao[this._i][this._zb]["c"];
                        this._mc.load("res/swf/yan.swf", true);
                        this.aniswf.addChild(this._mc);
                        this._mc.playTo(1, 7, Laya.Handler.create(this, this.renderHandler, null, false));
                        //屏蔽坐标
                        this.shieldingCoordinates();
                    }
                    break;
                //移动
                case this.shift:
                    this._map.digeBox.visible = true;
                    this.cancel.visible = true;
                    this.ensure.visible = true;
                    // this.rotate.visible =true;
                    this.zOrder = 500;
                    this._placeItemModule.editMode = true;
                    //回复坐标点
                    this.replyCoordinates();
                    this.showhome();
                    this.imgBtn.offAll();
                    this.hideenDom();
                    this.onMonitor();
                    break;
                case this.demolition:
                    //移除自己
                    this.removeSelf();
                    //回复坐标点
                    this.replyCoordinates();
                    break;
                default:
                    break;
            }
        };
        /**隐藏操作 */
        PlaceItem.prototype.hideenDom = function () {
            this.checks.visible = false;
            this.shift.visible = false;
            this.demolition.visible = false;
        };
        /**显示操作 */
        PlaceItem.prototype.showDom = function () {
            if (this._placeItemModule.editMode == false) {
                this.checks.visible = true;
                this.shift.visible = true;
                this.demolition.visible = true;
                this.imgBtn.offAll();
                Laya.timer.clear(this, this.oncancel);
                Laya.timer.once(2000, this, this.oncancel);
                this.imgBtn.on(Laya.Event.CLICK, this, this.oncancel);
            }
        };
        PlaceItem.prototype.oncancel = function () {
            this.hideenDom();
            this.imgBtn.offAll();
            this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
        };
        /**选择对应坐标组 */
        PlaceItem.prototype.chooseGroup = function () {
            if (this.x < 1358 && this.x > 1114 && this.y < 1500 && this.y > 1344) {
                this._i = 0;
            }
            if (this.x < 1624 && this.x > 1382 && this.y < 1315 && this.y > 1154) {
                this._i = 1;
            }
            if (this.x < 1876 && this.x > 1630 && this.y < 1472 && this.y > 1317) {
                this._i = 2;
            }
            if (this.x < 2119 && this.x > 1878 && this.y < 1633 && this.y > 1478) {
                this._i = 3;
            }
            if (this.x < 1905 && this.x > 1658 && this.y < 1137 && this.y > 979) {
                this._i = 4;
            }
            if (this.x < 2154 && this.x > 1910 && this.y < 1297 && this.y > 1142) {
                this._i = 5;
            }
            if (this.x < 2401 && this.x > 2154 && this.y < 1458 && this.y > 1302) {
                this._i = 6;
            }
            if (this.x < 1069 && this.x > 824 && this.y < 1308 && this.y > 1154) {
                this._i = 7;
            }
            if (this.x < 1345 && this.x > 1103 && this.y < 1131 && this.y > 975) {
                this._i = 8;
            }
            if (this.x < 1620 && this.x > 1379 && this.y < 954 && this.y > 799) {
                this._i = 9;
            }
            if (this.x < 2125 && this.x > 1878 && this.y < 1993 && this.y > 1835) {
                this._i = 10;
            }
            if (this.x < 2402 && this.x > 2158 && this.y < 1813 && this.y > 1659) {
                this._i = 11;
            }
            if (this.x < 2680 && this.x > 2436 && this.y < 1635 && this.y > 1479) {
                this._i = 11;
            }
        };
        PlaceItem.prototype.showhome = function () {
            this._arr = [{ a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }];
            for (var s = 0; s < this._placeItemModule.removeStage.length; s++) {
                var num = this._placeItemModule.showStage.indexOf(this._placeItemModule.removeStage[s]);
                if (num >= 0) {
                    this._arr[num]["a"] = false;
                }
            }
        };
        /**吸附、放置条件 */
        PlaceItem.prototype.conditions = function () {
            for (var i = 0; i < this._placeItemModule.zuobiao[this._i].length; i++) {
                if (this.x > this._placeItemModule.zuobiao[this._i][i]["x"] - 6.5 && this.x < this._placeItemModule.zuobiao[this._i][i]["x"] + 6.5 && this.y > this._placeItemModule.zuobiao[this._i][i]["y"] - 6.5 && this.y < this._placeItemModule.zuobiao[this._i][i]["y"] + 6.5 && this._arr[this._i]["a"] == true) {
                    if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i]) == -1) {
                        if (this.imgBtn.name == "1") {
                            this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                            this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                            this.imgBtn.gray = false;
                            // this.zOrder = this._zuobiao[i]["c"];
                            this._zb = i;
                        }
                        if (this.imgBtn.name == "2" && this._placeItemModule.zuobiao[this._i][i + 4] != undefined) {
                            this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                            this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                            this.imgBtn.gray = false;
                            // this.zOrder = this._zuobiao[i]["c"];
                            this._zb = i;
                        }
                        if (this.imgBtn.name == "3" && this._placeItemModule.zuobiao[this._i][i + 8] != undefined) {
                            this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                            this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                            this.imgBtn.gray = false;
                            // this.zOrder = this._zuobiao[i]["c"];
                            this._zb = i;
                        }
                    }
                }
            }
        };
        /**屏蔽坐标 */
        PlaceItem.prototype.shieldingCoordinates = function () {
            if (this._zb != null) {
                //1x1
                if (this.imgBtn.name == "1") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    // this._zuobiao.splice(this._zb,1);
                }
                //1x2
                if (this.imgBtn.name == "2") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                }
                //1x4
                if (this.imgBtn.name == "3") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                }
            }
        };
        /**回复坐标 */
        PlaceItem.prototype.replyCoordinates = function () {
            if (this.imgBtn.name == "1") {
                var num = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num, 1);
            }
            if (this.imgBtn.name == "2") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num2, 1);
            }
            if (this.imgBtn.name == "3") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num2, 1);
                var num3 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                this._placeItemModule.zbData.splice(num3, 1);
            }
        };
        return PlaceItem;
    }(ui.PlaceItemUI));
    wuling.PlaceItem = PlaceItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=PlaceItem.js.map