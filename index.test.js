const sumOfString = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof sumOfString('1,2,3,4,5');

	expect(type).toBe('number');
});

test('Тест. str: "1,2,3,4,5"', () => {
	const res = sumOfString('1,2,3,4,5');

	expect(res).toBe(15);
});

test('Тест. str: ""', () => {
	const res = sumOfString('');

	expect(res).toBe(0);
});

test('Тест. str: "-9,1,7,2,5,8,-7"', () => {
	const res = sumOfString('-9,1,7,2,5,8,-7');

	expect(res).toBe(7);
});

test('Тест. str: "6,-8,3,-1"', () => {
	const res = sumOfString('6,-8,3,-1');

	expect(res).toBe(0);
});

test('Тест. str: "2,-5,7,-8,-8"', () => {
	const res = sumOfString('2,-5,7,-8,-8');

	expect(res).toBe(-12);
});

test('Тест. str: "1,-4,-2,-9,4,1,1,2,-4,7,0"', () => {
	const res = sumOfString('1,-4,-2,-9,4,1,1,2,-4,7,0');

	expect(res).toBe(-3);
});

test('Auto: random outcomes', () => {
	let failed = false;

	const getStr = () => {
		let str = '';
		const iterations = getRandomInt(0, 40);

		for (let i = 0; i < iterations; i++) {
			str += getRandomInt(-9, 9);

			if (i !== iterations - 1) {
				str += ',';
			}
		}

		return str;
	};

	for (let i = 0; i < 100; i++) {
		const str = getStr();

		if (solution(str) !== sumOfString(str)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});