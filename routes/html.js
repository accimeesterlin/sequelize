var db = require("../models");

module.exports = function (app, path) {
	
	app.get("/", function (req, res, next) {

		var data = {
			username:"accimeesterlin",
			admin:true,
			description:"tebk kbjhfjhv"
		};

		// db.user.create(data)
		// 	.then(function (data) {
		// 		console.log("Yupeee!!");
		// 	})
		// 	.catch(next);

		db.user.findAll({
				id:{
					$gte: 0
				}, raw:true
			})
			.then(function (data) {
				console.log(data);
			})
			.catch(next);
		
		res.sendFile(path.join(__dirname, '/../views/index.html'));
	});
}

