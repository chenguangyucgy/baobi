/**
* 图集动画加载 
*/
module module{
	export class AnimationModule{
		constructor(){

		}

        /**加载建筑动画*/
		public aniMo(tujiAni:Laya.Animation,name:string):void
		{
			// wuling.map.getInstance().mapImg.addChild(tujiAni);
			var num:number = module.aniFramesNumder[name]
			tujiAni.loadImages(this.aniUrls(name,num));
		}

		/**动画资源 */
		//------------------------------------------------------
		private aniUrls(str:string,length:number):any{
        var urls:any = [];
        for(var i:number = 1;i<length;i++){
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push(str+"/"+i+".png");
        }
        return urls;
        }
		//------------------------------------------------------






		/**加载建筑棚动画*/
		public aniCling(clingAni:Laya.Animation):void
		{
			// wuling.map.getInstance().mapImg.addChild(tujiAni);
			wuling.map.getInstance().mapImg.addChild(clingAni);
			var num:number = 19;
			clingAni.interval = 100;
			clingAni.loadImages(this.aniClingUrls(num)).play(0,false);
		}

		/**动画资源 */
		//------------------------------------------------------
		private aniClingUrls(length:number):any{
        var urls:any = [];
        for(var i:number = 1;i<length;i++){
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push("cling/"+i+".png");
        }
        return urls;
        }
		//------------------------------------------------------


		private static _instance:AnimationModule;
		public static getInstance():AnimationModule
		{
			if(this._instance == null)
			{
				this._instance = new AnimationModule;
			}
			return this._instance;
		}
	}
}