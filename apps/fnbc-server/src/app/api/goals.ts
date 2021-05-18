import {Router} from 'express';

import {Goal} from './models/goal';
import { responseBody } from './models/response-body';

const router = Router();

router.get(`/types`, (req, res) => {
  const data = {
    "metadata": {},
    "data": [{
      "_id": "3a",
      "description": "אחר"
    },
      {
        "_id": "2a",
        "description": "דירה"
      },
      {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      }
    ]
  };

  res.json(data);
});

router.get(`/:id`, (req, res) => {
  Goal.findById(req.params.id, (err, goal) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(Object.assign({}, responseBody, {data: goal}));
    }
  });
});

router.patch(`/:id`, (req, res) => {
  Goal.findByIdAndUpdate( req.params.id, req.body, (err, doc) => {
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
  Goal.findByIdAndDelete(req.params.id, {}, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(204).send();
    }
  });
});

router.get(`/`, (req, res) => {
  Goal.find({},(err, docs) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(Object.assign({}, responseBody, {data: docs}));
    }
  });
});

router.post(`/`, (req, res) => {
  const goal = new Goal(req.body);
  goal.save((err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(201).json(Object.assign({}, responseBody, {data: goal}));
    }
  });
});

export default router;
