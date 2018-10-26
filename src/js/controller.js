export default class Controller {
    constructor(model, view, eventEmiter) {
        this.model = model;
        this.view = view; 
        this.eventEmiter = eventEmiter;

        eventEmiter.on(`add`, this.addNumber.bind(this));
        eventEmiter.on(`subtract`, this.subtractNumber.bind(this));
    }

    addNumber(value) {
        this.model.addCount = value;
        this.view.renderCounterSum(this.model.getSumClick);
        this.view.renderCurrentSum(this.model.getCurrentSum);
    }

    subtractNumber(value) {
        this.model.substracCount = value;
        this.view.renderCounterSum(this.model.getSumClick);
        this.view.renderCurrentSum(this.model.getCurrentSum);
    }
}