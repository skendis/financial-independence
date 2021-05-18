import {Router} from 'express';

const router = Router();

router.get(`/`, (req, res) => {
  const data = {
    "metadata": {},
    "data": {
      "_id": "1i",
      "description": "כל הכבוד הגדרת את היעד הראשון שלך. עכשיו נישאר לך לחבר את הפעולות",
      "path": "/open-api",
      "createdAt": (new Date()).toISOString(),
      "visitedAt": null
    }
  };

  res.json(data);
});

router.patch(`/:id`, (req, res) => {
  const data = {
    "metadata": {},
    "data": {
      "_id": req.params.id,
        "description": "כל הכבוד הגדרת את היעד הראשון שלך. עכשיו נישאר לך לחבר את הפעולות",
        "path": "/open-api",
        "createdAt": "2021-05-12T06:03:50.234Z",
        "visitedAt": (new Date()).toISOString()
    }
  };
  res.status(202).send();
});




export default router;
