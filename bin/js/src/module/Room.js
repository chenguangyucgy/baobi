/**
* name
*/
var module;
(function (module) {
    var Room = /** @class */ (function () {
        function Room() {
            /**房间ID */
            this._RoomID = null;
            /**房间属性 */
            this._RoomClass = {};
            /**message */
            this._message = "";
            /**金币 */
            this._jinNum = 0;
        }
        Object.defineProperty(Room.prototype, "RoomID", {
            /**获取房间ID */
            get: function () {
                return this._RoomID;
            },
            /**设置房间ID */
            set: function (ID) {
                this._RoomID = ID;
                // wuling.map.getInstance();
                // wuling.Bottom.getInstance();
                // wuling.Top.getInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Room.prototype, "RoomClass", {
            /**获取房间属性 */
            get: function () {
                return this._RoomClass;
            },
            /**设置房间属性 */
            set: function (arr) {
                this._RoomClass = arr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Room.prototype, "message", {
            /**获取message */
            get: function () {
                return this._message;
            },
            /**设置message */
            set: function (ID) {
                this._message = ID;
                // wuling.map.getInstance();
                // wuling.Bottom.getInstance();
                // wuling.Top.getInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Room.prototype, "jinNum", {
            /**获取金币 */
            get: function () {
                return this._jinNum;
            },
            /**设置金币 */
            set: function (ID) {
                this._jinNum = ID;
                // wuling.map.getInstance();
                // wuling.Bottom.getInstance();
                // wuling.Top.getInstance();
            },
            enumerable: true,
            configurable: true
        });
        Room.getInstance = function () {
            if (this._instance == null) {
                this._instance = new Room;
            }
            return this._instance;
        };
        return Room;
    }());
    module.Room = Room;
})(module || (module = {}));
//# sourceMappingURL=Room.js.map