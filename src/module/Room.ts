/**
* 保存服务器发下来的数据 
*/
module module{
	export class Room{

        /**房间ID */
		private _RoomID:number = null;
		/**房间属性 */
		private _RoomClass:Object ={};
        /**message */
		private _message:string="";
		/**宝币 */
		private _jinNum:number=0;
		





		/**获取房间ID */
		public get RoomID():number
		{
			return this._RoomID;
		}
		/**设置房间ID */
		public set RoomID(ID:number)
		{
			this._RoomID = ID;
			// wuling.map.getInstance();
			// wuling.Bottom.getInstance();
			// wuling.Top.getInstance();
		}


		/**获取房间属性 */
		public get RoomClass():Object
		{
			return this._RoomClass;
		}
		/**设置房间属性 */
		public set RoomClass(arr:Object)
		{	
			if(this._RoomClass["RoomLevel"]!=arr["RoomLevel"]&&this._RoomClass["RoomLevel"]!=undefined)
			{
				//升级更新评价值
				wuling.Top.getInstance().zan();
			}
			this._RoomClass =arr;
		}


		/**获取message */
		public get message():string
		{
			return this._message;
		}
		/**设置message */
		public set message(ID:string)
		{
			this._message = ID;
			// wuling.map.getInstance();
			// wuling.Bottom.getInstance();
			// wuling.Top.getInstance();
		}


		/**获取宝币 */
		public get jinNum():number
		{
			return this._jinNum;
		}
		/**设置宝币 */
		public set jinNum(ID:number)
		{
			this._jinNum = ID;
			// wuling.map.getInstance();
			// wuling.Bottom.getInstance();
			// wuling.Top.getInstance();
		}


		private static _instance:Room;
		public static getInstance():Room
		{
			if(this._instance == null)
			{
				this._instance = new Room;
			}
			return this._instance;
		}
	}
}