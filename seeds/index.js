const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedPost();
  console.log('--------------');

  await seedComment();
  console.log('--------------');

  process.exit(0);
};

seedAll();