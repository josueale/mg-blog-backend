import Posts from '@Models/post.model';
import { Request, Response } from 'express';

export async function getAllPostsControllers(_req: Request, res: Response) {
  try {
    const posts = await Posts.find({});

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
