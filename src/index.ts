import { addUserToData } from "./libs/user";

addUserToData(document.querySelector<HTMLFormElement>('#userform')!)

class ObservableList<T> extends Array<T> {
    myMethod() {
        return "this is my method fired."
    }
}

export { ObservableList }
