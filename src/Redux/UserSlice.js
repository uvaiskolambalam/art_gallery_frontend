


import Cookies from "js-cookie";
export function userSlice(
    state = Cookies.get("userData") ? JSON.parse(Cookies.get("userData")) : null,
    action


){
    switch (action.type){
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return null

            default:
                return state
    }
}
