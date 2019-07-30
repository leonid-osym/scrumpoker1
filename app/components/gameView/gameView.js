import React, { Component } from 'react';
import { View } from 'react-native';
import CardView from '../../components/cardView/cardView';
import { connect } from 'react-redux';
import { styles } from './style';

class GameView extends Component {

    constructor(props) {
        super(props);
        this.cards = [];
        this.state={
            cards: []
        }
        this.fillCards();
    }

    fillCards = () =>{
        switch(this.props.gameMode){
            case 'fibo': this.cards = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '∞', '?', '☕️']; break;
            case 'tshirt': this.cards = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '∞', '?', '☕️']; break;
            case 'standard': this.cards = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '∞', '?', '☕️']; break;
            case 'risk': this.cards = ['#4bc247', '#FFEC38', '#FC9900', '#9928AE', '#F34433', '∞', '?', '☕️']; break;
        }
    }

    onCardClick = (item)=>{
        const { onGameCardClick }=this.props;
        onGameCardClick(item);
    }

    render() {
        this.fillCards();
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