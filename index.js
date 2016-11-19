"use strict";

function freqr(b, a, f) {
  var w0 = 2 * Math.PI * f;
  var ca = conv(a, Math.cos, w0);
  var sa = conv(a, Math.sin, w0);
  var cb = conv(b, Math.cos, w0);
  var sb = conv(b, Math.sin, w0);
  var mag = Math.sqrt((cb * cb + sb * sb) / (ca * ca + sa * sa));
  var phase =  Math.atan2(sa, ca) - Math.atan2(sb, cb);
  var db = 20 * Math.log(mag) / Math.LN10;

  return { mag: mag, phase: phase, db: db };
}

function conv(values, fn, w0) {
  var result = 0;

  for (var i = 0, imax = values.length; i < imax; i++) {
    result += values[i] * fn(w0 * i);
  }

  return result;
}

module.exports = freqr;
