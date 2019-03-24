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
    var menu = /** @class */ (function (_super) {
        __extends(menu, _super);
        function menu() {
            var _this = _super.call(this) || this;
            _this._mousenum = 0;
            _this.pan.hScrollBar.changeHandler = new Laya.Handler(_this, _this.onclick);
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onHander);
            _this.imgBtn.on(Laya.Event.CLICK, _this, _this.onHander);
            //新手指引newNum==36
            if (wuling.map.getInstance().guide == true) {
                wuling.map.getInstance().nextStep();
                if (module.newTask.getInstance().newNum == 36) {
                    Laya.timer.once(100, _this, function () {
                        _this.pan.hScrollBar.value = 400;
                    });
                }
                if (module.newTask.getInstance().newNum == 41) {
                    Laya.timer.once(100, _this, function () {
                        _this.pan.hScrollBar.value = 170;
                    });
                }
            }
            if (wuling.map.getInstance().guide == false) {
                wuling.map.getInstance().person1.figureStatic();
                wuling.map.getInstance().person2.figureStatic();
                wuling.map.getInstance().person3.figureStatic();
                wuling.map.getInstance().person4.figureStatic();
                wuling.map.getInstance().person5.figureStatic();
            }
            return _this;
        }
        menu.prototype.onclick = function (value) {
            //菜单滚动
            this.pan.hScrollBar.max = 2000;
            if (this.pan.hScrollBar.value >= (2000 / 7 * 6) && this.pan.hScrollBar.value < (2000 / 7 * 7)) {
                Laya.Tween.to(this.imgCai1, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai2, { x: 337, y: 450, scaleX: 0.666, scaleY: 0.666, alpha: 1 }, 100);
                Laya.Tween.to(this.imgCai3, { x: 162, y: 466, scaleX: 0.599, scaleY: 0.599, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai4, { x: 29, y: 478, scaleX: 0.536, scaleY: 0.536, alpha: 0.6 }, 100);
                Laya.Tween.to(this.imgCai5, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai6, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai7, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                this.imgCai1.zOrder = 4;
                this.imgCai2.zOrder = 5;
                this.imgCai3.zOrder = 4;
                this.imgCai4.zOrder = 3;
                this.imgCai5.zOrder = 1;
                this.imgCai6.zOrder = 1;
                this.imgCai7.zOrder = 1;
            }
            if (this.pan.hScrollBar.value >= (2000 / 7 * 5) && this.pan.hScrollBar.value < (2000 / 7 * 6)) {
                Laya.Tween.to(this.imgCai1, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai2, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai3, { x: 337, y: 450, scaleX: 0.666, scaleY: 0.666, alpha: 1 }, 100);
                Laya.Tween.to(this.imgCai4, { x: 162, y: 466, scaleX: 0.599, scaleY: 0.599, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai5, { x: 29, y: 478, scaleX: 0.536, scaleY: 0.536, alpha: 0.6 }, 100);
                Laya.Tween.to(this.imgCai6, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai7, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                this.imgCai1.zOrder = 1;
                this.imgCai2.zOrder = 4;
                this.imgCai3.zOrder = 5;
                this.imgCai4.zOrder = 4;
                this.imgCai5.zOrder = 3;
                this.imgCai6.zOrder = 1;
                this.imgCai7.zOrder = 1;
            }
            if (this.pan.hScrollBar.value >= (2000 / 7 * 4) && this.pan.hScrollBar.value < (2000 / 7 * 5)) {
                Laya.Tween.to(this.imgCai1, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai2, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai3, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai4, { x: 337, y: 450, scaleX: 0.666, scaleY: 0.666, alpha: 1 }, 100);
                Laya.Tween.to(this.imgCai5, { x: 162, y: 466, scaleX: 0.599, scaleY: 0.599, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai6, { x: 29, y: 478, scaleX: 0.536, scaleY: 0.536, alpha: 0.6 }, 100);
                Laya.Tween.to(this.imgCai7, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                this.imgCai1.zOrder = 1;
                this.imgCai2.zOrder = 1;
                this.imgCai3.zOrder = 4;
                this.imgCai4.zOrder = 5;
                this.imgCai5.zOrder = 4;
                this.imgCai6.zOrder = 3;
                this.imgCai7.zOrder = 1;
            }
            if (this.pan.hScrollBar.value >= (2000 / 7 * 3) && this.pan.hScrollBar.value < (2000 / 7 * 4)) {
                Laya.Tween.to(this.imgCai1, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai2, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai3, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai4, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai5, { x: 337, y: 450, scaleX: 0.666, scaleY: 0.666, alpha: 1 }, 100);
                Laya.Tween.to(this.imgCai6, { x: 162, y: 466, scaleX: 0.599, scaleY: 0.599, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai7, { x: 29, y: 478, scaleX: 0.536, scaleY: 0.536, alpha: 0.6 }, 100);
                this.imgCai1.zOrder = 1;
                this.imgCai2.zOrder = 1;
                this.imgCai3.zOrder = 1;
                this.imgCai4.zOrder = 4;
                this.imgCai5.zOrder = 5;
                this.imgCai6.zOrder = 4;
                this.imgCai7.zOrder = 3;
            }
            if (this.pan.hScrollBar.value >= (2000 / 7 * 2) && this.pan.hScrollBar.value < (2000 / 7 * 3)) {
                Laya.Tween.to(this.imgCai1, { x: 29, y: 478, scaleX: 0.536, scaleY: 0.536, alpha: 0.6 }, 100);
                Laya.Tween.to(this.imgCai2, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai3, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai4, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai5, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai6, { x: 337, y: 450, scaleX: 0.666, scaleY: 0.666, alpha: 1 }, 100);
                Laya.Tween.to(this.imgCai7, { x: 162, y: 466, scaleX: 0.599, scaleY: 0.599, alpha: 0.8 }, 100);
                this.imgCai1.zOrder = 3;
                this.imgCai2.zOrder = 1;
                this.imgCai3.zOrder = 1;
                this.imgCai4.zOrder = 1;
                this.imgCai5.zOrder = 4;
                this.imgCai6.zOrder = 5;
                this.imgCai7.zOrder = 4;
            }
            if (this.pan.hScrollBar.value > (2000 / 7) && this.pan.hScrollBar.value < (2000 / 7 * 2)) {
                Laya.Tween.to(this.imgCai1, { x: 162, y: 466, scaleX: 0.599, scaleY: 0.599, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai2, { x: 29, y: 478, scaleX: 0.536, scaleY: 0.536, alpha: 0.6 }, 100);
                Laya.Tween.to(this.imgCai3, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai4, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai5, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai6, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai7, { x: 337, y: 450, scaleX: 0.666, scaleY: 0.666, alpha: 1 }, 100);
                this.imgCai1.zOrder = 4;
                this.imgCai2.zOrder = 3;
                this.imgCai3.zOrder = 1;
                this.imgCai4.zOrder = 1;
                this.imgCai5.zOrder = 1;
                this.imgCai6.zOrder = 4;
                this.imgCai7.zOrder = 5;
            }
            if (this.pan.hScrollBar.value < (2000 / 7)) {
                Laya.Tween.to(this.imgCai1, { x: 337, y: 450, scaleX: 0.666, scaleY: 0.666, alpha: 1 }, 100);
                Laya.Tween.to(this.imgCai2, { x: 162, y: 466, scaleX: 0.599, scaleY: 0.599, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai3, { x: 29, y: 478, scaleX: 0.536, scaleY: 0.536, alpha: 0.6 }, 100);
                Laya.Tween.to(this.imgCai4, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai5, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0 }, 100);
                Laya.Tween.to(this.imgCai6, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                Laya.Tween.to(this.imgCai7, { x: 453, y: 478, scaleX: 0.529, scaleY: 0.529, alpha: 0.8 }, 100);
                this.imgCai1.zOrder = 5;
                this.imgCai2.zOrder = 4;
                this.imgCai3.zOrder = 3;
                this.imgCai4.zOrder = 1;
                this.imgCai5.zOrder = 1;
                this.imgCai6.zOrder = 1;
                this.imgCai7.zOrder = 4;
            }
            //设置循环
            if (this.pan.hScrollBar.value == this.pan.hScrollBar.max) {
                this.pan.hScrollBar.value = 10;
            }
            if (this.pan.hScrollBar.value == this.pan.hScrollBar.min) {
                this.pan.hScrollBar.value = 1900;
            }
        };
        menu.prototype.onHander = function (event) {
            var map = wuling.map.getInstance();
            switch (event.currentTarget) {
                case this.returnBtn:
                    if (wuling.Bottom.getInstance().nanaView.nana.isPlaying == false) {
                        wuling.map.getInstance().person1.figureStart();
                        wuling.map.getInstance().person2.figureStart();
                        wuling.map.getInstance().person3.figureStart();
                        wuling.map.getInstance().person4.figureStart();
                        wuling.map.getInstance().person5.figureStart();
                        wuling.Bottom.getInstance().nanaOnClick();
                        this.returnBtn.offAll();
                        this.close();
                        map.mo.visible = false;
                        wuling.Bottom.getInstance().btmclick();
                    }
                    break;
                case this.imgBtn:
                    if (this.pan.hScrollBar.value >= (2000 / 7 * 6) && this.pan.hScrollBar.value < (2000 / 7 * 7)) {
                        var building = new wuling.building;
                        this.parent.addChild(building);
                        //打开页面
                        building.popup(false, true);
                        this.close();
                    }
                    if (this.pan.hScrollBar.value >= (2000 / 7 * 5) && this.pan.hScrollBar.value < (2000 / 7 * 6)) {
                        // var shop:laya.ui.Dialog = new wuling.shop;
                        // this.parent.addChild(shop);
                        // //打开页面
                        // shop.popup(false,true);
                        // this.close();
                    }
                    if (this.pan.hScrollBar.value >= (2000 / 7 * 4) && this.pan.hScrollBar.value < (2000 / 7 * 5)) {
                        // var cangku:laya.ui.Dialog = new wuling.cangku;
                        // this.parent.addChild(cangku);
                        // //打开页面
                        // cangku.popup(false,true);
                        // this.close();
                    }
                    if (this.pan.hScrollBar.value >= (2000 / 7 * 3) && this.pan.hScrollBar.value < (2000 / 7 * 4)) {
                        var rankList = new wuling.rankList;
                        this.parent.addChild(rankList);
                        //打开页面
                        rankList.popup(false, true);
                        this.close();
                    }
                    if (this.pan.hScrollBar.value >= (2000 / 7 * 2) && this.pan.hScrollBar.value < (2000 / 7 * 3)) {
                        var setting = new wuling.setting;
                        this.parent.addChild(setting);
                        //打开页面
                        setting.popup(false, true);
                        this.close();
                    }
                    if (this.pan.hScrollBar.value >= (2000 / 7 * 1) && this.pan.hScrollBar.value < (2000 / 7 * 2)) {
                        var mission = new wuling.mission;
                        this.parent.addChild(mission);
                        //打开页面
                        mission.popup(false, true);
                        this.close();
                        //新手教程
                        if (wuling.map.getInstance().guide == true) {
                            wuling.map.getInstance().nextStep();
                            wuling.map.getInstance().newclick();
                        }
                    }
                    if (this.pan.hScrollBar.value < (2000 / 7)) {
                        var shopInfo = new wuling.shopInfo;
                        this.parent.addChild(shopInfo);
                        //打开页面
                        shopInfo.popup(false, true);
                        this.close();
                        //新手教程
                        if (wuling.map.getInstance().guide == true) {
                            wuling.map.getInstance().newclick();
                        }
                    }
                    /**暂停人物 */
                    wuling.map.getInstance().person1.figureStatic();
                    wuling.map.getInstance().person2.figureStatic();
                    wuling.map.getInstance().person3.figureStatic();
                    wuling.map.getInstance().person4.figureStatic();
                    wuling.map.getInstance().person5.figureStatic();
                    break;
                default:
                    break;
            }
        };
        return menu;
    }(ui.menuUI));
    wuling.menu = menu;
})(wuling || (wuling = {}));
//# sourceMappingURL=menu.js.map