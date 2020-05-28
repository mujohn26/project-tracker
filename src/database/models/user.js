

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    userid: DataTypes.STRING
  }, {});
  user.associate = function () {
    // associations can be defined here
  };
  return user;
};
