/**
* name
*/
var module;
(function (module) {
    var newTask = /** @class */ (function () {
        function newTask() {
            this._newNum = 0;
        }
        Object.defineProperty(newTask.prototype, "newNum", {
            get: function () {
                return this._newNum;
            },
            set: function (num) {
                this._newNum = num;
            },
            enumerable: true,
            configurable: true
        });
        newTask.getInstance = function () {
            if (this._instance == null) {
                this._instance = new newTask;
            }
            return this._instance;
        };
        newTask.dialogues = [
            //开始
            { text: "嘭~~~~~吓一跳吧！", id: 1, class: 1 },
            { text: "我是NANA，闪亮登场的高端人工智能少女。", id: 2, class: 1 },
            { text: "咳咳，别误会，我不是那种虚拟女友的设定。", id: 3, class: 1 },
            { text: "我将会成为你的专属助理，贴~身~指导你的各项工作喔", id: 4, class: 1 },
            //建设地台
            { text: "这是一座殿堂级的，完美结合了传统工业与现代科技的汽车智慧门店。", id: 5, class: 1 },
            { text: "你看，每一个细节，都充满后现代浪漫解构随心所欲主义的神韵", id: 6, class: 1 },
            { text: "当然，这只是我根据你的经营理念模拟运算的未来店面情景……", id: 7, class: 1 },
            { text: "作为新任的合伙人店长，你需要从头开始建设自己的门店。", id: 8, class: 1 },
            { text: "我们一起来努力，一定可以建设出比模拟运算更好的门店。", id: 9, class: 1 },
            { text: "事不宜迟，我们试试安放第一个设施吧。", id: 10, class: 1 },
            { text: "请点击", id: 11, class: 1 },
            { text: "请点击", id: 12, class: 1 },
            { text: "请移动到可配置的空格", id: 13, class: 1 },
            //车型
            { text: "给你点个赞！这可不是空摆设，我们要用来展示喜欢的车型", id: 14, class: 2 },
            { text: "请点击", id: 19, class: 1 },
            { text: "接下来是这里", id: 19, class: 1 },
            { text: "选这台车试试吧。", id: 19, class: 1 },
            //顾客上门
            { text: "帅气!第一款车型已经驾临门店啦!", id: 12, class: 3 },
            { text: "对了，有件事必须提醒你", id: 13, class: 3 },
            { text: "所有设施都要消耗宝币和能量，在成为土豪之前，要注意开销啊。", id: 14, class: 3 },
            { text: "此外，每天经营门店就能到赚到宝币，可以在真实门店消费哦。", id: 15, class: 3 },
            { text: "当然，天上不会掉麻辣小龙虾，要赚宝币，需要让顾客满意才行。", id: 16, class: 3 },
            { text: "看！", id: 17, class: 3 },
            { text: "啊，一定是我的颜值感动了上天，第一个顾客终于上门啦！", id: 18, class: 3 },
            //领取宝币
            { text: "太好了，顾客很满意，奖励了我们宝币，请赶快领取吧！", id: 19, class: 1 },
            { text: "点击宝币图标就能领取，很简单吧。", id: 20, class: 1 },
            //展示实物兑换
            { text: "领取完成，感觉离人生巅峰又近一大步了！", id: 20, class: 1 },
            { text: "有了足够的宝币，就可以布置更多的设施了。", id: 20, class: 1 },
            { text: "重要的事情再提醒一次，游戏里面赚到的宝币，也可以在真实门店消费哦。", id: 20, class: 1 },
            //建设自助餐
            { text: "让到店的顾客也可以品尝美食和饮品，我这个主意不错吧？", id: 20, class: 1 },
            { text: "请选择自助餐吧", id: 20, class: 1 },
            { text: "请点击", id: 20, class: 1 },
            { text: "请移动到可配置的空格", id: 20, class: 1 },
            //成就
            { text: "来，跟我一起念：好事发生~~好事发生~~好事发生~~", id: 20, class: 1 },
            { text: "BINGO！", id: 20, class: 1 },
            { text: "请点击", id: 20, class: 1 },
            { text: "成就达成，获得奖励！", id: 20, class: 1 },
            { text: "我说的没错吧，以后多留意一下获得成就的条件吧。", id: 20, class: 1 },
            // {text:"接下来的目标，就是努力赚钱，把门店升到第2级吧",id:20,class:1},
            //升级门店
            { text: "咳咳，接下来差不多可以把门店升到2级了。", id: 20, class: 1 },
            { text: "请点击", id: 20, class: 1 },
            { text: "请点击", id: 20, class: 1 },
            { text: "请升级按钮，注意升级会有相应的消耗。", id: 20, class: 1 },
            { text: "恭喜！门店已经升到2级啦！新的车型和设施会被解锁，记得要不断升级哦。", id: 20, class: 1 },
            //引导结束语
            { text: "我已经没什么可以教你了，但我会一直陪在你身边，随时为你提供帮助！", id: 20, class: 1 },
            { text: "尽管有些嫉妒，不过确实要说，你的表现超级赞！", id: 20, class: 1 },
            { text: "您是我见过最棒的经营者，真的！我相信您一定可以建设出最棒的门店，请继续努力哦！", id: 20, class: 1 },
        ];
        return newTask;
    }());
    module.newTask = newTask;
})(module || (module = {}));
//# sourceMappingURL=newTask.js.map