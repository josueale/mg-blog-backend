import { Router } from 'express';

import { getAllUsersControllers } from '@Controllers/users/v1';

const router = Router();

router.get('/', getAllUsersControllers);

router.post('/');

router.put('/');

router.delete('/:id');

export default router;
