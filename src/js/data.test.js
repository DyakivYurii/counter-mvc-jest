import { initialState } from './data';

describe(`InitialState`, () => {
    test(`must be defined`, () => {
        expect(initialState).toBeDefined();
    });
    test(`Test properties`, () => {
        expect(initialState).toEqual({
            currentSum: 0,
            allClick: 0
        });
    });
    test.skip(`Not change`, () => {
        const freezeState = Object.assign({}, initialState);
        console.log(freezeState);
        const forChanging = initialState;
        forChanging.testProperty = `test value`;
        expect(initialState).toEqual(freezeState);
    });
});