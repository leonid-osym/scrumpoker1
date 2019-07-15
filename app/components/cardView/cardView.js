import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 43
    },
    content: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius: 5
    },
    cardView: {
        width: '22%',
        height: '14%',
        marginHorizontal: 10,
        marginVertical: 10,
        marginLeft: 12,
        marginRight: 12,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: 'steelblue',
        borderRadius:15
      },
  });
