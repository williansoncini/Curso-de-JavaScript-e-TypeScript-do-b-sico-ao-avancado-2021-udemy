import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import AlunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', loginRequired, AlunoController.index);

export default router;
