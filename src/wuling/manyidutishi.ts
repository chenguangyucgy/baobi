/**
* name 
*/
module wuling{
	export class manyidutishi extends ui.manyidutishiUI{
		constructor(){
			super();
			this.shutBtn.on(Laya.Event.CLICK,this,this.onClick);

		}

		private onClick():void
		{
			wuling.manyiduanniu.getInstances().DClisk();
			this.close();
		}
	}
}