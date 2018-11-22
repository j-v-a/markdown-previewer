import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/main.scss';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
