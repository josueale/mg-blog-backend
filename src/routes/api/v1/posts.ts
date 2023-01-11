import { Router } from 'express';

import { createPostController, getAllPostsControllers } from '@Controllers/posts/v1';

const router = Router();

router.get('/', getAllPostsControllers);

router.post('/', createPostController);

router.put('/');

router.delete('/:id');

export default router;
