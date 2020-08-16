class Message {
  success(data: any = {}, msg = 'success', options = {}) {
    return {
      code: 200,
      msg,
      data,
      ...options,
    };
  }

  error(msg = '系统错误', data = null, options = {}) {
    return {
      code: 400,
      msg,
      data,
      ...options,
    };
  }
}

export default new Message();
