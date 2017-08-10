function findMaxSubstr(str) {
  var maxSubstr = '';
  var tempSubstr = '';
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (tempSubstr.indexOf(arr[i]) == -1) {
      tempSubstr += arr[i];
    } else {
      if (maxSubstr.length < tempSubstr.length) maxSubstr = tempSubstr;
      tempSubstr = '';
      i--;
    }
  }
  if (maxSubstr.length < tempSubstr.length) maxSubstr = tempSubstr;
  
  return maxSubstr;
}

