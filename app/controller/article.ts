import { Controller } from 'egg';

// index new show edit create update destroy
export default class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    const rule = {
      title: { type: 'string' },
      context: { type: 'string' },
    };
    ctx.validate(rule, ctx.request.body);

    const body = ctx.request.body;
    const result = await ctx.service.article.create(body);
    ctx.helper.success(result);
  }

  async list() {
    const { ctx } = this;
    const result = await ctx.service.article.list();
    ctx.helper.success(result);
  }

  async del() {
    const { ctx } = this;
    const rule = {
      id: { type: 'string' },
    };
    ctx.validate(rule, ctx.request.query);

    const query = ctx.request.query;
    const result = await ctx.service.article.del(query.id);
    ctx.helper.success(result);
  }

  async update() {
    const { ctx } = this;
    const rule = {
      id: { type: 'string' },
    };
    ctx.validate(rule, ctx.request.body);

    const body = ctx.request.body;
    const result = await ctx.service.article.update(body);
    ctx.helper.success(result);
  }

  async detail() {
    const { ctx } = this;
    const rule = {
      id: { type: 'string' },
    };
    ctx.validate(rule, ctx.request.query);

    const query = ctx.request.query;
    const result = await ctx.service.article.detail(query.id);
    ctx.helper.success(result);
  }
}
