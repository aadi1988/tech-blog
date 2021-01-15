const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: "Nullam non nisi est sit. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras.",
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: "Fermentum leo vel orci porta non pulvinar neque laoreet. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Dignissim convallis aenean et tortor at risus viverra. ",
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: "Tincidunt arcu non sodales neque sodales ut etiam. Arcu vitae elementum curabitur vitae nunc.",
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: "Et tortor at risus viverra adipiscing at. Mauris augue neque gravida in fermentum et sollicitudin.",
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: "Quisque non tellus orci ac auctor augue mauris augue neque.",
    user_id: 3,
    post_id: 3
  }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
