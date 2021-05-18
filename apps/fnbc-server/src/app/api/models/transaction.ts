import { Schema, model } from 'mongoose';

// 71. Create an interface representing a document in MongoDB.
interface Ref {
    _id : string;
    description : string;
}

interface Transaction {
  type: Ref;
  goal: Ref;
  description : string;
  amount: number;
  properties: {
    stock: {
      _id: string;
      description: string;
      quantity: number;
      value: number;
      currency: Ref;
      rise: boolean;
      updatedAt: string;
    }
  };

  createdAt: string;
  updatedAt: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Transaction>({
  type: {
    _id: { type: String, required: true }
  },
  goal: {
    _id: { type: String, required: true }
  },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// 3. Create a Model.
const TransactionModel = model<Transaction>('Transaction', schema);


export const Transaction = TransactionModel;



