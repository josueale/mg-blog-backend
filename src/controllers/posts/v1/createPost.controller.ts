import Posts from '@Models/post.model';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { isValidObjectId } from 'mongoose';

export async function createPostController(req: Request, res: Response) {
  const { title, content, user_id } = req.body;

  if (!isValidObjectId(user_id)) {
    res.status(400).json({
      status: 'error',
      type: 'bad-request',
      message: 'Must provide a valid id',
      value: null,
    });
    return;
  }

  const postToSave = new Posts({
    title: title?.trim() ?? '',
    content: content?.trim() ?? '',
    user_id: new ObjectId(user_id),
  });

  const postSaved = await postToSave.save();

  if (!postSaved) {
    res.status(400).json({
      status: 'error',
      type: 'unexpected errror',
      message: 'An error occurred while saving post',
      value: null,
    });
    return;
  }

  res.status(201).json({
    status: 'success',
    type: 'post-saved',
    message: 'Post saved successfuly',
    value: postSaved,
  });

  try {
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
