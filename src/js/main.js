import Controller from './controller';
import Model from './model';
import View from './view';
import EventEmitter from './helper';
import { initialState } from './data';


const eventEmiter = new EventEmitter();

const model = new Model(initialState);
const view = new View(`#app`, eventEmiter, 1);
const controller = new Controller(model, view, eventEmiter);