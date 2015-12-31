import test from 'ava';
import numberIsNan from 'number-is-nan';
import positiveZero from 'positive-zero';
import floatEqual from 'float-equal';

Math.log10 = undefined;
const m = require('./');

test(t => {
	t.true(numberIsNan(m(NaN)));
	t.true(numberIsNan(m(-1e-50)));
	t.true(positiveZero(m(1)));
	t.is(m(0), -Infinity);
	t.is(m(-0), -Infinity);
	t.is(m(Infinity), Infinity);
	t.true(floatEqual(m(0.1), -1));
	t.true(floatEqual(m(0.5), -0.3010299956639812));
	t.true(floatEqual(m(1.5), 0.17609125905568124));
	t.true(floatEqual(m(5), 0.6989700043360189));
	t.true(floatEqual(m(50), 1.6989700043360187));
});
