import { Router } from 'express';
import { dealsCtrl } from '../controllers';

const router = Router();

/**
 * Get deals.
 * @method get
 */
router.route('/deals').get(dealsCtrl.getDeals);

export default router;
