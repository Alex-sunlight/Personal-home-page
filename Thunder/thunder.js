var log = function () {
    console.log.apply(console, arguments)
}

let direction = function (arr) {
    let result = []
    let find = function (i, i2) {
        if (i < 0) {
            return 0
        } else if (i2 < 0) {
            return 0
        }
        if (i >= arr.length) {
            return 0
        }
        if (arr[i][i2] === 9) {
            return 1
        } else {
            return 0
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i]
        let w = []
        for (let i2 = 0; i2 < e.length; i2++) {
            let top = find(i - 1, i2)
            let topleft = find(i - 1, i2 - 1)
            let topright = find(i - 1, i2 + 1)
            let left = find(i, i2 - 1)
            let right = find(i, i2 + 1)
            let boottom = find(i + 1, i2)
            let boottomleft = find(i + 1, i2 - 1)
            let boottomright = find(i + 1, i2 + 1)
            if (e[i2] === 9) {
                w.push(9)
            } else {
                w.push(
                    top + topleft + topright + left + right + boottom + boottomleft + boottomright,
                )
            }
        }
        result.push(w)
    }
    log(result)
    return result
}
var arr77 = [
    [0, 9, 0, 0],
    [0, 0, 9, 0],
    [9, 0, 9, 0],
    [0, 9, 0, 0],
]
direction(arr77)
var arr88 = [
    [0, 9, 0, 0],
    [0, 9, 0, 0, 0, 9],
    [0, 9, 0, 0],
    [0, 9, 0, 0],
    [0, 9, 0, 0],
    [0, 9, 0, 0],
    [0, 0, 9, 0],
    [9, 0, 9, 0],
    [0, 9, 0, 0],
]
direction(arr88)
