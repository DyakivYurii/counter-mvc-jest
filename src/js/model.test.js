import Model from './model';

describe(`Model class`, () => {
    test(`Must be defined`, () => {
        expect(Model).toBeDefined();
    });
    test(`_state must be Object`, () => {
        const resultObject = new Model({});
        const resultNumber = new Model(1);
        expect(resultObject._state).toEqual(expect.any(Object));
        expect(resultNumber._state).not.toEqual(expect.any(Number));
    });
    test(`Check property`, () => {
        const result = new Model();
        expect(result).toEqual({
            _state: {}
        });
    });
    test.skip(`Check equaling arguments to properties`, () => {
        const state = {
            currentSum: 0,
            allClick: 0
        };
        const model = new Model(state);
        expect(model._state).toEqual(state);
    });
    describe(`Methods`, () => {
        test(`getInitialState - should return state`, () => {
            const state = {
                currentSum: 0,
                allClick: 0
            };
            const model = new Model(state);
            let result = model.getInitialState;
            expect(result).toEqual(state);
            
            model._state.currentSum = 1;
            result = model.getInitialState;
            expect(result).toEqual({
                currentSum: 1,
                allClick: 0
            });
        });
        test(`_addClick should set new value`, () => {
            const model = new Model({
                currentSum: 0,
                allClick: 0
            });
            model._addClick = 1;
            expect(model._state.allClick).toBe(1);

            model._state.allClick = 0;
            model._addClick = 3;
            expect(model._state.allClick).toBe(3);
        });
        test(`addCount should set new value`, () => {
            const state = {
                currentSum: 0,
                allClick: 0
            };
            const model = new Model(state);
            model.addCount = 1;
            expect(model._state).toEqual({
                currentSum: 1,
                allClick: 1
            });
            model._state = state;
        });
    });
});