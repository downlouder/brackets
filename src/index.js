module.exports = function check(str, bracketsConfig) {
  let strTable = str.split("");
  if (str.length % 2 !== 0) 
    return false;
  for (k = 0; k < bracketsConfig.length + 1; k++) {
    for (h = 0; h < bracketsConfig.length; h++) {
      for (g = 0; g < strTable.length; g++) {
        strTable = strTable.filter(el => el !== null);
        n = strTable.length;
        for (i = 0; i < n - 1; i++) {
          if (
            strTable[i] === bracketsConfig[h][0] &&
            strTable[i + 1] === bracketsConfig[h][1]
          ) {
            delete strTable[i];
            delete strTable[i + 1];
          }
        }
      }
    }
  }
  if (!strTable[0])
    return true;
  else 
    return false;
};
