"use strict";

require("run-with-mocha");

const assert = require("assert");
const freqr = require("../");

function closeTo(a, b) {
  return Math.abs(a - b) < 1e-4;
}

describe("compute", () => {
  const b = [ 0.000608,  0.001216, 0.000608 ];
  const a = [ 1.000000, -1.954108, 0.956540 ];

  it("f: 0.0625", () => {
    const res = freqr(b, a, 0.0625);

    assert(closeTo(res.mag, 0.015867743641138077), `mag: ${ res.mag }`);
    assert(closeTo(res.phase, -3.028552532196045), `phase: ${ res.phase }`);
  });

  it("f: 0.1250", () => {
    const res = freqr(b, a, 0.125);

    assert(closeTo(res.mag, 0.0036327731795608997), `mag: ${ res.mag }`);
    assert(closeTo(res.phase, -3.087790012359619), `phase: ${ res.phase }`);
  });

  it("f: 0.2500", () => {
    const res = freqr(b, a, 0.25);

    assert(closeTo(res.mag, 0.0006221591029316187), `mag: ${ res.mag }`);
    assert(closeTo(res.phase, -3.119356155395508), `phase: ${ res.phase }`);
  });
});
