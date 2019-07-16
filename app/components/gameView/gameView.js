import React, { Component } from 'react';
import { View } from 'react-native';
import CardView from '../../components/cardView/cardView';
import { rotateCard, rotateGameView, setTitle } from '../../redux/actions/cardsActions';
import { connect } from 'react-redux';
import { styles } from './style';

class GameView extends Component {

    constructor(props) {
        super(props);
        this.cards = [];
        this.generateCards(15);
    }

    generateCards = (number) => {
        for (let i = 0; i < number; i++) {
            this.cards.push(i);
        }
    }

    onCardClick = (item)=>{
        const { onGameCardClick }=this.props;
        onGameCardClick(item);
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.mainView} >
                {this.cards.map((item, index) => <CardView key={index} item={item} onClick={this.onCardClick} />)}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameRotated: state.rotate.gameRotated,
        cardRotated: state.rotate.cardRotated,
        title: state.rotate.title,
    }
};

export default connect(mapStateToProps, { rotateCard, rotateGameView, setTitle })(GameView);