/**
 * @constructor
 * @param {Object} state - state of programs (all inputs)
 */
export default class Model {
    constructor(state = {}) {
        this._state = Object.assign({}, state);
    }

    /**
     * Return initial pragram state
     */
    get getInitialState() {
        return this._state;
    }

    /**
     * Sum of a click
     */
    _addClick() {
        this._state.allClick += 1;
    }

    /**
     * @param {Number} value - sum of a click
     */
    set addCount(value) {
        this._state.currentSum += value;
        this._addClick();
    }

    /**
     * Subtract from count sum
     * @param {Number} value - sum of a click
     */
    set substracCount(value) {
        this._state.currentSum -= value;
        this._addClick();
    }

    /**
     * Return sum click
     */
    get getSumClick() {
        return this._state.allClick;
    }

    /**
     * Return current sums
     */
    get getCurrentSum() {
        return this._state.currentSum;
    }
}