/**
* name 
*/
module wuling{
	export class rankListItem extends ui.rankItemUI{
		constructor(){
			super();
		}
		public rank(item:rankListItem, index:number):void
		{
			// this.renwu.text = this.dataSource["pai"];
			this.huizhang.skin = "rankList/top"+(index+1)+".png";
			this.playerName.text = wuling.rankList.getInstance().listData[index]["UserID"];
			this.score.text = wuling.rankList.getInstance().listData[index]["RoomCoin"];
		}
	}
}