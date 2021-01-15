const router = require('express').Router();
const { Comment,Post,User } = require('../../models');

//find all comments
router.get('/', (req, res) => {
   Comment.findAll({}).then(ans => {
       res.json(ans);
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

//find all comments for a particular post
router.get('/post/:id',(req, res) => {
  Comment.findAll({
    where: {
        post_id: req.params.id
    },
    attributes: ['comment_text'],
    include: [
     {
       model: User,
       attributes: ['username']
     }
   ]
  }).then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No comment found with this post' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})


//Create a comment
router.post('/', (req, res) => {
 if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id
  })
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
}});

//delete a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
      where: {
         id: req.params.id
      }
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;
