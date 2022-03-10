import multer from 'multer';
import { Router } from 'express';
import FotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig)

const router = new Router();

router.post('/', upload.single('foto'), FotoController.store);

export default router;
