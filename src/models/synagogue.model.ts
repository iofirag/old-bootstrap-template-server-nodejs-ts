import * as mongoose from "mongoose";
import { CollectionsNames } from "../utils/consts";
import { CounterController } from "../controllers/counter.controller";


/* Interface */
export interface ISynagogue extends mongoose.Document {
  id: Number,
  name: String,
  address?: String,
  bankInfo?: {
    bankNumber?: Number,
    branchNumber?: Number,
    accountNumber?: Number,
    accountName?: String,
  }
};

/* Schema */
export const SynagogueSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
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
  // const doc = this;
  // const filter: any = {_id: 'synagogueId'};
  // const update: any = {$inc: { seq: 1} };
  // const options: any = {new: true, upsert: true};

  // try {
  //   doc.id = await CounterController.getNextSequenceValue('synagogueId');
  //   next()
  // } catch(ex) {
  //   return next(ex);
  // }

  // CounterModel.findByIdAndUpdate(filter, update, options, (error, counter) => {
  //     if(error)
  //         return next(error);
  //     doc.id = counter.seq;
  //     next();
  // });
  // const sequenceDocument = CounterModel.findOneAndUpdate({
  //   filter:{_id: sequenceName },
  //   update: {$inc:{seq:1}},
  //   returnNewDocument: true
  // });
  // return sequenceDocument.seq;
});

export const SynagogueModel = mongoose.model<ISynagogue>(CollectionsNames.SYNAGOGUE, SynagogueSchema);