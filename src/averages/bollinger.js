
/*
 * Returns the Bollinger Band values as an object
 * containing three arrays:
 *         - the upper values (upperBand),
 *         - central moving average values (ma),
 *         - lower band values (lowerBand).
 *         
 * Params: list - values
 *         n - size of the sample window
 *         k - height of the band (sd multiplier)
 * Usual values are n = 20 and k = 2 (i.e. the base
 * moving average is calculated on the previous 20 
 * elems for a elem and upper and lower bands are
 * located +2*sd and -2*sd from the central moving average.
 */
bollinger = function (list, n, k) {
  var movingAvg = ma (list, n);
  var movingSd = windowOp (list, n, sd);
  var upperBand = new Array();
  var lowerBand = new Array();
  var movingAvgElem = 0;
  var movingSdElem = 0;
  for (var index = 0; index < movingSd.length; index++) {
    movingAvgElem = movingAvg[index];
    movingSdElem = movingSd[index] * k;
    upperBand.push (movingAvgElem + movingSdElem);
    lowerBand.push (movingAvgElem - movingSdElem);
  }
  return {
      upperBand: upperBand,
      ma: movingAvg,
      lowerBand: lowerBand
  };
}
