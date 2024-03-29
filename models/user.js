export default (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });

  User.associate = models => {
    User.belongsToMany(models.Team, {
      through: "members",
      foreignKey: "userId"
    });
    // N:M
    User.belongsToMany(models.Channel, {
      through: "channel_member",
      foreignKey: "userId"
    });
  };

  return User;
};
