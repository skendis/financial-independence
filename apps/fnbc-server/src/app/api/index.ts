import {Router} from 'express';
import {json} from 'body-parser';
import * as cookieParser  from 'cookie-parser';
import * as cookieSession from 'cookie-session';
import * as connectFlash from 'connect-flash';
import * as passport from 'passport';
import * as passportLocal from 'passport-local';

import * as goals from './goals';
import * as insights from './insights';
import * as transactions from './transactions';
import * as auth from './auth';

import {User} from './models/user';


passport.use(new passportLocal.Strategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const router = Router();

router.use(cookieParser());
router.use(cookieSession({keys: ['secretkey1', 'secretkey2', '...']}));
router.use(connectFlash());

// Configure passport middleware
router.use(passport.initialize());
router.use(passport.session());

router.use(json());

const loggedIn = (req, res, next) => {
  if (! req['user']) {
    return res.status(401).json();
  }

  if (req.body) {
    Object.assign(req.body, {owner: req['user']});
  }

  next();
};

router.use('/auth', auth.default);

router.use('/goals', loggedIn, goals.default);
router.use('/insights', loggedIn, insights.default);
router.use('/transactions', loggedIn, transactions.default);


router.use('/*', (req,res)=>{
  res.status(404).json();
});

export default router;
