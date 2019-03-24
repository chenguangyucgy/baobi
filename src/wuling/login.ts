/**
* name 
*/
module wuling{
	export class login extends ui.loginUI{
		constructor(){
           super();
		   this.loginBtn.on(Laya.Event.CLICK,this,this.onClick);
		}

		private onClick():void
		{
			// util.HttpRequestUtil.sendDenGet("UserID="+this.userID.text+"&RoomSupportNum=0");
			
		}




		private static _instance:login;
		public static getInstance():login
		{
			if(this._instance == null)
			{
				this._instance = new login;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}
	}
}