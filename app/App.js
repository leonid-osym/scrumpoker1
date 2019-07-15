import React, { Component } from 'react';
import AppContainer from './navigation/appContainer';
import { Provider } from 'react-redux';
import store from './redux/store/reduxStore';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
