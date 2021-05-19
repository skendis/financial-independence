import {Router} from 'express';
import * as passport from 'passport';
import {User} from './models/user';

const router = Router();

router.post(`/register`, (req, res) => {
  const user = new User({username: req.body.username});
  User.register(user, req.body.password, function(err) {
    if (err) {
      res.status(500).json({description: "password or user incorrect"});
    }

    res.status(201).json({description: "registered"});
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(201).json({description: "yey"});
});

router.get('/logout', function(req, res) {
  req['logout']();
  res.redirect('/');
});

export default router;
