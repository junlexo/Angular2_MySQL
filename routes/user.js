var models  = require('../models');
var express = require('express');
var router  = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/signin', function(req, res) {
  models.User.findOne({ where: {username: req.body.username} }).then(function(user) {
      if(!user) {
        console.log('no user found');
        return;
      }

      bcrypt.compare(req.body.password, user.password, function(err, usr) {
          if( !usr ) {
            console.log('invalid password');
            return;
          }
          else {
            var token = jwt.sign({user: user}, 'secret', {expiresIn: 3600});
            console.log('token: '+token+'userId'+user.id);
            return res.status(200).json({
                message: 'success',
                token: token,
                userId: user.id
            });
          }
      });
  });
});

module.exports = router;
