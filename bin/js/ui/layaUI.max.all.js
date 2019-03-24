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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var achievementUI = /** @class */ (function (_super) {
        __extends(achievementUI, _super);
        function achievementUI() {
            return _super.call(this) || this;
        }
        achievementUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.achievementUI.uiView);
        };
        achievementUI.uiView = { "type": "View", "props": { "width": 184, "height": 128 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 2, "var": "boxcj" }, "child": [{ "type": "Text", "props": { "y": 84, "x": 43, "width": 99, "visible": false, "var": "cjname", "text": "成就名称", "height": 28, "fontSize": 23, "font": "SimHei", "color": "#f8f6f6" } }, { "type": "Image", "props": { "y": -8, "x": 2, "var": "cjimg", "skin": "achievement/1.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] };
        return achievementUI;
    }(View));
    ui.achievementUI = achievementUI;
})(ui || (ui = {}));
(function (ui) {
    var addjinUI = /** @class */ (function (_super) {
        __extends(addjinUI, _super);
        function addjinUI() {
            return _super.call(this) || this;
        }
        addjinUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.addjinUI.uiView);
        };
        addjinUI.uiView = { "type": "View", "props": { "width": 100, "height": 50 } };
        return addjinUI;
    }(View));
    ui.addjinUI = addjinUI;
})(ui || (ui = {}));
(function (ui) {
    var baobianniuUI = /** @class */ (function (_super) {
        __extends(baobianniuUI, _super);
        function baobianniuUI() {
            return _super.call(this) || this;
        }
        baobianniuUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.baobianniuUI.uiView);
        };
        baobianniuUI.uiView = { "type": "View", "props": { "width": 50, "height": 50 }, "child": [{ "type": "Image", "props": { "width": 50, "skin": "tishi/kongbai.png", "height": 50, "centerY": 0.5, "centerX": 0.5, "alpha": 0 } }] };
        return baobianniuUI;
    }(View));
    ui.baobianniuUI = baobianniuUI;
})(ui || (ui = {}));
(function (ui) {
    var baobitishiUI = /** @class */ (function (_super) {
        __extends(baobitishiUI, _super);
        function baobitishiUI() {
            return _super.call(this) || this;
        }
        baobitishiUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.baobitishiUI.uiView);
        };
        baobitishiUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "centerY": 0.5, "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "tishi/baobitishi.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 16, "x": 334, "var": "shutBtn", "skin": "shopInfo/return1.png" } }, { "type": "sange", "props": { "y": 4, "x": 14, "runtime": "wuling.sange" } }] }] };
        return baobitishiUI;
    }(Dialog));
    ui.baobitishiUI = baobitishiUI;
})(ui || (ui = {}));
(function (ui) {
    var beginUI = /** @class */ (function (_super) {
        __extends(beginUI, _super);
        function beginUI() {
            return _super.call(this) || this;
        }
        beginUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.beginUI.uiView);
        };
        beginUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 1701, "skin": "map/man.jpg", "height": 1280, "centerX": 0, "anchorY": 0, "anchorX": 0 } }] }, { "type": "Image", "props": { "y": -249, "var": "zhmd", "skin": "begin/zhihuimendian.png", "scaleY": 0.666, "scaleX": 0.666, "centerX": 0 } }, { "type": "Image", "props": { "y": 1139, "width": 2990, "var": "into", "skin": "begin/kong.png", "scaleY": 0.666, "scaleX": 0.666, "height": 3493, "centerX": -4, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "child": [{ "type": "Image", "props": { "y": 1694, "x": 1283, "width": 461, "skin": "begin/begin.png", "height": 66 } }] }, { "type": "Text", "props": { "y": 1220, "x": 95, "text": "测试版", "skewX": 10, "italic": true, "fontSize": 30, "font": "SimHei", "color": "#000000" } }] };
        return beginUI;
    }(View));
    ui.beginUI = beginUI;
})(ui || (ui = {}));
(function (ui) {
    var bottomUI = /** @class */ (function (_super) {
        __extends(bottomUI, _super);
        function bottomUI() {
            return _super.call(this) || this;
        }
        bottomUI.prototype.createChildren = function () {
            View.regComponent("wuling.nana", wuling.nana);
            _super.prototype.createChildren.call(this);
            this.createView(ui.bottomUI.uiView);
        };
        bottomUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "mouseThrough": true, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "alpha": 0 } }, { "type": "Image", "props": { "y": 1262, "x": 55, "width": 140, "var": "nanaicon", "skin": "bottom/nana.png", "pivotY": 210, "pivotX": 24, "height": 209 } }, { "type": "Sprite", "props": { "y": 1269, "x": 63, "var": "nanatext", "pivotY": 44, "pivotX": 26 } }, { "type": "Image", "props": { "y": 1160, "x": 135, "width": 82, "var": "huodong", "skin": "bottom/huodong.png", "pivotY": 36, "height": 72 } }, { "type": "Image", "props": { "y": 1198, "x": 37, "width": 53, "var": "liwu", "skin": "bottom/jiangli.png", "pivotY": 27.5, "pivotX": 26.5, "height": 55 } }, { "type": "Image", "props": { "y": 1115, "x": 124, "width": 70, "var": "renwu", "pivotY": 71, "height": 71 } }, { "type": "Image", "props": { "y": 1140, "x": 42, "width": 45, "var": "chengjiu", "skin": "bottom/chengjiu.png", "pivotY": 26, "pivotX": 22.5, "height": 52 } }, { "type": "nana", "props": { "x": 0, "visible": false, "var": "nanaView", "runtime": "wuling.nana", "bottom": 0 } }, { "type": "Label", "props": { "y": 1084, "wordWrap": true, "var": "text1", "text": "“欢迎来到宝骏智慧门店，马上开始您的管理工作吧！”", "right": 48, "overflow": "hidden", "left": 245, "height": 108, "fontSize": 32, "color": "#ffffff", "alpha": 0 } }, { "type": "Image", "props": { "y": 1184, "x": 531, "visible": false, "var": "goumai", "skin": "shop/goumai.png" } }, { "type": "Label", "props": { "y": 1050, "x": 268, "width": 136, "visible": false, "var": "text2", "text": "物品名称", "height": 38, "fontSize": 32, "color": "#c09e15", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 1091, "x": 272, "wordWrap": true, "width": 412, "visible": false, "var": "text3", "text": "物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍", "height": 83, "fontSize": 26, "color": "#ffffff" } }, { "type": "Animation", "props": { "y": 1235, "x": 669, "visible": false, "var": "sanjiaoAni", "source": "sanjiao.ani", "autoPlay": true } }, { "type": "Image", "props": { "y": 1097, "x": 184, "width": 484, "visible": false, "var": "boximg", "skin": "bottom/boximg.png", "height": 153 }, "child": [{ "type": "Label", "props": { "y": 30, "x": 45, "wordWrap": true, "width": 426, "var": "boxText", "text": "您还有任务未完成，请点击任务提示按钮查看！！", "height": 98, "fontSize": 32, "color": "#000000" } }] }, { "type": "Box", "props": { "visible": false, "var": "demolitionBox", "scaleY": 1.5, "scaleX": 1.5, "centerX": 70, "bottom": 71 }, "child": [{ "type": "Image", "props": { "width": 56, "var": "determine", "skin": "place2/ensure.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 0, "x": 66, "width": 56, "var": "abolish", "skin": "place2/cancel.png", "height": 44, "alpha": 0.9 } }] }] };
        return bottomUI;
    }(View));
    ui.bottomUI = bottomUI;
})(ui || (ui = {}));
(function (ui) {
    var buildingUI = /** @class */ (function (_super) {
        __extends(buildingUI, _super);
        function buildingUI() {
            return _super.call(this) || this;
        }
        buildingUI.prototype.createChildren = function () {
            View.regComponent("wuling.buildingItem", wuling.buildingItem);
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.buildingUI.uiView);
        };
        buildingUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "width": 691, "height": 850, "centerY": -98, "centerX": -11 }, "child": [{ "type": "Image", "props": { "y": 28, "x": 16, "skin": "building/buildBg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Box", "props": { "y": 120, "x": 62, "var": "box1" }, "child": [{ "type": "Image", "props": { "var": "backImg1", "skin": "building/TabBag.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "blackBtn1", "skin": "building/gneng2.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "whiteBtn1", "skin": "building/gneng1.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 120, "x": 257, "var": "box2" }, "child": [{ "type": "Image", "props": { "visible": false, "var": "backImg2", "skin": "building/TabBag.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "visible": false, "var": "blackBtn2", "skin": "building/zshilei1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "whiteBtn2", "skin": "building/zshilei2.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 120, "x": 455, "var": "box3" }, "child": [{ "type": "Image", "props": { "visible": false, "var": "backImg3", "skin": "building/TabBag.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "visible": false, "var": "blackBtn3", "skin": "building/dibang1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "whiteBtn3", "skin": "building/dibang2.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "List", "props": { "y": 168, "x": 60, "width": 592, "var": "list", "spaceY": -10, "height": 604 }, "child": [{ "type": "VScrollBar", "props": { "x": 567, "top": 9, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "bottom": 0 } }, { "type": "buildingItem", "props": { "y": 2, "x": 7, "runtime": "wuling.buildingItem", "renderType": "render" } }] }, { "type": "Image", "props": { "y": 165, "x": 73, "skin": "building/xiang.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 44, "x": 617, "var": "returnBtn", "skin": "building/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 40, "x": 76, "skin": "building/buildingname.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] };
        return buildingUI;
    }(Dialog));
    ui.buildingUI = buildingUI;
})(ui || (ui = {}));
(function (ui) {
    var buildingItemUI = /** @class */ (function (_super) {
        __extends(buildingItemUI, _super);
        function buildingItemUI() {
            return _super.call(this) || this;
        }
        buildingItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.buildingItemUI.uiView);
        };
        buildingItemUI.uiView = { "type": "View", "props": { "width": 551, "height": 150 }, "child": [{ "type": "Image", "props": { "y": 7, "x": 7, "var": "bakeImg", "skin": "building/classImg.png", "scaleY": 0.666, "scaleX": 0.666 }, "child": [{ "type": "Image", "props": { "y": 26, "x": 29, "var": "fanImg", "skin": "place1/d10001.png" } }, { "type": "Label", "props": { "y": 18, "x": 213, "width": 373, "var": "nametext", "text": "设施名称", "height": 40, "fontSize": 36, "color": "#000000", "bold": true, "align": "left" } }, { "type": "Clip", "props": { "y": 72, "x": 680, "var": "jin1", "skin": "top/clip_orgnumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 72, "x": 708, "var": "jin2", "skin": "top/clip_orgnumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 72, "x": 736, "var": "jin3", "skin": "top/clip_orgnumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 129, "x": 681, "var": "nen1", "skin": "top/clip_blocknumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 129, "x": 708, "var": "nen2", "skin": "top/clip_blocknumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 129, "x": 736, "var": "nen3", "skin": "top/clip_blocknumber.png", "index": 0, "clipX": 10 } }] }, { "type": "Image", "props": { "y": 7, "x": 5, "var": "suoImg", "skin": "building/suo.png", "scaleY": 0.666, "scaleX": 0.666, "mouseThrough": false, "mouseEnabled": true } }] };
        return buildingItemUI;
    }(View));
    ui.buildingItemUI = buildingItemUI;
})(ui || (ui = {}));
(function (ui) {
    var cangkuUI = /** @class */ (function (_super) {
        __extends(cangkuUI, _super);
        function cangkuUI() {
            return _super.call(this) || this;
        }
        cangkuUI.prototype.createChildren = function () {
            View.regComponent("wuling.cangkuItem", wuling.cangkuItem);
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.cangkuUI.uiView);
        };
        cangkuUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 137, "x": 21, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 147, "x": 84, "skin": "cangku/cangkText.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "List", "props": { "y": 226, "x": 71, "width": 586, "var": "list", "spaceY": 5, "spaceX": 2, "height": 654 }, "child": [{ "type": "cangkuItem", "props": { "y": 5, "x": 0, "runtime": "wuling.cangkuItem", "name": "render" } }, { "type": "VScrollBar", "props": { "x": 562, "width": 30, "top": 2, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 635 } }] }, { "type": "sange", "props": { "y": 113, "x": 8, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 152, "x": 615, "var": "returnBtn", "skin": "building/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }] };
        return cangkuUI;
    }(Dialog));
    ui.cangkuUI = cangkuUI;
})(ui || (ui = {}));
(function (ui) {
    var cangkuItemUI = /** @class */ (function (_super) {
        __extends(cangkuItemUI, _super);
        function cangkuItemUI() {
            return _super.call(this) || this;
        }
        cangkuItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.cangkuItemUI.uiView);
        };
        cangkuItemUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 138, "height": 138 }, "child": [{ "type": "Box", "props": { "y": 70, "x": 68, "width": 138, "pivotY": 67.765, "pivotX": 67.4, "height": 136 }, "child": [{ "type": "Image", "props": { "width": 203, "skin": "cangku/cangkBg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 67, "x": 69, "width": 228, "var": "ckuang", "skin": "cangku/xuanzhong.png", "scaleY": 1.2, "scaleX": 1.2, "pivotY": 114, "pivotX": 114, "height": 228, "alpha": 0 } }, { "type": "Image", "props": { "y": 109, "x": 116, "var": "nu2", "skin": "cangku/0.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 109, "x": 102, "var": "nu1", "skin": "cangku/1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 109, "x": 88, "skin": "cangku/1_0010_x.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 16, "x": 17, "var": "cangImg", "skin": "shop/1x1ljt.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] };
        return cangkuItemUI;
    }(View));
    ui.cangkuItemUI = cangkuItemUI;
})(ui || (ui = {}));
(function (ui) {
    var clientDetailsUI = /** @class */ (function (_super) {
        __extends(clientDetailsUI, _super);
        function clientDetailsUI() {
            return _super.call(this) || this;
        }
        clientDetailsUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            View.regComponent("wuling.clientDetailsItem", wuling.clientDetailsItem);
            _super.prototype.createChildren.call(this);
            this.createView(ui.clientDetailsUI.uiView);
        };
        clientDetailsUI.uiView = { "type": "View", "props": { "width": 318, "height": 255 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 2, "skin": "details/gk_details.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Text", "props": { "y": 101, "x": 35, "width": 70, "var": "personName", "text": "客户名称", "height": 19, "fontSize": 17, "font": "SimHei", "color": "#eaac27", "bold": false, "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 32, "var": "dengji", "skin": "details/SS.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 223, "x": 278, "skin": "details/fyeTisp.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Text", "props": { "y": 180, "x": 29, "wordWrap": true, "width": 260, "var": "duib", "text": "对白内容对白内容对白内容对白内容对白内容对白内容", "leading": 7, "height": 43, "fontSize": 17, "font": "SimHei", "color": "#4c4c4a", "bold": false } }, { "type": "List", "props": { "y": 72, "x": 131, "width": 168, "var": "list", "height": 90 }, "child": [{ "type": "VScrollBar", "props": { "x": 155, "width": 30, "top": -1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.42, "name": "scrollBar", "height": 92 } }, { "type": "clientDetailsItem", "props": { "y": 1, "x": -2, "runtime": "wuling.clientDetailsItem", "renderType": "render" } }] }, { "type": "Clip", "props": { "y": 4, "x": 36, "width": 73, "var": "renIcon", "skin": "guke/G01/clip_01zd.png", "index": 0, "height": 90, "clipX": 21 } }, { "type": "Box", "props": { "y": 19, "x": 185 }, "child": [{ "type": "Image", "props": { "var": "xing1", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 23, "var": "xing2", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 47, "var": "xing3", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 70, "var": "xing4", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 94, "var": "xing5", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] };
        return clientDetailsUI;
    }(View));
    ui.clientDetailsUI = clientDetailsUI;
})(ui || (ui = {}));
(function (ui) {
    var clientDetailsItemUI = /** @class */ (function (_super) {
        __extends(clientDetailsItemUI, _super);
        function clientDetailsItemUI() {
            return _super.call(this) || this;
        }
        clientDetailsItemUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.clientDetailsItemUI.uiView);
        };
        clientDetailsItemUI.uiView = { "type": "View", "props": { "width": 155, "height": 23 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 154, "renderType": "render", "height": 21 }, "child": [{ "type": "Text", "props": { "y": 1, "x": 0, "width": 48, "var": "content", "text": "饮水机", "height": 20, "fontSize": 15, "font": "Microsoft YaHei", "bold": false } }, { "type": "Text", "props": { "y": 0, "x": 117, "width": 37, "var": "money", "text": "20%", "height": 20, "fontSize": 17, "font": "Microsoft YaHei", "align": "center" } }] }] };
        return clientDetailsItemUI;
    }(View));
    ui.clientDetailsItemUI = clientDetailsItemUI;
})(ui || (ui = {}));
(function (ui) {
    var clientXXUI = /** @class */ (function (_super) {
        __extends(clientXXUI, _super);
        function clientXXUI() {
            return _super.call(this) || this;
        }
        clientXXUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.clientXXUI.uiView);
        };
        clientXXUI.uiView = { "type": "View", "props": { "y": 69, "x": 58, "width": 117, "pivotY": 69.5, "pivotX": 58.5, "height": 139 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 115, "height": 137 }, "child": [{ "type": "Box", "props": { "y": 89, "x": 0, "visible": false }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 93, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 70, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 46, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 23, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 23, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 46, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 70, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 93, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 111, "x": 0, "var": "xingYi" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 23, "visible": false, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 93, "visible": false, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 70, "visible": false, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 47, "visible": false, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 32, "visible": false, "var": "xing1", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 23, "visible": false, "var": "xing2", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 47, "visible": false, "var": "xing3", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 70, "visible": false, "var": "xing4", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 93, "visible": false, "var": "xing5", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 32, "x": 21, "var": "zan", "alpha": 0 }, "child": [{ "type": "Image", "props": { "skin": "details/x_zezhao.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 15, "x": 15, "skin": "top/zan.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] }] };
        return clientXXUI;
    }(View));
    ui.clientXXUI = clientXXUI;
})(ui || (ui = {}));
(function (ui) {
    var ditaiChexingUI = /** @class */ (function (_super) {
        __extends(ditaiChexingUI, _super);
        function ditaiChexingUI() {
            return _super.call(this) || this;
        }
        ditaiChexingUI.prototype.createChildren = function () {
            View.regComponent("wuling.ditaiChexingItem", wuling.ditaiChexingItem);
            _super.prototype.createChildren.call(this);
            this.createView(ui.ditaiChexingUI.uiView);
        };
        ditaiChexingUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 137, "width": 675.3240000000001, "centerX": -2 }, "child": [{ "type": "Image", "props": { "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 18, "x": 603, "var": "bg", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "List", "props": { "y": 97, "x": 60, "width": 575, "var": "list", "spaceY": 5, "spaceX": 1, "height": 647 }, "child": [{ "type": "VScrollBar", "props": { "x": 552, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "ditaiChexingItem", "props": { "y": -1, "x": -11, "runtime": "wuling.ditaiChexingItem", "renderType": "render" } }] }, { "type": "Image", "props": { "y": 10, "x": 72, "skin": "ditaiChexing/chexing.png", "scaleY": 1.333, "scaleX": 1.333 } }] }] };
        return ditaiChexingUI;
    }(Dialog));
    ui.ditaiChexingUI = ditaiChexingUI;
})(ui || (ui = {}));
(function (ui) {
    var ditaiChexingItemUI = /** @class */ (function (_super) {
        __extends(ditaiChexingItemUI, _super);
        function ditaiChexingItemUI() {
            return _super.call(this) || this;
        }
        ditaiChexingItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ditaiChexingItemUI.uiView);
        };
        ditaiChexingItemUI.uiView = { "type": "View", "props": { "width": 185, "height": 328 }, "child": [{ "type": "Box", "props": { "y": 2, "x": 4 }, "child": [{ "type": "Image", "props": { "x": 1, "skin": "ditaiChexing/yjjx.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "skin": "ditaiChexing/jb.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 1, "x": 4, "skin": "ditaiChexing/tuIcon.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Button", "props": { "y": 272, "x": 29, "var": "bntImg", "stateNum": 2, "skin": "ditaiChexing/button.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 273, "x": 30, "visible": false, "var": "fanziImg", "skin": "ditaiChexing/fangzhi.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 89, "var": "jin1", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 104, "var": "jin2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 120, "var": "jin3", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 135, "var": "jin4", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 245, "x": 120, "var": "nen1", "skin": "sheshi/o2.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 245, "x": 135, "var": "nen2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Label", "props": { "y": 174, "x": 1, "width": 178, "var": "carName", "text": "车型名称", "height": 24, "fontSize": 24, "font": "SimHei", "color": "#1a3b42", "align": "center" } }, { "type": "Image", "props": { "y": 7, "x": 7, "width": 172, "var": "carImg", "skin": "place/320c.png", "height": 150 } }, { "type": "Image", "props": { "y": 0, "x": 4, "var": "suoImg", "skin": "ditaiChexing/suo.png", "scaleY": 1.333, "scaleX": 1.333, "mouseThrough": false, "mouseEnabled": true } }] }] };
        return ditaiChexingItemUI;
    }(View));
    ui.ditaiChexingItemUI = ditaiChexingItemUI;
})(ui || (ui = {}));
(function (ui) {
    var evaluationViewUI = /** @class */ (function (_super) {
        __extends(evaluationViewUI, _super);
        function evaluationViewUI() {
            return _super.call(this) || this;
        }
        evaluationViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.evaluationViewUI.uiView);
        };
        evaluationViewUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "map/mo.png", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 726, "skin": "share/kuan.png", "scaleY": 0.666, "scaleX": 0.666, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 583, "x": 334, "var": "tiBtn", "skin": "share/ti.png" } }, { "type": "Image", "props": { "y": 228, "x": 91, "var": "xin1", "skin": "share/xin.png", "alpha": 0 } }, { "type": "Image", "props": { "y": 228, "x": 257, "var": "xin2", "skin": "share/xin.png", "alpha": 0 } }, { "type": "Image", "props": { "y": 231, "x": 424, "var": "xin3", "skin": "share/xin.png", "alpha": 0 } }, { "type": "Image", "props": { "y": 231, "x": 589, "var": "xin4", "skin": "share/xin.png", "alpha": 0 } }, { "type": "Image", "props": { "y": 232, "x": 758, "var": "xin5", "skin": "share/xin.png", "alpha": 0 } }, { "type": "Image", "props": { "y": 445, "x": 165, "var": "text1" } }, { "type": "Image", "props": { "y": 43, "x": 874, "width": 74, "var": "returnBtn", "skin": "building/return1.png", "scaleY": 1.333, "scaleX": 1.333, "pivotY": -10, "pivotX": 11, "height": 74 } }] }] };
        return evaluationViewUI;
    }(View));
    ui.evaluationViewUI = evaluationViewUI;
})(ui || (ui = {}));
(function (ui) {
    var goldCoinsUI = /** @class */ (function (_super) {
        __extends(goldCoinsUI, _super);
        function goldCoinsUI() {
            return _super.call(this) || this;
        }
        goldCoinsUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.goldCoinsUI.uiView);
        };
        goldCoinsUI.uiView = { "type": "View", "props": { "width": 100, "mouseThrough": true, "height": 100 }, "child": [{ "type": "Image", "props": { "y": -4, "x": -4, "var": "goldImg", "skin": "details/x_zezhao.png" } }, { "type": "Image", "props": { "y": 50, "x": 51, "width": 64, "var": "apertureImg", "skin": "top/jinbiGq.png", "pivotY": 33, "pivotX": 33, "height": 64 } }, { "type": "Image", "props": { "y": 49, "x": 49, "width": 74, "var": "coinsImg", "skin": "top/jinbi.png", "pivotY": 40, "pivotX": 36, "height": 76 } }, { "type": "Box", "props": { "y": -50, "x": 10, "width": 191, "visible": false, "var": "jinBtn", "height": 52 }, "child": [{ "type": "Image", "props": { "y": 9, "x": -17, "skin": "top/jia.png" } }, { "type": "Image", "props": { "y": 10, "x": 58, "var": "jin1", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 9, "x": 83, "var": "jin2", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 9, "x": 21, "width": 34, "skin": "top/jinbi.png", "height": 34 } }] }, { "type": "Image", "props": { "y": 73, "x": 78, "width": 30, "var": "jina", "skin": "rankList/org0.png", "height": 33 } }, { "type": "Image", "props": { "y": 73, "x": 55, "var": "jinb", "skin": "rankList/org0.png" } }] };
        return goldCoinsUI;
    }(View));
    ui.goldCoinsUI = goldCoinsUI;
})(ui || (ui = {}));
(function (ui) {
    var huoDongUI = /** @class */ (function (_super) {
        __extends(huoDongUI, _super);
        function huoDongUI() {
            return _super.call(this) || this;
        }
        huoDongUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.huoDongUI.uiView);
        };
        huoDongUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "skin": "share/score2.png", "centerX": 0 } }, { "type": "Image", "props": { "var": "returnBtn", "top": 0, "skin": "  ", "right": 0, "left": 0, "bottom": 0 } }] };
        return huoDongUI;
    }(View));
    ui.huoDongUI = huoDongUI;
})(ui || (ui = {}));
(function (ui) {
    var introduceUI = /** @class */ (function (_super) {
        __extends(introduceUI, _super);
        function introduceUI() {
            return _super.call(this) || this;
        }
        introduceUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.introduceUI.uiView);
        };
        introduceUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "cam03", "skin": "introduce/cam03.jpg" } }, { "type": "Image", "props": { "y": 0, "x": -1059, "var": "cam02", "skin": "introduce/cam02.jpg" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "cam01", "skin": "introduce/cam01.jpg" } }, { "type": "Image", "props": { "var": "baImg", "top": -16, "skin": "map/ba.png", "right": -16, "left": -16, "bottom": -16 } }] };
        return introduceUI;
    }(View));
    ui.introduceUI = introduceUI;
})(ui || (ui = {}));
(function (ui) {
    var jingsUI = /** @class */ (function (_super) {
        __extends(jingsUI, _super);
        function jingsUI() {
            return _super.call(this) || this;
        }
        jingsUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.jingsUI.uiView);
        };
        jingsUI.uiView = { "type": "View", "props": { "width": 50, "height": 50 }, "child": [{ "type": "Image", "props": { "y": 3, "x": 5, "var": "jingsImg", "skin": "top/jinbiicon.png" } }] };
        return jingsUI;
    }(View));
    ui.jingsUI = jingsUI;
})(ui || (ui = {}));
(function (ui) {
    var loadingUI = /** @class */ (function (_super) {
        __extends(loadingUI, _super);
        function loadingUI() {
            return _super.call(this) || this;
        }
        loadingUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.loadingUI.uiView);
        };
        loadingUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 568, "x": 360, "width": 42, "var": "prenumber", "text": "0%", "height": 38, "fontSize": 25, "font": "Microsoft YaHei", "color": "#090a09", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 608, "x": 357, "width": 225, "var": "loading", "height": 49, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 21, "x": 2, "width": 36, "var": "you", "text": "游", "height": 32, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 21, "x": 33, "width": 36, "var": "xi", "text": "戏", "height": 31, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 21, "x": 65, "width": 34, "var": "jia", "text": "加", "height": 30, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 21, "x": 94, "width": 35, "var": "zai", "text": "载", "height": 29, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 21, "x": 123, "width": 36, "var": "zhong", "text": "中", "height": 29, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 21, "x": 163, "width": 21, "var": "d1", "text": ".", "height": 30, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 21, "x": 187, "width": 18, "var": "d2", "text": ".", "height": 33, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 21, "x": 209, "width": 14, "var": "d3", "text": ".", "height": 32, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true } }] }, { "type": "Box", "props": { "y": 893, "x": 0, "width": 720.6120000000001 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -365, "width": 1082, "var": "lu1", "skin": "loading/lu.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 354, "width": 1082, "var": "lu2", "skin": "loading/lu.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 1074, "width": 1082, "var": "lu3", "skin": "loading/lu.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 1794, "width": 1082, "var": "lu4", "skin": "loading/lu.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 2514, "width": 1082, "var": "lu5", "skin": "loading/lu.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 640, "x": -843, "width": 1686.8220000000001 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 412, "width": 1267, "var": "shang1", "skin": "loading/topbg.png", "scaleY": 0.666, "scaleX": 0.666, "height": 363 } }, { "type": "Image", "props": { "y": 0, "x": 1255, "width": 1267, "var": "shang2", "skin": "loading/topbg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 2098, "width": 1267, "var": "shang3", "skin": "loading/topbg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 2944, "width": 1267, "var": "shang4", "skin": "loading/topbg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 3788, "width": 1267, "var": "shang5", "skin": "loading/topbg.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 929, "x": 827, "width": 194, "var": "cars", "pivotY": 68.5, "pivotX": 97, "height": 137 }, "child": [{ "type": "Image", "props": { "y": 119.20600000000002, "skin": "loading/caryy.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 127.20600000000002, "x": 97, "width": 283, "skin": "loading/car.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 191, "pivotX": 141.5, "height": 191 }, "compId": 14 }, { "type": "Clip", "props": { "y": 106.20600000000002, "x": 52, "skin": "loading/clip_wq.png", "scaleY": 0.666, "scaleX": 0.666, "index": 0, "clipX": 10, "autoPlay": true } }, { "type": "Clip", "props": { "y": 104.20600000000002, "x": 168, "skin": "loading/clip_wq.png", "scaleY": 0.666, "scaleX": 0.666, "index": 0, "clipX": 10, "autoPlay": true } }] }, { "type": "Box", "props": { "y": 985, "x": -763, "width": 1526.2359999999999 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 373, "width": 1146, "var": "xia1", "skin": "loading/bbg.png", "scaleY": 0.666, "scaleX": 0.666, "height": 283 } }, { "type": "Image", "props": { "y": 0, "x": 1136, "width": 1146, "var": "xia2", "skin": "loading/bbg.png", "scaleY": 0.666, "scaleX": 0.666, "height": 283 } }, { "type": "Image", "props": { "y": 0, "x": 1900, "width": 1146, "var": "xia3", "skin": "loading/bbg.png", "scaleY": 0.666, "scaleX": 0.666, "height": 283 } }, { "type": "Image", "props": { "y": 0, "x": 2664, "width": 1146, "var": "xia4", "skin": "loading/bbg.png", "scaleY": 0.666, "scaleX": 0.666, "height": 283 } }, { "type": "Image", "props": { "y": 0, "x": 3426, "width": 1146, "var": "xia5", "skin": "loading/bbg.png", "scaleY": 0.666, "scaleX": 0.666, "height": 283 } }] }, { "type": "Box", "props": { "y": 89, "x": -614.9639999999999 }, "child": [{ "type": "Box", "props": { "y": -6, "x": 1050, "width": 570, "var": "yuncai2", "pivotY": 0, "pivotX": 0, "height": 214 }, "child": [{ "type": "Image", "props": { "y": 179, "x": 441, "width": 73, "skin": "loading/yun1.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 28, "pivotX": 39, "height": 52 }, "compId": 31 }, { "type": "Image", "props": { "y": 123, "x": 318, "width": 62, "skin": "loading/yun2.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 23, "pivotX": 30, "height": 42 }, "compId": 32 }, { "type": "Image", "props": { "y": 42, "x": 185, "width": 144, "skin": "loading/yun3.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 43, "pivotX": 67, "height": 78 }, "compId": 33 }, { "type": "Image", "props": { "y": 119, "x": 34, "width": 110, "skin": "loading/yun4.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 32, "pivotX": 54, "height": 60 }, "compId": 34 }, { "type": "Image", "props": { "y": 48, "x": 443, "width": 191, "skin": "loading/yun5.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 69, "pivotX": 102, "height": 121 }, "compId": 35 }] }, { "type": "Box", "props": { "y": -6, "x": 327, "var": "yuncai1" }, "child": [{ "type": "Image", "props": { "y": 179, "x": 441, "width": 73, "skin": "loading/yun1.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 28, "pivotX": 39, "height": 52 }, "compId": 47 }, { "type": "Image", "props": { "y": 123, "x": 318, "width": 62, "skin": "loading/yun2.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 23, "pivotX": 30, "height": 42 }, "compId": 48 }, { "type": "Image", "props": { "y": 42, "x": 185, "width": 144, "skin": "loading/yun3.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 43, "pivotX": 67, "height": 78 }, "compId": 49 }, { "type": "Image", "props": { "y": 119, "x": 34, "width": 110, "skin": "loading/yun4.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 32, "pivotX": 54, "height": 60 }, "compId": 50 }, { "type": "Image", "props": { "y": 48, "x": 443, "width": 191, "skin": "loading/yun5.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 69, "pivotX": 102, "height": 121 }, "compId": 51 }] }, { "type": "Box", "props": { "y": -6, "x": 1765, "var": "yuncai3" }, "child": [{ "type": "Image", "props": { "y": 179, "x": 441, "width": 73, "skin": "loading/yun1.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 28, "pivotX": 39, "height": 52 }, "compId": 57 }, { "type": "Image", "props": { "y": 123, "x": 318, "width": 62, "skin": "loading/yun2.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 23, "pivotX": 30, "height": 42 }, "compId": 58 }, { "type": "Image", "props": { "y": 42, "x": 185, "width": 144, "skin": "loading/yun3.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 43, "pivotX": 67, "height": 78 }, "compId": 59 }, { "type": "Image", "props": { "y": 119, "x": 34, "width": 110, "skin": "loading/yun4.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 32, "pivotX": 54, "height": 60 }, "compId": 60 }, { "type": "Image", "props": { "y": 48, "x": 443, "width": 191, "skin": "loading/yun5.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 69, "pivotX": 102, "height": 121 }, "compId": 61 }] }, { "type": "Box", "props": { "y": -6, "x": 2480, "var": "yuncai4" }, "child": [{ "type": "Image", "props": { "y": 179, "x": 441, "width": 73, "skin": "loading/yun1.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 28, "pivotX": 39, "height": 52 }, "compId": 66 }, { "type": "Image", "props": { "y": 123, "x": 318, "width": 62, "skin": "loading/yun2.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 23, "pivotX": 30, "height": 42 }, "compId": 67 }, { "type": "Image", "props": { "y": 42, "x": 185, "width": 144, "skin": "loading/yun3.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 43, "pivotX": 67, "height": 78 }, "compId": 68 }, { "type": "Image", "props": { "y": 119, "x": 34, "width": 110, "skin": "loading/yun4.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 32, "pivotX": 54, "height": 60 }, "compId": 69 }, { "type": "Image", "props": { "y": 48, "x": 443, "width": 191, "skin": "loading/yun5.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 69, "pivotX": 102, "height": 121 }, "compId": 70 }] }, { "type": "Box", "props": { "y": -14, "x": 3196, "var": "yuncai5" }, "child": [{ "type": "Image", "props": { "y": 179, "x": 441, "width": 73, "skin": "loading/yun1.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 28, "pivotX": 39, "height": 52 }, "compId": 75 }, { "type": "Image", "props": { "y": 123, "x": 318, "width": 62, "skin": "loading/yun2.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 23, "pivotX": 30, "height": 42 }, "compId": 76 }, { "type": "Image", "props": { "y": 42, "x": 185, "width": 144, "skin": "loading/yun3.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 43, "pivotX": 67, "height": 78 }, "compId": 77 }, { "type": "Image", "props": { "y": 119, "x": 34, "width": 110, "skin": "loading/yun4.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 32, "pivotX": 54, "height": 60 }, "compId": 78 }, { "type": "Image", "props": { "y": 48, "x": 443, "width": 191, "skin": "loading/yun5.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 69, "pivotX": 102, "height": 121 }, "compId": 79 }] }] }], "animations": [{ "nodes": [{ "target": 14, "keyframes": { "x": [{ "value": 97, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "x", "index": 0 }, { "value": 97, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "scaleY", "index": 0 }, { "value": 0.633, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "scaleY", "index": 20 }] } }], "name": "car", "id": 3, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 31, "keyframes": { "x": [{ "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "x", "index": 0 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "x", "index": 10 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "scaleX", "index": 20 }] } }, { "target": 47, "keyframes": { "x": [{ "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "x", "index": 0 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "x", "index": 10 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 47, "key": "scaleX", "index": 20 }] } }, { "target": 32, "keyframes": { "x": [{ "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "x", "index": 0 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "x", "index": 10 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "scaleX", "index": 20 }] } }, { "target": 33, "keyframes": { "x": [{ "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 33, "key": "x", "index": 0 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 33, "key": "x", "index": 10 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 33, "key": "x", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 33, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 33, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 33, "key": "scaleX", "index": 20 }] } }, { "target": 34, "keyframes": { "x": [{ "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 34, "key": "x", "index": 0 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 34, "key": "x", "index": 10 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 34, "key": "x", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 34, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 34, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 34, "key": "scaleX", "index": 20 }] } }, { "target": 35, "keyframes": { "x": [{ "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 35, "key": "x", "index": 0 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 35, "key": "x", "index": 10 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 35, "key": "x", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 35, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 35, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 35, "key": "scaleX", "index": 20 }] } }, { "target": 48, "keyframes": { "x": [{ "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "x", "index": 0 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "x", "index": 10 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "x", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleX", "index": 20 }] } }, { "target": 49, "keyframes": { "x": [{ "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "x", "index": 0 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "x", "index": 10 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 49, "key": "scaleX", "index": 20 }] } }, { "target": 50, "keyframes": { "x": [{ "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "x", "index": 0 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "x", "index": 10 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 50, "key": "scaleX", "index": 20 }] } }, { "target": 51, "keyframes": { "x": [{ "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "x", "index": 0 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 51, "label": null, "key": "x", "index": 10 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 51, "label": null, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 51, "label": null, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "scaleX", "index": 20 }] } }, { "target": 57, "keyframes": { "x": [{ "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "x", "index": 0 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "x", "index": 10 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 57, "key": "scaleX", "index": 20 }] } }, { "target": 58, "keyframes": { "x": [{ "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "x", "index": 0 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "x", "index": 10 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 58, "key": "scaleX", "index": 20 }] } }, { "target": 59, "keyframes": { "x": [{ "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "x", "index": 0 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "x", "index": 10 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 59, "key": "scaleX", "index": 20 }] } }, { "target": 60, "keyframes": { "x": [{ "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "x", "index": 0 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "x", "index": 10 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 60, "key": "scaleX", "index": 20 }] } }, { "target": 61, "keyframes": { "x": [{ "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "x", "index": 0 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "x", "index": 10 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "scaleX", "index": 20 }] } }, { "target": 66, "keyframes": { "x": [{ "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "x", "index": 0 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "x", "index": 10 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 66, "key": "scaleX", "index": 20 }] } }, { "target": 67, "keyframes": { "x": [{ "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "x", "index": 0 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "x", "index": 10 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 67, "key": "scaleX", "index": 20 }] } }, { "target": 68, "keyframes": { "x": [{ "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "x", "index": 0 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "x", "index": 10 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 68, "key": "scaleX", "index": 20 }] } }, { "target": 69, "keyframes": { "x": [{ "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "x", "index": 0 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "x", "index": 10 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 69, "key": "scaleX", "index": 20 }] } }, { "target": 70, "keyframes": { "x": [{ "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "x", "index": 0 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "x", "index": 10 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 70, "key": "scaleX", "index": 20 }] } }, { "target": 75, "keyframes": { "x": [{ "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "x", "index": 0 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "x", "index": 10 }, { "value": 441, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 75, "key": "scaleX", "index": 20 }] } }, { "target": 76, "keyframes": { "x": [{ "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "x", "index": 0 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "x", "index": 10 }, { "value": 318, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 76, "key": "scaleX", "index": 20 }] } }, { "target": 77, "keyframes": { "x": [{ "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "x", "index": 0 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "x", "index": 10 }, { "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 77, "key": "scaleX", "index": 20 }] } }, { "target": 78, "keyframes": { "x": [{ "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "x", "index": 0 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "x", "index": 10 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 78, "key": "scaleX", "index": 20 }] } }, { "target": 79, "keyframes": { "x": [{ "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "x", "index": 0 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "x", "index": 10 }, { "value": 443, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "scaleY", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "scaleY", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "scaleX", "index": 0 }, { "value": 0.555, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "scaleX", "index": 10 }, { "value": 0.666, "tweenMethod": "linearNone", "tween": true, "target": 79, "key": "scaleX", "index": 20 }] } }], "name": "yuncai", "id": 4, "frameRate": 24, "action": 0 }] };
        return loadingUI;
    }(View));
    ui.loadingUI = loadingUI;
})(ui || (ui = {}));
(function (ui) {
    var loginUI = /** @class */ (function (_super) {
        __extends(loginUI, _super);
        function loginUI() {
            return _super.call(this) || this;
        }
        loginUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.loginUI.uiView);
        };
        loginUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Button", "props": { "y": 648, "var": "loginBtn", "stateNum": 2, "skin": "login/button_login.png", "scaleY": 1.333, "scaleX": 1.333, "centerX": 0 } }, { "type": "Image", "props": { "y": 519, "skin": "login/dhk.png", "scaleY": 1.333, "scaleX": 1.333, "centerX": 0 } }, { "type": "TextInput", "props": { "y": 544, "width": 232, "var": "userID", "promptColor": "#dbd6d6", "prompt": "请输入用户ID", "height": 50, "fontSize": 29, "font": "SimHei", "color": "#f9f6f6", "centerX": 0, "align": "center" } }] };
        return loginUI;
    }(View));
    ui.loginUI = loginUI;
})(ui || (ui = {}));
(function (ui) {
    var manyiduanniuUI = /** @class */ (function (_super) {
        __extends(manyiduanniuUI, _super);
        function manyiduanniuUI() {
            return _super.call(this) || this;
        }
        manyiduanniuUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.manyiduanniuUI.uiView);
        };
        manyiduanniuUI.uiView = { "type": "View", "props": { "width": 50, "height": 50 }, "child": [{ "type": "Image", "props": { "width": 50, "skin": "tishi/kongbai.png", "height": 50, "centerY": 0.5, "centerX": 0.5, "alpha": 0 } }] };
        return manyiduanniuUI;
    }(View));
    ui.manyiduanniuUI = manyiduanniuUI;
})(ui || (ui = {}));
(function (ui) {
    var manyidutishiUI = /** @class */ (function (_super) {
        __extends(manyidutishiUI, _super);
        function manyidutishiUI() {
            return _super.call(this) || this;
        }
        manyidutishiUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.manyidutishiUI.uiView);
        };
        manyidutishiUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "centerY": 0.5, "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "tishi/manyitishi.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 12, "x": 343, "var": "shutBtn", "skin": "shopInfo/return1.png" } }, { "type": "sange", "props": { "y": -29, "x": -12, "runtime": "wuling.sange" } }] }] };
        return manyidutishiUI;
    }(Dialog));
    ui.manyidutishiUI = manyidutishiUI;
})(ui || (ui = {}));
(function (ui) {
    var mapUI = /** @class */ (function (_super) {
        __extends(mapUI, _super);
        function mapUI() {
            return _super.call(this) || this;
        }
        mapUI.prototype.createChildren = function () {
            View.regComponent("wuling.Top", wuling.Top);
            View.regComponent("wuling.clientDetails", wuling.clientDetails);
            _super.prototype.createChildren.call(this);
            this.createView(ui.mapUI.uiView);
        };
        mapUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "runtime": "wuling.Top", "right": 0, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Panel", "props": { "var": "pan", "vScrollBarSkin": "  ", "top": 0, "right": 0, "left": 0, "hScrollBarSkin": "     ", "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 3664, "var": "mapImg", "skin": "map/bg4.jpg", "scaleY": 0.666, "scaleX": 0.666, "height": 2856, "cacheAs": "none" }, "child": [{ "type": "Image", "props": { "y": 412, "x": 159, "var": "diImg", "skin": "map/di4.png", "scaleY": 2, "scaleX": 2 } }, { "type": "Image", "props": { "y": 257, "x": 133, "var": "wallImg", "skin": "map/wall.png", "scaleY": 2, "scaleX": 2 } }, { "type": "Image", "props": { "y": 270, "x": 1193, "var": "wallBack", "skin": "map/wallBack4.png", "scaleY": 2, "scaleX": 2 } }, { "type": "Box", "props": { "y": 1054, "x": 1173, "visible": false, "var": "digeBox" }, "child": [{ "type": "Image", "props": { "y": 354, "var": "dige1", "skin": "map/dige.png", "name": "1", "mouseThrough": true } }, { "type": "Image", "props": { "y": 515, "x": 245, "var": "dige2", "skin": "map/dige.png", "mouseThrough": true } }, { "type": "Image", "props": { "y": 677, "x": 493, "var": "dige3", "skin": "map/dige.png", "mouseThrough": true } }, { "type": "Image", "props": { "y": 178, "x": 276, "var": "dige4", "skin": "map/dige.png", "name": "2", "mouseThrough": true } }, { "type": "Image", "props": { "y": 338, "x": 527, "var": "dige5", "skin": "map/dige.png", "name": "3", "mouseThrough": true } }, { "type": "Image", "props": { "y": 498, "x": 771, "var": "dige6", "skin": "map/dige.png", "name": "4", "mouseThrough": true } }, { "type": "Image", "props": { "x": 555, "var": "dige7", "skin": "map/dige.png", "name": "5", "mouseThrough": true } }, { "type": "Image", "props": { "y": 162, "x": 805, "var": "dige8", "skin": "map/dige.png", "name": "6", "mouseThrough": true } }, { "type": "Image", "props": { "y": 323, "x": 1052, "var": "dige9", "skin": "map/dige.png", "name": "7", "mouseThrough": true } }, { "type": "Image", "props": { "y": 173, "x": -281, "var": "dige10", "skin": "map/dige.png", "name": "8" } }, { "type": "Image", "props": { "y": -4, "x": -3, "var": "dige11", "skin": "map/dige.png", "name": "9" } }, { "type": "Image", "props": { "y": -182, "x": 273, "var": "dige12", "skin": "map/dige.png", "name": "10" } }, { "type": "Image", "props": { "y": 858, "x": 777, "var": "dige13", "skin": "map/dige.png", "name": "11" } }, { "type": "Image", "props": { "y": 678, "x": 1052, "var": "dige14", "skin": "map/dige.png", "name": "12" } }, { "type": "Image", "props": { "y": 502, "x": 1330, "var": "dige15", "skin": "map/dige.png", "name": "13" } }, { "type": "Image", "props": { "y": 10, "x": -529, "var": "dige16", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -168, "x": -250, "var": "dige17", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -347, "x": 29, "var": "dige18", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1014, "x": 1021, "var": "dige19", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 839, "x": 1302, "var": "dige20", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 659, "x": 1579, "var": "dige21", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -150, "x": -773, "var": "dige22", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -328, "x": -497, "var": "dige23", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -506, "x": -220, "var": "dige24", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1176, "x": 1270, "var": "dige25", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 997, "x": 1547, "var": "dige26", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 820, "x": 1826, "var": "dige27", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 553, "x": -166, "var": "digeLv11", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": 850, "x": 293, "var": "digeLv12", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": -92, "x": 838, "var": "digeLv13", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 157, "x": 1221, "var": "digeLv14", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 45, "x": -946, "var": "digeLv41", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": 1052, "x": 604, "var": "digeLv42", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": -594, "x": 58, "var": "digeLv43", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": -345, "x": 443, "var": "digeLv44", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 408, "x": 1609, "var": "digeLv45", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 658, "x": 1995, "var": "digeLv46", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 364, "x": -455, "var": "digeLv21", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 1053, "x": 605, "var": "digeLv22", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": -277, "x": 549, "var": "digeLv23", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 408, "x": 1610, "var": "digeLv24", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 204, "x": -699, "var": "digeLv31", "skin": "map/dige4.png" } }, { "type": "Image", "props": { "y": 1052, "x": 606, "var": "digeLv32", "skin": "map/dige4.png" } }] }, { "type": "Sprite", "props": { "y": 1793, "x": 1188, "width": 32, "var": "men_di", "height": 32 } }, { "type": "Clip", "props": { "y": 1639, "x": 1108, "var": "men_left", "skin": "map/clip_left.png", "name": "men_1", "clipX": 30 } }, { "type": "Sprite", "props": { "y": 1510, "x": 1459, "var": "frontDesk" } }, { "type": "Sprite", "props": { "y": 1641, "x": 1713, "var": "platform_ball" } }, { "type": "Clip", "props": { "y": 1794, "x": 1343, "var": "men_right", "skin": "map/clip_right.png", "clipX": 30 } }, { "type": "Sprite", "props": { "y": 1023, "x": 2315, "var": "exit" } }, { "type": "Sprite", "props": { "y": 523, "x": 1544, "var": "exitLeft" } }, { "type": "Sprite", "props": { "y": 1524, "x": 3094, "var": "exitRight" } }, { "type": "Image", "props": { "y": 1256, "x": 1701, "var": "ceshi", "skin": "rankList/top2.png", "alpha": 0 } }, { "type": "Box", "props": { "y": 1054, "x": 1173, "visible": false, "var": "diClick", "alpha": 0 }, "child": [{ "type": "Image", "props": { "y": 354, "var": "diClick1", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 515, "x": 245, "var": "diClick2", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 677, "x": 493, "var": "diClick3", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 178, "x": 276, "var": "diClick4", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 338, "x": 527, "var": "diClick5", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 498, "x": 771, "var": "diClick6", "skin": "map/dige.png" } }, { "type": "Image", "props": { "x": 555, "var": "diClick7", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 162, "x": 805, "var": "diClick8", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 323, "x": 1052, "var": "diClick9", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 173, "x": -281, "var": "diClick10", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -4, "x": -3, "var": "diClick11", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -182, "x": 273, "var": "diClick12", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 858, "x": 777, "var": "diClick13", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 678, "x": 1052, "var": "diClick14", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 502, "x": 1330, "var": "diClick15", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 10, "x": -529, "var": "diClick16", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -168, "x": -250, "var": "diClick17", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -347, "x": 29, "var": "diClick18", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1014, "x": 1021, "var": "diClick19", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 839, "x": 1302, "var": "diClick20", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 659, "x": 1579, "var": "diClick21", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -150, "x": -773, "var": "diClick22", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -328, "x": -497, "var": "diClick23", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -506, "x": -220, "var": "diClick24", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1176, "x": 1270, "var": "diClick25", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 997, "x": 1547, "var": "diClick26", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 820, "x": 1826, "var": "diClick27", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 563, "x": -156, "var": "diClick28", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": 860, "x": 303, "var": "diClick29", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": -82, "x": 848, "var": "diClick30", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 167, "x": 1231, "var": "diClick31", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 55, "x": -936, "var": "diClick32", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": 1062, "x": 614, "var": "diClick33", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": -584, "x": 68, "var": "diClick34", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": -335, "x": 453, "var": "diClick35", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 418, "x": 1619, "var": "diClick36", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 668, "x": 2005, "var": "diClick37", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 374, "x": -445, "var": "diClick38", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 1063, "x": 615, "var": "diClick39", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": -267, "x": 559, "var": "diClick40", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 418, "x": 1620, "var": "diClick41", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 214, "x": -689, "var": "diClick42", "skin": "map/dige4.png" } }, { "type": "Image", "props": { "y": 1062, "x": 616, "var": "diClick43", "skin": "map/dige4.png" } }] }] }] }, { "type": "Image", "props": { "width": 148, "var": "ok", "skin": "map/ok.png", "right": 0, "height": 68, "bottom": 0 } }, { "type": "Image", "props": { "var": "mo", "top": 0, "skin": "map/mo.png", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 } }, { "type": "Sprite", "props": { "y": 162, "x": 46, "var": "animei" } }, { "type": "Image", "props": { "visible": false, "var": "clientInfoBag", "top": 0, "right": 0, "left": 0, "bottom": 0 } }, { "type": "clientDetails", "props": { "y": 603, "visible": false, "var": "clientInfo", "scaleY": 1.6, "scaleX": 1.6, "runtime": "wuling.clientDetails", "pivotY": 127.5, "pivotX": 159, "centerX": 0, "alpha": 1 } }] };
        return mapUI;
    }(View));
    ui.mapUI = mapUI;
})(ui || (ui = {}));
(function (ui) {
    var menuUI = /** @class */ (function (_super) {
        __extends(menuUI, _super);
        function menuUI() {
            return _super.call(this) || this;
        }
        menuUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.menuUI.uiView);
        };
        menuUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "returnBtn", "top": 0, "right": 0, "left": 0, "bottom": 0 } }, { "type": "Box", "props": { "width": 720, "height": 1318, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 165.19600000000003, "x": 6.968, "width": 474, "var": "imgCai3", "skin": "map/store.png", "scaleY": 0.536, "scaleX": 0.536, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 153.19600000000003, "x": 139.968, "width": 474, "var": "imgCai2", "skin": "map/facilities.png", "scaleY": 0.599, "scaleX": 0.599, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 137.19600000000003, "x": 314.968, "width": 474, "var": "imgCai1", "skin": "map/caidan.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 206, "pivotX": 10, "height": 604 } }, { "type": "Image", "props": { "y": 175.19600000000003, "x": 440.968, "width": 474, "var": "imgCai6", "skin": "map/setup.png", "scaleY": 0.529, "scaleX": 0.529, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 185.19600000000003, "x": 450.968, "width": 474, "var": "imgCai7", "skin": "map/task.png", "scaleY": 0.529, "scaleX": 0.529, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 185, "x": 450, "width": 474, "var": "imgCai4", "skin": "map/share.png", "scaleY": 0.529, "scaleX": 0.529, "pivotY": 213, "pivotX": 13, "height": 604 } }] }, { "type": "Panel", "props": { "width": 720, "var": "pan", "height": 401, "hScrollBarSkin": "  ", "centerY": -190, "centerX": 0 }, "child": [{ "type": "Image", "props": { "x": -1630, "width": 4079, "var": "imgBtn", "top": 0, "skin": "map/caidan.png", "height": 401, "bottom": 0, "alpha": 0 } }] }] };
        return menuUI;
    }(Dialog));
    ui.menuUI = menuUI;
})(ui || (ui = {}));
(function (ui) {
    var missionUI = /** @class */ (function (_super) {
        __extends(missionUI, _super);
        function missionUI() {
            return _super.call(this) || this;
        }
        missionUI.prototype.createChildren = function () {
            View.regComponent("wuling.missionItem", wuling.missionItem);
            View.regComponent("wuling.achievement", wuling.achievement);
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.missionUI.uiView);
        };
        missionUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 114, "centerX": -8 }, "child": [{ "type": "Image", "props": { "y": 23, "x": 12, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 38, "x": 613, "var": "returnBtn", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "List", "props": { "y": 189, "x": 73, "width": 575, "var": "list", "spaceY": 5, "spaceX": 2, "height": 579 }, "child": [{ "type": "VScrollBar", "props": { "x": 552, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "missionItem", "props": { "y": -8, "x": 17, "var": "tabView", "scaleX": 0.95, "runtime": "wuling.missionItem", "renderType": "render" } }] }, { "type": "List", "props": { "y": 188, "x": 59, "width": 589, "visible": false, "var": "cen", "spaceY": 17, "spaceX": 3, "repeatX": 3, "height": 581 }, "child": [{ "type": "VScrollBar", "props": { "x": 566, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "achievement", "props": { "y": 1, "x": 10, "runtime": "wuling.achievement", "renderType": "render" } }] }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 157, "x": 69, "skin": "mission/xian.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 115, "x": 58, "var": "tabM", "skin": "mission/missionW.png", "scaleY": 0.666, "scaleX": 0.683 } }, { "type": "Image", "props": { "y": 115, "x": 57, "var": "tabMission", "skin": "mission/mession.png", "scaleY": 1.333, "scaleX": 1.333, "alpha": 0 } }, { "type": "Image", "props": { "y": 102, "x": 603, "visible": false, "var": "renImg", "skin": "mission/award.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 115, "x": 353, "var": "tabA", "skin": "mission/achie.png", "scaleY": 0.666, "scaleX": 0.666, "alpha": 0 } }, { "type": "Image", "props": { "y": 115, "x": 352, "var": "tabAchi", "skin": "mission/achie.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 101, "x": 602, "visible": false, "var": "cenImg", "skin": "mission/cen.png", "scaleY": 1.333, "scaleX": 1.333 } }] }] };
        return missionUI;
    }(Dialog));
    ui.missionUI = missionUI;
})(ui || (ui = {}));
(function (ui) {
    var missionItemUI = /** @class */ (function (_super) {
        __extends(missionItemUI, _super);
        function missionItemUI() {
            return _super.call(this) || this;
        }
        missionItemUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.missionItemUI.uiView);
        };
        missionItemUI.uiView = { "type": "View", "props": { "width": 543, "height": 109 }, "child": [{ "type": "Box", "props": { "y": 4, "x": 1 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg", "skin": "mission/kuang.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 20, "x": 426, "var": "reimg", "skin": "mission/unfinished.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Button", "props": { "y": 21, "x": 426, "var": "lingqu", "stateNum": 2, "skin": "mission/button_ling.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Text", "props": { "y": 58, "x": 21, "width": 156, "var": "renwu", "text": "门店升级到2级", "height": 24, "fontSize": 23, "font": "SimHei", "color": "#c17c32", "bold": true } }, { "type": "Text", "props": { "y": 58, "x": 222, "width": 232, "var": "proText", "text": "1/1000", "pivotX": 38, "height": 24, "fontSize": 23, "font": "SimHei", "color": "#c17c32", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": 16, "x": 53, "visible": false, "var": "one", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 16, "x": 82, "visible": false, "var": "two", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 16, "x": 111, "visible": false, "var": "three", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 16, "x": 142, "visible": false, "var": "four", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 16, "x": 171, "visible": false, "var": "five", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 34, "x": 222, "width": 191, "visible": true, "var": "add", "height": 52, "alpha": 0 }, "child": [{ "type": "Text", "props": { "y": 1, "x": -13, "width": 33, "text": "+", "height": 51, "fontSize": 55, "font": "SimHei", "color": "#f1de09", "bold": true } }, { "type": "Image", "props": { "y": 10, "x": 58, "var": "jin1", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 87, "var": "jin2", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 116, "var": "jin3", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 146, "var": "jin4", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 9, "x": 21, "width": 34, "skin": "top/jinbi.png", "height": 34 } }] }, { "type": "Label", "props": { "y": 19, "x": 23, "width": 201, "var": "missionName", "text": "收获宝币1", "stroke": 1, "italic": true, "height": 28, "fontSize": 24, "color": "#000000" } }, { "type": "Image", "props": { "y": 3, "x": -1, "width": 548, "var": "suoimg", "skin": "mission/suo.png", "height": 106 } }] };
        return missionItemUI;
    }(View));
    ui.missionItemUI = missionItemUI;
})(ui || (ui = {}));
(function (ui) {
    var nanaUI = /** @class */ (function (_super) {
        __extends(nanaUI, _super);
        function nanaUI() {
            return _super.call(this) || this;
        }
        nanaUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.nanaUI.uiView);
        };
        nanaUI.uiView = { "type": "View", "props": { "y": 0, "width": 720, "right": 0, "pivotY": 0, "left": 0, "height": 482, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 340, "var": "baImg", "skin": "nana/kuang.png", "right": 15, "pivotY": 139, "left": 98, "height": 275, "alpha": 1 }, "compId": 12 }, { "type": "Image", "props": { "y": 484, "x": 6, "width": 234.5, "var": "nanaImg", "skin": "nana/nana.png", "scaleY": 1, "scaleX": 1, "pivotY": 482, "pivotX": 2, "height": 480, "alpha": 1 }, "compId": 11 }, { "type": "Sprite", "props": { "y": 213, "x": 219, "width": 32, "var": "nanaLv", "pivotY": 18, "pivotX": 16, "height": 32, "alpha": 1 }, "compId": 16 }, { "type": "Sprite", "props": { "y": 236.81949999999995, "x": 0, "var": "xinguang", "alpha": 1 }, "compId": 17 }], "animations": [{ "nodes": [{ "target": 11, "keyframes": { "x": [{ "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 0 }], "scaleY": [{ "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 8 }], "scaleX": [{ "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 8 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 8 }] } }, { "target": 17, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 20 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 20 }] } }, { "target": 16, "keyframes": { "x": [{ "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 20 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 20 }] } }, { "target": 12, "keyframes": { "right": [{ "value": 620, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "right", "index": 0 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "right", "index": 15 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 15 }] } }], "name": "nana", "id": 1, "frameRate": 24, "action": 1 }, { "nodes": [{ "target": 11, "keyframes": { "x": [{ "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 0 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 8 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 8 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 8 }] } }, { "target": 12, "keyframes": { "x": [{ "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }, { "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 8 }], "width": [{ "value": 607, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "width", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "width", "index": 8 }], "right": [{ "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "right", "index": 0 }, { "value": 620, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "right", "index": 8 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 8 }] } }, { "target": 16, "keyframes": { "x": [{ "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 15 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 15 }] } }, { "target": 17, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 20 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 20 }] } }], "name": "nana_0", "id": 1, "frameRate": 24, "action": 1 }] };
        return nanaUI;
    }(View));
    ui.nanaUI = nanaUI;
})(ui || (ui = {}));
(function (ui) {
    var nenglianganniuUI = /** @class */ (function (_super) {
        __extends(nenglianganniuUI, _super);
        function nenglianganniuUI() {
            return _super.call(this) || this;
        }
        nenglianganniuUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.nenglianganniuUI.uiView);
        };
        nenglianganniuUI.uiView = { "type": "View", "props": { "width": 50, "height": 50 }, "child": [{ "type": "Image", "props": { "width": 50, "skin": "tishi/kongbai.png", "height": 50, "alpha": 0 } }] };
        return nenglianganniuUI;
    }(View));
    ui.nenglianganniuUI = nenglianganniuUI;
})(ui || (ui = {}));
(function (ui) {
    var nengliangtishiUI = /** @class */ (function (_super) {
        __extends(nengliangtishiUI, _super);
        function nengliangtishiUI() {
            return _super.call(this) || this;
        }
        nengliangtishiUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.nengliangtishiUI.uiView);
        };
        nengliangtishiUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "centerY": 0.5, "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "tishi/nengliangtishi.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 12, "x": 344, "var": "shutBtn", "skin": "shopInfo/return1.png" } }, { "type": "sange", "props": { "y": -28, "x": -16, "runtime": "wuling.sange" } }] }] };
        return nengliangtishiUI;
    }(Dialog));
    ui.nengliangtishiUI = nengliangtishiUI;
})(ui || (ui = {}));
(function (ui) {
    var personUI = /** @class */ (function (_super) {
        __extends(personUI, _super);
        function personUI() {
            return _super.call(this) || this;
        }
        personUI.prototype.createChildren = function () {
            View.regComponent("ui.clientXXUI", ui.clientXXUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.personUI.uiView);
        };
        personUI.uiView = { "type": "View", "props": { "y": 199, "x": 46, "width": 106, "pivotY": 199, "pivotX": 46, "height": 211 }, "child": [{ "type": "Clip", "props": { "y": 198, "x": 46, "width": 106, "var": "persons", "skin": "guke/G01/clip_01bg.png", "pivotY": 118, "pivotX": 46, "height": 131, "clipX": 21, "autoPlay": true } }, { "type": "clientXX", "props": { "y": 31, "x": 52, "var": "top1", "runtime": "ui.clientXXUI" } }, { "type": "Box", "props": { "y": 50, "x": 2, "width": 98, "var": "add", "height": 23, "alpha": 0 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 0, "var": "addj", "skin": "top/jia.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 23, "width": 34, "skin": "top/zan.png", "scaleY": 0.666, "scaleX": 0.666, "height": 34 } }, { "type": "Box", "props": { "y": 1, "x": 45, "var": "itemZan" }, "child": [{ "type": "Image", "props": { "var": "item3", "skin": "rankList/org0.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 16, "var": "item2", "skin": "rankList/org0.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 32, "var": "item1", "skin": "rankList/org0.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] }] };
        return personUI;
    }(View));
    ui.personUI = personUI;
})(ui || (ui = {}));
(function (ui) {
    var PlaceItemUI = /** @class */ (function (_super) {
        __extends(PlaceItemUI, _super);
        function PlaceItemUI() {
            return _super.call(this) || this;
        }
        PlaceItemUI.prototype.createChildren = function () {
            View.regComponent("wuling.PlaceItem", wuling.PlaceItem);
            _super.prototype.createChildren.call(this);
            this.createView(ui.PlaceItemUI.uiView);
        };
        PlaceItemUI.uiView = { "type": "View", "props": { "width": 210, "runtime": "wuling.PlaceItem", "mouseThrough": true, "height": 159 }, "child": [{ "type": "Box", "props": { "y": -3, "x": 4, "width": 201, "var": "boxImg", "mouseThrough": true, "height": 165 }, "child": [{ "type": "Image", "props": { "y": 116, "x": 73, "width": 56, "var": "cancel", "skin": "place2/cancel.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 5, "width": 56, "var": "ensure", "skin": "place2/ensure.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 6, "width": 56, "var": "checks", "skin": "place2/checks.png", "height": 44 } }, { "type": "Image", "props": { "y": 117, "x": 73, "width": 56, "var": "shift", "skin": "place2/shift.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 140, "width": 56, "var": "rotate", "skin": "place2/rotate.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 140, "width": 56, "var": "demolition", "skin": "place2/demolition.png", "height": 44 } }] }, { "type": "Image", "props": { "y": 118, "x": 78, "width": 76, "var": "imgBtn", "skin": "place/1x1ccz.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 182, "mouseThrough": true, "height": 181 } }, { "type": "Sprite", "props": { "y": 44, "x": 35, "var": "aniswf" } }] };
        return PlaceItemUI;
    }(View));
    ui.PlaceItemUI = PlaceItemUI;
})(ui || (ui = {}));
(function (ui) {
    var PlaceItem1UI = /** @class */ (function (_super) {
        __extends(PlaceItem1UI, _super);
        function PlaceItem1UI() {
            return _super.call(this) || this;
        }
        PlaceItem1UI.prototype.createChildren = function () {
            View.regComponent("wuling.PlaceItem1", wuling.PlaceItem1);
            _super.prototype.createChildren.call(this);
            this.createView(ui.PlaceItem1UI.uiView);
        };
        PlaceItem1UI.uiView = { "type": "View", "props": { "width": 270, "runtime": "wuling.PlaceItem1", "mouseThrough": true, "mouseEnabled": true, "height": 259 }, "child": [{ "type": "Box", "props": { "y": 2, "x": -10, "var": "imgBtn" }, "child": [{ "type": "Image", "props": { "y": -90, "x": -19, "var": "show0", "skin": "place/d100016.png" } }, { "type": "Image", "props": { "y": -90, "x": -19, "var": "show0Ani" } }, { "type": "Image", "props": { "y": -81, "x": 6, "var": "carClass" } }, { "type": "Image", "props": { "y": -81, "x": 6, "var": "carClassAni" } }, { "type": "Image", "props": { "y": -90, "x": -19, "var": "show1", "skin": "place/show1.png" } }, { "type": "Image", "props": { "y": -90, "x": -19, "var": "show1Ani" } }] }, { "type": "Box", "props": { "y": 54, "x": 0, "width": 201, "var": "boxImg", "scaleY": 1.5, "scaleX": 1.5, "mouseThrough": true, "height": 165 }, "child": [{ "type": "Image", "props": { "y": 52, "x": 58, "width": 56, "var": "rotate", "skin": "place2/rotate.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 99, "x": 92, "width": 56, "var": "cancel", "skin": "place2/cancel.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 99, "x": 26, "width": 56, "var": "ensure", "skin": "place2/ensure.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 5, "x": -4, "width": 56, "var": "checks", "skin": "place2/checks.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 6, "x": 62, "width": 56, "var": "shift", "skin": "place2/shift.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 52, "x": 96, "width": 56, "var": "demolition", "skin": "place2/demolition.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 53, "x": 31, "width": 56, "var": "carModels", "skin": "place2/carModels.png", "height": 44, "alpha": 0.9 } }] }, { "type": "Sprite", "props": { "y": 150, "x": 60, "var": "aniswf" } }, { "type": "Sprite", "props": { "y": -173, "x": 4, "visible": false, "var": "spani" } }, { "type": "Box", "props": { "y": -101, "x": 54, "width": 191, "visible": false, "var": "jianBot", "height": 52 }, "child": [{ "type": "Image", "props": { "y": 11, "x": -19, "skin": "top/jian.png" } }, { "type": "Image", "props": { "y": 10, "x": 58, "var": "jin1", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 87, "var": "jin2", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 116, "var": "jin3", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 146, "var": "jin4", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 9, "x": 21, "width": 34, "skin": "top/jinbi.png", "height": 34 } }] }] };
        return PlaceItem1UI;
    }(View));
    ui.PlaceItem1UI = PlaceItem1UI;
})(ui || (ui = {}));
(function (ui) {
    var PlaceItem2UI = /** @class */ (function (_super) {
        __extends(PlaceItem2UI, _super);
        function PlaceItem2UI() {
            return _super.call(this) || this;
        }
        PlaceItem2UI.prototype.createChildren = function () {
            View.regComponent("wuling.PlaceItem2", wuling.PlaceItem2);
            _super.prototype.createChildren.call(this);
            this.createView(ui.PlaceItem2UI.uiView);
        };
        PlaceItem2UI.uiView = { "type": "View", "props": { "y": 85, "x": 66, "width": 310, "runtime": "wuling.PlaceItem2", "pivotY": 85, "pivotX": 66, "mouseThrough": true, "mouseEnabled": true, "height": 259 }, "child": [{ "type": "Image", "props": { "y": 209, "x": 128, "width": 76, "var": "imgBtn", "skin": "place/m10001.png", "pivotY": 182, "height": 181, "alpha": 0 } }, { "type": "Image", "props": { "y": 209, "x": 128, "width": 76, "var": "abiImg", "pivotY": 182, "height": 181 } }, { "type": "Box", "props": { "y": -91, "x": 64, "width": 191, "visible": false, "var": "jianBot", "height": 52 }, "child": [{ "type": "Image", "props": { "y": 11, "x": -19, "skin": "top/jian.png" } }, { "type": "Image", "props": { "y": 10, "x": 58, "var": "jin1", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 87, "var": "jin2", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 116, "var": "jin3", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 146, "var": "jin4", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 9, "x": 21, "width": 34, "skin": "top/jinbi.png", "height": 34 } }] }, { "type": "Box", "props": { "y": 24, "x": 14, "width": 201, "var": "boxImg", "scaleY": 1.5, "scaleX": 1.5, "mouseThrough": true, "height": 165 }, "child": [{ "type": "Image", "props": { "y": 116, "x": 73, "width": 56, "var": "cancel", "skin": "place2/cancel.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 116, "x": 5, "width": 56, "var": "ensure", "skin": "place2/ensure.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 37, "x": 4, "width": 56, "var": "checks", "skin": "place2/checks.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 38, "x": 71, "width": 56, "var": "shift", "skin": "place2/shift.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 116, "x": 140, "width": 56, "var": "rotate", "skin": "place2/rotate.png", "height": 44, "alpha": 0.9 } }, { "type": "Image", "props": { "y": 37, "x": 138, "width": 56, "var": "demolition", "skin": "place2/demolition.png", "height": 44, "alpha": 0.9 } }] }, { "type": "Sprite", "props": { "y": 136, "x": 87, "var": "aniswf" } }, { "type": "Sprite", "props": { "y": -69, "x": 83, "var": "builAni" } }] };
        return PlaceItem2UI;
    }(View));
    ui.PlaceItem2UI = PlaceItem2UI;
})(ui || (ui = {}));
(function (ui) {
    var rankBtnUI = /** @class */ (function (_super) {
        __extends(rankBtnUI, _super);
        function rankBtnUI() {
            return _super.call(this) || this;
        }
        rankBtnUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.rankBtnUI.uiView);
        };
        rankBtnUI.uiView = { "type": "View", "props": { "width": 81, "height": 104 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "map/enemy.png" } }] };
        return rankBtnUI;
    }(View));
    ui.rankBtnUI = rankBtnUI;
})(ui || (ui = {}));
(function (ui) {
    var rankItemUI = /** @class */ (function (_super) {
        __extends(rankItemUI, _super);
        function rankItemUI() {
            return _super.call(this) || this;
        }
        rankItemUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.rankItemUI.uiView);
        };
        rankItemUI.uiView = { "type": "View", "props": { "width": 541, "height": 106 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 2 }, "child": [{ "type": "Image", "props": { "skin": "rankList/rankBg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Text", "props": { "y": 18, "x": 108, "width": 265, "var": "playerName", "text": "玩家昵称", "overflow": "hidden", "height": 27, "fontSize": 25, "font": "SimHei", "color": "#3f4781", "bold": true } }, { "type": "Image", "props": { "y": 9, "x": 438, "var": "huizhang", "skin": "rankList/top1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Label", "props": { "y": 60, "width": 144, "var": "score", "right": 101, "overflow": "hidden", "height": 25, "fontSize": 25, "font": "SimHei", "color": "#3f4781", "bold": false, "align": "left" } }] }] };
        return rankItemUI;
    }(View));
    ui.rankItemUI = rankItemUI;
})(ui || (ui = {}));
(function (ui) {
    var rankListUI = /** @class */ (function (_super) {
        __extends(rankListUI, _super);
        function rankListUI() {
            return _super.call(this) || this;
        }
        rankListUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            View.regComponent("wuling.rankListItem", wuling.rankListItem);
            _super.prototype.createChildren.call(this);
            this.createView(ui.rankListUI.uiView);
        };
        rankListUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 113, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 11, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 43, "x": 616, "var": "gb", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 33, "x": 80, "skin": "rankList/paihang.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 691, "x": 57, "skin": "rankList/myRank.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "List", "props": { "y": 117, "x": 71, "width": 575, "var": "list", "spaceY": 5, "spaceX": 2, "height": 573 }, "child": [{ "type": "VScrollBar", "props": { "x": 552, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "rankItem", "props": { "y": 4, "x": -3, "runtime": "wuling.rankListItem", "renderType": "render" } }] }, { "type": "Label", "props": { "y": 712, "x": 431, "var": "myRank", "text": "1", "fontSize": 25, "font": "SimHei", "color": "#3f4781", "bold": true, "align": "right" } }] }] };
        return rankListUI;
    }(Dialog));
    ui.rankListUI = rankListUI;
})(ui || (ui = {}));
(function (ui) {
    var reloadingUI = /** @class */ (function (_super) {
        __extends(reloadingUI, _super);
        function reloadingUI() {
            return _super.call(this) || this;
        }
        reloadingUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            View.regComponent("wuling.reloadingItem", wuling.reloadingItem);
            _super.prototype.createChildren.call(this);
            this.createView(ui.reloadingUI.uiView);
        };
        reloadingUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 121, "centerX": -9 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 12, "width": 662, "skin": "building/buildBg.png", "height": 845 } }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 43, "x": 600, "width": 49, "var": "shutBtn", "skin": "shopInfo/return1.png", "height": 49 } }, { "type": "Image", "props": { "y": 35, "x": 79, "width": 134, "skin": "reloading/title.png", "height": 66 } }, { "type": "List", "props": { "y": 117, "x": 64, "width": 573, "var": "list", "spaceY": -5, "spaceX": 10, "repeatX": 3, "height": 670 }, "child": [{ "type": "VScrollBar", "props": { "y": 0, "x": 548, "width": 30, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 671 } }, { "type": "reloadingItem", "props": { "y": 0, "x": 0, "runtime": "wuling.reloadingItem", "renderType": "render" } }] }] }] };
        return reloadingUI;
    }(Dialog));
    ui.reloadingUI = reloadingUI;
})(ui || (ui = {}));
(function (ui) {
    var reloadingItemUI = /** @class */ (function (_super) {
        __extends(reloadingItemUI, _super);
        function reloadingItemUI() {
            return _super.call(this) || this;
        }
        reloadingItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.reloadingItemUI.uiView);
        };
        reloadingItemUI.uiView = { "type": "View", "props": { "width": 175, "height": 328 }, "child": [{ "type": "Image", "props": { "y": 13, "x": 2, "width": 171, "var": "boxImg", "skin": "reloading/boxImg.png", "height": 314 } }, { "type": "Image", "props": { "y": 274, "x": 29, "width": 117, "visible": false, "var": "useBtn", "skin": "reloading/useBtn.png", "height": 41 } }, { "type": "Image", "props": { "y": 28, "x": 29, "width": 117, "var": "nanaimg", "skin": "nana/nanac.png", "height": 240 } }, { "type": "Button", "props": { "y": 294, "x": 89, "width": 119, "visible": false, "var": "buyBtn", "stateNum": 2, "skin": "reloading/button_buy.png", "pivotY": 21, "pivotX": 61, "height": 43 } }, { "type": "Button", "props": { "y": 294, "x": 88, "width": 119, "visible": false, "var": "huangBtn", "stateNum": 2, "skin": "reloading/button_huang.png", "pivotY": 21, "pivotX": 60, "height": 43 } }, { "type": "Image", "props": { "y": 13, "x": 4, "width": 170, "visible": false, "var": "theLockBtn", "skin": "reloading/theLock.png", "height": 311 } }, { "type": "Label", "props": { "y": 281, "x": 20, "width": 134, "visible": false, "var": "lockText", "text": "门店到达5级", "height": 28, "fontSize": 24, "color": "#ffffff" } }, { "type": "Image", "props": { "y": 219, "x": 12, "width": 150, "visible": false, "var": "jinimg", "skin": "reloading/goldBag.png", "height": 38 }, "child": [{ "type": "Image", "props": { "y": 13, "x": 44, "var": "nameimg5", "skin": "ssInfo/bo0.png" } }, { "type": "Image", "props": { "y": 13, "x": 57, "var": "nameimg4", "skin": "ssInfo/bo0.png" } }, { "type": "Image", "props": { "y": 13, "x": 70, "var": "nameimg3", "skin": "ssInfo/bo0.png" } }, { "type": "Image", "props": { "y": 13, "x": 83, "var": "nameimg2", "skin": "ssInfo/bo0.png" } }, { "type": "Image", "props": { "y": 13, "x": 96, "var": "nameimg1", "skin": "ssInfo/bo0.png" } }] }, { "type": "Image", "props": { "y": 20, "x": 3, "var": "NImg", "skin": "reloading/huangName1.png", "scaleY": 0.666, "scaleX": 0.666 } }] };
        return reloadingItemUI;
    }(View));
    ui.reloadingItemUI = reloadingItemUI;
})(ui || (ui = {}));
(function (ui) {
    var sangeUI = /** @class */ (function (_super) {
        __extends(sangeUI, _super);
        function sangeUI() {
            return _super.call(this) || this;
        }
        sangeUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.sangeUI.uiView);
        };
        sangeUI.uiView = { "type": "View", "props": { "width": 109, "height": 88 }, "child": [{ "type": "Image", "props": { "y": 59, "x": 37, "width": 62, "var": "zfxBig", "skin": "cangku/zfxBig.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 28, "pivotX": 31, "height": 56 } }, { "type": "Image", "props": { "y": 39, "x": 80, "width": 45, "var": "zfxCen", "skin": "cangku/zfxCen.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 19.5, "pivotX": 22.5, "height": 39 } }, { "type": "Image", "props": { "y": 23, "x": 61, "width": 37, "var": "zfxSmall", "skin": "cangku/zfxSmall.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 15.5, "pivotX": 18.5, "height": 31 } }] };
        return sangeUI;
    }(View));
    ui.sangeUI = sangeUI;
})(ui || (ui = {}));
(function (ui) {
    var settingUI = /** @class */ (function (_super) {
        __extends(settingUI, _super);
        function settingUI() {
            return _super.call(this) || this;
        }
        settingUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.settingUI.uiView);
        };
        settingUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 203, "centerX": -6 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 10, "skin": "setting/ui.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 200, "x": 263, "width": 40, "var": "music", "skin": "setting/switch.png", "scaleY": 1.333, "scaleX": 1.333, "height": 25 } }, { "type": "Image", "props": { "y": 314, "x": 263, "width": 40, "var": "soundEffect", "skin": "setting/switch.png", "scaleY": 1.333, "scaleX": 1.333, "height": 25 } }, { "type": "Image", "props": { "y": 42, "x": 375, "var": "returnBtn", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] };
        return settingUI;
    }(Dialog));
    ui.settingUI = settingUI;
})(ui || (ui = {}));
(function (ui) {
    var shareBtnUI = /** @class */ (function (_super) {
        __extends(shareBtnUI, _super);
        function shareBtnUI() {
            return _super.call(this) || this;
        }
        shareBtnUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.shareBtnUI.uiView);
        };
        shareBtnUI.uiView = { "type": "View", "props": { "width": 516, "height": 163 }, "child": [{ "type": "Image", "props": { "y": -1, "x": -1, "var": "shareImg", "skin": "bottom/boximg.png", "scaleY": 0.666, "scaleX": 0.666 }, "child": [{ "type": "Image", "props": { "y": 74, "x": 95, "skin": "share/clickScore.png" } }] }] };
        return shareBtnUI;
    }(View));
    ui.shareBtnUI = shareBtnUI;
})(ui || (ui = {}));
(function (ui) {
    var shareViewUI = /** @class */ (function (_super) {
        __extends(shareViewUI, _super);
        function shareViewUI() {
            return _super.call(this) || this;
        }
        shareViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.shareViewUI.uiView);
        };
        shareViewUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "var": "returnBtn", "top": 0, "skin": "  ", "scaleY": 0.666, "scaleX": 0.666, "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 2, "skin": "share/shareArrows.png", "scaleY": 0.666, "scaleX": 0.666, "centerX": 0 } }] };
        return shareViewUI;
    }(Dialog));
    ui.shareViewUI = shareViewUI;
})(ui || (ui = {}));
(function (ui) {
    var sheshiUI = /** @class */ (function (_super) {
        __extends(sheshiUI, _super);
        function sheshiUI() {
            return _super.call(this) || this;
        }
        sheshiUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.sheshiUI.uiView);
        };
        sheshiUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 203, "centerX": -9 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 11, "skin": "shopInfo/shopInfoBg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 43, "x": 374, "var": "gb", "skin": "shopInfo/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 41, "x": 86, "skin": "sheshi/sheshiText.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 356, "x": 71, "skin": "sheshi/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Button", "props": { "y": 451, "x": 106, "var": "upgradeBtn", "stateNum": 2, "skin": "sheshi/button.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 109, "x": 127, "width": 196, "skin": "place/3x5Lv2zt.png", "height": 201 } }, { "type": "Image", "props": { "y": 309, "x": 326, "skin": "sheshi/lvda.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 309, "x": 369, "skin": "sheshi/org1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 365, "x": 358, "skin": "sheshi/o1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 365, "x": 373, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 412, "x": 358, "skin": "sheshi/o5.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 412, "x": 373, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Text", "props": { "y": 315, "x": 73, "width": 117, "text": "展台2", "height": 29, "fontSize": 30, "font": "SimHei", "color": "#100e0e" } }] }] };
        return sheshiUI;
    }(Dialog));
    ui.sheshiUI = sheshiUI;
})(ui || (ui = {}));
(function (ui) {
    var shopUI = /** @class */ (function (_super) {
        __extends(shopUI, _super);
        function shopUI() {
            return _super.call(this) || this;
        }
        shopUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            View.regComponent("wuling.shopItem", wuling.shopItem);
            _super.prototype.createChildren.call(this);
            this.createView(ui.shopUI.uiView);
        };
        shopUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 138, "x": 21, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 144, "x": 81, "skin": "shop/shopText.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "sange", "props": { "y": 113, "x": 7, "runtime": "wuling.sange" } }, { "type": "List", "props": { "y": 230, "x": 73, "width": 582, "var": "list", "spaceY": 5, "spaceX": 2, "height": 653 }, "child": [{ "type": "VScrollBar", "props": { "x": 565, "width": 30, "top": 2, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 650 } }, { "type": "shopItem", "props": { "y": 3, "x": -2, "runtime": "wuling.shopItem", "renderType": "render" } }] }, { "type": "Image", "props": { "y": 155, "x": 623, "var": "returnBtn", "skin": "building/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }] };
        return shopUI;
    }(Dialog));
    ui.shopUI = shopUI;
})(ui || (ui = {}));
(function (ui) {
    var shopInfoUI = /** @class */ (function (_super) {
        __extends(shopInfoUI, _super);
        function shopInfoUI() {
            return _super.call(this) || this;
        }
        shopInfoUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.shopInfoUI.uiView);
        };
        shopInfoUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 203, "centerX": -9 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 13, "skin": "shopInfo/shopInfoBg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 136, "x": 72, "skin": "shopInfo/content.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 144, "x": 328, "skin": "shopInfo/lv.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Button", "props": { "y": 428, "x": 106, "var": "upgradeBtn", "stateNum": 2, "skin": "shopInfo/button.png", "scaleY": 1.333, "scaleX": 1.333 }, "child": [{ "type": "Box", "props": { "y": 47, "x": 86, "var": "jinBox" }, "child": [{ "type": "Image", "props": { "var": "jin1", "skin": "shopInfo/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 14, "var": "jin2", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 27, "var": "jin3", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 0, "x": 40, "var": "jin4", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 0, "x": 53, "var": "jin5", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }] }, { "type": "Image", "props": { "y": 144, "x": 361, "var": "levelImg", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 144, "x": 378, "width": 16, "var": "levelImg2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333, "height": 18 } }, { "type": "Image", "props": { "y": 265, "x": 362, "var": "supportNum", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 265, "x": 377, "var": "supportNum2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Box", "props": { "y": 204, "x": 318, "width": 81.328 }, "child": [{ "type": "Image", "props": { "var": "pin1", "skin": "sheshi/o1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 14, "var": "pin2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 29, "var": "pin3", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 44, "var": "pin4", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 60, "var": "pin5", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 325, "x": 313, "width": 81, "height": 25 }, "child": [{ "type": "Image", "props": { "var": "ren1", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 15, "var": "ren2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 0, "x": 32, "var": "ren3", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 48, "var": "ren4", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 65, "var": "ren5", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Image", "props": { "y": 42, "x": 375, "var": "gb", "skin": "shopInfo/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 41, "x": 85, "skin": "shopInfo/shopText.png", "scaleY": 1.333, "scaleX": 1.333 } }] }] };
        return shopInfoUI;
    }(Dialog));
    ui.shopInfoUI = shopInfoUI;
})(ui || (ui = {}));
(function (ui) {
    var shopItemUI = /** @class */ (function (_super) {
        __extends(shopItemUI, _super);
        function shopItemUI() {
            return _super.call(this) || this;
        }
        shopItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.shopItemUI.uiView);
        };
        shopItemUI.uiView = { "type": "View", "props": { "width": 139, "height": 171 }, "child": [{ "type": "Box", "props": { "y": 2, "x": 0, "width": 194, "height": 277 }, "child": [{ "type": "Image", "props": { "y": 83, "x": 69, "width": 228, "var": "ckuang", "skin": "shop/shopKuan.png", "scaleY": 1.2, "scaleX": 1.2, "pivotY": 139, "pivotX": 114, "height": 278, "alpha": 0 } }, { "type": "Image", "props": { "skin": "shop/shopBg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 132, "x": 26, "skin": "shop/jbicon.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 17, "x": 18, "var": "shopImg", "skin": "shop/1x1ljt.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 137, "x": 58, "var": "num1", "skin": "shop/b01.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 137, "x": 75, "var": "num2", "skin": "shop/b02.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 137, "x": 94, "var": "num3", "skin": "shop/b00.png", "scaleY": 1.333, "scaleX": 1.333 } }] }] };
        return shopItemUI;
    }(View));
    ui.shopItemUI = shopItemUI;
})(ui || (ui = {}));
(function (ui) {
    var signInUI = /** @class */ (function (_super) {
        __extends(signInUI, _super);
        function signInUI() {
            return _super.call(this) || this;
        }
        signInUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.signInUI.uiView);
        };
        signInUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 138, "x": 19, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 146, "x": 93, "skin": "signIn/wenzi.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "y": 113, "x": 8, "runtime": "wuling.sange" } }, { "type": "Box", "props": { "y": 246, "x": 77, "width": 562, "height": 75 }, "child": [{ "type": "Clip", "props": { "var": "daybox1", "skin": "signIn/clip_daybox.png", "scaleY": 1.333, "scaleX": 1.333, "index": 0, "clipY": 2 } }, { "type": "Clip", "props": { "y": 25, "x": 62, "width": 15, "skin": "signIn/clip_day.png", "scaleY": 1.333, "scaleX": 1.333, "index": 1, "height": 16, "clipX": 10 } }, { "type": "Image", "props": { "y": -1, "x": 475, "visible": false, "var": "whether1", "skin": "signIn/gou.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 326, "x": 77 }, "child": [{ "type": "Clip", "props": { "var": "daybox2", "skin": "signIn/clip_daybox.png", "scaleY": 1.333, "scaleX": 1.333, "index": 0, "clipY": 2 } }, { "type": "Clip", "props": { "y": 25, "x": 62, "width": 15, "skin": "signIn/clip_day.png", "scaleY": 1.333, "scaleX": 1.333, "index": 2, "height": 16, "clipX": 10 } }, { "type": "Image", "props": { "y": -1, "x": 475, "visible": false, "var": "whether2", "skin": "signIn/gou.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 406, "x": 77 }, "child": [{ "type": "Clip", "props": { "var": "daybox3", "skin": "signIn/clip_daybox.png", "scaleY": 1.333, "scaleX": 1.333, "index": 0, "clipY": 2 } }, { "type": "Clip", "props": { "y": 25, "x": 62, "width": 15, "skin": "signIn/clip_day.png", "scaleY": 1.333, "scaleX": 1.333, "index": 3, "height": 16, "clipX": 10 } }, { "type": "Image", "props": { "y": -1, "x": 479, "var": "whether3", "skin": "signIn/gift.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 487, "x": 77 }, "child": [{ "type": "Clip", "props": { "var": "daybox4", "skin": "signIn/clip_daybox.png", "scaleY": 1.333, "scaleX": 1.333, "index": 0, "clipY": 2 } }, { "type": "Clip", "props": { "y": 25, "x": 62, "width": 15, "skin": "signIn/clip_day.png", "scaleY": 1.333, "scaleX": 1.333, "index": 4, "height": 16, "clipX": 10 } }, { "type": "Image", "props": { "y": -1, "x": 475, "visible": false, "var": "whether4", "skin": "signIn/gou.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 566, "x": 77 }, "child": [{ "type": "Clip", "props": { "var": "daybox5", "skin": "signIn/clip_daybox.png", "scaleY": 1.333, "scaleX": 1.333, "index": 0, "clipY": 2 } }, { "type": "Clip", "props": { "y": 25, "x": 62, "width": 15, "skin": "signIn/clip_day.png", "scaleY": 1.333, "scaleX": 1.333, "index": 5, "height": 16, "clipX": 10 } }, { "type": "Image", "props": { "y": -1, "x": 479, "var": "whether5", "skin": "signIn/gift.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 646, "x": 77 }, "child": [{ "type": "Clip", "props": { "var": "daybox6", "skin": "signIn/clip_daybox.png", "scaleY": 1.333, "scaleX": 1.333, "index": 0, "clipY": 2 } }, { "type": "Clip", "props": { "y": 25, "x": 62, "width": 15, "skin": "signIn/clip_day.png", "scaleY": 1.333, "scaleX": 1.333, "index": 6, "height": 16, "clipX": 10 } }, { "type": "Image", "props": { "y": -1, "x": 475, "visible": false, "var": "whether6", "skin": "signIn/gou.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 726, "x": 77 }, "child": [{ "type": "Clip", "props": { "var": "daybox7", "skin": "signIn/clip_daybox.png", "scaleY": 1.333, "scaleX": 1.333, "index": 0, "clipY": 2 } }, { "type": "Clip", "props": { "y": 25, "x": 62, "width": 15, "skin": "signIn/clip_day.png", "scaleY": 1.333, "scaleX": 1.333, "index": 7, "height": 16, "clipX": 10 } }, { "type": "Image", "props": { "y": -1, "x": 479, "var": "whether7", "skin": "signIn/gift.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Button", "props": { "y": 812, "x": 275, "var": "signBtn", "stateNum": 2, "skin": "signIn/button_signIn.png", "scaleY": 1.333, "scaleX": 1.333 } }] };
        return signInUI;
    }(Dialog));
    ui.signInUI = signInUI;
})(ui || (ui = {}));
(function (ui) {
    var ssInfoUI = /** @class */ (function (_super) {
        __extends(ssInfoUI, _super);
        function ssInfoUI() {
            return _super.call(this) || this;
        }
        ssInfoUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.ssInfoUI.uiView);
        };
        ssInfoUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 203, "centerX": -9 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 11, "skin": "ssInfo/bibg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 356, "x": 71, "skin": "ssInfo/bg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 41, "x": 85, "skin": "ssInfo/title.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 43, "x": 374, "var": "gb", "skin": "ssInfo/gb.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 309, "x": 326, "skin": "ssInfo/lvda.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 309, "x": 369, "var": "lvimg", "skin": "ssInfo/org0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Button", "props": { "y": 451, "x": 106, "var": "shenBtn", "stateNum": 2, "skin": "ssInfo/button_sj.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 65, "x": 102, "width": 260, "var": "imgBtn", "skin": "place1/d100014.png", "height": 260 } }, { "type": "Text", "props": { "y": 316, "x": 71, "width": 122, "var": "buidingname", "text": "设施名称", "height": 34, "fontSize": 28, "font": "SimHei", "color": "#444e77", "bold": true } }, { "type": "Box", "props": { "y": 445, "x": 64, "visible": false, "var": "tiaoBox" }, "child": [{ "type": "Image", "props": { "skin": "ssInfo/conditions.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 16, "x": 307, "var": "tLvImg1", "skin": "ssInfo/0.png" } }, { "type": "Image", "props": { "y": 16, "x": 291, "var": "tLvImg2", "skin": "ssInfo/0.png" } }, { "type": "Image", "props": { "y": 46, "x": 307, "var": "manImg1", "skin": "ssInfo/0.png" } }, { "type": "Image", "props": { "y": 46, "x": 291, "var": "manImg2", "skin": "ssInfo/0.png" } }, { "type": "Image", "props": { "y": 46, "x": 275, "var": "manImg3", "skin": "ssInfo/0.png" } }, { "type": "Image", "props": { "y": 46, "x": 259, "var": "manImg4", "skin": "ssInfo/0.png" } }, { "type": "Image", "props": { "y": 46, "x": 242, "var": "manImg5", "skin": "ssInfo/0.png" } }] }, { "type": "Box", "props": { "y": 365, "x": 358 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -16, "var": "man3", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "var": "man2", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 15, "var": "man1", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 47, "x": -60, "var": "Jd6", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 47, "x": -45, "var": "Jd5", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 47, "x": -30, "var": "Jd4", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 47, "x": -15, "var": "Jd3", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 47, "x": 0, "var": "Jd2", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 47, "x": 15, "var": "Jd1", "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }] }] };
        return ssInfoUI;
    }(Dialog));
    ui.ssInfoUI = ssInfoUI;
})(ui || (ui = {}));
(function (ui) {
    var tishianniuUI = /** @class */ (function (_super) {
        __extends(tishianniuUI, _super);
        function tishianniuUI() {
            return _super.call(this) || this;
        }
        tishianniuUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.tishianniuUI.uiView);
        };
        tishianniuUI.uiView = { "type": "View", "props": { "width": 55, "height": 54 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "tishi/tishianniu.png", "scaleY": 0.5, "scaleX": 0.5 } }] };
        return tishianniuUI;
    }(View));
    ui.tishianniuUI = tishianniuUI;
})(ui || (ui = {}));
(function (ui) {
    var topUI = /** @class */ (function (_super) {
        __extends(topUI, _super);
        function topUI() {
            return _super.call(this) || this;
        }
        topUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.topUI.uiView);
        };
        topUI.uiView = { "type": "View", "props": { "width": 720, "right": 0, "left": 0, "height": 150 }, "child": [{ "type": "Sprite", "props": { "y": 11, "x": 13, "var": "headKuan" } }, { "type": "Label", "props": { "y": 30, "x": 127, "width": 96, "var": "usertext", "text": "玩家昵称", "height": 26, "fontSize": 23, "font": "Helvetica", "color": "#080808", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 70, "width": 37, "skin": "top/Lv.png", "left": 133, "height": 26 } }, { "type": "Image", "props": { "y": 14, "x": 7, "width": 129, "var": "topImg", "skin": "top/qingwa.png", "height": 113 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 12, "width": 103, "skin": "top/zhezhao.png", "renderType": "mask", "height": 103 } }] }, { "type": "Clip", "props": { "y": 71, "width": 18, "var": "lv1", "skin": "top/clip_orgnumber.png", "left": 170, "index": 9, "height": 25, "clipX": 10 } }, { "type": "Clip", "props": { "y": 71, "width": 18, "var": "lv2", "skin": "top/clip_orgnumber.png", "left": 186, "index": 9, "height": 25, "clipX": 10 } }, { "type": "Image", "props": { "y": 49, "width": 70, "skin": "top/jinbiGq.png", "scaleY": 1.5666666666666667, "scaleX": 1.5666666666666667, "right": 150, "pivotY": 35.5, "pivotX": 35, "height": 71, "alpha": 0 }, "compId": 18 }, { "type": "Image", "props": { "y": 46, "width": 50, "var": "jinImg", "skin": "top/jinbi.png", "scaleY": 1, "scaleX": 1, "right": 182, "pivotY": 25.5, "pivotX": 25, "height": 51 }, "compId": 16 }, { "type": "Image", "props": { "y": 21, "width": 44, "var": "nenimg", "skin": "top/dianchi.png", "right": 58, "height": 51 } }, { "type": "Clip", "props": { "y": 44, "width": 19, "var": "nen1", "skin": "top/clip_blocknumber.png", "right": 54, "index": 9, "height": 27, "clipX": 10 } }, { "type": "Clip", "props": { "y": 44, "width": 19, "var": "nen2", "skin": "top/clip_blocknumber.png", "right": 36, "index": 9, "height": 27, "clipX": 10 } }, { "type": "Image", "props": { "y": 92, "x": 277, "visible": false, "var": "jinbiicon", "skin": "top/jinbiicon.png" } }, { "type": "Box", "props": { "y": 73, "width": 98, "var": "jian", "right": 261, "height": 23, "alpha": 0 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 0, "var": "addless", "skin": "top/jian.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 23, "width": 34, "skin": "top/zan.png", "scaleY": 0.666, "scaleX": 0.666, "height": 34 } }, { "type": "Box", "props": { "y": 1, "x": 30, "var": "zhi" }, "child": [{ "type": "Image", "props": { "width": 30, "var": "jian4", "skin": "rankList/org0.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 16, "var": "jian3", "skin": "rankList/org0.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 32, "width": 30, "var": "jian2", "skin": "rankList/org0.png", "scaleY": 0.666, "scaleX": 0.666, "height": 33 } }, { "type": "Image", "props": { "x": 49, "var": "jian1", "skin": "rankList/org0.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] }, { "type": "Box", "props": { "y": 40, "width": 97, "var": "meBox", "right": 108, "height": 31 }, "child": [{ "type": "Clip", "props": { "x": 0, "width": 19, "var": "me1", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 18, "width": 19, "var": "me2", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 36, "width": 19, "var": "me3", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 54, "width": 19, "var": "me4", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Image", "props": { "x": 27, "width": 19, "var": "jd", "skin": "top/d.png", "height": 28, "alpha": 0 } }, { "type": "Image", "props": { "y": -4, "x": 73, "width": 25, "var": "yi", "skin": "top/w.png", "height": 36, "alpha": 0 } }] }, { "type": "Box", "props": { "y": 27, "width": 129, "right": 226, "height": 41.958000000000006 }, "child": [{ "type": "Image", "props": { "x": 0, "skin": "top/zan.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Clip", "props": { "y": 14, "x": 20, "width": 19, "var": "zan1", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 14, "x": 39, "width": 19, "var": "zan2", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10, "alpha": 0 } }, { "type": "Clip", "props": { "y": 14, "x": 58, "width": 19, "var": "zan3", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10, "alpha": 0 } }, { "type": "Clip", "props": { "y": 14, "x": 77, "width": 19, "var": "zan4", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10, "alpha": 0 } }, { "type": "Image", "props": { "y": 10, "x": 97, "width": 24, "var": "wan", "skin": "top/w.png", "height": 35, "alpha": 0 } }, { "type": "Image", "props": { "y": 14, "x": 49, "width": 19, "var": "zd", "skin": "top/d.png", "height": 28, "alpha": 0 } }] }, { "type": "Image", "props": { "y": 0, "var": "shareBtn", "skin": "share/score1.png", "scaleY": 0.666, "scaleX": 0.666, "right": 50 } }], "animations": [{ "nodes": [{ "target": 16, "keyframes": { "y": [{ "value": 46, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "y", "index": 0 }], "x": [{ "value": 460, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 460, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 3 }, { "value": 460, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 6 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 3 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 6 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 3 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 6 }], "right": [{ "value": 182, "tweenMethod": "linearNone", "tween": false, "target": 16, "key": "right", "index": 0 }, { "value": 182, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "right", "index": 3 }, { "value": 182, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "right", "index": 6 }, { "value": 182, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "right", "index": 10 }], "pivotY": [{ "value": 25.5, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "pivotY", "index": 0 }], "pivotX": [{ "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "pivotX", "index": 0 }] } }, { "target": 18, "keyframes": { "x": [{ "value": 437, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 437, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 7 }, { "value": 437, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 10 }], "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 7 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 7 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 10 }], "right": [{ "value": 187, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "right", "index": 0 }, { "value": 153, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "right", "index": 7 }, { "value": 147, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "right", "index": 10 }], "alpha": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 0 }, { "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 7 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 10 }] } }], "name": "jinbi", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 16, "keyframes": { "x": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 2 }, { "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "x", "index": 4 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 2 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "scaleY", "index": 4 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 2 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "scaleX", "index": 4 }], "right": [{ "value": 182, "tweenMethod": "linearNone", "tween": false, "target": 16, "key": "right", "index": 0 }, { "value": 182, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "right", "index": 2 }, { "value": 182, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "right", "index": 4 }] } }, { "target": 18, "keyframes": { "x": [{ "value": 437, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 437, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 4 }, { "value": 437, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 7 }], "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 4 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 4 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 7 }], "right": [{ "value": 187, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "right", "index": 0 }, { "value": 160, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "right", "index": 4 }, { "value": 145, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "right", "index": 7 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 0 }, { "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 7 }] } }], "name": "guanquan", "id": 2, "frameRate": 24, "action": 0 }] };
        return topUI;
    }(View));
    ui.topUI = topUI;
})(ui || (ui = {}));
(function (ui) {
    var wanfaUI = /** @class */ (function (_super) {
        __extends(wanfaUI, _super);
        function wanfaUI() {
            return _super.call(this) || this;
        }
        wanfaUI.prototype.createChildren = function () {
            View.regComponent("wuling.sange", wuling.sange);
            _super.prototype.createChildren.call(this);
            this.createView(ui.wanfaUI.uiView);
        };
        wanfaUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": -59, "x": -1, "skin": "tishi/wanfatishi.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": -49, "x": 458, "var": "shutBtn", "skin": "shopInfo/return1.png" } }, { "type": "sange", "props": { "y": -85, "x": -15, "runtime": "wuling.sange" } }] }] };
        return wanfaUI;
    }(Dialog));
    ui.wanfaUI = wanfaUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map