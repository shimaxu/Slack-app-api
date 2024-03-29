export default (sequelize, DataTypes) => {
  const Message = sequelize.define("messages", {
    text: DataTypes.STRING
  });

  Message.associate = models => {
    // 1:M
    Message.belongsTo(models.Channel, {
      foreignKey: "channelId"
    });
    Message.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };

  return Message;
};
