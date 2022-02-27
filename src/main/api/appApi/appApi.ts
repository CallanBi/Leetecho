import App from '@/app';
import to from 'await-to-js';
import Leetcode from '../leetcodeApi';
import { EndPoint } from '../leetcodeApi/utils/interfaces';

interface UsrInfo {
  usrName: string;
  pwd: string;

}

class AppApi {
  leetcode: Leetcode;
  // static leetcode: Leetcode;

  constructor (leetcode: Leetcode) {
    this.leetcode = leetcode;
  }

  static async login(usrInfo: UsrInfo) {
    const [err, leetcode] = await to(Leetcode.build(usrInfo.usrName, usrInfo.pwd, EndPoint.CN));
    if (err) {
      throw err;
    }
    return new AppApi(leetcode as Leetcode);
  }

  async getAllProblems() {
    const [err, problems] = await to(this.leetcode.getAllProblems());
    if (err) {
      throw err;
    }
    return {
      problems: problems as UnPromisifyFunction<typeof this.leetcode.getAllProblems>,
    };
  }
}

export default AppApi;