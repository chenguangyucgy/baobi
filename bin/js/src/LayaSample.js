// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.modes = "showall";
        Laya.init(720, 1280, Laya.WebGL);
        //性能统计面板
        Laya.Stat.show();
        //缩放模式
        Laya.stage.scaleMode = this.modes;
        //碎屏对齐方式
        Laya.stage.alignH = "center";
        //垂直对齐方式
        Laya.stage.alignV = "middle";
        //舞台颜色
        Laya.stage.bgColor = "##d7d7d7";
        Laya.ResourceManager.systemResourceManager.autoRelease = true; //开启内存管理
        Laya.ResourceManager.systemResourceManager.autoReleaseMaxSize = 1024 * 30; //1M=1024KB,1KB=1024B
        //加载资源
        var resArray = [
            { url: "res/atlas/map.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/building.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/place.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/place1.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/place2.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/top.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/bottom.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/cangku.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/shop.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/mission.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/achievement.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/achievement.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/details.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/setting.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/signIn.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/rankList.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/shopInfo.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/sheshi.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ditaiChexing.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/begin.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/comp.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/login.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ssInfo.json", type: Laya.Loader.ATLAS }
        ];
        //加载资源
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoader));
    }
    GameMain.prototype.onLoader = function () {
        // wuling.map.getInstance();
        // wuling.Bottom.getInstance();
        // wuling.Top.getInstance();
        // wuling.introduce.getInstancess();
        wuling.login.getInstance();
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map