/**
* name 
*/
module wuling{
	export class clientDetails extends ui.clientDetailsUI{
		private data:Array<any> = [];
		constructor(){
			super();
			this.data = [
				{text:"普通地台", odds: "48%"},
				{text:"增高地台", odds: "1%"},
				{text:"豪华地台", odds: "1%"},
				{text:"赛道地台", odds: "1%"},
				{text:"越野地台", odds: "5%"},
				{text:"自助餐吧", odds: "10%"},
				{text:"VR试驾台", odds: "1%"},
				{text:"制动系统展示台", odds: "1%"},
				{text:"发动机展示台", odds: "1%"},
				{text:"变速箱展示台", odds: "1%"},
				{text:"趣味游戏台", odds: "1%"},
				{text:"大型赠品电子墙", odds: "5%"},
				{text:"小型垃圾桶", odds: "10%"},
				{text:"大型饮料机", odds: "1%"},
				{text:"小型游戏操作台", odds: "1%"},
				{text:"交互操作台", odds: "1%"},
				{text:"大型信息屏", odds: "1%"},
				{text:"前台", odds: "5%"},
				{text:"AI控制台", odds: "5%"}
			];
			this.list.array = this.data;
			this.list.renderHandler = Laya.Handler.create(this, this.onText, null, false);
		}
		public oddsFen(str:string,od:number):void
		{
			switch(str)
			{
				case "details/B.png":
					for(var i1:number = 0; i1 < 20; i1 ++){
						if(module.personText.getInstance().oddsArr[0][od][i1]){
							this.data[i1].odds = module.personText.getInstance().oddsArr[0][od][i1];
						}
					}
					this.list.array = this.data;
					break;
				case "details/A.png":
					for(var i2:number = 0; i2 < 20; i2 ++){
						if(module.personText.getInstance().oddsArr[1][od][i2]){
						this.data[i2].odds = module.personText.getInstance().oddsArr[1][od][i2];
						}
					}
					this.list.array = this.data;
					break;
				case "details/S.png":
					for(var i3:number = 0; i3 < 20; i3 ++){
						if(module.personText.getInstance().oddsArr[2][od][i3]){
						this.data[i3].odds = module.personText.getInstance().oddsArr[2][od][i3];
						}
					}
					this.list.array = this.data;
					break;
				case "details/SS.png":
					for(var i4:number = 0; i4 < 20; i4 ++){
						if(module.personText.getInstance().oddsArr[3][od][i4]){
						this.data[i4].odds = module.personText.getInstance().oddsArr[3][od][i4];
						}
					}
					this.list.array = this.data;
					break;
			}

		}

		private static _instance:clientDetails;
		public static getInstance():clientDetails
		{
			if(this._instance == null)
			{
				this._instance = new clientDetails;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}

		private onText(item:clientDetailsItem,index:number):void
		{
			item.details(item, index);
		}
	}
}