import { Router } from 'express';

import { getAllPostsControllers } from '@Controllers/blog/v1';

const router = Router();

router.get('/', getAllPostsControllers);

router.post('/');

router.put('/');

router.delete('/:id');

export default router;
