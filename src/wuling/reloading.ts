/**
* name 
*/
module wuling{
	export class reloading extends ui.reloadingUI{
		constructor(){
			super();
			//Item数据
			this.list.array = module.reloadingModule.getInstance().ItemData;
			this.shutBtn.on(Laya.Event.CLICK,this,this.onClick);
			this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
			wuling.Bottom.getInstance().text1.text = "这里的衣服都很漂亮~~好想试试~~！！";
		}
		private renderHandler(item:reloadingItem):void
		{
			item.show(this);
		}

		private onClick(event:Laya.Event):void
		{
			switch (event.currentTarget) {
				case this.shutBtn:
					this.shutDown();
					break;
			}
		}
		/**关闭换装页面 */
		public shutDown():void
		{
			this.close();
			wuling.map.getInstance().person1.figureStart();
			wuling.map.getInstance().person2.figureStart();
			wuling.map.getInstance().person3.figureStart();
			wuling.map.getInstance().person4.figureStart();
			wuling.map.getInstance().person5.figureStart();
			wuling.Bottom.getInstance().text1.visible =true;
			wuling.Bottom.getInstance().text2.visible =false;
			wuling.Bottom.getInstance().text3.visible =false;
			wuling.Bottom.getInstance().goumai.visible =false;
			wuling.Bottom.getInstance().btmclick();
		}
	}
}