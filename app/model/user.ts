import { Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema({
  userName: { type: String },
  password: { type: String },
});

const UserModel = model('User', UserSchema);

export { UserModel };
