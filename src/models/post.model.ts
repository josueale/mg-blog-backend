import { Schema, model } from 'mongoose';

import Post from '@Types/post';

const PostSchema = new Schema<Post>(
  {
    title: String,
    content: String,

    user_id: Schema.Types.ObjectId,
    comments_id: [Schema.Types.ObjectId],
  },
  { versionKey: false, timestamps: true }
);

const Posts = model('post', PostSchema);

export default Posts;
