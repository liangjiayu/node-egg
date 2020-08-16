import { Service } from 'egg';
import { ArticleModel } from '../model/article';

export default class Article extends Service {
  async create(body) {
    const result = await ArticleModel.create(body);
    return result;
  }

  async list() {
    const result = await ArticleModel.find();
    return result;
  }

  async del(id) {
    const result = await ArticleModel.findByIdAndRemove(id);
    return result;
  }

  async update(body) {
    const result = await ArticleModel.findByIdAndUpdate(body.id, body);
    return result;
  }

  async detail(id) {
    const result = await ArticleModel.findById(id);
    return result;
  }
}
