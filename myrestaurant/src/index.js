import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore ,getFirestore } from 'redux-firestore';
import firebase from './Firebase/fireBaseConfig';

const store = createStore(reducers, compose(
    applyMiddleware(reduxThunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
    ));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));


