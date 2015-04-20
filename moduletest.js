var util = require("util");
var EventEmitter = require("events").EventEmitter;

var id = 1;
var db = {
    foods: [
        { id: id++, name: "doughnut", count: 5    },
        { id: id++, name: "cookie", count: 10 },
        { id: id++, name: "cake", count: 15     }
    ]
};

function FoodList () {
    EventEmitter.call(this);
}

//Inherits EventEmitter.prototype
util.inherits(FoodList, EventEmitter);

FoodList.prototype.add = function(item) {
    item.id = id++;
    db.foods.push(item);
    this.emit("added", item);  
};

FoodList.prototype.all = function() {
    return db.foods;
};

//an 'exports' object is available in every module, 
//and it is returned whenever the require function is used to include the modul 
module.exports = FoodList;

