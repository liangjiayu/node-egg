import { Schema, model } from 'mongoose';

const ArticleSchema: Schema = new Schema({
  title: { type: String },
  context: { type: String },
});

const ArticleModel = model('Article', ArticleSchema);

export { ArticleModel };
