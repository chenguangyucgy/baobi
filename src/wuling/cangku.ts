module wuling{
    export class cangku extends ui.cangkuUI
    {
        constructor()
        {
            super();
            var data: Array<any> = [
                {url: "shop/1x1ljt.png", money:"30"},
                {url: "shop/1x1ptdz.png", money:"80"},
                {url: "shop/1x2ltdz.png", money:"130"},
                {url: "shop/1x1ptggp.png", money:"80"},
            ];
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
            this.list.array = module.mapModule.getInstance()._canku;
            this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
            this.returnBtn.on(Laya.Event.CLICK,this,this.onclick);
            
        }
        private onclick(event:Laya.Event):void
        {
            switch (event.currentTarget) {
                case this.returnBtn:
                    this.close();

                        wuling.map.getInstance().person1.figureStart();
                        wuling.map.getInstance().person2.figureStart();
                        wuling.map.getInstance().person3.figureStart();
                        wuling.map.getInstance().person4.figureStart();
                        wuling.map.getInstance().person5.figureStart();
                        wuling.Bottom.getInstance().nanaOnClick();


                    wuling.Bottom.getInstance().btmclick();
                    break;
            
                default:
                    break;
            }
        }
        // private static _instance:cangku;
		// public static getInstance():cangku
		// {
		// 	if(this._instance == null)
		// 	{
		// 		this._instance = new cangku;
		// 		Laya.stage.addChild(this._instance);
		// 	}
		// 	return this._instance;
		// }

       

        private renderHandler(item:cangkuItem,index:number):void
        {
            item.show(item, index);
        }
    }
}