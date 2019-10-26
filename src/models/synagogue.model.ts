import * as mongoose from "mongoose";
import { CollectionsNames } from "../utils/consts";
import { CounterModel } from "./counter.model";


/* Schema */
const schema = new mongoose.Schema({
    id: { type: Number, required: true },
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
schema.pre('save', function (next) {
  const doc = this;
  CounterModel.findByIdAndUpdate({_id: 'synagogueId'}, {$inc: { seq: 1} }, {new: true, upsert: true}, (error, counter) => {
      if(error)
          return next(error);
      doc.id = counter.seq;
      next();
  });
});

export const SynagogueModel = mongoose.model(CollectionsNames.SYNAGOGUE, schema);