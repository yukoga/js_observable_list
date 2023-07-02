import ObservableModel from "./observable_model"

class User extends ObservableModel {
    private _name: string
    private _email: string

    constructor(name: string, email: string) {
        super()
        this._name = name
        this._email = email
    }

    get name() {
        return this._name
    }

    get email() {
        return this._email
    }
}

export default User
