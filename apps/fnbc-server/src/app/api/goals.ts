import {Router} from 'express';

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
  const data = {
    "metadata": {},
    "data": {
      "_id": req.params.id,
      "type": {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      },
      "description": "עצמאות כלכלית",
      "amount": 3000000,
      "savingAmount": 1500,
      "outcomeAmount": 10000,
      "status": {
        "_id": "1c",
        "description": "עומד ביעד"
      },
      "createdAt": "2021-05-12T06:03:50.234Z",
      "updatedAt": "2021-05-12T06:04:50.234Z"
    }
  };

  res.json(data);
});

router.patch(`/:id`, (req, res) => {
  const data = {
    "metadata": {},
    "data": {
      "_id": req.params.id,
      "type": {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      },
      "description": "עצמאות כלכלית",
      "amount": 3000000,
      "savingAmount": 1500,
      "outcomeAmount": 10000,
      "status": {
        "_id": "1c",
        "description": "עומד ביעד"
      },
      "createdAt": "2021-05-12T06:03:50.234Z",
      "updatedAt": (new Date()).toISOString()
    }
  };

  Object.assign(data.data, req.body);

  res.status(202).json(data);
});

router.delete(`/:id`, (req, res) => {
  res.status(204).send();
});

router.get(`/`, (req, res) => {
  const data = {
    "metadata": {
      "links": {
        "prev": null,
        "self": "/goals?_limit=5&_offset=0",
        "next": null
      }
    },
    "data": [{
      "_id": "1b",
      "type": {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      },
      "description": "עצמאות כלכלית",
      "amount": 3000000,
      "savingAmount": 1500,
      "outcomeAmount": 10000,
      "status": {
        "_id": "3c",
        "description": "צריך להשתפר"
      },
      "createdAt": "2021-05-12T06:03:50.234Z",
      "updatedAt": "2021-05-12T06:04:50.234Z"
    },
      {
        "_id": "2b",
        "type": {
          "_id": "2a",
          "description": "דירה"
        },
        "description": "דירה בתא",
        "amount": 1500000,
        "savingAmount": 500,
        "status": {
          "_id": "1c",
          "description": "עומד ביעד"
        },
        "createdAt": "2021-04-12T06:03:50.234Z",
        "updatedAt": "2021-05-12T06:04:50.234Z"
      },
      {
        "_id": "3b",
        "type": {
          "_id": "3a",
          "description": "אחר"
        },
        "description": "מתנה לחתונה של יואבי",
        "amount": 2000,
        "savingAmount": 20,
        "status": {
          "_id": "2c",
          "description": "לא עומד ביעד"
        },
        "createdAt": "2021-04-10T06:03:50.234Z",
        "updatedAt": "2021-05-12T06:04:50.234Z"
      }
    ]
  };

  res.json(data);
});

router.post(`/`, (req, res) => {
  const date = (new Date()).toISOString();
  const data = {
    "metadata": {},
    "data": {
      "_id": Math.floor(Math.random() * 1000) + 'b',
      "type": {
        "_id": '1a',
        "description": "עצמאות כלכלית"
      },
      "description": "עצמאות כלכלית",
      "amount": 3000000,
      "savingAmount": 1500,
      "outcomeAmount": 10000,
      "status": {
        "_id": "1c",
        "description": "עומד ביעד"
      },
      "createdAt": date,
      "updatedAt": date
    }
  };

  Object.assign(data.data, req.body);

  res.status(201).json(data);
});

export default router;
