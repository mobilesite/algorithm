/**
 * https: //leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 */
export default (arr) => {
  // map用来存储每个数字出现的次数
  const map = {};

  arr.forEach(item => {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
  });

  const countArr = [];
  Object.keys(map).map(key => {
    countArr.push(map[key]);
  });
  const len = countArr.length;

  if (len === 1) {
    return countArr[0] >= 2;
  }

  // 注意这里= arr.length/2也要包含
  for (let i = 2; i <= arr.length / 2; i++) {
    if (arr.length % i !== 0) continue;
    // flag用于标记countArr是否有不能被i整除的数
    let flag = false;
    for (let j = 0; j < countArr.length; j++) {
      if (countArr[j] % i !== 0) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      return true;
    }
  }

  return false;
}