/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    // Возвращаем функцию, которая принимает аргументы
    return async function(...args) {
        // Возвращаем новый Promise
        return new Promise((resolve, reject) => {
            // Вызываем  SetTimeout и передаем в него функцию, которая будет вызвана через t миллисекунд
            const id = setTimeout(() => reject('Time Limit Exceeded'), t)
            // Вызываем функцию fn и передаем в нее аргументы, которые были переданы в функцию timeLimit
            fn(...args)
                .then((res) => resolve(res)) // Если функция fn выполнилась успешно, то вызываем resolve
                .catch((e) => reject(e)) // Если функция fn выполнилась с ошибкой, то вызываем reject
                .finally(() => clearTimeout(id)) // В любом случае очищаем таймер
        })
    }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
