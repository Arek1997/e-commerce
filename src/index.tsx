import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/style/global.css';
import store from './store/index';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<HashRouter>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</HashRouter>
);
