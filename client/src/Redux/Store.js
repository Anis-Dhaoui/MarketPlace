import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { ProductsRed, CommentsRed, LoginRed, WishListRed } from './Reducer';

export const appStore = () => {
	const store = createStore(
		combineReducers({
			products: ProductsRed,
			comments: CommentsRed,
			auth: LoginRed,
			wishlist: WishListRed,
		}),
		applyMiddleware(thunk)
	);
	return store;
}