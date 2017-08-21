module.exports = function (sequelize, Sequelize) {

	var User = sequelize.define('user', {
  		username: {
  			type:Sequelize.STRING
  		},
  		description: Sequelize.TEXT
	})

	return User;
}