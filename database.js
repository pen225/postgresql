const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dehcuopuknu87l', 'mksdmokbocazty', '9c0b1a717f0b437f914de5dfc34145193c37b895d34f416aab62e0cf1ead5434', {
    host: 'ec2-54-228-218-84.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    ssl:true,
    dialectOptions: {
        ssl: {
            require:true,
            rejectUnauthorized: false
        }
    }
});


module.exports=sequelize