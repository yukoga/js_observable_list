import Observer from "./observer";
import Controller from "./controller";
import User from "./user";


class UserListView extends Observer {
    private _controller: Controller
    private _ul: HTMLUListElement

    constructor(controller: Controller, ulId: string) {
        super()
        this._controller = controller
        this._ul = <HTMLUListElement>document.getElementById(ulId);
    }

    get ul() { return this._ul }
    get controller() { return this._controller }

    update(user: User): void {
        const li = document.createElement('li')
        const userName = document.createElement('p')
        userName.setAttribute('class', 'username')
        userName.textContent = user.name
        const email = document.createElement('p')
        email.setAttribute('class', 'email')
        email.textContent = user.email
        this.ul.appendChild(li)
    }
}

export default UserListView
