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
    var ditaiChexingItem = /** @class */ (function (_super) {
        __extends(ditaiChexingItem, _super);
        function ditaiChexingItem() {
            var _this = _super.call(this) || this;
            /**placeItemModule数据*/
            _this._placeItemModule = module.placeItemModule.getInstance();
            return _this;
        }
        ditaiChexingItem.prototype.show = function (item, index) {
            this.carImg.width = 172;
            this.carImg.height = 150;
            if (this._placeItemModule.i.carClass.skin == this.dataSource["url"]) {
                this.fanziImg.visible = true;
                this.bntImg.visible = false;
            }
            else {
                this.fanziImg.visible = false;
                this.bntImg.visible = true;
            }
            this.carImg.skin = this.dataSource["url"];
            this.carName.text = this.dataSource["carname"];
            this.bntImg.on(Laya.Event.CLICK, this, this.onclick);
            this.showJinNen();
        };
        ditaiChexingItem.prototype.onclick = function () {
            var _this = this;
            var jin = this.dataSource["jin"];
            var nen = this.dataSource["nen"];
            if (wuling.Top.getInstance().jin >= jin && wuling.Top.getInstance().nen >= nen) {
                // if(this.dataSource["url"]=="ditaiChexing/320c.png"||this.dataSource["url"]=="ditaiChexing/320h.png"||this.dataSource["url"]=="ditaiChexing/320l.png"){
                // 	this._placeItemModule.i.carClass.x = 64;
                // 	this._placeItemModule.i.carClass.y = -29;
                // }else
                // {
                // 	this._placeItemModule.i.carClass.x = 27;
                // 	this._placeItemModule.i.carClass.y = -44;
                // }
                //减少金币
                wuling.Top.getInstance().jin = wuling.Top.getInstance().jin - jin;
                wuling.Top.getInstance().gabi();
                //减少能量
                wuling.Top.getInstance().nen = wuling.Top.getInstance().nen - nen;
                wuling.Top.getInstance().nens();
                this._placeItemModule.i.carClass.skin = this.dataSource["url"];
                //获取对应图片名字
                var imgPng = this.dataSource["url"].slice(13);
                var imgName = imgPng.slice(0, -4);
                //后台保存
                util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID=" + this._placeItemModule.i.RoomObjectID + "&Commons=" + imgName);
                this._placeItemModule.i.spani.visible = true;
                this._placeItemModule.i.hideenDom();
                // this._placeItemModule.i._mc1.load("res/swf/cling.swf",true);
                this._placeItemModule.i._mc1.x = 0;
                this._placeItemModule.i._mc1.load("res/swf/cling.swf", true);
                if (this._placeItemModule.i.show0.skin == "place/d100016.png") {
                    this._placeItemModule.i._mc1.y = 73;
                }
                this._placeItemModule.i._mc1.playTo(0, 59, new Laya.Handler(this, function () {
                    _this._placeItemModule.i._mc1.stop();
                }));
                this._placeItemModule.i.imgBtn.visible = false;
                // this._placeItemModule.i.spani.addChild(this._placeItemModule.i._mc1);
                //新手教程
                if (wuling.map.getInstance().guide == true) {
                    module.personModule.getInstance().huNum = 0;
                    wuling.map.getInstance().newclick();
                }
                this._placeItemModule.i._mc1.playTo(0, 59, new Laya.Handler(this, this.onHender));
                wuling.ditaiChexing.getInstance().close();
                if (wuling.map.getInstance().guide == false) {
                    wuling.map.getInstance().person1.figureStart();
                    wuling.map.getInstance().person2.figureStart();
                    wuling.map.getInstance().person3.figureStart();
                    wuling.map.getInstance().person4.figureStart();
                    wuling.map.getInstance().person5.figureStart();
                    wuling.Bottom.getInstance().nanaOnClick();
                }
            }
            // wuling.map.getInstance().namecar[this._placeItemModule.i].carClass.skin = this.dataSource["url"];
        };
        ditaiChexingItem.prototype.onHender = function () {
            this._placeItemModule.i._mc1.stop();
            this._placeItemModule.i.imgBtn.visible = true;
            this._placeItemModule.i.spani.visible = false;
            //新手教程
            if (wuling.map.getInstance().guide == true) {
                // wuling.map.getInstance().newTaskPersin();
                // wuling.map.getInstance().newclick();
                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                // Laya.timer.once(700,this,()=>{
                // 	wuling.Bottom.getInstance().text1.text ="帅气!第一款车型已经驾临门店啦!";
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                // });
                // Laya.timer.once(3400,this,()=>{
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                // 	wuling.map.getInstance().newTaskPersin();
                // });
                // Laya.timer.once(4100,this,()=>{
                // 	wuling.Bottom.getInstance().text1.text ="现在慢慢等待顾客的到来吧！";
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                // });
            }
        };
        //金币，能量
        ditaiChexingItem.prototype.showJinNen = function () {
            var jin = String(this.dataSource["jin"]);
            switch (jin.length) {
                case 0:
                    this.jin4.skin = "sheshi/o0.png";
                    this.jin3.alpha = 0;
                    this.jin2.alpha = 0;
                    this.jin1.alpha = 0;
                    break;
                case 1:
                    this.jin4.skin = "sheshi/o" + jin.slice(0, 1) + ".png";
                    this.jin3.alpha = 0;
                    this.jin2.alpha = 0;
                    this.jin1.alpha = 0;
                    break;
                case 2:
                    this.jin4.skin = "sheshi/o" + jin.slice(1) + ".png";
                    this.jin3.skin = "sheshi/o" + jin.slice(0, 1) + ".png";
                    this.jin3.alpha = 1;
                    this.jin2.alpha = 0;
                    this.jin1.alpha = 0;
                    break;
                case 3:
                    this.jin4.skin = "sheshi/o" + jin.slice(2) + ".png";
                    this.jin3.skin = "sheshi/o" + jin.slice(1, 2) + ".png";
                    this.jin2.skin = "sheshi/o" + jin.slice(0, 1) + ".png";
                    this.jin3.alpha = 1;
                    this.jin2.alpha = 1;
                    this.jin1.alpha = 0;
                    break;
                case 4:
                    this.jin4.skin = "sheshi/o" + jin.slice(3) + ".png";
                    this.jin3.skin = "sheshi/o" + jin.slice(2, 3) + ".png";
                    this.jin2.skin = "sheshi/o" + jin.slice(1, 2) + ".png";
                    this.jin1.skin = "sheshi/o" + jin.slice(0, 1) + ".png";
                    this.jin3.alpha = 1;
                    this.jin2.alpha = 1;
                    this.jin1.alpha = 1;
                    break;
            }
            var nen = String(this.dataSource["nen"]);
            switch (nen.length) {
                case 0:
                    this.nen2.skin = "sheshi/o0.png";
                    this.nen1.alpha = 0;
                    break;
                case 1:
                    this.nen2.skin = "sheshi/o" + nen.slice(0, 1) + ".png";
                    this.nen1.alpha = 0;
                    break;
                case 2:
                    this.nen2.skin = "sheshi/o" + nen.slice(1) + ".png";
                    this.nen1.skin = "sheshi/o" + nen.slice(0, 1) + ".png";
                    this.nen1.alpha = 1;
                    break;
            }
        };
        return ditaiChexingItem;
    }(ui.ditaiChexingItemUI));
    wuling.ditaiChexingItem = ditaiChexingItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=ditaiChexingItem.js.map