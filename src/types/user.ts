import { Document, } from 'mongoose';

export default interface User extends Document {
  name: string;
  lastname: string;

  email: string;
  password: string;

  profile: string;

  token: string;
}
