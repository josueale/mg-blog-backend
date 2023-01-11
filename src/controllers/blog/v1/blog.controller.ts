import { Request, Response } from 'express';

export async function getAllPostsControllers(_req: Request, res: Response) {
  try {
    res.status(200).json({
      hello: 'world',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
