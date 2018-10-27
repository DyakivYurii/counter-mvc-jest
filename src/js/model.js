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
     * @param {Number} value - sum of a click
     */
    set _addClick(value) {
        this._state.allClick += value;
    }

    /**
     * @param {Number} value - sum of a click
     */
    set addCount(value) {
        this._state.currentSum += value;
        this._addClick = value;
    }

    /**
     * Subtract from count sum
     * @param {Number} value - sum of a click
     */
    set substracCount(value) {
        this._state.currentSum -= value;
        this._addClick = value;
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