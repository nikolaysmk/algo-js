/**
 *
 * @param {number} millis
 */
async function sleep(millis) {
    // Возвращаем новый Promise и вызываем resolve через millis миллисекунд
    return new Promise((reslolve) => setTimeout(reslolve, millis))
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
