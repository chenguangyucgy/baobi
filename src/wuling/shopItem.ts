module wuling{
	export class shopItem extends ui.shopItemUI{
		constructor(){
			super();
		}
		public show(item:shopItem, index:number):void
		{
			this.shopImg.skin = this.dataSource["url"];
			this.on(Laya.Event.CLICK,this,this.onclick, [index]);
            if(this.dataSource["money"].toString().length == 3){
                this.num1.skin = "shop/b0"+Math.floor(this.dataSource["money"]/100)+".png";
                this.num2.skin = "shop/b0"+(Math.floor(this.dataSource["money"]/10)-Math.floor(this.dataSource["money"]/100)*10)+".png";
                this.num3.skin = "shop/b0"+(this.dataSource["money"]%10)+".png";
            }else if(this.dataSource["money"].toString().length == 2){
                this.num3.alpha = 0;
                this.num1.skin = "shop/b0"+Math.floor(this.dataSource["money"]/10)+".png";
                this.num2.skin = "shop/b0"+(this.dataSource["money"]%10)+".png";
            }
		}


           
        private onclick(index):void
        {
            wuling.Bottom.getInstance().text2.text = this.dataSource["sname"];
            module.mapModule.getInstance().objcanku =this.dataSource;
            wuling.Bottom.getInstance().text1.visible =false;
            wuling.Bottom.getInstance().text2.visible =true;
            wuling.Bottom.getInstance().text3.visible =true;
            wuling.Bottom.getInstance().goumai.visible =true;
            if(module.mapModule.getInstance().dataContents == null){
                module.mapModule.getInstance().dataContents = this;
                this.ckuang.scaleX = 1.2;
                this.ckuang.scaleY = 1.2;
                this.ckuang.alpha = 0;
                Laya.Tween.to(this.ckuang, {scaleX:0.55, scaleY:0.55, alpha: 1}, 230, null, Laya.Handler.create(this, this.next1));
            }else{
                if(module.mapModule.getInstance().dataContents != this){
                    module.mapModule.getInstance().dataContents.ckuang.alpha = 0;
                    module.mapModule.getInstance().dataContents = this;
                    this.ckuang.scaleX = 1.2;
                    this.ckuang.scaleY = 1.2;
                    this.ckuang.alpha = 0;
                    Laya.Tween.to(this.ckuang, {scaleX:0.55, scaleY:0.55, alpha: 1}, 230, null, Laya.Handler.create(this, this.next1));
                }else{
                    this.ckuang.scaleX = 1.2;
                    this.ckuang.scaleY = 1.2;
                    this.ckuang.alpha = 0;
                    Laya.Tween.to(this.ckuang, {scaleX:0.55, scaleY:0.55, alpha: 1}, 230, null, Laya.Handler.create(this, this.next1));
                }
            }

        }

        private next1():void
        {
            Laya.Tween.to(this.ckuang, {scaleX:0.7, scaleY:0.7}, 170, null, Laya.Handler.create(this, this.next2));
        }
        private next2():void
        {
            Laya.Tween.to(this.ckuang, {scaleX:0.666, scaleY:0.666}, 170);
        }

		
	}
}