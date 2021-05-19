import { Schema, model, Model } from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

interface User {
  nickname: string;
  birthdate: string;
}

interface UserModel extends Model<User> {
  authenticate(): any;
  serializeUser(): any;
  deserializeUser(): any;
  register(a,b,c): any;
}

// Create Schema
const UserSchema = new Schema<User, UserModel>({
  nickname: String,
  birthdate: Date
});

UserSchema.plugin(passportLocalMongoose);

// 3. Create a Model.
const UserModel = model<User, UserModel>('Users', UserSchema);

export const User = UserModel;


