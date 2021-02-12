module.exports = function check(str, bracketsConfig) {

	let brackets = bracketsConfig.join(',').split(',').join('');

	let stack = [];

	for (let strBracket of str) {
		let bracketsIndex = brackets.indexOf(strBracket);
		
 		if (bracketsIndex % 2 === 0) {
			if (strBracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex) {
					stack.pop();
			} else if (strBracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
					stack.push(bracketsIndex);
			} else {
					stack.push(bracketsIndex);
      }   
		} else {
			if (stack.pop() !== bracketsIndex - 1) {
				return false;
			}
		}
	} return stack.length === 0;
}