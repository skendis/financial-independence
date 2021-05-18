import {Router} from 'express';
import {json} from 'body-parser';
import * as goals from './goals';
import * as insights from './insights';
import * as transactions from './transactions';

const router = Router();

router.use(json());
router.use('/goals', goals.default);
router.use('/insights', insights.default);
router.use('/transactions', transactions.default);

export default router;
