/**
* name
*/
var module;
(function (module) {
    var shopInfoModule = /** @class */ (function () {
        function shopInfoModule() {
            this.shopInData = [
                { lv: 1, jin: 110, nen: 99, supportNum: 5, hosting: 2, expend: 100, di: 1 },
                { lv: 2, jin: 218, nen: 99, supportNum: 5, hosting: 2, expend: 204, di: 1 },
                { lv: 3, jin: 380, nen: 99, supportNum: 5, hosting: 2, expend: 359, di: 1 },
                { lv: 4, jin: 596, nen: 99, supportNum: 5, hosting: 2, expend: 568, di: 1 },
                { lv: 5, jin: 866, nen: 99, supportNum: 5, hosting: 2, expend: 831, di: 1 },
                { lv: 6, jin: 1190, nen: 99, supportNum: 5, hosting: 2, expend: 1148, di: 1 },
                { lv: 7, jin: 1568, nen: 99, supportNum: 6, hosting: 2, expend: 1519, di: 1 },
                { lv: 8, jin: 2000, nen: 99, supportNum: 6, hosting: 2, expend: 1944, di: 1 },
                { lv: 9, jin: 2486, nen: 99, supportNum: 6, hosting: 2, expend: 2423, di: 2 },
                { lv: 10, jin: 3026, nen: 99, supportNum: 6, hosting: 3, expend: 2956, di: 2 },
                { lv: 11, jin: 3620, nen: 99, supportNum: 6, hosting: 3, expend: 3543, di: 2 },
                { lv: 12, jin: 4268, nen: 99, supportNum: 6, hosting: 3, expend: 4184, di: 2 },
                { lv: 13, jin: 4970, nen: 99, supportNum: 7, hosting: 3, expend: 4879, di: 2 },
                { lv: 14, jin: 5726, nen: 99, supportNum: 7, hosting: 3, expend: 5628, di: 2 },
                { lv: 15, jin: 6536, nen: 99, supportNum: 7, hosting: 3, expend: 6431, di: 2 },
                { lv: 16, jin: 7400, nen: 99, supportNum: 7, hosting: 3, expend: 7288, di: 2 },
                { lv: 17, jin: 8318, nen: 99, supportNum: 7, hosting: 3, expend: 8199, di: 3 },
                { lv: 18, jin: 9290, nen: 99, supportNum: 7, hosting: 3, expend: 9164, di: 3 },
                { lv: 19, jin: 10316, nen: 99, supportNum: 8, hosting: 3, expend: 10183, di: 3 },
                { lv: 20, jin: 11396, nen: 99, supportNum: 8, hosting: 3, expend: 11256, di: 3 },
                { lv: 21, jin: 12530, nen: 99, supportNum: 8, hosting: 4, expend: 12383, di: 3 },
                { lv: 22, jin: 13718, nen: 99, supportNum: 8, hosting: 4, expend: 13564, di: 3 },
                { lv: 23, jin: 14960, nen: 99, supportNum: 8, hosting: 4, expend: 14799, di: 3 },
                { lv: 24, jin: 16256, nen: 99, supportNum: 8, hosting: 4, expend: 16088, di: 3 },
                { lv: 25, jin: 17606, nen: 99, supportNum: 9, hosting: 4, expend: 17431, di: 4 },
                { lv: 26, jin: 19010, nen: 99, supportNum: 9, hosting: 4, expend: 18828, di: 4 },
                { lv: 27, jin: 20468, nen: 99, supportNum: 9, hosting: 4, expend: 20279, di: 4 },
                { lv: 28, jin: 21980, nen: 99, supportNum: 10, hosting: 4, expend: 21784, di: 4 },
                { lv: 29, jin: 23546, nen: 99, supportNum: 10, hosting: 4, expend: 23343, di: 4 },
                { lv: 30, jin: 25166, nen: 99, supportNum: 10, hosting: 4, expend: 24956, di: 4 },
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