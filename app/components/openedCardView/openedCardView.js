import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Easing, Animated } from 'react-native';
import { rotateCard, rotateGameView } from '../../redux/actions/cardsActions';
import { connect } from 'react-redux';
import { styles } from './style';

class OpenedCardView extends Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        const { onMainCardClick, item } = this.props;
        onMainCardClick(item);
    }

    render() {

        const { item, side } = this.props;
        console.log('side', side);
        return (
            <TouchableOpacity onPress={this.onClick} style={styles.cardView}>
                <Text style={styles.textStyle}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameRotated: state.rotate.gameRotated,
        cardRotated: state.rotate.cardRotated,
        title: state.rotate.title
    }
};

export default connect(mapStateToProps, { rotateCard, rotateGameView })(OpenedCardView);