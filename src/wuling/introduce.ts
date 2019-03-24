/**
* name 
*/
module wuling{
	export class introduce extends ui.introduceUI{
		constructor(){
			super();
			this.cam02.visible =false;
			this.cam03.visible =false;
			Laya.Tween.to(this.baImg,{alpha:0},1000);
			var xgss1:Laya.MovieClip = new Laya.MovieClip;
			xgss1.load("res/swf/xgss.swf",true);
			this.cam01.addChild(xgss1);
			var xgss2:Laya.MovieClip = new Laya.MovieClip;
			xgss2.load("res/swf/xgss.swf",true);
			this.cam02.addChild(xgss2);
			var xgss3:Laya.MovieClip = new Laya.MovieClip;
			xgss3.load("res/swf/xgss.swf",true);
			this.cam03.addChild(xgss3);
			//1
			Laya.Tween.to(this.cam01,{x:-1041,y:-743},5000,null,new Laya.Handler(this,()=>{
				Laya.Tween.to(this.baImg,{alpha:0},1000);
				this.cam01.visible =false;
				this.cam02.visible = true;
				//2
				Laya.Tween.to(this.cam02,{x:0,y:-749},5000,null,new Laya.Handler(this,()=>{
					this.cam02.visible = false;
					this.cam03.visible = true;
					Laya.Tween.to(this.baImg,{alpha:0},1000);
					//3
					Laya.Tween.to(this.cam03,{x:-1045,y:-744},5000);

					Laya.timer.once(4000,this,()=>{
					     Laya.Tween.to(this.baImg,{alpha:1},1000);
					});
					Laya.timer.once(5000,this,()=>{
						this.cam03.visible =false;
						Laya.Tween.to(this.baImg,{alpha:0},1000,null,new Laya.Handler(this,()=>{
							this.removeSelf();
						    Laya.timer.once(1400,this,()=>{
								wuling.map.getInstance().dianPlay =true;
								if(module.newTask.getInstance().newNum==8)
								{
									wuling.map.getInstance().newclick();
								}
							    
								// wuling.map.getInstance().guiClick();
							});
						}));
					})

				}));
				Laya.timer.once(4000,this,()=>{
				    Laya.Tween.to(this.baImg,{alpha:1},1000);
			    });
			}));
			Laya.timer.once(4000,this,()=>{
				Laya.Tween.to(this.baImg,{alpha:1},1000);
			});
		}

		private static _instance:introduce;
		public static getInstancess():introduce
		{
			if(this._instance == null)
			{
				this._instance = new introduce;
				Laya.stage.addChild(this._instance);
				this._instance.zOrder =999998;
			}
			return this._instance;
		}
	}
}