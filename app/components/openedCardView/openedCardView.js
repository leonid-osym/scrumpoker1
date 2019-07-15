import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Easing, Animated } from 'react-native';
import {rotateCard, rotateGameView} from '../../redux/actions/cardsActions';
import { connect } from 'react-redux';
import { styles } from './style';

class OpenedCardView extends Component {
    constructor(props) {
        super(props);
        this.rotateValueHolder = new Animated.Value(0);
    }

    onClick =()=>{
        this.startRotateFunction();
        console.log(this.props);
    }
    componentDidMount() {
    }

    render() {
        //console.log(this.props);
        const {gameRotated, cardRotated, title} = this.props;
        
        return (
            <View style={styles.cardView}>
                <TouchableOpacity onPress = {this.onClick} style={styles.content}>
                    <Text style={styles.textStyle}>
                    { title }
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return {
      gameRotated: state.rotate.gameRotated,
      cardRotated: state.rotate.cardRotated,
      title: state.rotate.title
    }
  };

export default connect(mapStateToProps, { rotateCard, rotateGameView })(OpenedCardView);