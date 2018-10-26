export default class View {
    constructor( selector, eventEmiter, clickValue) {
        this.appContainer = document.querySelector(selector);
        this.eventEmiter = eventEmiter;
        this.clickValue = clickValue;
    }

    bindButtons() {
        this.addButton = document.querySelector(`.counter__button--add`);
        this.subtractButton = document.querySelector(`.counter__button--subtract`);

        this.addButton.addEventListener(`click`, this.addNumber.bind(this, this.clickValue));
        this.subtractButton.addEventListener(`click`, this.subtractNumber.bind(this, this.clickValue));
    }

    addNumber( clickValue ) {
        this.eventEmiter.emit(`add`, clickValue);
    }

    subtractNumber( clickValue ) {
        this.eventEmiter.emit(`subtract`, clickValue);
    }

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
        this.bindButtons();
    }

    renderCounterSum( value ) {
        const container = document.querySelector(`.counter__span`);
        container.textContent = value;
    }

    renderCurrentSum( value ) {
        const container = document.querySelector(`.counter__sum`);
        container.textContent = value;
    }
}