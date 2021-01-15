const sequelize = require('../config/connection');
const { User } = require('../models');


const userdata = [
  {
    first_name: 'Ahmad',
    last_name: 'El Gamal',
    username: 'ahmad',
    email: 'ahmad@email.com',
    password: '1234abcd'
  },
  {
    first_name: 'Brian',
    last_name: 'Lopez',
    username: 'brian1234',
    email: 'brian@email.com',
    password: '1234abcd'
  },
  {
    first_name: 'Annie',
    last_name: 'AreYouOK',
    username: 'annieRuok',
    email: 'annie@email.com',
    password: '1234abcd'
  },
  {
    first_name: 'Aaditi',
    last_name: 'Pai',
    username: 'aadi1988',
    email: 'aadi@email.com',
    password: '1234abcd'
  },
  {
    first_name: 'Aadi',
    last_name: 'Pai',
    username: 'aadi20',
    email: 'aadi20@email.com',
    password: 'abcd'
  }
    
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
