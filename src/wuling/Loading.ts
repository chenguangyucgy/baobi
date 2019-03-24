module wuling{
    export class Loading extends ui.loadingUI{
		private sta:number = 0;
		private first:boolean = true;
		private first2:boolean = true;
		private yunSu:number = 0.3;
        constructor(){
            super();
			// this.loading.play();
			this.loading.x = Laya.stage.width/2;
			this.prenumber.x = Laya.stage.width/2;
			this.car.play();
			this.yuncai.play();
			Laya.timer.loop(100, this, this.onLoop);
			Laya.timer.loop(10, this, this.yuncaiFun);
			Laya.stage.bgColor = "#F9DE64";
			this.repeat();
			this.cars.x = Laya.stage.width + 110;
			 //加载资源
        var resArray:Array<any>=[
            {url:"res/atlas/map.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/building.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/place.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/place1.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/place2.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/mission.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/details.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/setting.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/shopInfo.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/sheshi.json",type:Laya.Loader.ATLAS}
			,{url:"res/atlas/cangku.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/ditaiChexing.json",type:Laya.Loader.ATLAS}
			,{url:"res/atlas/rankList.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/ssInfo.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/reloading.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/cling.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100012.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100013.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100013a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100013ab.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100031.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d10001.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d10002.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d10005.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d10007.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d10008.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d10008a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d10008ab.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100010.json",type:Laya.Loader.ATLAS}
             ,{url:"res/atlas/wu/d100010a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100018.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100022.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100024.json",type:Laya.Loader.ATLAS}
             ,{url:"res/atlas/wu/d100024a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100026.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/wu/d100026a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show1.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show1a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show1ab.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/Wl310.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/Wqh310.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/Wred310.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/c320.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/h320.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/l320.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/b360.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/hui360.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/l360.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/c510.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/he510.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/l510.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/hui530.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/l530.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/red530.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/he730.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/hei730.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/l730.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show2.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show2a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show2ab.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show3.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show3.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show3.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/d100033.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show5a.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/d100032.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/car/show4a.json",type:Laya.Loader.ATLAS}
			,{url:"res/atlas/tishi.json",type:Laya.Loader.ATLAS}
			,{url:"res/atlas/rankList.json",type:Laya.Loader.ATLAS}
            
        ];
		//加载资源
        Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoader),Laya.Handler.create(this,this.onALoading,null,false));
	}
		onALoading(progress):void
		{
			this.sta = Math.floor(progress*50);
			if(this.sta>=50)
			{
				Laya.timer.loop(100,this,()=>{
					this.sta++;
				});
			}
		}
		onLoader():void
		{
			
		}
		private tweenTop(obj:Laya.Label,y:number,yanchi:number):void
		{
			Laya.Tween.to(obj, {y: y}, 200, null, Laya.Handler.create(this, this.tweenBottom,[obj,(obj.y),0]), yanchi);
		}
		private tweenBottom(obj:Laya.Label,y:number,yanchi:number):void
		{
			if(obj == this.d3){
				Laya.Tween.to(obj, {y: y}, 200, null, Laya.Handler.create(this, this.repeat));
			}else{
				Laya.Tween.to(obj, {y: y}, 200, null, null, yanchi);
			}
			
		}
		private repeat():void
		{
			this.tweenTop(this.you,(this.you.y-15),500);
			this.tweenTop(this.xi,(this.xi.y-15),650);
			this.tweenTop(this.jia,(this.jia.y-15),800);
			this.tweenTop(this.zai,(this.zai.y-15),950);
			this.tweenTop(this.zhong,(this.zhong.y-15),1100);
			this.tweenTop(this.d1,(this.d1.y-15),1250);
			this.tweenTop(this.d2,(this.d2.y-15),1400);
			this.tweenTop(this.d3,(this.d3.y-15),1550);
		}
		private onLoop(){
			// this.sta+= 1;
			if(this.sta >= 100){
				// wuling.map.getInstance();
				// wuling.Bottom.getInstance();
                // wuling.Top.getInstance();
				wuling.begin.getInstance();
				Laya.timer.clear(this, this.onLoop);
				this.visible =false;
				this.removeSelf();
			}else{
				this.prenumber.text = this.sta+"%";
				if(this.cars.x <= (Laya.stage.width/2)){
					this.yunSu = 1;
					if(this.sta >= 90){
						this.yunSu = 0.3;
						Laya.timer.loop(10, this, this.che);
						Laya.timer.clear(this, this.zong);
					}else{
						if(this.first){
							this.first = false;
							Laya.timer.loop(10, this, this.zong);
							Laya.timer.clear(this, this.che);
						}
					}
				}else{
					if(this.first2){
						Laya.timer.loop(10, this, this.che);
					}
				}
				
			}
			
		}
		private che():void
		{
			this.cars.x -= 11;
		}
		//总的
		private zong():void
		{
			this.lu();
			this.shang();
			this.xia();
		}
		//公路
		private lu():void
		{
			
			if(this.lu2.x >= 2514){
				this.lu2.x = this.lu3.x - 719;
				this.lu2.x += 9;
			}else{
				this.lu2.x += 9;
			}
			if(this.lu1.x >= 2514){
				this.lu1.x = this.lu2.x - 719;
				this.lu1.x += 9;
			}else{
				this.lu1.x += 9;
			}
			if(this.lu3.x >= 2514){
				this.lu3.x = this.lu4.x - 719;
				this.lu3.x += 9;
			}else{
				this.lu3.x += 9;
			}
			if(this.lu4.x >= 2514){
				this.lu4.x = this.lu5.x - 719;
				this.lu4.x += 9;
			}else{
				this.lu4.x += 9;
			}
			if(this.lu5.x >= 2514){
				this.lu5.x = this.lu1.x - 719;
				this.lu5.x += 9;
			}else{
				this.lu5.x += 9;
			}
		}
		//上
		private shang():void
		{
			if(this.shang2.x >= 3426){
				this.shang2.x = this.shang3.x - 723;
				this.shang2.x += 3;
			}else{
				this.shang2.x += 3;
			}
			if(this.shang1.x >= 3426){
				this.shang1.x = this.shang2.x - 723;
				this.shang1.x += 3;
			}else{
				this.shang1.x += 3;
			}
			if(this.shang3.x >= 3426){
				this.shang3.x = this.shang4.x - 723;
				this.shang3.x += 3;
			}else{
				this.shang3.x += 3;
			}
			if(this.shang4.x >= 3426){
				this.shang4.x = this.shang5.x - 723;
				this.shang4.x += 3;
			}else{
				this.shang4.x += 3;
			}
			if(this.shang5.x >= 3426){
				this.shang5.x = this.shang1.x - 723;
				this.shang5.x += 3;
			}else{
				this.shang5.x += 3;
			}
		}
		//下
		private xia():void
		{
			if(this.xia1.x >= 3788){
				this.xia1.x = this.xia2.x - 764;
				this.xia1.x += 8;
			}else{
				this.xia1.x += 8;
			}
			if(this.xia2.x >= 3788){
				this.xia2.x = this.xia3.x - 764;
				this.xia2.x += 8;
			}else{
				this.xia2.x += 8;
			}
			if(this.xia3.x >= 3788){
				this.xia3.x = this.xia4.x - 764;
				this.xia3.x += 8;
			}else{
				this.xia3.x += 8;
			}
			if(this.xia4.x >= 3788){
				this.xia4.x = this.xia5.x - 764;
				this.xia4.x += 8;
			}else{
				this.xia4.x += 8;
			}
			if(this.xia5.x >= 3788){
				this.xia5.x = this.xia1.x - 764;
				this.xia5.x += 8;
			}else{
				this.xia5.x += 8;
			}
		}
		//云彩
		private yuncaiFun():void
		{
			if(this.yuncai2.x >= 3196){
				this.yuncai2.x = this.yuncai3.x -723;
				this.yuncai2.x += this.yunSu;
			}else{
				this.yuncai2.x += this.yunSu;
			}
			if(this.yuncai1.x >= 3196){
				this.yuncai1.x = this.yuncai2.x -723;
				this.yuncai1.x += this.yunSu;
			}else{
				this.yuncai1.x += this.yunSu;
			}
			if(this.yuncai3.x >= 3196){
				this.yuncai3.x = this.yuncai4.x -723;
				this.yuncai3.x += this.yunSu;
			}else{
				this.yuncai3.x += this.yunSu;
			}
			if(this.yuncai4.x >= 3196){
				this.yuncai4.x = this.yuncai5.x -723;
				this.yuncai4.x += this.yunSu;
			}else{
				this.yuncai4.x += this.yunSu;
			}
			if(this.yuncai5.x >= 3196){
				this.yuncai5.x = this.yuncai1.x -723;
				this.yuncai5.x += this.yunSu;
			}else{
				this.yuncai5.x += this.yunSu;
			}
		}

        private static _instances:Loading;
		public static getInstances():Loading
		{
			if(this._instances == null)
			{
				this._instances = new Loading;
				this._instances.zOrder = 999999;
				Laya.stage.addChild(this._instances);
			}
			return this._instances;
		}
    }
}