import { configureStore, createSerializableStateInvariantMiddleware, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * reducer
 */
import AuthReducer from './reducer/userAuthReducer';
import LoginAuthReducer from './reducer/loginAuthReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};


const reducers = combineReducers({
  rAuth: AuthReducer,
  rLogin: LoginAuthReducer
});


const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [ReduxThunk]
});

export default store;

// export default configureStore({
//   reducer: {
//     rTodo: AddTodoReducer,
//     rAuth: AuthReducer
//     // middleware: [serializableMiddleware, ReduxThunk]
//   },
// });
