module wuling{
    export class nana extends ui.nanaUI{
        constructor(){
            super();
            // Laya.timer.once(1000, this, this.begin);
            //nana名字动画
            var aninana:Laya.MovieClip =new Laya.MovieClip();
            this.nanaLv.addChild(aninana);
            aninana.load("res/swf/nanaxiao.swf",true);
            aninana.scale(0.666,0.666);
            aninana.play();
            //星光动画
            var xing:Laya.MovieClip =new Laya.MovieClip();
            this.xinguang.addChild(xing);
            xing.load("res/swf/xing.swf",true);
            xing.scale(0.666,0.666);
            xing.play();
        }
        private static _instance:nana;
		public static getInstance():nana
		{
			if(this._instance == null)
			{
				this._instance = new nana;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
        // private begin():void{
        //     this.nana.play();
        // }
        
    }
}