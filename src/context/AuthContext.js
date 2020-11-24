import CreateDataContext from './CreateDataContext';
import tracker from '../api/tarcker';
import AsyncStorage from '@react-native-community/async-storage';

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_Error':
            return { ...state, errorMessage: action.payload };
        case 'storing_Token':
            return { errorMessage: '', token: action.payload}
        default:
            return state;
    };
};
const signUp = (dispatch) => {
    return async ({ email, password }) => {
        try{
            const response = await tracker.post("/signup", { email, password });
            await AsyncStorage.setItem('', response.data.token);
            dispatch({ type: 'storing_Token', payload: response.data.token });
        }catch(err){
            dispatch({ type: 'add_Error', payload: 'Something went wrong.' });
        }
    };
}; 
const signIn = (dispatch) => {
    return ({ email, password }) => {

    }; 
}
const signOut = (dispatch) => {
    return () => {

    }; 
}
export const { Context, Provider } = CreateDataContext (
    authReducer,
    { signUp, signIn, signOut},
    {token: null, errorMessage: ''}
);
