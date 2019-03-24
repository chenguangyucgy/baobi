/**
* 建筑升级条件
*/
var module;
(function (module) {
    /**升级条件 */
    var upgrade = /** @class */ (function () {
        function upgrade() {
        }
        //Lv:解锁升级的等级,man:需要的满意度,jin:需要的金币,nen:需要的能量,deLv:可升到多少级,classID:建筑类型
        //自助餐吧
        upgrade.d100013 = { Lv: 11, man: 995, jin: 600, nen: 20, deLv: 3, classID: 2 };
        upgrade.d100013a = { Lv: 21, man: 2620, jin: 900, nen: 20, deLv: 3, classID: 2 };
        upgrade.d100013ab = { Lv: 21, man: 2620, jin: 900, nen: 20, deLv: 3, classID: 2 };
        //VR看车
        upgrade.d10008 = { Lv: 19, man: 2755, jin: 600, nen: 20, deLv: 3, classID: 2 };
        upgrade.d10008a = { Lv: 28, man: 3630, jin: 900, nen: 20, deLv: 3, classID: 2 };
        upgrade.d10008ab = { Lv: 28, man: 3630, jin: 900, nen: 20, deLv: 3, classID: 2 };
        //制动系统展示
        upgrade.d100010 = { Lv: 15, man: 2380, jin: 1000, nen: 20, deLv: 2, classID: 2 };
        upgrade.d100010a = { Lv: 15, man: 2380, jin: 1000, nen: 20, deLv: 2, classID: 2 };
        //发动机展示
        upgrade.d100024 = { Lv: 15, man: 2500, jin: 1000, nen: 20, deLv: 2, classID: 2 };
        upgrade.d100024a = { Lv: 15, man: 2500, jin: 1000, nen: 20, deLv: 2, classID: 2 };
        //变速箱展示
        upgrade.d100026 = { Lv: 15, man: 2880, jin: 600, nen: 20, deLv: 2, classID: 2 };
        upgrade.d100026a = { Lv: 15, man: 2880, jin: 900, nen: 20, deLv: 2, classID: 2 };
        //普通地台
        upgrade.show1 = { Lv: 21, man: 495, jin: 400, nen: 20, deLv: 3, classID: 1 };
        upgrade.show1a = { Lv: 21, man: 2120, jin: 800, nen: 20, deLv: 3, classID: 1 };
        upgrade.show1ab = { Lv: 21, man: 2120, jin: 800, nen: 20, deLv: 3, classID: 1 };
        //增高地台
        upgrade.show2 = { Lv: 11, man: 1740, jin: 800, nen: 20, deLv: 3, classID: 1 };
        upgrade.show2a = { Lv: 21, man: 3130, jin: 1200, nen: 20, deLv: 3, classID: 1 };
        upgrade.show2ab = { Lv: 21, man: 3130, jin: 1200, nen: 20, deLv: 3, classID: 1 };
        //豪华地台
        upgrade.show3 = { Lv: 20, man: 2630, jin: 1200, nen: 20, deLv: 3, classID: 1 };
        upgrade.show3a = { Lv: 25, man: 3120, jin: 1800, nen: 20, deLv: 3, classID: 1 };
        upgrade.show3ab = { Lv: 25, man: 3120, jin: 1800, nen: 20, deLv: 3, classID: 1 };
        //公路地台
        upgrade.show4 = { Lv: 25, man: 3005, jin: 2400, nen: 30, deLv: 2, classID: 1 };
        upgrade.show4a = { Lv: 25, man: 3005, jin: 2400, nen: 30, deLv: 2, classID: 1 };
        //越野地台
        upgrade.show5 = { Lv: 25, man: 3370, jin: 2400, nen: 30, deLv: 2, classID: 1 };
        upgrade.show5a = { Lv: 25, man: 3370, jin: 2400, nen: 30, deLv: 2, classID: 1 };
        //AI控制台
        upgrade.Operation = { Lv: 10, man: 1630, jin: 2000, nen: 50, deLv: 3, classID: 3 };
        upgrade.Operation1 = { Lv: 20, man: 3500, jin: 3000, nen: 50, deLv: 3, classID: 3 };
        upgrade.Operation2 = { Lv: 20, man: 3500, jin: 3000, nen: 50, deLv: 3, classID: 3 };
        //前台
        upgrade.frontDesk = { Lv: 10, man: 1375, jin: 2000, nen: 50, deLv: 3, classID: 3 };
        upgrade.frontDesk1 = { Lv: 20, man: 3245, jin: 3000, nen: 50, deLv: 3, classID: 3 };
        upgrade.frontDesk2 = { Lv: 20, man: 3245, jin: 3000, nen: 50, deLv: 3, classID: 3 };
        return upgrade;
    }());
    module.upgrade = upgrade;
})(module || (module = {}));
//# sourceMappingURL=upgrade.js.map