import { Router } from 'express';
import {
  getAll,
  getActor,
  createActor,
  updateActor,
  deleteActor,
} from '../controllers/actor.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import {
  deleteActorValidator,
  postActorValidator,
  updateActorValidator,
} from '../validators/actor.validator.js';
import { verifyToken } from '../middlewares/token.middleware.js';

const router = Router();
// Ruta de registro pública
router.post('/', validate(postActorValidator), createActor);

// Rutas que requieren autenticación
router.use(verifyToken);
router.get('/', getAll);
router.get('/:id', getActor);
router.put('/:id', validate(updateActorValidator), updateActor);
router.delete('/:id', validate(deleteActorValidator), deleteActor);
export default router;
