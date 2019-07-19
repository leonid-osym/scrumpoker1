import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default class OpenedCardView extends Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        const { onMainCardClick, item } = this.props;
        onMainCardClick(item);
    }

    processIfGetColor = () => {
        const { item } = this.props;
        if (item[0] === '#') {
            this.cardItem = '';
            this.style = { ...styles.cardView, backgroundColor: item };
        } else if (item === '☕️') {
            this.cardItem = item;
            this.style = { ...styles.cardView };
            //this.source = '../../img/coffeecup.png';
        } else {
            this.cardItem = item;
            this.style = { ...styles.cardView };
        }
    }

    render() {
        this.processIfGetColor();
        const { disabled } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={this.style} disabled={disabled} activeOpacity={1}>
                {/* <Image source={require(this.source)} /> */}
                <Text style={styles.textStyle}>
                    {this.cardItem}
                </Text>
            </TouchableOpacity>
        )
    }
}