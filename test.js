'use strict';

const test = require('modunit');
const closest = require('./index');

test('closest is goal when array contains goal only', (t, goal) => {

    let array = [ goal ];
    let output = closest(goal);

    t.assert.equal(goal, output);

}, [
    [ 5 ],
    [ 10 ],
    [ 200 ]
]);

test('closest is goal when array contains goal', (t, array, goal) => {

    let array = [ goal ];
    let output = closest(goal);

    t.assert.equal(goal, output);

}, [
    [ [ 20, 5, 10], 5 ],
    [ [ 6, 7, 8, 10], 10 ],
    [ [ 200, 12, 22, 22.6], 200 ]
]);
