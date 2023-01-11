import { Router } from 'express';

import { createUserController, getAllUsersController } from '@Controllers/users/v1';

const router = Router();

router.get('/', getAllUsersController);

router.post('/', createUserController);

router.put('/');

router.delete('/:id');

export default router;
