import { Context } from 'egg';

/**
 * 全局抓取错误
 */
export default function errorHandle(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      await next();
    } catch (err) {
      ctx.body = {
        code: 400,
        msg: err.message,
        data: err.errors,
      };
      ctx.status = 422;
    }
  };
}
