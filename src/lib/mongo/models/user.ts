import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    password?: string;
    phoneNumber:number;
    googleId?: string;
    age:number;
}

const UserSchema = new Schema<IUser>({
    id:{type:String,required:false},
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    googleId: { type: String, required: false },
    phoneNumber:{type:Number,required:false},
    age:{type:Number,required:false}
});

const User=mongoose.models.User||mongoose.model("User", UserSchema,"user");

export default User;
