/**
 * https://leetcode-cn.com/problems/baseball-game/
 */
export default (ops) => {
  const stack = [];
  ops.map(item => {
    switch (item) {
      case 'C':
        if (stack.length) {
          stack.pop();
        }
        break;
      case 'D':
        stack.push(2 * stack[stack.length - 1]);
        break;
      case '+':
        const top = stack.length - 1;
        stack.push(stack[top - 1] + stack[top]);
        break;
      default:
        // 这里别忘了把字符转成数字
        stack.push(+item);
        break;
    }
  });
  return stack.reduce((total, curVal) => total + curVal, 0);
}