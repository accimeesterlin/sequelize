module.exports = function (app, connection) {
	
	// ORM
	// Sequelize
	var db = require("../models");


	app.get("/", function (req, res) {

		

		res.render("index");

	});


	app.get('/api', function (req, res) {
		
		db.user.findAll({raw:true})
			.then(function (data) {
				console.log(data);
			})
			.catch(function () {
				console.log("Error");
			});

		res.json("Ok");
	});
};














