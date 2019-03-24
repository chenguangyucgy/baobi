/**
* 门店升级数据
*/
var module;
(function (module) {
    var shopInfoModule = /** @class */ (function () {
        function shopInfoModule() {
            this.shopInData = [
                //lv:等级,jin:宝币上限,nen:能量上限,supporNum:支持人数,hosting:,expend:门店升级所需的宝币数量,man:门店升级所需的满意度
                { lv: 1, jin: 100, nen: 99, supportNum: 5, hosting: 2, expend: 100, di: 1, man: 0 },
                { lv: 2, jin: 130, nen: 99, supportNum: 5, hosting: 2, expend: 130, di: 1, man: 220 },
                { lv: 3, jin: 170, nen: 99, supportNum: 5, hosting: 2, expend: 170, di: 1, man: 440 },
                { lv: 4, jin: 220, nen: 99, supportNum: 5, hosting: 2, expend: 220, di: 1, man: 660 },
                { lv: 5, jin: 280, nen: 99, supportNum: 5, hosting: 2, expend: 280, di: 2, man: 880 },
                { lv: 6, jin: 370, nen: 99, supportNum: 5, hosting: 2, expend: 370, di: 2, man: 1100 },
                { lv: 7, jin: 450, nen: 99, supportNum: 6, hosting: 2, expend: 450, di: 2, man: 1320 },
                { lv: 8, jin: 550, nen: 99, supportNum: 6, hosting: 2, expend: 550, di: 2, man: 1540 },
                { lv: 9, jin: 610, nen: 99, supportNum: 6, hosting: 2, expend: 610, di: 2, man: 1760 },
                { lv: 10, jin: 660, nen: 99, supportNum: 6, hosting: 3, expend: 660, di: 3, man: 1980 },
                { lv: 11, jin: 700, nen: 99, supportNum: 6, hosting: 3, expend: 700, di: 3, man: 2200 },
                { lv: 12, jin: 770, nen: 99, supportNum: 6, hosting: 3, expend: 770, di: 3, man: 2420 },
                { lv: 13, jin: 830, nen: 99, supportNum: 7, hosting: 3, expend: 830, di: 3, man: 2640 },
                { lv: 14, jin: 890, nen: 99, supportNum: 7, hosting: 3, expend: 890, di: 3, man: 2860 },
                { lv: 15, jin: 950, nen: 99, supportNum: 7, hosting: 3, expend: 950, di: 4, man: 3080 },
                { lv: 16, jin: 1100, nen: 99, supportNum: 7, hosting: 3, expend: 1100, di: 4, man: 3300 },
                { lv: 17, jin: 1800, nen: 99, supportNum: 7, hosting: 3, expend: 1800, di: 4, man: 3520 },
                { lv: 18, jin: 2500, nen: 99, supportNum: 7, hosting: 3, expend: 2500, di: 4, man: 3740 },
                { lv: 19, jin: 2900, nen: 99, supportNum: 8, hosting: 3, expend: 2900, di: 4, man: 3960 },
                { lv: 20, jin: 3600, nen: 99, supportNum: 8, hosting: 3, expend: 3600, di: 4, man: 4180 },
                { lv: 21, jin: 4000, nen: 99, supportNum: 8, hosting: 4, expend: 4000, di: 4, man: 4400 },
                { lv: 22, jin: 4700, nen: 99, supportNum: 8, hosting: 4, expend: 4700, di: 4, man: 4620 },
                { lv: 23, jin: 5300, nen: 99, supportNum: 8, hosting: 4, expend: 5300, di: 4, man: 4840 },
                { lv: 24, jin: 5900, nen: 99, supportNum: 8, hosting: 4, expend: 5900, di: 4, man: 5060 },
                { lv: 25, jin: 6500, nen: 99, supportNum: 9, hosting: 4, expend: 6500, di: 4, man: 5280 },
                { lv: 26, jin: 7200, nen: 99, supportNum: 9, hosting: 4, expend: 7200, di: 4, man: 5500 },
                { lv: 27, jin: 7700, nen: 99, supportNum: 9, hosting: 4, expend: 7700, di: 4, man: 5720 },
                { lv: 28, jin: 8400, nen: 99, supportNum: 10, hosting: 4, expend: 8400, di: 4, man: 5940 },
                { lv: 29, jin: 9000, nen: 99, supportNum: 10, hosting: 4, expend: 9000, di: 4, man: 6160 },
                { lv: 30, jin: 0, nen: 99, supportNum: 10, hosting: 4, expend: 0, di: 4, man: 99999 },
            ];
        }
        shopInfoModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new shopInfoModule;
            }
            return this._instance;
        };
        return shopInfoModule;
    }());
    module.shopInfoModule = shopInfoModule;
})(module || (module = {}));
//# sourceMappingURL=shopInfoModule.js.map