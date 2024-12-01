const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: 3308,
        dialect: 'mariadb',
        logging: false,
    }
);

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error: ' + err));

module.exports = sequelize;
