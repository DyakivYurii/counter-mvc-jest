/**
 * @constructor
 * @param {Object} model
 * @param {Object} view
 * @param {Object} eventEmiter
 */
export default class Controller {
    constructor(model, view, eventEmiter) {
        this.model = model;
        this.view = view; 
        this.eventEmiter = eventEmiter;

        this.view.initialization(this.model.initialState);
        eventEmiter.on(`add`, this.addNumber.bind(this));
        eventEmiter.on(`subtract`, this.subtractNumber.bind(this));
    }

    /**
     * 
     * @param {Number} value - take sum of click
     */
    addNumber(value) {
        this.model.addCount = value;
        this.view.renderCounterSum(this.model.getSumClick);
        this.view.renderCurrentSum(this.model.getCurrentSum);
    }

    /**
     * 
     * @param {Number} value - take sum of click
     */
    subtractNumber(value) {
        this.model.substracCount = value;
        this.view.renderCounterSum(this.model.getSumClick);
        this.view.renderCurrentSum(this.model.getCurrentSum);
    }
}