/*
 *
 * Color Clock
 *
 */

(function () {
  'use strict';

  var d, h, m, s, color;

  function colorClock() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if (h <= 9)
      h = '0' + h;
    if (m <= 9)
      m = '0' + m;
    if (s <= 9)
      s = '0' + s;

    // Seconds controller
    var sDegree = s * 6,
        sRotate = 'rotate(' + sDegree + 'deg)',
        sTarget = $('.sElem');

    // Rotate the seconds element
    sTarget.css('transform', sRotate);

    // Minutes controller
    var mDegree = m * 6,
        mRotate = 'rotate(' + mDegree + 'deg)',
        mTarget = $('.mElem');

    // Rotate the minutes element
    mTarget.css('transform', mRotate);

    // Hours controller
    var hDegree = h * 30 + (m/2),
        hRotate = 'rotate(' + hDegree + 'deg)',
        hTarget = $('.hElem');

    hTarget.css('transform', hRotate);

    console.log('Hour: ' + hRotate + ' - Minute: ' + mRotate + ' - Second: ' + sRotate);

    color = '#' + h + m + s;
    $('body').css('background', color);
    $('.color').html(color);

    setTimeout(colorClock, 1000);
  }

  // properly match the milliseconds of the host computer
  setTimeout(colorClock, 1000 - new Date().getMilliseconds());

})();