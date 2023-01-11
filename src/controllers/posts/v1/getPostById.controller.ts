import Posts from '@Models/post.model';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

export async function getPostByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const match = await Posts.findOne({ _id: new ObjectId(id) });

    if (!match) {
      res.status(400).json(null);
      return;
    }

    res.json(match);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
