const path = require("path");
burger = require("../models/burger");
var router = express.Router();

module.exports = function(app) {
	router.get("/", function(req, res) {
		burger.getBurgers(function(burgers) {
			res.render(path.join(__dirname, "../views/index"), {burgers:burgers});
		});
	});
	router.get("/burgers", function(req, res) {
		burger.getBurgers(function(burgers) {
			res.json(burgers);
		});
	});
	router.post("/burger/add", function(req, res) {
		burger.addBurger(req.body.burger_name, function(burgers) {
			res.redirect('/');
		});
	});
	router.post("/burger/eat/:burger_id", function(req, res) {
		burger.devourBurger(req.params.burger_id, function(burgers) {
			burger.getBurgers(function(burgers) {
				res.json(burgers);
			});
		});
	});

};