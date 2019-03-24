/**
* name 
*/
module wuling{
	export class nengliangtishi extends ui.nengliangtishiUI{
		constructor(){
			super();
			this.shutBtn.on(Laya.Event.CLICK,this,this.onClick);

		}

		private onClick():void
		{
			wuling.nenglianganniu.getInstances().DClisk();
			this.close();
		}
	}
}