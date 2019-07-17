import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import AppContainer from './navigation/appContainer';
import { Provider } from 'react-redux';
import store from './redux/store/reduxStore';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar barStyle="light-content" backgroundColor="#1F313D" />
                <AppContainer />
            </Provider>
        );
    }
}
