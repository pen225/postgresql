const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('da33gr3vdreelr', 'tkioybmbhsioqf', '6eb8a9dd662b07c74ed9fda280a589826a113bac8315ac6372ce229922ab6fde', {
    host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
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