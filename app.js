

// Design Patterns
// Others to see what you doing

// Module Design Pattern
// The prototype Desgin Pattern  // React.js
// The observer Desgin Pattern.   // Angular.js
// The singleton Design Pattern


// Module Design Pattern
// var app = (function () {
// 	// Private

// 	var sendData = function (first, second) {
		
// 		console.log(first);
// 		second();
// 	};

// 	var getData = function () {
// 		console.log("I am getting data from the Front End to the Back End");
// 	};


// 	// Public
// 	return{
// 		get:sendData,
// 		post:getData
// 	}

// })();





// The prototype Design Pattern
var app = {
	get: function () {
		console.log('I am getting');
	},

	post: function () {
		console.log("I am posting");
	}
};

app.get();





// app.get();

// app.post();

// app.use();