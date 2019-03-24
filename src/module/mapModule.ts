/**
* map数据处理页面 
*/
module module{
	export class mapModule{
		constructor(){

		}
		/**仓库 */
		public _canku:Array<Object>=[];
		/**购买的物品 */
		public _objcanku:Object;
		/**设施滚动位置 */
		public _buildinghS:number=0;
		
		public canZi:any = null;
		/**判断当map页面加载过一次才可调用 */
		public _loadingMap:boolean = false;

		



		public get dataContent():ui.cangkuItemUI
		{
			return this.canZi;
		}
		public set dataContent(content:ui.cangkuItemUI)
		{
			this.canZi = content;
		}

		public shopZi:any = null;
		public get dataContents():ui.shopItemUI
		{
			return this.shopZi;
		}
		public set dataContents(content:ui.shopItemUI)
		{
			this.shopZi = content;
		}
		public get canku():Object
		{
			return this._canku;
		}
		public set canku(content:Object)
		{
			
		}
		public get objcanku():Object
		{
			return this._objcanku;
		}
		public set objcanku(content:Object)
		{
			this._objcanku=content;
		}
		public cankus(arr:Array<Object>):void
		{
			this._canku =arr;
		}
		public obgcanku():void
		{
			if(Number(this._objcanku["money"])<=wuling.Top.getInstance().jin)
			{
				// wuling.Top.getInstance().jin=wuling.Top.getInstance().jin-Number(this._objcanku["money"]);
				// wuling.Top.getInstance().gabi();
				util.HttpRequestUtil.Modifybaobi(-Number(this._objcanku["money"]));
				for(var i:number=0;i<this._canku.length;i++)
				{
					if(this._canku[i]["url"]==this._objcanku["url"])
					{
						this._canku[i]["money"]=(Number(this._canku[i]["money"])+1)+"";
						return
					}
				}
				this._canku.push({url:this._objcanku["url"],money:this._objcanku["money"],sname:this._objcanku["sname"]});
				this._canku[i]["money"]="1";
			}
			
		}
		public get buildinghS():number
		{
			return this._buildinghS;
		}
		public set buildinghS(content:number)
		{
			this._buildinghS = content;
		}
        
		/**获取map页面是否加载过一次 */
		public get loadingMap():boolean
		{
			return this._loadingMap;
		}
		/**设置map页面加载 */
		public set loadingMap(content:boolean)
		{
			this._loadingMap = content;
		}

		private static _instance:mapModule;
		public static getInstance():mapModule
		{
			if(this._instance == null)
			{
				this._instance = new mapModule;
			}
			return this._instance;
		}
	}
}