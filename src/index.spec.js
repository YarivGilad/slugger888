// const log = require('@ajar/marker')
const {slugger} = require('./index');

/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        const input = 'some sentence with spaces'
        const output = slugger(input);
        const expected = 'some-sentence-with-spaces';
        expect(output).toEqual(expected);
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        const output = slugger('some sentence','with spaces','and more');
        const expected = 'some-sentence-with-spaces-and-more';
        expect(output).toEqual(expected);
    })
})