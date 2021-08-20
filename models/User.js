const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		userName: {
		  type: DataTypes.STRING,
		  unique: true,
		  allowNull: false
		},
		password: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  validate: {
			len: [8]
		  }
		}
	  });
	
	  User.associate = function (models) {
		// User.hasMany(models.)
		// User.hasMany(models.)
	  }
	
	  User.beforeCreate(function (user) {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
	  })
	
	  return User;
}