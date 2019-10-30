// import { DebtModel } from "./debt.model";
import * as mongoose from "mongoose";

// /* User Schema */
const modelName: string = "UserM";
const collectionName: string = "users";

export const UserModel = mongoose.model(modelName, new mongoose.Schema<User>({
    // personalDetails
    _id: { type: String, unique: true },
    email: { type: String },
    phone: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    creditCardToken: { type: String }
    
    // parents
    // fatherName: { type: String },
    // motherName: { type: String },
    
    // // fatherParents
    // father_grandFatherName: { type: String },
    // father_grandMotherName: { type: String },
    
    // // motherParents
    // mother_grandFatherName: { type: String },
    // mother_grandMotherName: { type: String },

    // role: { type: String, default: "guest" },
    // obligationList: [
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: DebtModel.collection.name
    // }
    // ],
    // created_at: { type: Date, default: Date.now } // membership date
}, 
{ collection: collectionName }));


export interface User {
    _id: String,
    email: string,
    phone: string,
    firstName: string,
    lastName: string,
    address: string,
    creditCardToken: string
}