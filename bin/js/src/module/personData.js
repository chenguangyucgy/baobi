/**
* name
*/
var module;
(function (module) {
    var personData = /** @class */ (function () {
        function personData() {
            //防止同一条路线重复抽到一个点
            //路线1
            this.yf1 = -1;
            //路线2
            this.yf2 = -1;
            //路线3
            this.yf3 = -1;
            //路线4
            this.yf4 = -1;
            //路线5
            this.yf5 = -1;
            //路线6
            this.yf6 = -1;
            //路线7
            this.yf7 = -1;
            //路线8
            this.yf8 = -1;
            //路线9
            this.yf9 = -1;
            //下面的点是控制互动时同一个地方只能一个顾客互动
            //点1
            this.dot1 = true;
            //点2
            this.dot2 = true;
            //点3
            this.dot3 = true;
            //点4
            this.dot4 = true;
            //点5
            this.dot5 = true;
            //点1
            this.dot6 = true;
            //点7
            this.dot7 = true;
            //点8
            this.dot8 = true;
            //点9
            this.dot9 = true;
            //点10
            this.dot10 = true;
            //点11
            this.dot11 = true;
            //点12
            this.dot12 = true;
            //点13
            this.dot13 = true;
            //点14
            this.dot14 = true;
            //点15
            this.dot15 = true;
            //点16
            this.dot16 = true;
            //点17
            this.dot17 = true;
            //点18
            this.dot18 = true;
            //点19
            this.dot19 = true;
            //点20
            this.dot20 = true;
            //点21
            this.dot21 = true;
            //点22
            this.dot22 = true;
            //点23
            this.dot23 = true;
            //点24
            this.dot24 = true;
            //点25
            this.dot25 = true;
            //点26
            this.dot26 = true;
            //点27
            this.dot27 = true;
        }
        Object.defineProperty(personData.prototype, "yfun1", {
            get: function () {
                return this.yf1;
            },
            set: function (ID) {
                this.yf1 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun2", {
            get: function () {
                return this.yf2;
            },
            set: function (ID) {
                this.yf2 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun3", {
            get: function () {
                return this.yf3;
            },
            set: function (ID) {
                this.yf3 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun4", {
            get: function () {
                return this.yf4;
            },
            set: function (ID) {
                this.yf4 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun5", {
            get: function () {
                return this.yf5;
            },
            set: function (ID) {
                this.yf5 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun6", {
            get: function () {
                return this.yf6;
            },
            set: function (ID) {
                this.yf6 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun7", {
            get: function () {
                return this.yf7;
            },
            set: function (ID) {
                this.yf7 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun8", {
            get: function () {
                return this.yf8;
            },
            set: function (ID) {
                this.yf8 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "yfun9", {
            get: function () {
                return this.yf9;
            },
            set: function (ID) {
                this.yf9 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun1", {
            get: function () {
                return this.dot1;
            },
            set: function (ID) {
                this.dot1 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun2", {
            get: function () {
                return this.dot2;
            },
            set: function (ID) {
                this.dot2 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun3", {
            get: function () {
                return this.dot3;
            },
            set: function (ID) {
                this.dot3 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun4", {
            get: function () {
                return this.dot4;
            },
            set: function (ID) {
                this.dot4 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun5", {
            get: function () {
                return this.dot5;
            },
            set: function (ID) {
                this.dot5 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun6", {
            get: function () {
                return this.dot6;
            },
            set: function (ID) {
                this.dot6 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun7", {
            get: function () {
                return this.dot7;
            },
            set: function (ID) {
                this.dot7 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun8", {
            get: function () {
                return this.dot8;
            },
            set: function (ID) {
                this.dot8 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun9", {
            get: function () {
                return this.dot9;
            },
            set: function (ID) {
                this.dot9 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun10", {
            get: function () {
                return this.dot10;
            },
            set: function (ID) {
                this.dot10 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun11", {
            get: function () {
                return this.dot11;
            },
            set: function (ID) {
                this.dot11 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun12", {
            get: function () {
                return this.dot12;
            },
            set: function (ID) {
                this.dot12 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun13", {
            get: function () {
                return this.dot13;
            },
            set: function (ID) {
                this.dot13 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun14", {
            get: function () {
                return this.dot14;
            },
            set: function (ID) {
                this.dot14 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun15", {
            get: function () {
                return this.dot15;
            },
            set: function (ID) {
                this.dot15 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun16", {
            get: function () {
                return this.dot16;
            },
            set: function (ID) {
                this.dot16 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun17", {
            get: function () {
                return this.dot17;
            },
            set: function (ID) {
                this.dot17 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun18", {
            get: function () {
                return this.dot18;
            },
            set: function (ID) {
                this.dot18 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun19", {
            get: function () {
                return this.dot19;
            },
            set: function (ID) {
                this.dot19 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun20", {
            get: function () {
                return this.dot20;
            },
            set: function (ID) {
                this.dot20 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun21", {
            get: function () {
                return this.dot21;
            },
            set: function (ID) {
                this.dot21 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun22", {
            get: function () {
                return this.dot22;
            },
            set: function (ID) {
                this.dot22 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun23", {
            get: function () {
                return this.dot23;
            },
            set: function (ID) {
                this.dot23 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun24", {
            get: function () {
                return this.dot24;
            },
            set: function (ID) {
                this.dot24 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun25", {
            get: function () {
                return this.dot25;
            },
            set: function (ID) {
                this.dot25 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun26", {
            get: function () {
                return this.dot26;
            },
            set: function (ID) {
                this.dot26 = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personData.prototype, "dotfun27", {
            get: function () {
                return this.dot27;
            },
            set: function (ID) {
                this.dot27 = ID;
            },
            enumerable: true,
            configurable: true
        });
        personData.getInstance = function () {
            if (this._instance == null) {
                this._instance = new personData;
            }
            return this._instance;
        };
        return personData;
    }());
    module.personData = personData;
})(module || (module = {}));
//# sourceMappingURL=personData.js.map