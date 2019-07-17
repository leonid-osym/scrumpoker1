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
        this.state={
            mode: 'risk'
        }
        this.fillCards();
    }

    fillCards = () =>{
        switch(this.state.mode){
            case 'fibo': this.cards = this.generateFibo(15); break;
            case 'tshirt': this.cards = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '∞', '?', '☕️']; break;
            case 'standard': this.cards = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '∞', '?', '☕️']; break;
            case 'risk': this.cards = ['#88C247', '#FFEC38', '#FC9900', '#9928AE', '#F34433', '∞', '?', '☕️']; break;
        }
    }

    generateFibo = (number)=>{
        let fiboCards = [];
        fiboCards.push(0);
        let prev = 0;
        let next = 1;
        for(let i = 0; i< number-4; i++){
            let temp = prev+next;
            prev = next;
            next = temp;
            fiboCards.push(temp);
        }
        fiboCards.push('?');
        fiboCards.push('∞');
        fiboCards.push("☕️");
        return fiboCards;
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