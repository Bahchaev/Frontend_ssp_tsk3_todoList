import {SHOW_LIST} from "./actionTypes";

export function showList(listName) {
    return {
        type: SHOW_LIST,
        listName
    }
}