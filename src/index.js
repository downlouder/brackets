module.exports = function check(str, bracketsConfig) {
  const pairs = new Map(bracketsConfig);
  const stack = [];
  for (const char of str) {
    if (pairs.get(stack.at(-1)) === char)
      stack.pop();
    else 
      stack.push(char);
  }
  return stack.length === 0;
};
