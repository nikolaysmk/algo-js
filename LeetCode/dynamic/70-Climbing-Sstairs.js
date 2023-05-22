/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 3) return n

    const ways = [0, 1, 2, 3]
    for (let i = 4; i <= n; i++) {
        ways.push(ways[i - 1] + ways[i - 2])
    }
    return ways.pop()
}

var climbStairs = function (n) {
    let dp = new Array(n + 1).fill(0)

    dp[0] = 1
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}
