import { Router } from 'express';
import user from '../controllers/UserController';

const router = new Router();

router.post('/', user.store);
router.get('/', user.index);
router.get('/:id', user.show);
router.put('/:id', user.update);
router.delete('/:id', user.delete);

export default router;
