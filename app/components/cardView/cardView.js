import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { styles } from './style';

export default class CardView extends PureComponent {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        const { item, onClick } = this.props;
        onClick(item);
    }

    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={styles.cardView}>
                <Text style={styles.textStyle}>{item}</Text>
            </TouchableOpacity>
        )
    }
}
