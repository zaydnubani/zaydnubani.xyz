// This connects you to the database; i.e. ruum_db

// links the node module 'sequelize'
// ***enables documentation for ruum_db connection
const Sequelize = require('sequelize');

// links the node module 'dotenv'
// ***enables sequelize to use .env for ruum_db credentials
require('dotenv').config();

// sets the variable 'sequelize'
let sequelize;

// need to follow-up on purpose, watch class recordings
if ('mysql://wvpge2scvgdncf8z:hfjnoy62z34rnvji@au77784bkjx6ipju.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r8glv0l2drn6wx0o'){
  sequelize = new Sequelize('mysql://wvpge2scvgdncf8z:hfjnoy62z34rnvji@au77784bkjx6ipju.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r8glv0l2drn6wx0o');
} else {
// initializes new connection to ruum_db
  sequelize = new Sequelize(
    // credentials
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    'zaydnubanixyz_db',
    'root',
    'BigWang69*',
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

// exports const sequelize to be read on other pages
module.exports = sequelize;