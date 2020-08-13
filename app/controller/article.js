const Controller = require('egg').Controller;

/**
 * index new create show edit update destroy
 */
class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const userId = ctx.request.query.id;
    const userInfo = await ctx.service.article.find(userId);
    ctx.body = userInfo;
  }
}

module.exports = ArticleController;
