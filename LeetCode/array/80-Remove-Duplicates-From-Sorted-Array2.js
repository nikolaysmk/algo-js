/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) {
        return nums.length // Если массив содержит не более 2 элементов, то дубликатов удалять не нужно
    }

    let index = 2 // Индекс, на котором будет вставлен следующий уникальный элемент

    for (let i = 2; i < nums.length; i++) {
        // Если текущий элемент отличается от предыдущих двух элементов, он считается уникальным и может быть вставлен в массив
        if (nums[i] !== nums[index - 2]) {
            nums[index] = nums[i]
            index++
        }
    }

    return index // Возвращаем новую длину массива без дубликатов
}
