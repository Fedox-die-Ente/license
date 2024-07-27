import {Document, model, models, Schema} from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    username: string;
    password?: string;
    licenses: Schema.Types.ObjectId[];
    joinedAt: Date;
}

const UserSchema = new Schema<IUser>({
    clerkId: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String},
    licenses: [{type: Schema.Types.ObjectId, ref: 'License'}],
    joinedAt: {type: Date, default: Date.now}
});

const User = models.User || model('User', UserSchema);

export default User;