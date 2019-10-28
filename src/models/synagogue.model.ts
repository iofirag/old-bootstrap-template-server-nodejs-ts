import { Document, Schema, Model, model} from "mongoose";
import { CollectionsNames } from "../utils/consts";
import { CounterController } from "../controllers/counter.controller";


/* Interface */
interface ISynagogue extends Document {
  id: number,
  name: string,
  address?: string,
  bankInfo?: {
    bankNumber?: number,
    branchNumber?: number,
    accountNumber?: number,
    accountName?: string,
  }
};

/* Schema */
const SynagogueSchema = new Schema({
    id: { type: Number, unique: true },
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
);

/* pre functions */
SynagogueSchema.pre('save', async function (next) {
  try {
    this.id = await CounterController.getNextSequenceValue(`${CollectionsNames.SYNAGOGUE}Id`);
    next()
  } catch(ex) {
    return next(ex);
  }
});

export const SynagogueModel: Model<ISynagogue> = model<ISynagogue>(CollectionsNames.SYNAGOGUE, SynagogueSchema);