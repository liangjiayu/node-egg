const Service = require('egg').Service;

class ArticleService extends Service {
  async find(uid) {
    return {
      name: `name-${uid}`,
      value: `value-${uid}`,
    };
  }
}

module.exports = ArticleService;
