export default class Model {
    constructor(state = {}) {
        this._state = Object.assign({}, state);
    }

    set _addClick(value) {
        this._state.allClick += value;
    }

    set addCount(value) {
        this._state.currentSum += value;
        this._addClick = value;
    }

    set substracCount(value) {
        this._state.currentSum -= value;
        this._addClick = value;
    }

    get getSumClick() {
        return this._state.allClick;
    }

    get getCurrentSum() {
        return this._state.currentSum;
    }
}