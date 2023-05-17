Array.prototype.last = function() {
    // Если массив пустой, то возвращаем -1
    if (!this.length) return -1
    // Возвращаем последний элемент массива
    return this[this.length - 1]
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
