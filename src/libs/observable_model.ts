import Model from "./model";
import Observer from "./observer";


class ObservableModel extends Model {
    private _observers: Array<Observer>
    constructor() {
        super()
        this._observers = []
    }

    get observers() { return this._observers }
    set observers(observers: Array<Observer>) { this._observers = observers }

    push(observer: Observer) {
        this.observers.push(observer)
    }

    remove(observer: Observer) {
        const index = this.observers.findIndex((obj) => { return observer === obj })

        if (index > -1) {
            this.observers = this.observers.slice(index, 1)
        }
    }

    notify() {
        if (this.observers.length > 0) {
            this.observers.forEach((observer) => { observer.update(this) })
        }
    }
}

export default ObservableModel
