import { Service } from 'egg';

export default class Test extends Service {
  public getList(value: string) {
    return `hi ${value}`;
  }
}
