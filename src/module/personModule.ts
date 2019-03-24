/**
* 人物数据 
*/
module module{
	export class personModule{
		constructor(){

		}
		/**路线数 */
		public _routeNum:number =3;
        /**新手互动 */
	    public _interactNew:boolean =true;
		/**人物控制 */
		public _figureControl:boolean =true;
		//互动概率
		public _huNum:number =8;
		//**判断是否添加了人物 */
		public _addFigure:boolean =false;
		/**路线数 */
		public luoNum:number = 2;

		




        /**获取路线数 */
		public get routeNum():number
		{
			return this._routeNum;
		}
		/**设置路线数 */
		public set routeNum(content:number)
		{
			this._routeNum = content;
		}

		/**获取新手互动 */
		public get interactNew():boolean
		{
			return this._interactNew;
		}
		/**设置新手互动 */
		public set interactNew(content:boolean)
		{
			this._interactNew = content;
		}

		/**获取人物控制 */
		public get figureControl():boolean
		{
			return this._figureControl;
		}
		/**设置人物控制 */
		public set figureControl(content:boolean)
		{
			this._figureControl = content;
		}

		 /**获取互动概率 */
		public get huNum():number
		{
			return this._huNum;
		}
		/**设置互动概率 */
		public set huNum(content:number)
		{
			this._huNum = content;
		}

		/**获取人物控制 */
		public get addFigure():boolean
		{
			return this._addFigure;
		}
		/**设置人物控制 */
		public set addFigure(content:boolean)
		{
			this._addFigure = content;
		}








		private static _instance:personModule;
		public static getInstance():personModule
		{
			if(this._instance == null)
			{
				this._instance = new personModule;
			}
			return this._instance;
		}
	}
}