/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    return (
        JSON.stringify(s.split('').sort((a, b) => a.localeCompare(b))) ===
        JSON.stringify(t.split('').sort((a, b) => a.localeCompare(b)))
    )
}
