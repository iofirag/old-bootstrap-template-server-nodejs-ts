import * as mongoose from "mongoose";
import { ObligationModel } from "./obligation.model";

/* User Schema */
const modelName: string = "UserM";
const collectionName: string = "users";

export const UserModel = mongoose.model(
  modelName,
  new mongoose.Schema(
    {
      // personalDetails
      // id: { type: String, unique: true },
      email: { type: String, unique: true },
      firstName: { type: String },
      lastName: { type: String },
      address: { type: String },
      phone: { type: String },
      // parents
      fatherName: { type: String },
      motherName: { type: String },
      // fatherParents
      father_grandFatherName: { type: String },
      father_grandMotherName: { type: String },
      // motherParents
      mother_grandFatherName: { type: String },
      mother_grandMotherName: { type: String },

      role: { type: String, default: "guest" },
      obligationList: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: ObligationModel.collection.name
        }
      ],

      created_at: { type: Date, default: Date.now } // membership date
    },
    { collection: collectionName }
  )
);
