/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0
    let set = new Set()
    let i = 0
    let j = 0

    while (i < s.length && j < s.length) {
        // проходимся по строке, пока не дойдем до конца
        // i - начало подстроки, j - конец подстроки
        // если символа нет в set, то добавляем его в set и увеличиваем j
        // если символ есть в set, то удаляем его из set и увеличиваем i
        // при этом на каждой итерации сравниваем длину подстроки с максимальной
        // и если она больше, то обновляем максимальную длину
        // в итоге получаем максимальную длину подстроки без повторяющихся символов
        // в худшем случае будет O(2n) = O(n)

        if (!set.has(s[j])) {
            set.add(s[j++])
            max = Math.max(max, j - i)
        } else {
            set.delete(s[i++])
        }
    }
    return max
}

var lengthOfLongestSubstring = function (s) {
    let max = 0
    let obj = {}
    let i = 0
    let j = 0

    while (i < s.length && j < s.length) {
        if (!obj[s[j]]) {
            obj[s[j++]] = true
            max = Math.max(max, j - i)
        } else {
            delete obj[s[i++]]
        }
    }
    return max
}
