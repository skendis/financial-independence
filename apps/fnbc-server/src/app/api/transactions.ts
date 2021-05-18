import {Router} from 'express';

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
  const data = {
    "metadata": {},
    "data": {
      "_id": req.params.id,
      "type": {
        "_id": "1e",
        "description": "ניר ערך"
      },
      "goal": {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      },
      "description": "VT - Vanguard Total World Stock Index Fund ETF",
      "amount": 10312.54,
      "properties": {
        "stock": {
          "_id": "VT",
          "description": "Vanguard Total World Stock Index Fund ETF",
          "quantity": 13,
          "value": 103.12,
          "currency": {
            "_id": "USD",
            "description": "דולר ארהב"
          },
          "rise": true,
          "updatedAt": "2021-05-12T15:34:22.000Z"
        }
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
        "_id": "1e",
        "description": "ניר ערך"
      },
      "goal": {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      },
      "description": "VT - Vanguard Total World Stock Index Fund ETF",
      "amount": 10312.54,
      "properties": {
        "stock": {
          "_id": "VT",
          "description": "Vanguard Total World Stock Index Fund ETF",
          "quantity": 13,
          "value": 103.12,
          "currency": {
            "_id": "USD",
            "description": "דולר ארהב"
          },
          "rise": true,
          "updatedAt": "2021-05-12T15:34:22.000Z"
        }
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
        "self": "/transactions?_limit=20&_offset=0",
        "next": null
      }
    },
    "data": [{
      "_id": "1f",
      "type": {
        "_id": "1e",
        "description": "ניר ערך"
      },
      "goal": {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      },
      "description": "VT - Vanguard Total World Stock Index Fund ETF",
      "amount": 10312.54,
      "properties": {
        "stock": {
          "_id": "VT",
          "description": "Vanguard Total World Stock Index Fund ETF",
          "quantity": 13,
          "value": 103.12,
          "currency": {
            "_id": "USD",
            "description": "דולר ארהב"
          },
          "rise": true,
          "updatedAt": "2021-05-12T15:34:22.000Z"
        }
      },
      "createdAt": "2021-05-12T06:03:50.234Z",
      "updatedAt": "2021-05-12T06:04:50.234Z"
    },
      {
        "_id": "2f",
        "type": {
          "_id": "1e",
          "description": "ניר ערך"
        },
        "goal": {
          "_id": "1a",
          "description": "עצמאות כלכלית"
        },
        "description": "S&P 5 מחקה הראל",
        "amount": 2200.34,
        "properties": {
          "stock": {
            "_id": "HA",
            "description": "S&P 5 מחקה הראל",
            "quantity": 14,
            "value": 23,
            "currency": {
              "_id": "NIS",
              "description": "שקל"
            },
            "rise": false,
            "updatedAt": "2021-05-12T15:34:22.000Z"
          }
        },
        "createdAt": "2021-05-12T06:03:50.234Z",
        "updatedAt": "2021-05-12T06:04:50.234Z"
      },
      {
        "_id": "3f",
        "type": {
          "_id": "2e",
          "description": "פקדון חסכון"
        },
        "goal": {
          "_id": "1a",
          "description": "עצמאות כלכלית"
        },
        "description": "ספרינט דיגיטלי",
        "amount": 3000,
        "properties": {},
        "createdAt": "2021-05-12T06:03:50.234Z",
        "updatedAt": "2021-05-12T06:04:50.234Z"
      },
      {
        "_id": "4f",
        "type": {
          "_id": "3e",
          "description": "פנסייה"
        },
        "goal": {
          "_id": "1a",
          "description": "עצמאות כלכלית"
        },
        "description": "ביטוח מנהלים - כלל מנייתי",
        "amount": 41345.34,
        "properties": {},
        "createdAt": "2021-05-12T06:03:50.234Z",
        "updatedAt": "2021-05-12T06:04:50.234Z"
      },
      {
        "_id": "5f",
        "type": {
          "_id": "4e",
          "description": "קרן השתלמות"
        },
        "goal": {
          "_id": "1a",
          "description": "עצמאות כלכלית"
        },
        "description": "קרנות השתלמות - יילין לפידות הזחקות בעמ",
        "amount": 97000,
        "properties": {},
        "createdAt": "2021-05-12T06:03:50.234Z",
        "updatedAt": "2021-05-12T06:04:50.234Z"
      },
      {
        "_id": "6f",
        "type": {
          "_id": "5e",
          "description": "כסף נזיל"
        },
        "goal": {
          "_id": "1a",
          "description": "עצמאות כלכלית"
        },
        "description": "ירושה",
        "amount": 100000,
        "properties": {},
        "createdAt": "2021-05-12T06:03:50.234Z",
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
      "_id": Math.floor(Math.random() * 1000) + 'f',
      "type": {
        "_id": "1e",
        "description": "ניר ערך"
      },
      "goal": {
        "_id": "1a",
        "description": "עצמאות כלכלית"
      },
      "description": "VT - Vanguard Total World Stock Index Fund ETF",
      "amount": 10312.54,
      "properties": {
        "stock": {
          "_id": "VT",
          "description": "Vanguard Total World Stock Index Fund ETF",
          "quantity": 13,
          "value": 103.12,
          "currency": {
            "_id": "USD",
            "description": "דולר ארהב"
          },
          "rise": true,
          "updatedAt": "2021-05-12T15:34:22.000Z"
        }
      },
      "createdAt": date,
      "updatedAt": date
    }
  };

  Object.assign(data.data, req.body);

  res.status(201).json(data);
});

export default router;
