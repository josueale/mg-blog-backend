import { Router } from 'express';

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  loginByTokenController,
  loginUserController,
  updateUserController,
} from '@Controllers/users/v1';

const router = Router();

router.get('/', getAllUsersController);

router.post('/', createUserController);

router.post('/register', createUserController);

router.post('/login', loginUserController);

router.post('/login/token', loginByTokenController);

router.put('/', updateUserController);

router.delete('/:id', deleteUserController);

export default router;
