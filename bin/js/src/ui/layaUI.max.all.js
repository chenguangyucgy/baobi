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
        achievementUI.uiView = { "type": "View", "props": { "width": 184, "height": 128 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 2, "var": "boxcj" }, "child": [{ "type": "Image", "props": { "skin": "achievement/huiz.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Text", "props": { "y": 84, "x": 43, "width": 99, "var": "cjname", "text": "成就名称", "height": 28, "fontSize": 23, "font": "SimHei", "color": "#f8f6f6" } }] }] };
        return achievementUI;
    }(View));
    ui.achievementUI = achievementUI;
})(ui || (ui = {}));
(function (ui) {
    var beginUI = /** @class */ (function (_super) {
        __extends(beginUI, _super);
        function beginUI() {
            return _super.call(this) || this;
        }
        beginUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.beginUI.uiView);
        };
        beginUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -493, "skin": "map/man.jpg" } }, { "type": "Image", "props": { "y": -182, "x": 84, "var": "zhmd", "skin": "begin/zhihuimendian.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 1174, "x": 354, "width": 404, "var": "into", "skin": "begin/begin.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 52, "pivotX": 202, "height": 104, "alpha": 0 } }] };
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
        bottomUI.uiView = { "type": "View", "props": { "width": 720, "mouseThrough": true, "height": 1280 }, "child": [{ "type": "Image", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "alpha": 0 } }, { "type": "Image", "props": { "y": 1262, "x": 55, "width": 140, "var": "nanaicon", "skin": "bottom/nana.png", "pivotY": 210, "pivotX": 24, "height": 209 } }, { "type": "Sprite", "props": { "y": 1269, "x": 63, "var": "nanatext", "pivotY": 44, "pivotX": 26 } }, { "type": "Image", "props": { "y": 1160, "x": 135, "width": 82, "var": "huodong", "skin": "bottom/huodong.png", "pivotY": 36, "height": 72 } }, { "type": "Image", "props": { "y": 1198, "x": 37, "width": 53, "var": "liwu", "skin": "bottom/jiangli.png", "pivotY": 27.5, "pivotX": 26.5, "height": 55 } }, { "type": "Image", "props": { "y": 1115, "x": 124, "width": 70, "var": "renwu", "skin": "bottom/renwu.png", "pivotY": 71, "height": 71 } }, { "type": "Image", "props": { "y": 1140, "x": 42, "width": 45, "var": "chengjiu", "skin": "bottom/chengjiu.png", "pivotY": 26, "pivotX": 22.5, "height": 52 } }, { "type": "nana", "props": { "x": 0, "visible": false, "var": "nanaView", "runtime": "wuling.nana", "bottom": 0 } }, { "type": "Label", "props": { "y": 1084, "x": 223, "wordWrap": true, "width": 459, "var": "text1", "text": "“欢迎来到宝骏智慧门店，马上开始您的管理工作吧！”", "overflow": "hidden", "height": 108, "fontSize": 32, "color": "#ffffff", "alpha": 0 } }, { "type": "Image", "props": { "y": 1184, "x": 531, "visible": false, "var": "goumai", "skin": "shop/goumai.png" } }, { "type": "Label", "props": { "y": 1050, "x": 268, "width": 136, "visible": false, "var": "text2", "text": "物品名称", "height": 38, "fontSize": 32, "color": "#c09e15", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 1091, "x": 272, "wordWrap": true, "width": 412, "visible": false, "var": "text3", "text": "物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍", "height": 83, "fontSize": 26, "color": "#ffffff" } }] };
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
        buildingUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 139, "x": 20, "skin": "building/buildBg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Box", "props": { "y": 231, "x": 66, "var": "box1" }, "child": [{ "type": "Image", "props": { "var": "backImg1", "skin": "building/TabBag.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "blackBtn1", "skin": "building/gneng2.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "whiteBtn1", "skin": "building/gneng1.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 231, "x": 261, "var": "box2" }, "child": [{ "type": "Image", "props": { "visible": false, "var": "backImg2", "skin": "building/TabBag.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "visible": false, "var": "blackBtn2", "skin": "building/zshilei1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "whiteBtn2", "skin": "building/zshilei2.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 231, "x": 459, "var": "box3" }, "child": [{ "type": "Image", "props": { "visible": false, "var": "backImg3", "skin": "building/TabBag.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "visible": false, "var": "blackBtn3", "skin": "building/dibang1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 9, "x": 55, "var": "whiteBtn3", "skin": "building/dibang2.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "List", "props": { "y": 279, "x": 64, "width": 592, "var": "list", "spaceY": -10, "height": 604 }, "child": [{ "type": "VScrollBar", "props": { "x": 567, "top": 9, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "bottom": 0 } }, { "type": "buildingItem", "props": { "y": 2, "x": 7, "runtime": "wuling.buildingItem", "renderType": "render" } }] }, { "type": "Image", "props": { "y": 276, "x": 77, "skin": "building/xiang.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 155, "x": 621, "var": "returnBtn", "skin": "building/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "sange", "props": { "y": 111, "x": 4, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 151, "x": 80, "skin": "building/buildingname.png", "scaleY": 0.666, "scaleX": 0.666 } }] };
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
        buildingItemUI.uiView = { "type": "View", "props": { "width": 551, "height": 150 }, "child": [{ "type": "Image", "props": { "y": 7, "x": 7, "skin": "building/classImg.png", "scaleY": 0.666, "scaleX": 0.666 }, "child": [{ "type": "Image", "props": { "y": 26, "x": 29, "var": "fanImg", "skin": "place1/d10001.png" } }, { "type": "Label", "props": { "y": 18, "x": 213, "width": 373, "var": "nametext", "text": "设施名称", "height": 40, "fontSize": 36, "color": "#000000", "bold": true, "align": "left" } }, { "type": "Clip", "props": { "y": 72, "x": 680, "var": "jin1", "skin": "top/clip_orgnumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 72, "x": 708, "var": "jin2", "skin": "top/clip_orgnumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 72, "x": 736, "var": "jin3", "skin": "top/clip_orgnumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 129, "x": 681, "var": "nen1", "skin": "top/clip_blocknumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 129, "x": 708, "var": "nen2", "skin": "top/clip_blocknumber.png", "index": 0, "clipX": 10 } }, { "type": "Clip", "props": { "y": 129, "x": 736, "var": "nen3", "skin": "top/clip_blocknumber.png", "index": 0, "clipX": 10 } }] }] };
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
        clientDetailsUI.uiView = { "type": "View", "props": { "width": 318, "height": 255 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 2, "skin": "details/gk_details.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Text", "props": { "y": 101, "x": 35, "width": 70, "text": "客户名称", "height": 19, "fontSize": 17, "font": "SimHei", "color": "#eaac27", "bold": false } }, { "type": "Image", "props": { "y": 118, "x": 32, "var": "dengji", "skin": "details/SS.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 223, "x": 278, "skin": "details/fyeTisp.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Text", "props": { "y": 180, "x": 29, "wordWrap": true, "width": 260, "text": "对白内容对白内容对白内容对白内容对白内容对白内容", "leading": 7, "height": 43, "fontSize": 17, "font": "SimHei", "color": "#4c4c4a", "bold": false } }, { "type": "Image", "props": { "y": 46, "x": 185, "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 45, "x": 208, "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 45, "x": 232, "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 19, "x": 184, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 19, "x": 208, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "List", "props": { "y": 95, "x": 131, "width": 168, "var": "list", "height": 68 }, "child": [{ "type": "VScrollBar", "props": { "x": 155, "width": 30, "top": -1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.42, "name": "scrollBar", "height": 70 } }, { "type": "clientDetailsItem", "props": { "y": 1, "x": -2, "runtime": "wuling.clientDetailsItem", "renderType": "render" } }] }, { "type": "Clip", "props": { "y": 4, "x": 36, "width": 73, "var": "renIcon", "skin": "guke/G01/clip_01zd.png", "index": 0, "height": 90, "clipX": 21 } }] };
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
        clientDetailsItemUI.uiView = { "type": "View", "props": { "width": 155, "height": 23 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 154, "renderType": "render", "height": 21 }, "child": [{ "type": "Text", "props": { "y": 1, "x": 0, "width": 48, "var": "content", "text": "饮水机", "height": 20, "fontSize": 15, "font": "Microsoft YaHei", "bold": false } }, { "type": "Image", "props": { "y": 2, "x": 112, "skin": "details/jinbiicon.png", "scaleY": 0.4, "scaleX": 0.4 } }, { "type": "Text", "props": { "x": 132, "width": 18, "text": "20", "name": "money", "height": 17, "fontSize": 17, "font": "Microsoft YaHei" } }] }] };
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
        clientXXUI.uiView = { "type": "View", "props": { "y": 69, "x": 58, "width": 117, "pivotY": 69.5, "pivotX": 58.5, "height": 139 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 115, "height": 137 }, "child": [{ "type": "Box", "props": { "y": 89, "x": 0, "visible": false }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 93, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 70, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 46, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 23, "skin": "details/m_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 23, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 46, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 70, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 93, "skin": "details/m_red.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 116, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 23, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 93, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 70, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 47, "skin": "details/xx_kong.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "var": "xing1", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "x": 23, "visible": false, "var": "xing2", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 47, "visible": false, "var": "xing3", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 70, "visible": false, "var": "xing4", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 0, "x": 93, "visible": false, "var": "xing5", "skin": "details/xx_man.png", "scaleY": 0.666, "scaleX": 0.666 } }] }, { "type": "Box", "props": { "y": 1, "x": 21, "visible": false }, "child": [{ "type": "Image", "props": { "skin": "details/x_zezhao.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 15, "x": 15, "skin": "details/x_jb.png", "scaleY": 0.666, "scaleX": 0.666 } }] }] }] };
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
        ditaiChexingUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 137, "x": 19, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 155, "x": 622, "var": "bg", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "List", "props": { "y": 234, "x": 79, "width": 575, "var": "list", "spaceY": 5, "spaceX": 1, "height": 647 }, "child": [{ "type": "VScrollBar", "props": { "x": 552, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "ditaiChexingItem", "props": { "y": -1, "x": -11, "runtime": "wuling.ditaiChexingItem", "renderType": "render" } }] }, { "type": "Image", "props": { "y": 147, "x": 91, "skin": "ditaiChexing/chexing.png", "scaleY": 1.333, "scaleX": 1.333 } }] };
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
        ditaiChexingItemUI.uiView = { "type": "View", "props": { "width": 185, "height": 328 }, "child": [{ "type": "Box", "props": { "y": 2, "x": 4 }, "child": [{ "type": "Image", "props": { "x": 1, "skin": "ditaiChexing/yjjx.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "skin": "ditaiChexing/jb.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 1, "x": 4, "skin": "ditaiChexing/tuIcon.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Button", "props": { "y": 272, "x": 29, "var": "bntImg", "stateNum": 2, "skin": "ditaiChexing/button.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 273, "x": 30, "visible": false, "var": "fanziImg", "skin": "ditaiChexing/fangzhi.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 89, "var": "jin1", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 104, "var": "jin2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 120, "var": "jin3", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 207, "x": 135, "var": "jin4", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 245, "x": 120, "var": "nen1", "skin": "sheshi/o2.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 245, "x": 135, "var": "nen2", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Label", "props": { "y": 174, "x": 47, "var": "carName", "text": "车型名称", "fontSize": 24, "font": "SimHei", "color": "#1a3b42" } }, { "type": "Image", "props": { "y": 7, "x": 7, "width": 172, "var": "carImg", "skin": "place/320c.png", "height": 150 } }] }] };
        return ditaiChexingItemUI;
    }(View));
    ui.ditaiChexingItemUI = ditaiChexingItemUI;
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
        goldCoinsUI.uiView = { "type": "View", "props": { "width": 100, "mouseThrough": true, "height": 100 }, "child": [{ "type": "Image", "props": { "y": -4, "x": -4, "var": "goldImg", "skin": "details/x_zezhao.png" } }, { "type": "Image", "props": { "y": 50, "x": 51, "width": 64, "var": "apertureImg", "skin": "top/jinbiGq.png", "pivotY": 33, "pivotX": 33, "height": 64 } }, { "type": "Image", "props": { "y": 49, "x": 49, "width": 74, "var": "coinsImg", "skin": "top/jinbi.png", "pivotY": 40, "pivotX": 36, "height": 76 } }] };
        return goldCoinsUI;
    }(View));
    ui.goldCoinsUI = goldCoinsUI;
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
        introduceUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "cam03", "skin": "introduce/cam03.jpg" } }, { "type": "Image", "props": { "y": 0, "x": -1059, "var": "cam02", "skin": "introduce/cam02.jpg" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "cam01", "skin": "introduce/cam01.jpg" } }, { "type": "Image", "props": { "y": -25, "x": -32, "width": 773, "var": "baImg", "skin": "map/ba.png", "height": 1324 } }] };
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
        loadingUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -493, "skin": "map/man.jpg" } }, { "type": "ProgressBar", "props": { "y": 1105, "x": 55, "width": 609, "var": "pre", "value": 0, "skin": "loading/progress.png", "sizeGrid": "10,20,10,20", "height": 60 } }, { "type": "Label", "props": { "y": 1185.3333333333333, "x": 248, "width": 36, "text": "游", "height": 32, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 4 }, { "type": "Label", "props": { "y": 1178.6666666666667, "x": 279, "width": 36, "text": "戏", "height": 31, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 5 }, { "type": "Label", "props": { "y": 1192, "x": 311, "width": 34, "text": "加", "height": 30, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 6 }, { "type": "Label", "props": { "y": 1192, "x": 340, "width": 35, "text": "载", "height": 29, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 7 }, { "type": "Label", "props": { "y": 1192, "x": 369, "width": 36, "text": "中", "height": 29, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 8 }, { "type": "Label", "props": { "y": 1192, "x": 409, "width": 21, "text": ".", "height": 30, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 9 }, { "type": "Label", "props": { "y": 1192, "x": 433, "width": 18, "text": ".", "height": 33, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 10 }, { "type": "Label", "props": { "y": 1199.6190476190477, "x": 455, "width": 14, "text": ".", "height": 32, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "bold": true }, "compId": 11 }, { "type": "Label", "props": { "y": 1121, "x": 326, "width": 43, "var": "prenumber", "text": "0%", "height": 26, "fontSize": 25, "font": "Microsoft YaHei", "color": "#090a09", "bold": true } }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "y": [{ "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 1172, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 3 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 6 }], "x": [{ "value": 248, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 248, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 3 }, { "value": 248, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 6 }, { "value": 248, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 42 }] } }, { "target": 5, "keyframes": { "y": [{ "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 0 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 3 }, { "value": 1172, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 6 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 9 }], "x": [{ "value": 279, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 0 }, { "value": 279, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 3 }, { "value": 279, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 6 }, { "value": 279, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 9 }, { "value": 279, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 42 }] } }, { "target": 6, "keyframes": { "y": [{ "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 0 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 6 }, { "value": 1172, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 9 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 12 }], "x": [{ "value": 311, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 0 }, { "value": 311, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 6 }, { "value": 311, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 9 }, { "value": 311, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 12 }, { "value": 311, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 42 }] } }, { "target": 7, "keyframes": { "y": [{ "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 9 }, { "value": 1172, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 12 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 15 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 42 }], "x": [{ "value": 340, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }, { "value": 340, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 9 }, { "value": 340, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 12 }, { "value": 340, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 15 }, { "value": 340, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 42 }] } }, { "target": 8, "keyframes": { "y": [{ "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "y", "index": 0 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "y", "index": 12 }, { "value": 1182, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "y", "index": 15 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "y", "index": 18 }], "x": [{ "value": 369, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 0 }, { "value": 369, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 12 }, { "value": 369, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 15 }, { "value": 369, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 18 }, { "value": 369, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 42 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 15 }, { "value": 1172, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 18 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 21 }], "x": [{ "value": 409, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 409, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 15 }, { "value": 409, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 18 }, { "value": 409, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 21 }, { "value": 409, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 42 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 18 }, { "value": 1182, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 21 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 24 }], "x": [{ "value": 433, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 433, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 18 }, { "value": 433, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 21 }, { "value": 433, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 24 }, { "value": 433, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 42 }] } }, { "target": 11, "keyframes": { "y": [{ "value": 1202, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "y", "index": 0 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "y", "index": 21 }, { "value": 1172, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "y", "index": 24 }, { "value": 1192, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "y", "index": 27 }], "x": [{ "value": 455, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 0 }, { "value": 455, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 21 }, { "value": 455, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 24 }, { "value": 455, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 27 }, { "value": 455, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 42 }] } }], "name": "loading", "id": 1, "frameRate": 24, "action": 0 }] };
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
        loginUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -493, "skin": "map/man.jpg" } }, { "type": "Button", "props": { "y": 648, "x": 252, "var": "loginBtn", "stateNum": 2, "skin": "login/button_login.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 519, "x": 150, "skin": "login/dhk.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "TextInput", "props": { "y": 544, "x": 244, "width": 232, "var": "userID", "promptColor": "#dbd6d6", "prompt": "请输入用户ID", "height": 50, "fontSize": 29, "font": "SimHei", "color": "#f9f6f6", "align": "center" } }] };
        return loginUI;
    }(View));
    ui.loginUI = loginUI;
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
        mapUI.uiView = { "type": "View", "props": { "width": 720, "runtime": "wuling.Top", "height": 1280 }, "child": [{ "type": "Panel", "props": { "width": 720, "var": "pan", "vScrollBarSkin": "  ", "top": 0, "left": 0, "hScrollBarSkin": "     ", "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 3664, "var": "mapImg", "skin": "map/bg4.jpg", "scaleY": 0.666, "scaleX": 0.666, "height": 2856, "cacheAs": "none" }, "child": [{ "type": "Image", "props": { "y": 412, "x": 159, "var": "diImg", "skin": "map/di4.png", "scaleY": 2, "scaleX": 2 } }, { "type": "Image", "props": { "y": 257, "x": 133, "var": "wallImg", "skin": "map/wall.png", "scaleY": 2, "scaleX": 2 } }, { "type": "Image", "props": { "y": 270, "x": 1193, "var": "wallBack", "skin": "map/wallBack4.png", "scaleY": 2, "scaleX": 2 } }, { "type": "Box", "props": { "y": 1054, "x": 1173, "visible": false, "var": "digeBox" }, "child": [{ "type": "Image", "props": { "y": 354, "var": "dige1", "skin": "map/dige.png", "name": "1", "mouseThrough": true } }, { "type": "Image", "props": { "y": 515, "x": 245, "var": "dige2", "skin": "map/dige.png", "mouseThrough": true } }, { "type": "Image", "props": { "y": 677, "x": 493, "var": "dige3", "skin": "map/dige.png", "mouseThrough": true } }, { "type": "Image", "props": { "y": 178, "x": 276, "var": "dige4", "skin": "map/dige.png", "name": "2", "mouseThrough": true } }, { "type": "Image", "props": { "y": 338, "x": 527, "var": "dige5", "skin": "map/dige.png", "name": "3", "mouseThrough": true } }, { "type": "Image", "props": { "y": 498, "x": 771, "var": "dige6", "skin": "map/dige.png", "name": "4", "mouseThrough": true } }, { "type": "Image", "props": { "x": 555, "var": "dige7", "skin": "map/dige.png", "name": "5", "mouseThrough": true } }, { "type": "Image", "props": { "y": 162, "x": 805, "var": "dige8", "skin": "map/dige.png", "name": "6", "mouseThrough": true } }, { "type": "Image", "props": { "y": 323, "x": 1052, "var": "dige9", "skin": "map/dige.png", "name": "7", "mouseThrough": true } }, { "type": "Image", "props": { "y": 173, "x": -281, "var": "dige10", "skin": "map/dige.png", "name": "8" } }, { "type": "Image", "props": { "y": -4, "x": -3, "var": "dige11", "skin": "map/dige.png", "name": "9" } }, { "type": "Image", "props": { "y": -182, "x": 273, "var": "dige12", "skin": "map/dige.png", "name": "10" } }, { "type": "Image", "props": { "y": 858, "x": 777, "var": "dige13", "skin": "map/dige.png", "name": "11" } }, { "type": "Image", "props": { "y": 678, "x": 1052, "var": "dige14", "skin": "map/dige.png", "name": "12" } }, { "type": "Image", "props": { "y": 502, "x": 1330, "var": "dige15", "skin": "map/dige.png", "name": "13" } }, { "type": "Image", "props": { "y": 10, "x": -529, "var": "dige16", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -168, "x": -250, "var": "dige17", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -347, "x": 29, "var": "dige18", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1014, "x": 1021, "var": "dige19", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 839, "x": 1302, "var": "dige20", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 659, "x": 1579, "var": "dige21", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -150, "x": -773, "var": "dige22", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -328, "x": -497, "var": "dige23", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -506, "x": -220, "var": "dige24", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1176, "x": 1270, "var": "dige25", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 997, "x": 1547, "var": "dige26", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 820, "x": 1826, "var": "dige27", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 553, "x": -166, "var": "digeLv11", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": 850, "x": 293, "var": "digeLv12", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": -92, "x": 838, "var": "digeLv13", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 157, "x": 1221, "var": "digeLv14", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 45, "x": -946, "var": "digeLv41", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": 1052, "x": 604, "var": "digeLv42", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": -594, "x": 58, "var": "digeLv43", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": -345, "x": 443, "var": "digeLv44", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 408, "x": 1609, "var": "digeLv45", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 658, "x": 1995, "var": "digeLv46", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 364, "x": -455, "var": "digeLv21", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 1053, "x": 605, "var": "digeLv22", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": -277, "x": 549, "var": "digeLv23", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 408, "x": 1610, "var": "digeLv24", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 204, "x": -699, "var": "digeLv31", "skin": "map/dige4.png" } }, { "type": "Image", "props": { "y": 1052, "x": 606, "var": "digeLv32", "skin": "map/dige4.png" } }] }, { "type": "Sprite", "props": { "y": 1793, "x": 1188, "width": 32, "var": "men_di", "height": 32 } }, { "type": "Clip", "props": { "y": 1639, "x": 1108, "var": "men_left", "skin": "map/clip_left.png", "name": "men_1", "clipX": 30 } }, { "type": "Sprite", "props": { "y": 1510, "x": 1459, "var": "frontDesk" } }, { "type": "Sprite", "props": { "y": 1641, "x": 1713, "var": "platform_ball" } }, { "type": "Clip", "props": { "y": 1794, "x": 1343, "var": "men_right", "skin": "map/clip_right.png", "clipX": 30 } }, { "type": "Sprite", "props": { "y": 1023, "x": 2315, "var": "exit" } }, { "type": "Image", "props": { "y": 1256, "x": 1701, "var": "ceshi", "skin": "rankList/top2.png", "alpha": 0 } }, { "type": "Box", "props": { "y": 1054, "x": 1173, "visible": false, "var": "diClick", "alpha": 0 }, "child": [{ "type": "Image", "props": { "y": 354, "var": "diClick1", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 515, "x": 245, "var": "diClick2", "skin": "map/dige.png", "mouseThrough": true } }, { "type": "Image", "props": { "y": 677, "x": 493, "var": "diClick3", "skin": "map/dige.png", "mouseThrough": true } }, { "type": "Image", "props": { "y": 178, "x": 276, "var": "diClick4", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 338, "x": 527, "var": "diClick5", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 498, "x": 771, "var": "diClick6", "skin": "map/dige.png" } }, { "type": "Image", "props": { "x": 555, "var": "diClick7", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 162, "x": 805, "var": "diClick8", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 323, "x": 1052, "var": "diClick9", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 173, "x": -281, "var": "diClick10", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -4, "x": -3, "var": "diClick11", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -182, "x": 273, "var": "diClick12", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 858, "x": 777, "var": "diClick13", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 678, "x": 1052, "var": "diClick14", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 502, "x": 1330, "var": "diClick15", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 10, "x": -529, "var": "diClick16", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -168, "x": -250, "var": "diClick17", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -347, "x": 29, "var": "diClick18", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1014, "x": 1021, "var": "diClick19", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 839, "x": 1302, "var": "diClick20", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 659, "x": 1579, "var": "diClick21", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -150, "x": -773, "var": "diClick22", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -328, "x": -497, "var": "diClick23", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": -506, "x": -220, "var": "diClick24", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 1176, "x": 1270, "var": "diClick25", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 997, "x": 1547, "var": "diClick26", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 820, "x": 1826, "var": "diClick27", "skin": "map/dige.png" } }, { "type": "Image", "props": { "y": 563, "x": -156, "var": "diClick28", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": 860, "x": 303, "var": "diClick29", "skin": "map/dige2.png" } }, { "type": "Image", "props": { "y": -82, "x": 848, "var": "diClick30", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 167, "x": 1231, "var": "diClick31", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 55, "x": -936, "var": "diClick32", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": 1062, "x": 614, "var": "diClick33", "skin": "map/dige5.png" } }, { "type": "Image", "props": { "y": -584, "x": 68, "var": "diClick34", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": -335, "x": 453, "var": "diClick35", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 418, "x": 1619, "var": "diClick36", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 668, "x": 2005, "var": "diClick37", "skin": "map/dige3.png" } }, { "type": "Image", "props": { "y": 374, "x": -445, "var": "diClick38", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 1063, "x": 615, "var": "diClick39", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": -267, "x": 559, "var": "diClick40", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 418, "x": 1620, "var": "diClick41", "skin": "map/dige1.png" } }, { "type": "Image", "props": { "y": 214, "x": -689, "var": "diClick42", "skin": "map/dige4.png" } }, { "type": "Image", "props": { "y": 1062, "x": 616, "var": "diClick43", "skin": "map/dige4.png" } }] }] }] }, { "type": "Image", "props": { "width": 148, "var": "ok", "skin": "map/ok.png", "right": 0, "height": 68, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 720, "var": "mo", "skin": "map/mo.png", "height": 1280, "alpha": 0.5 } }, { "type": "Sprite", "props": { "y": 162, "x": 46, "var": "animei" } }, { "type": "Image", "props": { "visible": false, "var": "clientInfoBag", "top": 0, "right": 0, "left": 0, "bottom": 0 } }, { "type": "clientDetails", "props": { "y": 603, "x": 362, "visible": false, "var": "clientInfo", "scaleY": 1.6, "scaleX": 1.6, "runtime": "wuling.clientDetails", "pivotY": 127.5, "pivotX": 159, "alpha": 1 } }] };
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
        menuUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "returnBtn", "top": 0, "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 522, "x": 29, "width": 474, "var": "imgCai3", "skin": "map/store.png", "scaleY": 0.536, "scaleX": 0.536, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 532, "x": 463, "width": 474, "var": "imgCai5", "skin": "map/ranking.png", "scaleY": 0.529, "scaleX": 0.529, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 522, "x": 453, "width": 474, "var": "imgCai4", "skin": "map/warehouse.png", "scaleY": 0.529, "scaleX": 0.529, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 510, "x": 162, "width": 474, "var": "imgCai2", "skin": "map/facilities.png", "scaleY": 0.599, "scaleX": 0.599, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 494, "x": 337, "width": 474, "var": "imgCai1", "skin": "map/caidan.png", "scaleY": 0.666, "scaleX": 0.666, "pivotY": 206, "pivotX": 10, "height": 604 } }, { "type": "Image", "props": { "y": 532, "x": 463, "width": 474, "var": "imgCai6", "skin": "map/setup.png", "scaleY": 0.529, "scaleX": 0.529, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Image", "props": { "y": 542, "x": 473, "width": 474, "var": "imgCai7", "skin": "map/task.png", "scaleY": 0.529, "scaleX": 0.529, "pivotY": 213, "pivotX": 13, "height": 604 } }, { "type": "Panel", "props": { "y": 349, "var": "pan", "right": 0, "left": 0, "height": 401, "hScrollBarSkin": "  " }, "child": [{ "type": "Image", "props": { "x": -1630, "width": 4079, "var": "imgBtn", "top": 0, "skin": "map/caidan.png", "height": 401, "bottom": 0, "alpha": 0 } }] }] };
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
        missionUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 137, "x": 20, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 152, "x": 621, "var": "returnBtn", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "List", "props": { "y": 303, "x": 81, "width": 575, "var": "list", "spaceY": 5, "spaceX": 2, "height": 579 }, "child": [{ "type": "VScrollBar", "props": { "x": 552, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "missionItem", "props": { "y": -8, "x": 17, "var": "tabView", "scaleX": 0.95, "runtime": "wuling.missionItem", "renderType": "render" } }] }, { "type": "List", "props": { "y": 302, "x": 67, "width": 589, "visible": false, "var": "cen", "spaceY": 17, "spaceX": 3, "repeatX": 3, "height": 581 }, "child": [{ "type": "VScrollBar", "props": { "x": 566, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "achievement", "props": { "y": 1, "x": 10, "runtime": "wuling.achievement", "renderType": "render" } }] }, { "type": "sange", "props": { "y": 114, "x": 8, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 271, "x": 77, "skin": "mission/xian.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 229, "x": 66, "var": "tabM", "skin": "mission/missionW.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 229, "x": 65, "var": "tabMission", "skin": "mission/mession.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 212, "x": 312, "skin": "mission/award.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 229, "x": 361, "var": "tabA", "skin": "mission/achieW.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 229, "x": 360, "visible": false, "var": "tabAchi", "skin": "mission/achie.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 215, "x": 610, "skin": "mission/cen.png", "scaleY": 1.333, "scaleX": 1.333 } }] };
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
        missionItemUI.uiView = { "type": "View", "props": { "width": 543, "height": 109 }, "child": [{ "type": "Box", "props": { "y": 4, "x": 1 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg", "skin": "mission/kuang110.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 20, "x": 426, "var": "reimg", "skin": "mission/unfinished.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Button", "props": { "y": 21, "x": 426, "var": "lingqu", "stateNum": 2, "skin": "mission/button_ling.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Text", "props": { "y": 58, "x": 21, "width": 156, "var": "renwu", "text": "门店升级到2级", "height": 24, "fontSize": 23, "font": "SimHei", "color": "#c17c32", "bold": true } }, { "type": "Text", "props": { "y": 58, "x": 380, "width": 74, "var": "proText", "text": "1/1", "pivotX": 38, "height": 24, "fontSize": 23, "font": "SimHei", "color": "#c17c32", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": 16, "x": 54, "var": "one", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 16, "x": 83, "visible": false, "var": "two", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 16, "x": 113, "visible": false, "var": "three", "skin": "mission/1.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 34, "x": 222, "width": 191, "visible": true, "var": "add", "height": 52, "alpha": 0 }, "child": [{ "type": "Text", "props": { "y": 1, "x": -13, "width": 33, "text": "+", "height": 51, "fontSize": 55, "font": "SimHei", "color": "#f1de09", "bold": true } }, { "type": "Image", "props": { "y": 10, "x": 58, "var": "jin1", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 87, "var": "jin2", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 116, "var": "jin3", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 10, "x": 146, "var": "jin4", "skin": "rankList/org0.png" } }, { "type": "Image", "props": { "y": 9, "x": 21, "width": 34, "skin": "top/jinbi.png", "height": 34 } }] }] };
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
        nanaUI.uiView = { "type": "View", "props": { "y": 0, "width": 720, "pivotY": 0, "height": 482, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 340, "x": 98, "width": 607, "skin": "nana/kuang.png", "pivotY": 139, "height": 275, "alpha": 1 }, "compId": 12 }, { "type": "Image", "props": { "y": 484, "x": 12, "width": 219, "skin": "nana/nana.png", "scaleY": 1, "scaleX": 1, "pivotY": 482, "pivotX": 2, "height": 480, "alpha": 1 }, "compId": 11 }, { "type": "Sprite", "props": { "y": 213, "x": 219, "width": 32, "var": "nanaLv", "pivotY": 18, "pivotX": 16, "height": 32, "alpha": 1 }, "compId": 16 }, { "type": "Sprite", "props": { "y": 236.81949999999995, "x": 0, "var": "xinguang", "alpha": 1 }, "compId": 17 }], "animations": [{ "nodes": [{ "target": 11, "keyframes": { "x": [{ "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 0 }], "scaleY": [{ "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 8 }], "scaleX": [{ "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 8 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 8 }] } }, { "target": 12, "keyframes": { "x": [{ "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }, { "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 12 }], "width": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "width", "index": 0 }, { "value": 607, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "width", "index": 12 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 12 }] } }, { "target": 17, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 20 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 20 }] } }, { "target": 16, "keyframes": { "x": [{ "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 20 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 20 }] } }], "name": "nana", "id": 1, "frameRate": 24, "action": 1 }, { "nodes": [{ "target": 11, "keyframes": { "x": [{ "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 0 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 8 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 8 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 8 }] } }, { "target": 12, "keyframes": { "x": [{ "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }, { "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 8 }], "width": [{ "value": 607, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "width", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "width", "index": 8 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "alpha", "index": 8 }] } }, { "target": 16, "keyframes": { "x": [{ "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 219, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 15 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "alpha", "index": 15 }] } }, { "target": 17, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 20 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 20 }] } }], "name": "nana_0", "id": 1, "frameRate": 24, "action": 1 }] };
        return nanaUI;
    }(View));
    ui.nanaUI = nanaUI;
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
        personUI.uiView = { "type": "View", "props": { "y": 118, "x": 46, "width": 106, "pivotY": 118, "pivotX": 46, "height": 131 }, "child": [{ "type": "Clip", "props": { "y": 118, "x": 46, "width": 106, "var": "persons", "skin": "guke/G01/clip_01bg.png", "pivotY": 118, "pivotX": 46, "height": 131, "clipX": 21, "autoPlay": true } }, { "type": "clientXX", "props": { "y": -64, "x": 52, "var": "top1", "runtime": "ui.clientXXUI" } }] };
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
        PlaceItem1UI.uiView = { "type": "View", "props": { "width": 270, "runtime": "wuling.PlaceItem1", "mouseThrough": true, "mouseEnabled": true, "height": 259 }, "child": [{ "type": "Box", "props": { "y": 2, "x": -10, "var": "imgBtn" }, "child": [{ "type": "Image", "props": { "var": "show0", "skin": "place/d100016.png" } }, { "type": "Image", "props": { "y": 48, "x": 246, "var": "show1", "skin": "place/show1.png" } }, { "type": "Image", "props": { "y": -42, "x": 18, "var": "carClass" } }] }, { "type": "Box", "props": { "y": 54, "x": 0, "width": 201, "var": "boxImg", "scaleY": 1.5, "scaleX": 1.5, "mouseThrough": true, "height": 165 }, "child": [{ "type": "Image", "props": { "y": 52, "x": 58, "width": 56, "var": "rotate", "skin": "place2/rotate.png", "height": 44 } }, { "type": "Image", "props": { "y": 99, "x": 92, "width": 56, "var": "cancel", "skin": "place2/cancel.png", "height": 44 } }, { "type": "Image", "props": { "y": 99, "x": 26, "width": 56, "var": "ensure", "skin": "place2/ensure.png", "height": 44 } }, { "type": "Image", "props": { "y": 52, "x": -8, "width": 56, "var": "checks", "skin": "place2/checks.png", "height": 44 } }, { "type": "Image", "props": { "y": 53, "x": 58, "width": 56, "var": "shift", "skin": "place2/shift.png", "height": 44 } }, { "type": "Image", "props": { "y": 52, "x": 125, "width": 56, "var": "demolition", "skin": "place2/demolition.png", "height": 44 } }, { "type": "Image", "props": { "y": 99, "x": 92, "width": 56, "var": "colorBrush", "skin": "place2/colorBrush.png", "height": 44 } }, { "type": "Image", "props": { "y": 100, "x": 27, "width": 56, "var": "carModels", "skin": "place2/carModels.png", "height": 44 } }] }, { "type": "Sprite", "props": { "y": 150, "x": 60, "var": "aniswf" } }, { "type": "Sprite", "props": { "y": -173, "x": 4, "visible": false, "var": "spani" } }] };
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
        PlaceItem2UI.uiView = { "type": "View", "props": { "y": 85, "x": 66, "width": 310, "runtime": "wuling.PlaceItem2", "pivotY": 85, "pivotX": 66, "mouseThrough": true, "mouseEnabled": true, "height": 259 }, "child": [{ "type": "Box", "props": { "y": 24, "x": 14, "width": 201, "var": "boxImg", "scaleY": 1.5, "scaleX": 1.5, "mouseThrough": true, "height": 165 }, "child": [{ "type": "Image", "props": { "y": 116, "x": 73, "width": 56, "var": "cancel", "skin": "place2/cancel.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 5, "width": 56, "var": "ensure", "skin": "place2/ensure.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 6, "width": 56, "var": "checks", "skin": "place2/checks.png", "height": 44 } }, { "type": "Image", "props": { "y": 117, "x": 73, "width": 56, "var": "shift", "skin": "place2/shift.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 140, "width": 56, "var": "rotate", "skin": "place2/rotate.png", "height": 44 } }, { "type": "Image", "props": { "y": 116, "x": 140, "width": 56, "var": "demolition", "skin": "place2/demolition.png", "height": 44 } }] }, { "type": "Image", "props": { "y": 209, "x": 128, "width": 76, "var": "imgBtn", "skin": "place/m10001.png", "pivotY": 182, "height": 181 } }, { "type": "Sprite", "props": { "y": 136, "x": 87, "var": "aniswf" } }, { "type": "Sprite", "props": { "y": -69, "x": 83, "var": "builAni" } }] };
        return PlaceItem2UI;
    }(View));
    ui.PlaceItem2UI = PlaceItem2UI;
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
        rankItemUI.uiView = { "type": "View", "props": { "width": 541, "height": 106 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 2 }, "child": [{ "type": "Image", "props": { "skin": "rankList/rankBg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 64, "x": 348, "skin": "rankList/0.png" } }, { "type": "Image", "props": { "y": 64, "x": 363, "skin": "rankList/0.png" } }, { "type": "Image", "props": { "y": 64, "x": 378, "skin": "rankList/0.png" } }, { "type": "Image", "props": { "y": 64, "x": 393, "skin": "rankList/0.png" } }, { "type": "Image", "props": { "y": 64, "x": 334, "skin": "rankList/1.png" } }, { "type": "Text", "props": { "y": 18, "x": 108, "width": 105, "text": "玩家昵称", "height": 27, "fontSize": 25, "font": "SimHei", "color": "#3f4781", "bold": true } }, { "type": "Image", "props": { "y": 9, "x": 438, "var": "huizhang", "skin": "rankList/top1.png", "scaleY": 1.333, "scaleX": 1.333 } }] }] };
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
        rankListUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 137, "x": 19, "skin": "cangku/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "sange", "props": { "y": 113, "x": 8, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 156, "x": 624, "var": "gb", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 146, "x": 88, "skin": "rankList/paihang.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 804, "x": 65, "skin": "rankList/myRank.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "List", "props": { "y": 230, "x": 79, "width": 575, "var": "list", "spaceY": 5, "spaceX": 2, "height": 573 }, "child": [{ "type": "VScrollBar", "props": { "x": 552, "width": 30, "top": 1, "skin": "building/vscroll.png", "showButtons": false, "scaleX": 0.733, "name": "scrollBar", "height": 578 } }, { "type": "rankItem", "props": { "y": 4, "x": -3, "runtime": "wuling.rankListItem", "renderType": "render" } }] }, { "type": "Image", "props": { "y": 826, "x": 351, "skin": "rankList/toplist.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 825, "x": 531, "skin": "rankList/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 824, "x": 552, "skin": "rankList/2.png", "scaleY": 1.333, "scaleX": 1.333 } }] };
        return rankListUI;
    }(Dialog));
    ui.rankListUI = rankListUI;
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
        settingUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 228, "x": 137, "skin": "setting/ui.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "y": 203, "x": 127, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 403, "x": 390, "width": 40, "var": "music", "skin": "setting/switch.png", "scaleY": 1.333, "scaleX": 1.333, "height": 25 } }, { "type": "Image", "props": { "y": 517, "x": 390, "width": 40, "var": "soundEffect", "skin": "setting/switch.png", "scaleY": 1.333, "scaleX": 1.333, "height": 25 } }, { "type": "Image", "props": { "y": 245, "x": 502, "var": "returnBtn", "skin": "mission/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }] };
        return settingUI;
    }(Dialog));
    ui.settingUI = settingUI;
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
        sheshiUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 227, "x": 139, "skin": "shopInfo/shopInfoBg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 246, "x": 502, "var": "gb", "skin": "shopInfo/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Image", "props": { "y": 244, "x": 214, "skin": "sheshi/sheshiText.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "y": 203, "x": 128, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 559, "x": 199, "skin": "sheshi/bg.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Button", "props": { "y": 654, "x": 234, "var": "upgradeBtn", "stateNum": 2, "skin": "sheshi/button.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 312, "x": 255, "width": 196, "skin": "place/3x5Lv2zt.png", "height": 201 } }, { "type": "Image", "props": { "y": 512, "x": 454, "skin": "sheshi/lvda.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 512, "x": 497, "skin": "sheshi/org1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 568, "x": 486, "skin": "sheshi/o1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 568, "x": 501, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 615, "x": 486, "skin": "sheshi/o5.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 615, "x": 501, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Text", "props": { "y": 518, "x": 201, "width": 117, "text": "展台2", "height": 29, "fontSize": 30, "font": "SimHei", "color": "#100e0e" } }] };
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
        shopInfoUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 227, "x": 140, "skin": "shopInfo/shopInfoBg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "y": 203, "x": 127, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 339, "x": 199, "skin": "shopInfo/content.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 347, "x": 455, "skin": "shopInfo/lv.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Button", "props": { "y": 631, "x": 233, "var": "upgradeBtn", "stateNum": 2, "skin": "shopInfo/button.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 347, "x": 488, "var": "levelImg", "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 347, "x": 506, "var": "levelImg2", "skin": "sheshi/o1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 468, "x": 489, "var": "supportNum", "skin": "sheshi/o6.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 468, "x": 504, "var": "supportNum2", "skin": "sheshi/o6.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Box", "props": { "y": 528, "x": 353 }, "child": [{ "type": "Image", "props": { "skin": "sheshi/o1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 14, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 29, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 44, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 60, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 407, "x": 440 }, "child": [{ "type": "Image", "props": { "skin": "sheshi/o1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 14, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 29, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 44, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 60, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 528, "x": 443 }, "child": [{ "type": "Image", "props": { "skin": "sheshi/o2.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 14, "skin": "sheshi/o5.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 29, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 43, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 60, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Box", "props": { "y": 588, "x": 484 }, "child": [{ "type": "Image", "props": { "y": 1, "skin": "sheshi/o4.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 15, "skin": "sheshi/o0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Image", "props": { "y": 245, "x": 502, "var": "gb", "skin": "shopInfo/return1.png", "scaleY": 0.666, "scaleX": 0.666 } }, { "type": "Box", "props": { "y": 694, "x": 347 }, "child": [{ "type": "Image", "props": { "var": "jin1", "skin": "shopInfo/1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 14, "var": "jin2", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "x": 27, "var": "jin3", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 0, "x": 40, "var": "jin4", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 0, "x": 53, "var": "jin5", "skin": "shopInfo/0.png", "scaleY": 1.333, "scaleX": 1.333 } }] }, { "type": "Image", "props": { "y": 244, "x": 212, "skin": "shopInfo/shopText.png", "scaleY": 1.333, "scaleX": 1.333 } }] };
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
        ssInfoUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 228, "x": 139, "skin": "ssInfo/bibg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "sange", "props": { "y": 203, "x": 128, "runtime": "wuling.sange" } }, { "type": "Image", "props": { "y": 559, "x": 199, "skin": "ssInfo/bg.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 244, "x": 213, "skin": "ssInfo/title.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 246, "x": 502, "var": "gb", "skin": "ssInfo/gb.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 512, "x": 454, "skin": "ssInfo/lvda.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 512, "x": 497, "skin": "ssInfo/org1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 568, "x": 487, "skin": "ssInfo/bo1.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 568, "x": 501, "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 615, "x": 486, "skin": "ssInfo/bo5.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 615, "x": 501, "skin": "ssInfo/bo0.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Button", "props": { "y": 654, "x": 234, "stateNum": 2, "skin": "ssInfo/button_sj.png", "scaleY": 1.333, "scaleX": 1.333 } }, { "type": "Image", "props": { "y": 268, "x": 230, "width": 260, "var": "imgBtn", "skin": "place1/d100014.png", "height": 260 } }, { "type": "Text", "props": { "y": 519, "x": 199, "width": 122, "var": "buidingname", "text": "设施名称", "height": 34, "fontSize": 28, "font": "SimHei", "color": "#444e77", "bold": true } }] };
        return ssInfoUI;
    }(Dialog));
    ui.ssInfoUI = ssInfoUI;
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
        topUI.uiView = { "type": "View", "props": { "width": 720, "height": 150 }, "child": [{ "type": "Sprite", "props": { "y": 11, "x": 13, "var": "headKuan" } }, { "type": "Label", "props": { "y": 30, "x": 127, "width": 96, "var": "usertext", "text": "玩家昵称", "height": 26, "fontSize": 23, "font": "Helvetica", "color": "#080808", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 70, "x": 133, "width": 37, "skin": "top/Lv.png", "height": 26 } }, { "type": "Image", "props": { "y": 14, "x": 7, "width": 129, "skin": "top/qingwa.png", "height": 113 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 12, "width": 103, "skin": "top/zhezhao.png", "renderType": "mask", "height": 103 } }] }, { "type": "Clip", "props": { "y": 71, "x": 170, "width": 18, "var": "lv1", "skin": "top/clip_orgnumber.png", "index": 9, "height": 25, "clipX": 10 } }, { "type": "Clip", "props": { "y": 71, "x": 186, "width": 18, "var": "lv2", "skin": "top/clip_orgnumber.png", "index": 9, "height": 25, "clipX": 10 } }, { "type": "Image", "props": { "y": 49, "x": 439, "width": 70, "skin": "top/jinbiGq.png", "scaleY": 1.7, "scaleX": 1.7, "pivotY": 35.5, "pivotX": 35, "height": 71, "alpha": 0 }, "compId": 18 }, { "type": "Image", "props": { "y": 46, "x": 436, "width": 50, "skin": "top/jinbi.png", "scaleY": 1, "scaleX": 1, "pivotY": 25.5, "pivotX": 25, "height": 51 }, "compId": 16 }, { "type": "Clip", "props": { "y": 37, "x": 468, "width": 19, "var": "me1", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 37, "x": 554, "width": 19, "var": "me6", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 37, "x": 537, "width": 19, "var": "me5", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 37, "x": 520, "width": 19, "var": "me4", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 37, "x": 502, "width": 19, "var": "me3", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Clip", "props": { "y": 37, "x": 485, "width": 19, "var": "me2", "skin": "top/clip_blocknumber.png", "index": 0, "height": 28, "clipX": 10 } }, { "type": "Image", "props": { "y": 21, "x": 600, "width": 44, "skin": "top/dianchi.png", "height": 51 } }, { "type": "Clip", "props": { "y": 36, "x": 654, "width": 19, "var": "nen1", "skin": "top/clip_blocknumber.png", "index": 9, "height": 27, "clipX": 10 } }, { "type": "Clip", "props": { "y": 36, "x": 672, "width": 19, "var": "nen2", "skin": "top/clip_blocknumber.png", "index": 9, "height": 27, "clipX": 10 } }, { "type": "Image", "props": { "y": 92, "x": 277, "visible": false, "var": "jinbiicon", "skin": "top/jinbiicon.png" } }], "animations": [{ "nodes": [{ "target": 18, "keyframes": { "x": [{ "value": 439, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }], "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 7 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 7 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 7 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 10 }] } }, { "target": 16, "keyframes": { "y": [{ "value": 46, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "y", "index": 0 }], "x": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 3 }, { "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 6 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 3 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 6 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 3 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 6 }], "pivotY": [{ "value": 25.5, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "pivotY", "index": 0 }], "pivotX": [{ "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "pivotX", "index": 0 }] } }], "name": "jinbi", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 18, "keyframes": { "x": [{ "value": 439, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 439, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 7 }], "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 4 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 4 }, { "value": 1.7, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 7 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 7 }] } }, { "target": 16, "keyframes": { "x": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 2 }, { "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "x", "index": 4 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleY", "index": 2 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "scaleY", "index": 4 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "scaleX", "index": 2 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "scaleX", "index": 4 }] } }], "name": "guanquan", "id": 2, "frameRate": 24, "action": 0 }] };
        return topUI;
    }(View));
    ui.topUI = topUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map