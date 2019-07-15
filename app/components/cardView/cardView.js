import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style';

export default class CardView extends Component {
    constructor(props) {
        super(props);
    }

    onClick =()=>{
        const { item, onClick} = this.props;
        onClick(item);
    }

    render() {
        const { item } = this.props;
        return (
            <View style={styles.cardView}>
                <TouchableOpacity onPress = {this.onClick} style={styles.content}>
                    <Text style={styles.textStyle}>
                    { item }
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
