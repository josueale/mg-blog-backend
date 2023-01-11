import { Router } from 'express';

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from '@Controllers/users/v1';

const router = Router();

router.get('/', getAllUsersController);

router.post('/', createUserController);

router.put('/', updateUserController);

router.delete('/:id', deleteUserController);

export default router;
