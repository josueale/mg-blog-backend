import { Document, Types } from 'mongoose';

export default interface Post extends Document {
  title: string;
  content: string;

  user_id: Types.ObjectId;
  comments_id: Types.ObjectId[];
}
