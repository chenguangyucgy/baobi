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
var wuling;
(function (wuling) {
    var shopItem = /** @class */ (function (_super) {
        __extends(shopItem, _super);
        function shopItem() {
            return _super.call(this) || this;
        }
        shopItem.prototype.show = function (item, index) {
            this.shopImg.skin = this.dataSource["url"];
            this.on(Laya.Event.CLICK, this, this.onclick, [index]);
            if (this.dataSource["money"].toString().length == 3) {
                this.num1.skin = "shop/b0" + Math.floor(this.dataSource["money"] / 100) + ".png";
                this.num2.skin = "shop/b0" + (Math.floor(this.dataSource["money"] / 10) - Math.floor(this.dataSource["money"] / 100) * 10) + ".png";
                this.num3.skin = "shop/b0" + (this.dataSource["money"] % 10) + ".png";
            }
            else if (this.dataSource["money"].toString().length == 2) {
                this.num3.alpha = 0;
                this.num1.skin = "shop/b0" + Math.floor(this.dataSource["money"] / 10) + ".png";
                this.num2.skin = "shop/b0" + (this.dataSource["money"] % 10) + ".png";
            }
        };
        shopItem.prototype.onclick = function (index) {
            wuling.Bottom.getInstance().text2.text = this.dataSource["sname"];
            module.mapModule.getInstance().objcanku = this.dataSource;
            wuling.Bottom.getInstance().text1.visible = false;
            wuling.Bottom.getInstance().text2.visible = true;
            wuling.Bottom.getInstance().text3.visible = true;
            wuling.Bottom.getInstance().goumai.visible = true;
            if (module.mapModule.getInstance().dataContents == null) {
                module.mapModule.getInstance().dataContents = this;
                this.ckuang.scaleX = 1.2;
                this.ckuang.scaleY = 1.2;
                this.ckuang.alpha = 0;
                Laya.Tween.to(this.ckuang, { scaleX: 0.55, scaleY: 0.55, alpha: 1 }, 230, null, Laya.Handler.create(this, this.next1));
            }
            else {
                if (module.mapModule.getInstance().dataContents != this) {
                    module.mapModule.getInstance().dataContents.ckuang.alpha = 0;
                    module.mapModule.getInstance().dataContents = this;
                    this.ckuang.scaleX = 1.2;
                    this.ckuang.scaleY = 1.2;
                    this.ckuang.alpha = 0;
                    Laya.Tween.to(this.ckuang, { scaleX: 0.55, scaleY: 0.55, alpha: 1 }, 230, null, Laya.Handler.create(this, this.next1));
                }
                else {
                    this.ckuang.scaleX = 1.2;
                    this.ckuang.scaleY = 1.2;
                    this.ckuang.alpha = 0;
                    Laya.Tween.to(this.ckuang, { scaleX: 0.55, scaleY: 0.55, alpha: 1 }, 230, null, Laya.Handler.create(this, this.next1));
                }
            }
        };
        shopItem.prototype.next1 = function () {
            Laya.Tween.to(this.ckuang, { scaleX: 0.7, scaleY: 0.7 }, 170, null, Laya.Handler.create(this, this.next2));
        };
        shopItem.prototype.next2 = function () {
            Laya.Tween.to(this.ckuang, { scaleX: 0.666, scaleY: 0.666 }, 170);
        };
        return shopItem;
    }(ui.shopItemUI));
    wuling.shopItem = shopItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=shopItem.js.map