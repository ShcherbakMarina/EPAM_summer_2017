function checkPin(pin, attempt) {
  var attemptCounter = 1;

  var isMatch = function (innerPin) {
    if (innerPin == pin) {
        attemptCounter = 1;
        return true;
      } else {
        attemptCounter++;
        return false;
      }
  };

  return function verify(innerPin) {
    if ((attemptCounter + 1) < attempt) {
      return isMatch(innerPin);
    } else if ((attemptCounter + 1) == attempt) {
      return isMatch(innerPin);
    } else if (attemptCounter == attempt) {
      return isMatch(innerPin);
    } else {
      return false;
    }
  };
}
