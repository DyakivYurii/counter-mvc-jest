export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, ...callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(...callback);
    }

    // !!! Реалізувати відписку від події

    emit(event, ...arg) {
        if(this.events[event]) {
            this.events[event].forEach(element => {
                element(...arg);
            });
        }
    }
}