import Posts from '@Models/post.model';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { isValidObjectId } from 'mongoose';

export async function updatePostController(req: Request, res: Response) {
  try {
    const { post_id, title, content } = req.body;

    // add... middleware?

    if (!isValidObjectId(post_id)) {
      res.status(400).json({
        status: 'error',
        type: 'bad-request',
        message: 'Must provide a valid id',
        value: null,
      });
      return;
    }

    const post = await Posts.findOne({ _id: new ObjectId(post_id) });

    if (!post) {
      res.status(400).json({
        status: 'error',
        type: 'post-not-found',
        message: 'No post found',
        value: null,
      });
      return;
    }

    post.title = title?.trim() ?? '';
    post.content = content?.trim() ?? '';

    const postUpdated = await post.save();

    res.json({
      status: 'succes',
      type: 'post-updated',
      message: 'Post updated successfully',
      value: postUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
