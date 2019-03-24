// 程序入口

class GameMain{
    private modes:string = "showall";
    constructor()
    {
        Laya.init(720,1280,Laya.WebGL);
        //性能统计面板
        // Laya.Stat.show();
        //缩放模式
        Laya.stage.scaleMode = this.modes;
        //水平对齐方式
        Laya.stage.alignH = "center";
        //垂直对齐方式
        Laya.stage.alignV = "middle";
        // Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;

        //舞台颜色
        Laya.stage.bgColor = "#686868";
        Laya.ResourceManager.systemResourceManager.autoRelease = true;//开启内存管理
        Laya.ResourceManager.systemResourceManager.autoReleaseMaxSize =  1024 * 30;//1M=1024KB,1KB=1024B
        
        //加载资源
        var resArray:Array<any>=[
            {url:"res/atlas/top.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/bottom.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/begin.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/comp.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/login.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/nana.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/loading.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/share.json",type:Laya.Loader.ATLAS}
            
            
        ];
        //加载资源
        Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoader),Laya.Handler.create(this,this.onALoading,null,false));
        
    }
    onALoading(progress):void
    {
        
    }

    onLoader():void
    {
        wuling.map.getInstance();
        wuling.Bottom.getInstance();
        wuling.Top.getInstance();
        // wuling.introduce.getInstancess();
        wuling.login.getInstance();
        // util.HttpRequestUtil.getToken();        
    }
}
new GameMain();