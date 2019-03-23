module.exports = function getZerosCount(number, base) {
  // your implementation
  return calc(number, base);
}


var calc = function(num, base)
{
  var j,p,noz;
  noz = num;
  j = base;

  for (var i=2; i<= base; i++)
  {
    if (j % i == 0)
    {
      var c = 0, k = num;

      p = 0;
      while (j % i == 0)
      {
        p++;
        j = Math.floor(j / i);
      }

      while (k / i > 0)
      {
        var temp = Math.floor(k / i);
        c = c + temp;
        k = temp;
      }

      noz = Math.min(noz, Math.floor(c / p));
    }
  }

  return noz;
}
// calc(46899647, 232);
