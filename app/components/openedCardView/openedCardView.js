import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default class OpenedCardView extends PureComponent {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        const { onMainCardClick, item } = this.props;
        onMainCardClick(item);
    }

    render() {
        const { disabled, image, cardItem, style } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={style} disabled={disabled} activeOpacity={1}>
                {image ? image : <Text style={styles.textStyle}>{cardItem}</Text>}
            </TouchableOpacity>
        )
    }
}