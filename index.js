function sumOfString(str) {
	const arrStr = str.split(',');
	let result = 0;

	for (let i = 0; i < arrStr.length; i++) {
		result += +arrStr[i];
	}

	return result;
}

module.exports = sumOfString;
