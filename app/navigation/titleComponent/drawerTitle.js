import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default class DrawerTitle extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { text } = this.props;
        return (
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{text}</Text >
            </View>
        );
    }
};