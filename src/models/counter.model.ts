import mongoose from "mongoose";
import { CollectionsNames } from "../utils/consts";

/* Interface */
interface ICounter extends mongoose.Document {
  _id: string,
  seq: number,
  created_at: Date
};

/* Schema */
const CounterSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now } // membership date
  },
  { collection: CollectionsNames.COUNTER }
);

export const CounterModel = mongoose.model<ICounter>(CollectionsNames.COUNTER, CounterSchema);