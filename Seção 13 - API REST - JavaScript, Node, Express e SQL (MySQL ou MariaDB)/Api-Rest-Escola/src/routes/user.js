import { Router } from 'express';
import user from '../controllers/UserController';

const router = new Router();

router.post('/', user.store);

export default router;
