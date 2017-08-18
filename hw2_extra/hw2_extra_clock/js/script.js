function angleTime(hours, minutes) {
  var minDeg = minutes * 6;
  var hourDeg = hours * 30 + minutes / 2;
  var res = Math.abs(minDeg - hourDeg);
  if (res == 360) res = 0;
  return res;
}
