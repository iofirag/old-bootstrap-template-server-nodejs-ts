import * as mongoose from "mongoose";

/* Schema */
const modelName: string = "SynagogueM";
const collectionName: string = "synagogues";

export const SynagogueModel = mongoose.model(
  modelName,
  new mongoose.Schema(
    {
      // id: { type: String, unique: true },
      name: { type: String, required: true },
      address: { type: String, required: true },
      adminList: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: collectionName,
          default: []
        }
      ]
      // memberList: [],
      // contact:
    },
    { collection: collectionName }
  )
);
