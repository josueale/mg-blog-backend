import { Router } from 'express';

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  loginUserController,
  updateUserController
} from '@Controllers/users/v1';

const router = Router();

router.get('/', getAllUsersController);

router.post('/', createUserController);

router.post('/register', createUserController);

router.post('/login', loginUserController );

router.put('/', updateUserController);

router.delete('/:id', deleteUserController);

export default router;
