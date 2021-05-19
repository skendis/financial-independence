import { Schema, model } from 'mongoose';

interface Insight {
  description : string;
  path : string;

  createdAt: string;
  visitedAt: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Insight>({
  description: { type: String, required: true },
  path: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },
  visitedAt: { type: Date },
});

// 3. Create a Model.
const InsightModel = model<Insight>('Insights', schema);

export const Insight = InsightModel;



