import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

store.subscribe(()=> {
    console.log(store.getState());
});

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));
registerServiceWorker();