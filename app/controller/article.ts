import { Controller } from 'egg';

// index new show edit create update destroy
export default class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    const body = ctx.request.body;
    const res = await ctx.service.article.create(body);
    ctx.body = res;
  }

  async list() {
    const { ctx } = this;
    const res = await ctx.service.article.list();
    ctx.body = res;
  }

  async del() {
    const { ctx } = this;
    const query = ctx.request.query;
    const res = await ctx.service.article.del(query.id);
    ctx.body = res;
  }

  async update() {
    const { ctx } = this;
    const body = ctx.request.body;
    const res = await ctx.service.article.update(body);
    ctx.body = res;
  }

  async detail() {
    const { ctx } = this;
    const query = ctx.request.query;
    const res = await ctx.service.article.detail(query.id);
    ctx.body = res;
  }
}
