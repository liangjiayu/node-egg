import { Service } from 'egg';
import { ArticleModel } from '../model/article';
import Message from '../utils';

export default class Article extends Service {
  async create(body) {
    const result = await ArticleModel.create(body);
    return Message.success(result);
  }

  async list() {
    const result = await ArticleModel.find();
    return Message.success(result);
  }

  async del(id) {
    try {
      const result = await ArticleModel.findByIdAndRemove(id);
      return Message.success(result);
    } catch (error) {
      return Message.error();
    }
  }

  async update(body) {
    try {
      const result = await ArticleModel.findByIdAndUpdate(body.id, body);
      return Message.success(result);
    } catch (error) {
      return Message.error();
    }
  }

  async detail(id) {
    try {
      const result = await ArticleModel.findById(id);
      return Message.success(result);
    } catch (error) {
      return Message.error();
    }
  }
}
