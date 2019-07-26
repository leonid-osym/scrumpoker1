import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Coffee from '../../img/svg/Coffee';
import Doubts from '../../img/svg/Doubts';
import Infinity from '../../img/svg/Infinity';

export default class OpenedCardView extends Component {
    constructor(props) {
        super(props);
        this.image = null;
    }

    componentDidMount(){
        this.processIfGetColor();
        this.setImage();
    }

    onClick = () => {
        const { onMainCardClick, item } = this.props;
        onMainCardClick(item);
    }

    processIfGetColor = () => {
        const { item } = this.props;
        if (item[0] === '#') {
            this.cardItem = '';
            this.style = { ...styles.cardView, backgroundColor: item };
        } else {
            this.cardItem = item;
            this.style = { ...styles.cardView };
        }
    }

    setImage = ()=>{
        if(this.cardItem === '?'){
            this.image = <Doubts width={250} height={250}/>
        } else if(this.cardItem === '∞'){
            this.image = <Infinity width={230} height={230}/>
        } else if(this.cardItem === '☕️'){
            this.image = <Coffee width={250} height={250}/>
        } else {
            this.image = null;
        }
    }

    render() {
        this.processIfGetColor();
        this.setImage();
        const { disabled } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={this.style} disabled={disabled} activeOpacity={1}>
                {/* <Text style={styles.textStyle}>{this.cardItem}</Text> */}
                {this.image ? this.image : <Text style={styles.textStyle}>{this.cardItem}</Text>}
            </TouchableOpacity>
        )
    }
}