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
        //console.log(item);
    }

    processIfGetColor= ()=>{
        const { item } = this.props;
        if(item[0] === '#'){
            this.cardItem = '';
            this.style = {...styles.cardView, backgroundColor: item};
        } else if(item === '☕️'){
            this.cardItem = item;
            this.style = {...styles.cardView};
            //this.source = '../../img/coffeecup.png';
        } else {
            this.cardItem = item;
            this.style = {...styles.cardView};
        }
    }

    render() {
        this.processIfGetColor();
        return (
            <TouchableOpacity onPress={this.onClick} style={this.style}>
                {/* <Image source={require(this.source)} /> */}
                <Text style={styles.textStyle}>
                    {this.cardItem}
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