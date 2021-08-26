import { Router } from 'express';
import dealsRoutes from './deals.routes';

const router = Router();

router.use('/api', dealsRoutes);

export default router;
