import { createStore, combineReducers } from 'redux';
import { REST_SERVER_ADR } from '../config/config';
import currentReducer from './currentReducer';

export const initialState = {
	memes: [],
	images: []
};

export const MEMES_ACTIONS = Object.seal({
	INIT_MEMES: 'ADD_MEMES',
	ADD_MEME: 'ADD_MEME',
	INIT_IMAGES: 'ADD_IMAGES',
	ADD_IMAGE: 'ADD_IMAGE'
});

const MEMES_PRIVATE_ACTIONS = Object.seal({ INIT: 'INIT' });

function memesReducer(state = initialState, action) {
	console.log(action.type);

	const type = action.type.includes('@@redux/INIT') ? MEMES_PRIVATE_ACTIONS.INIT : action.type;

	switch (type) {
		case MEMES_PRIVATE_ACTIONS.INIT: {
			fetch(`${REST_SERVER_ADR}/memes`, { headers: { 'Content-Type': 'application/json' } })
				.then(
					(resp) => resp.json(),
					(error) => {
						console.log(error);
						return [];
					}
				)
				.then((arr) => {
					console.log(arr);
					store.dispatch({ type: MEMES_ACTIONS.INIT_MEMES, values: arr });
					return arr;
				});

			fetch(`${REST_SERVER_ADR}/images`, { headers: { 'Content-Type': 'application/json' } })
				.then(
					(resp) => resp.json(),
					(error) => {
						console.log(error);
						return [];
					}
				)
				.then((arr) => {
					console.log(arr);
					store.dispatch({ type: MEMES_ACTIONS.INIT_IMAGES, values: arr });
					return arr;
				});

			return state;
		}

		case MEMES_ACTIONS.INIT_MEMES:
			return {
				...state,
				memes: [ ...action.values ]
			};

		case MEMES_ACTIONS.ADD_MEME:
			return {
				...state,
				memes: [ ...state.memes, action.value ]
			};

		case MEMES_ACTIONS.INIT_IMAGES:
			return {
				...state,
				images: [...action.values ]
			};

		case MEMES_ACTIONS.IMAGE:
			return {
				...state,
				images: [ ...state.images, action.value ]
			};

		default:
			return state;
	}
}

const combineReducer = combineReducers({
    srvdata: memesReducer,
    current: currentReducer
})


const store = createStore(combineReducer);
export default store;

store.subscribe(() => {
	console.log('Le store a subit un changement');
	console.log(store.getState());
});
