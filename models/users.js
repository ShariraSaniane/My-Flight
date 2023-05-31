const { defineModel, DataTypes } = require("firestore-sequelize");
exports.User = defineModel("users", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
});