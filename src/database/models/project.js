
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    name: DataTypes.STRING,
    body: DataTypes.STRING,
    status: DataTypes.STRING,
    assignId: DataTypes.INTEGER
  }, {});
  project.associate = (models) => {
    project.belongsTo(
      models.user,
      { foreignKey: 'assignId' },
      { onDelete: 'cascade' },
      { onUpdate: 'cascade' }
    );
    project.hasMany(models.task, {
      foreignKey: 'projectId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  };
  return project;
};
