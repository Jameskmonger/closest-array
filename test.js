'use strict';

const test = require('modunit');
const closest = require('./index');

test('closest is goal when array contains goal only', (t, goal) => {

    let array = [ goal ];
    let output = closest(array, goal);

    t.assert.equal(goal, output);

}, [
    [ 5 ],
    [ 10 ],
    [ 200 ]
]);

test('closest is goal when array contains goal', (t, array, goal) => {

    let output = closest(array, goal);

    t.assert.equal(goal, output);

}, [
    [ [ 20, 5, 10], 5 ],
    [ [ 6, 7, 8, 10], 10 ],
    [ [ 200, 12, 22, 22.6], 200 ]
]);

test('closest is closest when array does not contain goal', (t, array, goal, expected) => {

    let output = closest(array, goal);

    t.assert.equal(expected, output);

}, [
    [ [ 20, 6, 10], 5, 6 ],
    [ [ 6, 7, 8, 10], 200, 10 ],
    [ [ 200, 12, 22, 22.6], 0, 12 ]
]);
