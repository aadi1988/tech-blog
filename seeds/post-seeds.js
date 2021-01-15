const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [
  {
    title: "Lorem Ipsum 1",
    post_data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    user_id: "2"
  },
  {
    title: "Lorem Ipsum 2",
    post_data: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: "1"
  },
  {
    title: "Lorem Ipsum 3",
    post_data: "Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Viverra vitae congue eu consequat ac felis. Est sit amet facilisis magna etiam tempor.",
    user_id: "3" 
  },
  {
    title: "Lorem Ipsum 4",
    post_data: "Et tortor consequat id porta nibh venenatis. Leo urna molestie at elementum. Sed libero enim sed faucibus turpis in eu mi. Non odio euismod lacinia at quis risus sed.",
    user_id: "4"
  },
  {
    title: "Lorem Ipsum 5",
    post_data: "Gravida cum sociis natoque penatibus et magnis. Sed blandit libero volutpat sed cras. Risus commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt vitae semper quis lectus nulla at volutpat diam.",
    user_id: "1"
  },
  {
    title: "Lorem Ipsum 6",
    post_data: "Gravida cum sociis natoque penatibus et magnis. Sed blandit libero volutpat sed cras. Risus commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt vitae semper quis lectus nulla at volutpat diam.",
    user_id: "5"
  }

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
