import * as mongoose from "mongoose";
import { CollectionsNames } from "../utils/consts";

/* Schema */

export const SynagogueModel = mongoose.model(
  CollectionsNames.SYNAGOGUE,
  new mongoose.Schema({
      name: { type: String, required: true },
      address: { type: String, required: true },
      bankInfo: {
        bankNumber: { type: Number },
        branchNumber: { type: Number },
        accountNumber: { type: Number },
        accountName: { type: String },
      }
    },
    { collection: CollectionsNames.SYNAGOGUE }
  )
);
