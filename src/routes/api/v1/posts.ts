import { Router } from 'express';

import {
  createPostController,
  deletePostController,
  getAllPostsControllers,
  updatePostController,
} from '@Controllers/posts/v1';

const router = Router();

router.get('/', getAllPostsControllers);

router.post('/', createPostController);

router.put('/', updatePostController);

router.delete('/:id', deletePostController);

export default router;
