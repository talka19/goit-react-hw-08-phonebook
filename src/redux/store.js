import { configureStore } from '@reduxjs/toolkit'
import {contacts} from 'redux/tasks/contactsSlice'
import {filter} from 'redux/tasks/filterSlice'
import { authSlise } from 'redux/auth/slice';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
  
export const store = configureStore({
    reducer: {
      contacts: contacts.reducer,
      filter: filter.reducer,
      auth: persistReducer(authPersistConfig, authSlise.reducer),
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
});
  
  export const persistor = persistStore(store);