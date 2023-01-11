import { Schema, model } from 'mongoose';

const PostSchema = new Schema(
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
