/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
    const stack = []
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (pairs[char]) {
            stack.push(char)
        } else if (char === ')' || char === ']' || char === '}') {
            const top = stack.pop()

            if (pairs[top] !== char) {
                return false
            }
        }
    }

    return stack.length === 0
}
