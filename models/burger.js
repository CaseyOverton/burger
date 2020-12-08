const orm = require("../config/orm");


const burger = {
	addBurger: (burgerName, callback) => {
		orm.insertOne("burgers", ["burger_name"], [burgerName], callback);
	}
	,
	devourBurger: (id, callback) => {
		orm.updateOne("burgers", {devoured:true}, "id="+id, callback);
	}
	,
	getBurgers: (callback) => {
		orm.selectAll("burgers", function(x) { callback(x); });
	}
}

module.exports = burger;