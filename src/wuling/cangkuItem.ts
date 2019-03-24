module wuling{
	export class cangkuItem extends ui.cangkuItemUI{
		constructor(){
			super();
		}
		public show(item:cangkuItem, index:number):void
		{
			this.cangImg.skin = this.dataSource["url"];
            switch(this.dataSource["money"].length)
            {
                case 0:
                    this.nu1.skin = "cangku/0.png";
                    this.nu2.alpha = 0;
                    break;
                case 1:
                    this.nu1.skin = "cangku/"+this.dataSource["money"].slice(0,1)+".png";
                    this.nu1.alpha = 1;
                    this.nu2.alpha = 0;
                    break;
                case 2:
                    this.nu1.skin = "cangku/"+this.dataSource["money"].slice(0,1)+".png";
                    this.nu2.skin = "cangku/"+this.dataSource["money"].slice(1)+".png";
                    this.nu1.alpha = 1;
                    this.nu2.alpha = 1;
                    break;
            }
			this.on(Laya.Event.CLICK,this,this.onclick, [index]);
		}

           
        private onclick(index):void
        {
            if(module.mapModule.getInstance().dataContent == null){
                module.mapModule.getInstance().dataContent = this;
                this.ckuang.scaleX = 1.2;
                this.ckuang.scaleY = 1.2;
                this.ckuang.alpha = 0;
                Laya.Tween.to(this.ckuang, {scaleX:0.55, scaleY:0.55, alpha: 1}, 230, null, Laya.Handler.create(this, this.next1));
                Laya.Tween
            }else{
                if(module.mapModule.getInstance().dataContent != this){
                    module.mapModule.getInstance().dataContent.ckuang.alpha = 0;
                    module.mapModule.getInstance().dataContent = this;
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