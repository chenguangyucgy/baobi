/**
* name 
*/
module wuling{
	export class baobitishi extends ui.baobitishiUI{
		constructor(){
			super();
			this.shutBtn.on(Laya.Event.CLICK,this,this.onClick);

		}

		private onClick():void
		{
			wuling.baobianniu.getInstances().DClisk();
			this.close();
		}
	}
}