import {Router} from 'express';
import { Transaction } from './models/transaction';
import { responseBody } from './models/response-body';
import { Goal } from './models/goal';

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
  Transaction.findById(req.params.id, (err, goal) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(Object.assign({}, responseBody, {data: goal}));
    }
  });
});

router.patch(`/:id`, (req, res) => {
  Transaction.findByIdAndUpdate( req.params.id, req.body, (err, doc) => {
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
  Transaction.findByIdAndDelete(req.params.id, {}, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(204).send();
    }
  });
});

router.get(`/`, (req, res) => {
  Transaction.find({},(err, docs) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(Object.assign({}, responseBody, {data: docs}));
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
