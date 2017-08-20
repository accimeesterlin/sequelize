

// Regular Expression
// String Manipulation


module.exports = function (sequelize, Sequelize) {

	const User = sequelize.define('user', {

		username: {
			type:Sequelize.STRING
		},


		admin:{
			type:Sequelize.BOOLEAN,
			defaultValue: false
		},



		description: Sequelize.TEXT
	})


	return User;
}