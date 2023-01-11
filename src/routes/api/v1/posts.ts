import { Router } from 'express';

import {
  createPostController,
  deletePostController,
  getAllPostsControllers,
  getPostByIdController,
  updatePostController
} from '@Controllers/posts/v1';

const router = Router();

router.get('/', getAllPostsControllers);

router.post('/', createPostController);

router.put('/', updatePostController);

router.get('/:id', getPostByIdController);
router.delete('/:id', deletePostController);

export default router;
