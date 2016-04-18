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
