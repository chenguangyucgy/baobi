var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var wuling;
(function (wuling) {
    var setting = /** @class */ (function (_super) {
        __extends(setting, _super);
        function setting() {
            var _this = _super.call(this) || this;
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.music.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.soundEffect.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        setting.prototype.onclick = function (event) {
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
                case this.music:
                    this.music.x == 313 ? this.music.x = 263 : this.music.x = 313;
                    var music = wuling.map.getInstance().music;
                    var musicUrl = wuling.map.getInstance().musicUrl;
                    if (this.music.x == 313) {
                        //停止音乐
                        music.stopSound(musicUrl);
                    }
                    if (this.music.x == 263) {
                        //播放音乐
                        music.playMusic(musicUrl, 0, new Laya.Handler(this, function () { }));
                    }
                    break;
                case this.soundEffect:
                    this.soundEffect.x == 263 ? this.soundEffect.x = 313 : this.soundEffect.x = 263;
                    if (this.soundEffect.x == 313) {
                        //停止音乐
                        Laya.SoundManager.soundMuted = true;
                    }
                    if (this.soundEffect.x == 263) {
                        //播放音乐
                        Laya.SoundManager.soundMuted = false;
                    }
                    break;
                default:
                    break;
            }
        };
        setting.getInstancess = function () {
            if (this._instance == null) {
                this._instance = new setting;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        return setting;
    }(ui.settingUI));
    wuling.setting = setting;
})(wuling || (wuling = {}));
//# sourceMappingURL=setting.js.map