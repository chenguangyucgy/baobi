/**
* 成就
*/
module wuling{
	export class achievement extends ui.achievementUI{
		constructor(){
			super(); 
			//新手指引
			if(wuling.map.getInstance().guide==true)
			{
				this.on(Laya.Event.CLICK,this,()=>{
					this.boxcj.gray =false;
					wuling.map.getInstance().newclick();
					wuling.map.getInstance().nextStep();
					module.missionModule.getInstance().kaimission = false;
					util.HttpRequestUtil.sendUpdateAchievement("RoomID="+module.Room.getInstance().RoomID+"&GetAchievement1=1");
				});
			}
		}
		public miss(item:achievement, index:number):void
		{
			this.boxcj.gray = this.dataSource["vis"];
			this.cjname.text = this.dataSource["name"];
			var naClass = this.dataSource["naClass"];
			var tao = this.dataSource["tao"];
			this.cjimg.skin = this.dataSource["url"];
			
			var achgetData = module.achievemenModule.getInstance().getData;
			if(achgetData.length>0)
			{
				var achData = module.achievemenModule.getInstance().getData[0][naClass];
				if(achData==true)
				{
					this.boxcj.gray = false;
				}else
				{
					this.boxcj.gray = true;
				}
			}
			if(module.missionModule.getInstance().taskProgress.length>0)
			{
				
				if(module.missionModule.getInstance().taskProgress[0][tao]>0)
				{
					this.on(Laya.Event.CLICK,this,()=>{
					if(this.boxcj.gray==true)
					{
						this.boxcj.gray =false;
					    util.HttpRequestUtil.sendUpdateAchievement("RoomID="+module.Room.getInstance().RoomID+"&"+naClass+"=1");
					}
				});
				}
			}
		}
	}
}