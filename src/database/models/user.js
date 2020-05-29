
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    userid: DataTypes.STRING
  }, {});
  user.associate = (models) => {
    user.hasMany(models.project, {
      foreignKey: 'assignId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    user.hasMany(models.task, {
      foreignKey: 'assignId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  };
  return user;
};
