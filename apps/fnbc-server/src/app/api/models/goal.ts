import { Schema, model, ObjectId } from 'mongoose';

// 71. Create an interface representing a document in MongoDB.
interface Ref {
    _id : string;
    description : string;
}

interface Goal {
  type: Ref;
  description : string;
  amount: number;
  savingAmount: number;
  outcomeAmount: number;
  status: Ref;
  createdAt: string;
  updatedAt: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Goal>({
  type: {
    _id: { type: String, required: true }
  },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  savingAmount: { type: Number, required: true },

  outcomeAmount: { type: Number},

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// 3. Create a Model.
const GoalModel = model<Goal>('Goal', schema);


export const Goal = GoalModel;



