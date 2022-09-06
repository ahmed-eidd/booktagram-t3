import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { connectRouter } from 'connected-react-router';
import authReducer from '../store/auth/slice';
import localeReducer from '../store/locale/slice';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    locale: localeReducer,
  });

export default rootReducer;
