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
    test(`Not change`, () => {
        
    })
});