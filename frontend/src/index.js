import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth/AuthComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Auth />, document.getElementById('root'));
registerServiceWorker();
