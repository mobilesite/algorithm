/**
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 */
export default (str, words) => {
  const strLen = str.length;
  const wordsArrLength = words.length;
  const result = [];

  if (wordsArrLength === 0 || strLen === 0) return result;

  // 每个单词的长度
  const wordLength = words[0].length;
  // 单词长度总和 = 单个单词的长度 * 单词个数（因为每个单词的长度都一样）
  const totalLength = wordLength * wordsArrLength;

  for (let i = 0; i < strLen; i++) {
    if (i + totalLength > strLen) break;

    const remainWords = Array.prototype.slice.call(words);

    while (remainWords.length) {
      const startIndex = i + (wordsArrLength - remainWords.length) * wordLength;
      const nextWord = str.substr(startIndex, wordLength);

      const idx = remainWords.indexOf(nextWord);
      if (idx > -1) {
        remainWords.splice(idx, 1);
      } else {
        break;
      }
    }

    if (remainWords.length === 0) {
      result.push(i);
    }
  }

  return result;
}