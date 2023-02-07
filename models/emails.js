const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../configuration/connection');

class Email extends Model {
    checkEmail(email) {
        return bcrypt.compareSync(email, this.user_email);
    }
}

Email.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        user_last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        user_message: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
    },
    {
        hooks: {
            beforeCreate: async (userData) => {
                userData.user_email = await bcrypt.hash(userData.user_email, 10);
                return userData; 
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.user_email = await bcrypt.hash(updatedUserData.user_email, 10);
                return updatedUserData;
            },

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'email',
    }
);

module.exports = Email;