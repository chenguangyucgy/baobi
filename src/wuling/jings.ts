/**
* name 
*/
module wuling{
	export class jings extends ui.jingsUI{
		constructor(){
			super();
			Laya.timer.once(100,this,()=>{
				Laya.Tween.to(this,{x:wuling.map.getInstance().pan.hScrollBar.value*1.50+wuling.Top.getInstance().jinImg.x,y:wuling.map.getInstance().pan.vScrollBar.value*1.50+10},300,null,Laya.Handler.create(this,()=>{
					    wuling.Top.getInstance().playjinbi();
						
						this.removeSelf();
						}));
			})
		}
	}
}