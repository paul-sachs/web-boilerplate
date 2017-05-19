import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import rootReducer from './reducers';

const logger = createLogger({
	collapsed: true,
	predicate: () =>
		true // eslint-disable-line no-unused-vars
});

// Cast hsitory to avoid some weird typing mismatches between deps.
// Should be resolved once react-router-redux@5 is released.
const reduxRouterMiddleware = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	reduxRouterMiddleware,
	logger,
	sagaMiddleware
)(createStore);

function configureStore(initialState?) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	sagaMiddleware.run(sagas);
	return store;
}

export { GlobalState };
export default configureStore();
