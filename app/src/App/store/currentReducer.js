import { REST_SERVER_ADR } from "../config/config";

export const initialState = {
    titre: "",
    text: "",
    x: 0,
    y: 20,
    color: "#67171",
    fontSize: 20,
    imageId: '',
    fontWeight: "800",
    undeline: true,
    italic: true,
    frameSizeX: 0,
    frameSizeY: 0,
}

export const CURRENT_ACTION = Object.seal({
    SET_CURRENT: 'SET_CURRENT',
    RESET_CURRENT: 'RESET_CURRENT',
    SAVE_CURRENT: 'SAVE_CURRENT'
})

const currentReducer=(state = initialState, action) => {
    switch (action.type) {

    case CURRENT_ACTION.SET_CURRENT:
        return { ...action.value };
    case CURRENT_ACTION.RESET_CURRENT:
        return { ...initialState };
    case CURRENT_ACTION.SAVE_CURRENT:
        fetch(`${REST_SERVER_ADR}/memes`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(state)})
        return {...initialState};
    default:
        return state
    }
}

export default currentReducer;