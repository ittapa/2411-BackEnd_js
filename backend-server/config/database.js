const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',//'mariadb',
        logging: true,
        freezeTableName: true,
        logging: process.env.NODE_ENV !== 'production',
        dialectOptions: {
            charset: 'utf8mb4',
        },
    }
);

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error: ' + err));

module.exports = sequelize;
