import Posts from '@Models/post.model';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { isValidObjectId } from 'mongoose';

export async function deletePostController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      res.status(400).json({
        status: 'error',
        type: 'bad-request',
        message: 'Must provide a valid id',
        value: null,
      });
      return;
    }

    const postD = await Posts.deleteOne({ _id: new ObjectId(id) });

    if (!postD.deletedCount) {
      res.status(404).json({
        status: 'error',
        type: 'not-found',
        message: 'Error while deleting Post',
        value: null,
      });
      return;
    }

    res.json({
      status: 'success',
      type: 'post-deleted',
      message: 'Post deleted successfully',
      value: id,
    })

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
