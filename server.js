var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser'),
	handlebars = require("express-handlebars"),
	mysql      = require('mysql');


var db = require("./models");

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var routing = require("./routes/html")(app);


db.sequelize.sync({})
	.then(function () {
		app.listen(port, function () {
			console.log("App is starting at port", port);
		});
	})
	.catch(function (err) {
		console.log(err);
	});
