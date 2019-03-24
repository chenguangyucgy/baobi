/**
* 图集动画加载
*/
var module;
(function (module) {
    var AnimationModule = /** @class */ (function () {
        function AnimationModule() {
        }
        /**加载建筑动画*/
        AnimationModule.prototype.aniMo = function (tujiAni, name) {
            // wuling.map.getInstance().mapImg.addChild(tujiAni);
            var num = module.aniFramesNumder[name];
            tujiAni.loadImages(this.aniUrls(name, num));
        };
        /**动画资源 */
        //------------------------------------------------------
        AnimationModule.prototype.aniUrls = function (str, length) {
            var urls = [];
            for (var i = 1; i < length; i++) {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                urls.push(str + "/" + i + ".png");
            }
            return urls;
        };
        //------------------------------------------------------
        /**加载建筑棚动画*/
        AnimationModule.prototype.aniCling = function (clingAni) {
            // wuling.map.getInstance().mapImg.addChild(tujiAni);
            wuling.map.getInstance().mapImg.addChild(clingAni);
            var num = 19;
            clingAni.interval = 100;
            clingAni.loadImages(this.aniClingUrls(num)).play(0, false);
        };
        /**动画资源 */
        //------------------------------------------------------
        AnimationModule.prototype.aniClingUrls = function (length) {
            var urls = [];
            for (var i = 1; i < length; i++) {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                urls.push("cling/" + i + ".png");
            }
            return urls;
        };
        AnimationModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new AnimationModule;
            }
            return this._instance;
        };
        return AnimationModule;
    }());
    module.AnimationModule = AnimationModule;
})(module || (module = {}));
//# sourceMappingURL=AnimationModule.js.map