import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { styles } from './style';
import Coffee from '../../img/svg/Coffee';
import Doubts from '../../img/svg/Doubts';
import Infinity from '../../img/svg/Infinity';

export default class CardView extends PureComponent {
    constructor(props) {
        super(props);
        this.style = null;
        this.cardItem = null;
        this.image = false;
    }

    onClick = () => {
        const { item, onClick } = this.props;
        onClick(item);
    }

    processInput = () => {
        const { item } = this.props;
        this.style = { ...styles.cardView };
        if (item[0] === '#') {
            this.cardItem = '';
            this.style = { ...styles.cardView, backgroundColor: item };
        } 
        else if(item === '?'){
            this.image = <Doubts width={55} height={55}/>
        }
        else if(item === '∞'){
            this.image = <Infinity width={55} height={55}/>
        }
        else if(item === '☕️'){
            this.image = <Coffee width={55} height={55}/>
        }
        else {
            this.cardItem = item;
            this.image = false;
        }
    }

    render() {
        this.processInput();
        const { disabled } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={this.style} disabled={disabled}>
                {this.image ? this.image : <Text style={styles.textStyle}>{this.cardItem}</Text>}
            </TouchableOpacity>
        )
    }
}
