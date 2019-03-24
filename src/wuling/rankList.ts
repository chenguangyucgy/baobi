/**
* name 
*/
module wuling{
	export class rankList extends ui.rankListUI{
		public listData:Array<any>;
		constructor(){
			super();
			wuling.map.getInstance().person1.figureStatic();
			wuling.map.getInstance().person2.figureStatic();
			wuling.map.getInstance().person3.figureStatic();
			wuling.map.getInstance().person4.figureStatic();
			wuling.map.getInstance().person5.figureStatic(); 

			// this.list.array = this.listData;
			this.gb.on(Laya.Event.CLICK,this,this.onclick);
			this.list.renderHandler = Laya.Handler.create(this, this.renderHandler, null, false);
		}
		private static _instance:rankList;
		public static getInstance():rankList
		{
			if(this._instance == null)
			{
				this._instance = new rankList;
				this._instance.width = Laya.stage.width;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
		public getRankData()
		{
			util.HttpRequestUtil.sendGetRank();
		}

		public setRankData(listData:Array<Object>)
		{
			this.listData = listData;
			
			this.list.array = this.listData;
		}

		private renderHandler(item:rankListItem, index:number):void
		{
			item.rank(item, index);
		}
		private onclick(event:Laya.Event):void
		{
			wuling.rankBtn.getInstances().DClisk();
			this.close();
			wuling.map.getInstance().person1.figureStart();
			wuling.map.getInstance().person2.figureStart();
			wuling.map.getInstance().person3.figureStart();
			wuling.map.getInstance().person4.figureStart();
			wuling.map.getInstance().person5.figureStart();
			wuling.Bottom.getInstance().nanaOnClick();
			wuling.Bottom.getInstance().btmclick();
		}
		public rank(item:rankListItem, index:number):void
		{
			this.myRank.text = wuling.rankList.getInstance().listData[index]["RoomLevel"];
		}
	}
}