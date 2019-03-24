/**
* name 
*/
module wuling{
	export class shareView extends ui.shareViewUI{
		constructor(){
            super();
			this.returnBtn.on(Laya.Event.CLICK,this,()=>{
				this.close();
				wuling.map.getInstance().person1.figureStart();
				wuling.map.getInstance().person2.figureStart();
				wuling.map.getInstance().person3.figureStart();
				wuling.map.getInstance().person4.figureStart();
				wuling.map.getInstance().person5.figureStart();
				wuling.Bottom.getInstance().nanaOnClick();
				wuling.Bottom.getInstance().btmclick();
			});
		}
	}
}