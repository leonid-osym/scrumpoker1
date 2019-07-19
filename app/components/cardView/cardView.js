import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { styles } from './style';

export default class CardView extends PureComponent {
    constructor(props) {
        super(props);
        this.style = null;
        this.cardItem = null;
    }

    onClick = () => {
        const { item, onClick } = this.props;
        onClick(item);
    }

    processIfGetColor = () => {
        const { item } = this.props;
        if (item[0] === '#') {
            this.cardItem = '';
            this.style = { ...styles.cardView, backgroundColor: item };
        } else {
            this.cardItem = item;
            this.style = { ...styles.cardView };
        }
    }

    render() {
        this.processIfGetColor();
        const { disabled } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={this.style} disabled={disabled}>
                <Text style={styles.textStyle}>{this.cardItem}</Text>
            </TouchableOpacity>
        )
    }
}
