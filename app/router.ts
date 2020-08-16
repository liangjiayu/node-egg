import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.post('/article/create', controller.article.create);

  router.delete('/article/del', controller.article.del);

  router.get('/article/list', controller.article.list);

  router.get('/article/detail', controller.article.detail);

  router.put('/article/update', controller.article.update);
};
