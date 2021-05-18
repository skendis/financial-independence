import {Router} from 'express';
import { Transaction } from './models/transaction';
import { responseBody } from './models/response-body';
import { Insight } from './models/insight';
const router = Router();

router.get(`/`, (req, res) => {
  Insight.findOne({},(err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(Object.assign({}, responseBody, {data: doc}));
    }
  });
});

router.patch(`/:id`, (req, res) => {
  const update = {date: (new Date()).toISOString()};
  Transaction.findByIdAndUpdate( req.params.id, update, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(202).json(
        Object.assign({}, responseBody,
          // returns old one :\
          {data: Object.assign(doc, update)}
        ));
    }
  });
});

export default router;
