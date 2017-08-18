function automorphSum() {
  var num = Math.pow(10, 15);
  var finNum = Math.pow(10, 20);
  var arr = [];
  arr[0] = 1;
  var sum = 0;
  var bigNum = 0;

  for (var i = 11; i <= num; i = (i - 1) * 10 + 1) {
    arr.push(i);
  }

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (i = num; i <= finNum; i *= 10) {
    bigNum += i;
  }

  sum -= 10001;
  sum = new BigNumber(sum.toString());
  sum = sum.add(bigNum).toString();
  sum = new BigNumber(sum.toString());
  sum = sum.add(6).toString();
  console.log('The sum of automorphic numbers until 10^20 is: ' + sum.toString());
}

automorphSum();
