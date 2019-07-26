import React, { Component } from 'react';
import { View } from 'react-native';
import CardView from '../../components/cardView/cardView';
import { connect } from 'react-redux';
import { styles } from './style';

class GameView extends Component {

    constructor(props) {
        super(props);
        this.cards = [];
        this.fillCards();
    }

    fillCards = () =>{
        switch(this.props.gameMode){
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
        const { disabled } = this.props;
        return (
            <View style={styles.mainView} >
                {this.cards.map((item, index) => <CardView key={index} item={item} onClick={this.onCardClick} disabled={disabled}/>)}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameMode: state.settings.gameMode,
    }
};

export default connect(mapStateToProps)(GameView);