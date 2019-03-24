/**
* name 
*/
module wuling{
	export class ditaiChexing extends ui.ditaiChexingUI{
		private dataArr:Array<any>;
		constructor(){
			super();
			this.dataArr = [
				{url:"ditaiChexing/Wred310.png",carname:"310W(金属红)",jin:500,nen:20,suo:1},
				{url:"ditaiChexing/Wl310.png",carname:"310W(星夜蓝)",jin:500,nen:20,suo:1},
				{url:"ditaiChexing/Wqh310.png",carname:"310W(极光银）",jin:500,nen:20,suo:1},
				{url:"ditaiChexing/c320.png",carname:"310(闪晶橙)",jin:500,nen:20,suo:2},
				{url:"ditaiChexing/h320.png",carname:"310(糖果白)",jin:500,nen:20,suo:2},
				{url:"ditaiChexing/l320.png",carname:"310(碧海蓝)",jin:500,nen:20,suo:2},
				{url:"ditaiChexing/b360.png",carname:"360(糖果白)",jin:600,nen:20,suo:10},
				{url:"ditaiChexing/hui360.png",carname:"360(极光银)",jin:600,nen:20,suo:10},
				{url:"ditaiChexing/l360.png",carname:"360(星夜蓝)",jin:600,nen:20,suo:10},
				{url:"ditaiChexing/c510.png",carname:"510(闪晶橙)",jin:600,nen:30,suo:15},
				{url:"ditaiChexing/he510.png",carname:"510(水晶棕)",jin:600,nen:30,suo:15},
				{url:"ditaiChexing/l510.png",carname:"510(星夜蓝)",jin:600,nen:30,suo:15},
				{url:"ditaiChexing/hui530.png",carname:"530(极光银)",jin:1000,nen:30,suo:25},
				{url:"ditaiChexing/l530.png",carname:"530(大地棕)",jin:1000,nen:30,suo:25},
				{url:"ditaiChexing/red530.png",carname:"530(琉璃红)",jin:1000,nen:30,suo:25},
				{url:"ditaiChexing/he730.png",carname:"730(大地棕)",jin:800,nen:30,suo:20},
				{url:"ditaiChexing/hei730.png",carname:"730(星夜黑)",jin:800,nen:30,suo:20},
				{url:"ditaiChexing/l730.png",carname:"730(星夜蓝)",jin:800,nen:30,suo:20}

			];
			
			this.list.array = module.buildingModule.getInstance().buildingChoose(this.dataArr);
			this.list.renderHandler = Laya.Handler.create(this, this.renderHandler, null, false);
			this.bg.on(Laya.Event.CLICK,this,this.onclick);
            //隐藏开始任务提示
			wuling.Bottom.getInstance().missionPrompt();
		}
		private static _instance:ditaiChexing;
		public static getInstance():ditaiChexing
		{
			if(this._instance == null)
			{
				this._instance = new ditaiChexing;
				this._instance.width = Laya.stage.width;
				Laya.stage.addChild(this._instance);
			}
			this._instance.popup(true,true);
			this._instance.list.array =  module.buildingModule.getInstance().buildingChoose(this._instance.dataArr);

			//新手指引
			if(wuling.map.getInstance().guide==true)
			{
				this._instance.list.scrollBar.touchScrollEnable = false;
			}else
			{
				this._instance.list.scrollBar.touchScrollEnable = true;
			}

			return this._instance;
		}
		private renderHandler(item:ditaiChexingItem, index:number):void
		{
			// item.show(item, index);
			item.show(item, index);
		}
		private onclick(event:Laya.Event):void
		{
			this.close();
			if(wuling.map.getInstance().guide == false)
			{
				wuling.map.getInstance().person1.figureStart();
				wuling.map.getInstance().person2.figureStart();
				wuling.map.getInstance().person3.figureStart();
				wuling.map.getInstance().person4.figureStart();
				wuling.map.getInstance().person5.figureStart();
				wuling.Bottom.getInstance().nanaOnClick();

			}
		}
	}
}