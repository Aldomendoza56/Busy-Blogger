const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: process.env.DB_HOST,
//         dialect: 'mysql',
//         port: 3306,
//       }
//     );
    const sequelize = new Sequelize('blog_db', 'root', 'August2914!', {
        host: 'localhost',
        dialect: 'mysql',
      });
      



module.exports = sequelize;