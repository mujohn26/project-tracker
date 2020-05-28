
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.INTEGER,
    status: DataTypes.STRING,
    assignId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER

  }, {});
  task.associate = (models) => {
    task.belongsTo(
      models.user,
      { foreignKey: 'assignId' },
      { onDelete: 'cascade' },
      { onUpdate: 'cascade' }
    );
    task.belongsTo(
      models.project,
      { foreignKey: 'projectId' },
      { onDelete: 'cascade' },
      { onUpdate: 'cascade' }
    );
  };
  return task;
};
