const initialState={
    memes: [],
    images: []
}

const MEMES_ACTIONS = Object.seal({
    ADD_MEMES: 'ADD_MEMES',
    ADD_MEME: 'ADD_MEME',
    ADD_IMAGES: 'ADD_IMAGES',
    ADD_IMAGE: 'ADD_IMAGE'
})

function memesReducer(state=initialState, action) {
    switch(action.type) {
        case MEMES_ACTIONS.ADD_MEMES: return {
            ...state, memes:[...state.memes, ...action.values]
        }
        case MEMES_ACTIONS.ADD_MEME: return {
            ...state, memes:[...state.memes, action.value]
        }
        case MEMES_ACTIONS.ADD_IMAGES: return {
            ...state, images:[...state.images, ...action.values]
        }
        case MEMES_ACTIONS.IMAGE: return {
            ...state, images:[...state.images, action.value]
        }
        default: return state;
    }
}

let state = memesReducer(undefined, {type: MEMES_ACTIONS.ADD_MEME, value: {text: "meme1"}});
console.log(state);
state = memesReducer(undefined, {type: MEMES_ACTIONS.ADD_MEME, value: {text: "meme2"}});
console.log(state);
state = memesReducer(undefined, {type: MEMES_ACTIONS.ADD_MEME, value: {text: "meme3"}});
console.log(state);
state = memesReducer(undefined, {type: MEMES_ACTIONS.ADD_MEMES, values: [{text: "meme4"}, {text: "meme5"}]});
console.log(state);