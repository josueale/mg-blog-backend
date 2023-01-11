import { Schema, model } from 'mongoose';

import User from '@Types/user';

const UserSchema = new Schema<User>(
  {
    name: String,
    lastname: String,

    email: String,
    password: String,

    profile: String,

    token: String,
  },
  { versionKey: false, timestamps: true }
);

const Users = model('user', UserSchema);

export default Users;
