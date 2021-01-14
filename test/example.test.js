// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('it should return true if the answer starts with a y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('yellow');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
