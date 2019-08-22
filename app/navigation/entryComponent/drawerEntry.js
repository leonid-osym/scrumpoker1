import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export default class DrawerEntry extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { imgSource, text, onPress, isActive } = this.props;
        return (
            
                <TouchableOpacity onPress={onPress} style={isActive ? styles.touchOpacityChosen : styles.touchOpacity}>
                    <View style={styles.entryView}>
                    <Image style={styles.icon} source={imgSource} />
                    <Text style={styles.entryText}>{text}</Text >
                    </View>
                </TouchableOpacity>
            
        );
    }
};