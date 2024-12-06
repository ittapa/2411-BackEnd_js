const { Sequelize, DataTypes } = require('sequelize');

console.log('app.js : port : ' + process.env.DB_PASS);

const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER, // 정수형 데이터 타입
        autoIncrement: true,    // 자동 증가
        primaryKey: true,       // 기본 키 설정
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'user',
});

module.exports = User;
