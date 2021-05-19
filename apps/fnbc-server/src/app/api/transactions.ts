import {Router} from 'express';
import { Transaction } from './models/transaction';
import { responseBody } from './models/response-body';
import { Goal } from './models/goal';
import * as mongoose from "mongoose";

const router = Router();

router.get(`/types`, (req, res) => {
  const data = {
    "metadata": {},
    "data": [{
      "_id": "1e",
      "description": "ניר ערך"
    },
      {
        "_id": "2e",
        "description": "חסכון / פקדון"
      },
      {
        "_id": "3e",
        "description": "פנסיה"
      },
      {
        "_id": "4e",
        "description": "קרן השתלמות"
      },
      {
        "_id": "5e",
        "description": "כסף נזיל"
      }
    ]
  };

  res.json(data);
});

router.get(`/:id`, (req, res) => {
  Transaction.findOne({
    _id: mongoose.Types.ObjectId(req.params.id),
    owner: {_id: req['user']['_id']}
  }, (err, doc) => {
    if (err || !doc) {
      res.status(500).json(err || '');
    } else {
      res.status(200).json(Object.assign({}, responseBody, {data: doc}));
    }
  });
});

router.patch(`/:id`, (req, res) => {
  Transaction.findOneAndUpdate({
    _id: mongoose.Types.ObjectId(req.params.id),
    owner: {_id: req['user']['_id']}
  }, {$set : req.body}, null, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(202).json(
        Object.assign({}, responseBody,
          // returns old one :\
          {data: Object.assign(doc, req.body)}
        ));
    }
  });
});

router.delete(`/:id`, (req, res) => {
  Transaction.findOneAndDelete({
    _id: mongoose.Types.ObjectId(req.params.id),
    owner: {_id: req['user']['_id']}
  }, {}, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(204).send();
    }
  });
});

router.get(`/`, (req, res) => {
  const filer = {
    owner: {_id:  req['user']['_id']}
  };

  if (req['query'] && req['query'].goal) {
    filer['goal'] = {_id : req['query'].goal};
  }

  Transaction.find(filer,(err, docs) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(docs.length ? 200 : 204).json(Object.assign({}, responseBody, {data: docs}));
    }
  });
});

router.post(`/`, (req, res) => {
  const transaction = new Transaction(req.body);
  transaction.save((err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(201).json(Object.assign({}, responseBody, {data: transaction}));
    }
  });
});

export default router;
