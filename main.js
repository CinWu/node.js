var FoodList = require("./moduletest");
var foods = new FoodList();
 
foods.on("added", function (foods) {
    console.log('Added '+foods.count+" "+foods.name+'(s).' );
});
 
foods.add({ name: "pie", count: 20 });
