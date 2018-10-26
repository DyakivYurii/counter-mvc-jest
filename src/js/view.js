/**
 * @constructor
 * @param {String} selector - where must be markUp
 * @param {Object} eventEmiter - for creating event system
 * @param {Number} clickValue - how much equal a user click
 */
export default class View {
    constructor( selector, eventEmiter, clickValue) {
        this.appContainer = document.querySelector(selector);
        this.eventEmiter = eventEmiter;
        this.clickValue = clickValue;
    }

    /**
     * Bind buttons with some actions
     */
    _bindButtons() {
        this.addButton = document.querySelector(`.counter__button--add`);
        this.subtractButton = document.querySelector(`.counter__button--subtract`);

        this.addButton.addEventListener(`click`, this.addNumber.bind(this, this.clickValue));
        this.subtractButton.addEventListener(`click`, this.subtractNumber.bind(this, this.clickValue));
    }

    /**
     * Return event
     * @param {Number} clickValue - user click 
     */
    addNumber( clickValue ) {
        this.eventEmiter.emit(`add`, clickValue);
    }

     /**
     * Return event
     * @param {Number} clickValue - user click 
     */
    subtractNumber( clickValue ) {
        this.eventEmiter.emit(`subtract`, clickValue);
    }

    /**
     * Return markUp
     * @param {Object} state - initial state
     */
    initialization( state ) {
        this.appContainer.innerHTML = `
            <section class="counter">
                <h1 class="visual-hidden">This is app for count user click</h1>
                <header class="counter__header">
                    <p class="counter__sumary-click">*You have clicked <span class="counter__span">${state.allClick}</span> times</p>
                </header>
                <div class="flex-container">
                    <h2 class="counter__sum">${state.currentSum}</h2>
                </div>
                <div class="flex-container">
                    <p class="counter__description">This number show you current sum</p>
                    <button class="counter__button counter__button--add" type="button">+</button>
                    <button class="counter__button counter__button--subtract" type="button">-</button>
                </div>
            </section>`;
        this._bindButtons();
    }

    /**
     * 
     * @param {Number} value - get counter sum
     */
    renderCounterSum( value ) {
        const container = document.querySelector(`.counter__span`);
        container.textContent = value;
    }

    /**
     * 
     * @param {Number} value get current sum
     */
    renderCurrentSum( value ) {
        const container = document.querySelector(`.counter__sum`);
        container.textContent = value;
    }
}