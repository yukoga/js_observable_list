import Controller from "./controller";
import User from "./user";

class UserController extends Controller {
    private _user: User

    constructor(user: User) {
        super()
        this._user = user
    }

    get user() { return this._user }

    eventHandler(event: Event): void {
        event.stopPropagation()
        switch (event.type) {
            case 'click':
                this.clickHandler(event)
                break
            default:
                console.log(event)
        }
    }

    clickHandler(event: Event) {
        this.user.notify(this.user)
    }
}
