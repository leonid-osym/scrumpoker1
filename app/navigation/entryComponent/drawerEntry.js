import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export default class DrawerEntry extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { imgSource, text, onPress } = this.props;
        return (
            <View style={styles.entryView}>
                <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Image style={styles.icon} source={imgSource} />
                    <Text style={styles.entryText}>{text}</Text >
                </TouchableOpacity>
            </View>
        );
    }
};