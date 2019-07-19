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
            
                <TouchableOpacity onPress={onPress} style={styles.touchOpacity}>
                    <View style={styles.entryView}>
                    <Image style={styles.icon} source={imgSource} />
                    <Text style={styles.entryText}>{text}</Text >
                    </View>
                </TouchableOpacity>
            
        );
    }
};