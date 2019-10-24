import * as mongoose from "mongoose";
import { CollectionsNames } from "../utils/consts";

/* Schema */
export const CounterModel = mongoose.model(
  CollectionsNames.COUNTER,
  new mongoose.Schema(
    {
      sequenceValue: { type: Number, default: 0 },
      created_at: { type: Date, default: Date.now } // membership date
    },
    { collection: CollectionsNames.COUNTER }
  )
);
