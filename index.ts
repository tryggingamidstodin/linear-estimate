export interface Point extends Array<number> {}
function getX(point: Point) {
    return point[0]
}

function validateArray(array: Point[]) {
    return array.map(p1 => {
        if ((!p1[0] && p1[0] !== 0) || (!p1[1] && p1[1] !== 0)) {
            throw new Error(`Point ${p1} is invalid`)
        }
        array.forEach(p2 => {
            if (p1[0] === p2[0] && p1[1] !== p2[1]) {
                throw new Error(
                    'Cannot create linear estimate when array has two points with same x and different y'
                )
            }
        })
        return p1
    })
}

function partition(arr: Point[], f: (p: Point) => boolean) {
    var first: Point[] = [],
        second: Point[] = []
    for (var i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            first.push(arr[i])
        } else {
            second.push(arr[i])
        }
    }
    return [first, second]
}
function max(arr: Point[], f: (p: Point) => number) {
    var maxIndex = -1,
        maxValue = -Infinity,
        value
    for (var i = 0; i < arr.length; i++) {
        value = f(arr[i])
        if (value > maxValue) {
            maxIndex = i
            maxValue = value
        }
    }
    if (maxIndex === -1) {
        throw new Error(`Unable to find minimum point in array ${arr}`)
    }
    return arr[maxIndex]
}

function min(arr: Point[], f: (p: Point) => number) {
    var minIndex = -1,
        minValue = Infinity,
        value
    for (var i = 0; i < arr.length; i++) {
        value = f(arr[i])
        if (value < minValue) {
            minIndex = i
            minValue = value
        }
    }
    if (minIndex === -1) {
        throw new Error(`Unable to find minimum point in array ${arr}`)
    }
    return arr[minIndex]
}

/**
 *  array: array of points [[x1, y1], [x2, y2], [x3, y3]...] in the estimated f(x)
 *  value: is x
 *  returns estimation of f(x)
 *    flattens out the boundaries of the function
 */
export default function linearEstimateFromArray(array: Point[]) {
    array = validateArray(array)
    return function(value: number) {
        var parts = partition(array, function(point: Point) {
            return value >= point[0]
        })

        if (!parts[0].length) {
            return min(array, getX)[1]
        }
        if (!parts[1].length) {
            return max(array, getX)[1]
        }

        var point1 = max(parts[0], getX)
        var point2 = min(parts[1], getX)

        //Line equation
        //y = inclination * (x − x1) + y1
        var hallatala = (point2[1] - point1[1]) / (point2[0] - point1[0])
        return point1[1] + (value - point1[0]) * hallatala
    }
}
function getXValues(arrays: Point[][]) {
    return arrays
        .reduce((prev, curr) => {
            return prev.concat(validateArray(curr))
        }, [])
        .reduce((prev, curr) => {
            const x = getX(curr)
            if (prev.indexOf(x) === -1) {
                prev.push(x)
            }
            return prev
        }, [])
}
export function linearEstimateFromAverageOfArrays(arrays: Point[][]) {
    const xs = getXValues(arrays)
    const linearEstimateFunctions = arrays.map(a => linearEstimateFromArray(a))
    const averageArray = xs.map(x => {
        return [
            x,
            linearEstimateFunctions.reduce((sum, f) => f(x) + sum, 0) /
                arrays.length
        ]
    })
    return linearEstimateFromArray(averageArray)
}
export function linearEstimateFromSumOfArrays(arrays: Point[][]) {
    const xs = getXValues(arrays)
    const linearEstimateFunctions = arrays.map(a => linearEstimateFromArray(a))
    const averageArray = xs.map(x => {
        return [x, linearEstimateFunctions.reduce((sum, f) => f(x) + sum, 0)]
    })
    return linearEstimateFromArray(averageArray)
}
