import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './views/app';
import * as serviceWorker from './serviceWorker';

import './css/index.css';

const target = document.querySelector('#root');

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	target
);

serviceWorker.unregister();