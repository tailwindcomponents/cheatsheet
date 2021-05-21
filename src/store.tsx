import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import * as History from 'history';
import rootReducer from './modules';

export const history = History.createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
);
