var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	path = require("path"),
	sequelize = require("sequelize");;


var db = require("./models");

require('./routes/html')(app, path);




db.sequelize.sync({ })

	.then(function () {
	
		app.listen(port, function () {
			console.log("App's listening at port", port);
		});
	})
	.catch(function (err) {
		console.log(err);
	});

