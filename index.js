'use strict';

module.exports = function (array, goal) {
    return array.reduce(function (prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
};
