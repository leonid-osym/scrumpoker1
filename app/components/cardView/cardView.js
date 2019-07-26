import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { styles } from './style';
import Coffee from '../../img/svg/Coffee';
import Doubts from '../../img/svg/Doubts';
import Infinity from '../../img/svg/Infinity';
import LogoWizards2 from '../../img/svg/LogoWizards2';

export default class CardView extends PureComponent {
    constructor(props) {
        super(props);
        this.style = null;
        this.cardItem = null;
        this.image = false;
        this.processIfGetColor();
        this.setImage();
    }

    componentDidMount(){
        this.processIfGetColor();
        this.setImage();
    }

    onClick = () => {
        const { item, onClick } = this.props;
        onClick(item);
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
            this.image = <Doubts width={55} height={55}/>
        }
        if(this.cardItem === '∞'){
            this.image = <Infinity width={55} height={55}/>
        }
        if(this.cardItem === '☕️'){
            this.image = <Coffee width={55} height={55}/>
        }
    }

    render() {
        // this.processIfGetColor();
        // this.setImage();
        const { disabled } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={this.style} disabled={disabled}>
                {this.image ? this.image : <Text style={styles.textStyle}>{this.cardItem}</Text>}
            </TouchableOpacity>
        )
    }
}
