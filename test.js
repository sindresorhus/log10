'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
var positiveZero = require('positive-zero');
var floatEqual = require('float-equal');
Math.log10 = undefined;
var log10 = require('./');

test(function (t) {
	t.assert(numberIsNan(log10(NaN)));
	t.assert(numberIsNan(log10(-1e-50)));
	t.assert(positiveZero(log10(1)));
	t.assert(log10(0) === -Infinity);
	t.assert(log10(-0) === -Infinity);
	t.assert(log10(Infinity) === Infinity);
	t.assert(floatEqual(log10(0.1), -1));
	t.assert(floatEqual(log10(0.5), -0.3010299956639812));
	t.assert(floatEqual(log10(1.5), 0.17609125905568124));
	t.assert(floatEqual(log10(5), 0.6989700043360189));
	t.assert(floatEqual(log10(50), 1.6989700043360187));
	t.end();
});
