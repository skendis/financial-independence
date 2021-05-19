import { Schema, model, ObjectId } from 'mongoose';
import * as mongoose from "mongoose";

// 71. Create an interface representing a document in MongoDB.
interface Ref {
    _id : string;
    description : string;
}

interface Goal {
  owner: {
    _id: mongoose.Types.ObjectId;
  }
  type: string;
  description : string;
  amount: number;
  savingAmount: number;
  outcomeAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Goal>({
  owner: {
    _id: { type: mongoose.Types.ObjectId, required: true }
  },
  type: {
    _id: { type: String, required: true },
    description: { type: String }
  },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  savingAmount: { type: Number, required: true },
  status: {
    type: String,
    enum : ['GOOD', 'BAD', 'REQUIRE_IMPROVEMENT'],
    default: 'GOOD'
  },
  outcomeAmount: { type: Number},

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// 3. Create a Model.
const GoalModel = model<Goal>('Goals', schema);


export const Goal = GoalModel;



