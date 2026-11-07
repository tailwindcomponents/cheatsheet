import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './views/app';
import * as serviceWorker from './serviceWorker';

import './css/index.css';

render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
);

serviceWorker.unregister();
