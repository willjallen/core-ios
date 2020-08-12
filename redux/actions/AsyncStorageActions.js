import * as actions from "../../redux/constants/ActionTypes";

export const saveLocalData = (key, data) => ({
    type: actions.SAVE_LOCAL_DATA,
    key: key,
    data: data

})

export const getLocalData = (key) => ({
    type: actions.GET_LOCAL_DATA,
    key: key

})