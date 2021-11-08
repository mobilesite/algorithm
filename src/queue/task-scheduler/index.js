/**
 * https://leetcode-cn.com/problems/task-scheduler/
 */
export default (tasks, n) => {
  // 用来存储所求的任务队列
  let q = '';

  // 对tasks进行归类统计
  const map = {};
  tasks.forEach(item => {
    if (!map[item]) {
      map[item] = 1
    } else {
      map[item]++;
    }
  });

  while (1) {
    let keys = Object.keys(map);
    // 所有任务处理完毕，跳出
    if (!keys.length) {
      break;
    }
    // 声明一个队列，用来存储1+n个任务单元
    let tmp = [];
    for (let i = 0; i <= n; i++) {
      let max = 0;
      let maxKey;
      let maxPosition;

      keys.forEach((key, idx) => {
        if (map[key] > max) {
          max = map[key];
          maxKey = key;
          maxPosition = idx;
        }
      });

      if (maxKey) {
        tmp.push(maxKey);
        // 将该key从keys中删除，这样可以避免在1-n的遍历中，下一趟不会再出现这个类型的task了
        keys.splice(maxPosition, 1);
        // 因为这下取走了该类task的一个任务，所以该类task的剩余数量应该减1
        map[maxKey]--;

        // 如果该类任务的数量为0了，则把该类任务从map中移除掉
        if (map[maxKey] < 1) {
          delete map[maxKey];
        }
      } else {
        // 如果没有找到maxKey，说明任务队列已经结束了，需要跳出循环
        break;
      }
    }

    q += tmp.join('').padEnd(n + 1, '-');
  }
  // 去掉末尾没有任务时结尾处多余的冷却时间
  q = q.replace(/-+$/g, '');
  return q.length;
}