'use strict';
function getX(point) {
    return point[0];
}

function partition(arr, f) {
    var first = [], second = [];
    for(var i=0;i<arr.length; i++){
        if(f(arr[i])) {
            first.push(arr[i]);
        } else {
            second.push(arr[i]);
        }
    }
    return [first, second];
}

function max(arr, f) {
    var maxIndex = -1, maxValue = -Infinity, value;
    for(var i = 0; i < arr.length; i++) {
        value = f(arr[i]);
        if(value > maxValue) {
            maxIndex = i;
            maxValue = value;
        }
    }
    return maxIndex > -1 ? arr[maxIndex] : undefined;
}

function min(arr, f) {
    var minIndex = -1, minValue = Infinity, value;
    for(var i = 0; i < arr.length; i++) {
        value = f(arr[i]);
        if(value < minValue) {
            minIndex = i;
            minValue = value;
        }
    }
    return minIndex > -1 ? arr[minIndex] : undefined;
}


/**
 *  array: array of points [[x1, y1], [x2, y2], [x3, y3]...] in the estimated f(x)
 *  value: is x
 *  returns estimation of f(x)
 *    flattens out the boundaries of the function
 */
module.exports = function linearEstimateFromArray(array){
    return function(value) {
        var parts = partition(array, function(point) {
            return value >= point[0];
        });

        if(!parts[0].length) {
            return min(array, getX)[1];
        }
        if(!parts[1].length) {
            return max(array, getX)[1];
        }

        var point1 = max(parts[0], getX);
        var point2 = min(parts[1], getX);

        //Jafn línu
        //y = hallatala * (x − x1) + y1
        var hallatala = (point2[1] - point1[1]) / (point2[0] - point1[0]);
        return point1[1] + (value - point1[0]) * hallatala;
    };
};
