import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trakerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { errorMessage: '', token: action.payload };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		case 'submit':
			return { ...state, token: action.payload };
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return async ({ email, password }) => {
		try {
			const response = await trakerApi.post('/signup', { email, password });
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signin', payload: response.data.token });

			navigate('TrackList');
		} catch (err) {
			dispatch({ type: 'add_error', payload: 'Something went wrong' });
			console.log(err.message);
		}
	};
};
const signin = (dispatch) => {
	return async ({ email, password }) => {
		try {
			const response = await trakerApi.post('/signin', { email, password });
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signin', payload: response.data.token });
			navigate('TrackList');
		} catch (err) {
			dispatch({ type: 'add_error', payload: 'Something went wrong' });
		}
	};
};

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'clear_error_message' });
};

const submit = (dispatch) => {
	return async ({ name, age, phone, gender, email }) => {
		try {
			const response = await trakerApi.post('/details', {
				name,
				age,
				phone,
				gender,
				email,
			});
			dispatch({ type: 'submit', payload: 'Submitted✨' });
		} catch (err) {
			dispatch({ type: 'add_error', payload: 'Something went wrong' });
			console.log(err.message);
		}
	};
};
export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signup, clearErrorMessage, submit },
	{ errorMessage: '', token: null }
);
