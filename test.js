import test from 'ava';
import numberIsNan from 'number-is-nan';
import positiveZero from 'positive-zero';
import floatEqual from 'float-equal';

Math.log10 = undefined;
const log10 = require('.');

test('main', t => {
	t.true(numberIsNan(log10(NaN)));
	t.true(numberIsNan(log10(-1e-50)));
	t.true(positiveZero(log10(1)));
	t.is(log10(0), -Infinity);
	t.is(log10(-0), -Infinity);
	t.is(log10(Infinity), Infinity);
	t.true(floatEqual(log10(0.1), -1));
	t.true(floatEqual(log10(0.5), -0.3010299956639812));
	t.true(floatEqual(log10(1.5), 0.17609125905568124));
	t.true(floatEqual(log10(5), 0.6989700043360189));
	t.true(floatEqual(log10(50), 1.6989700043360187));
});
