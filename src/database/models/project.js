

module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    name: DataTypes.STRING,
    body: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  project.associate = function () {
    // associations can be defined here
  };
  return project;
};
