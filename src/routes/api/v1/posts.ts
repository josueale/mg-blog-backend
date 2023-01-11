import { Router } from 'express';

import { createPostController, getAllPostsControllers, updatePostController } from '@Controllers/posts/v1';

const router = Router();

router.get('/', getAllPostsControllers);

router.post('/', createPostController);

router.put('/', updatePostController);

router.delete('/:id');

export default router;
