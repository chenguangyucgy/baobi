/**
* name 
*/
module wuling{
	export class clientDetailsItem extends ui.clientDetailsItemUI{
		constructor(){
			super();
		}
		public details(item:clientDetailsItem,index:number):void
		{
			this.content.text = this.dataSource["text"];
			this.money.text = this.dataSource["odds"];
		}
	}
}