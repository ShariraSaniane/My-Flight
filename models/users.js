const { defineModel, DataTypes } = require("firestore-sequelize");
exports.User = defineModel("users", {
    email: DataTypes.STRING,
    nama: DataTypes.STRING,
    password: DataTypes.STRING
});