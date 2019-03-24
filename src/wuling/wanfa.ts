/**
* name 
*/
module wuling{
	export class wanfa extends ui.wanfaUI{
		constructor(){
			super();
			this.shutBtn.on(Laya.Event.CLICK,this,this.onClick);

		}

		private onClick():void
		{
			wuling.tishianniu.getInstances().DClisk();
			this.close();
		}
	}
}