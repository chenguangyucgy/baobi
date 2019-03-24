module wuling{
    export class sange extends ui.sangeUI{
        constructor(){
            super();
            //三方格动画
            this.next();
        }
         private next():void
        {
            Laya.Tween.to(this.zfxBig, {scaleX: 0.8, scaleY: 0.8}, 500, null, Laya.Handler.create(this, this.next1));
            Laya.Tween.to(this.zfxSmall, {scaleX: 0.8, scaleY: 0.8}, 500);
            Laya.Tween.to(this.zfxCen, {scaleX: 0.3, scaleY: 0.3}, 500);
        }
        private next1():void
        {
            Laya.Tween.to(this.zfxBig, {scaleX: 0.3, scaleY: 0.3}, 500, null, Laya.Handler.create(this, this.next));
            Laya.Tween.to(this.zfxSmall, {scaleX: 0.3, scaleY: 0.3}, 500);
            Laya.Tween.to(this.zfxCen, {scaleX: 0.8, scaleY: 0.8}, 500);
        }
    }
}