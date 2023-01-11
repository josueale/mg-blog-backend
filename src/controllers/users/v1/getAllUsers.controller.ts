import { Request, Response } from 'express';

export async function getAllUsersControllers(_req: Request, res: Response) {
  try {

    // users

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
