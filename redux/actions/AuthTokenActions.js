import {FETCH_USER_AUTH_TOKEN} from "../constants/ActionTypes";

export const fetchUserAuthToken = content => ({
    type: FETCH_USER_AUTH_TOKEN,
    payload: {
        content
    }

})