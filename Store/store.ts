// src/Store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '@/utils/productSlice';
import userReducer from '@/utils/authSlice';
import creatorReducer from '@/utils/creatorSlice';
import cartReducer from '@/utils/cartSlice';
import communityReducer from '@/utils/communitySlice';
import loginTypeReducer from '@/utils/loginTypeSlice';
import {thunk} from 'redux-thunk';
import wishlistReducer from '@/utils/wishlistSlice';
import addressReducer from '@/utils/addressSlice';
import userInfoReducer from '@/utils/userInfoSlice'
// import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value)
    },
    removeItem(_key: string) {
      return Promise.resolve()
    },
  }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    middleware: [thunk],
    blacklist: ['cart','userInfo'], // Exclude cart from persistence
};

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    community: communityReducer,
    wishlist: wishlistReducer,
    creator: creatorReducer,
    loginType: loginTypeReducer,
    address: addressReducer,
    userInfo: userInfoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: MiddlewareArray =>
    MiddlewareArray({
      serializableCheck: false,
      thunk: true,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
