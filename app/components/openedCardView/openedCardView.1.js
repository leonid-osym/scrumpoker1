import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Coffee from '../../img/svg/Coffee';
import Doubts from '../../img/svg/Doubts';
import Infinity from '../../img/svg/Infinity';
import LogoWizards2 from '../../img/svg/LogoWizards2';

export default class OpenedCardView extends Component {
    constructor(props) {
        super(props);
        let { revealMode } = this.props;
        this.image = revealMode ? <LogoWizards2 width={250} height={250} /> : null;
        this.cardItem = '';
        this.cardShown = revealMode;
        this.clicks = 0;
        this.state = {
            cardShown: revealMode
        };
    }

    onClick = () => {
        const { onMainCardClick, item, revealMode, disabled } = this.props;
        this.cardShown = false;
        onMainCardClick(item);
        if (revealMode) {
            this.clicks += 1;
            if (this.clicks == 2) {
                this.cardShown = revealMode;
                this.clicks = 0
            }
        }
    }

    processIfGetColor = () => {
        const { item, disabled } = this.props;
        this.cardItem = '';
        if (item[0] === '#') {
            if (this.clicks != 0) {
                this.cardItem = '';
                this.style = { ...styles.cardView, backgroundColor: item };
            }
        } else {
            this.cardItem = item;
            this.style = { ...styles.cardView };
        }
    }

    setImage = () => {
        const { revealMode, disabled } = this.props;
        if (!revealMode) {
            this.image = null;
        }
        if (revealMode && this.cardShown && !disabled) {
            this.image = <LogoWizards2 width={250} height={250} />
        } else if (this.cardShown === false) {
            if (this.cardItem === '?') {
                this.image = <Doubts width={250} height={250} />
            } else if (this.cardItem === '∞') {
                this.image = <Infinity width={230} height={230} />
            } else if (this.cardItem === '☕️') {
                this.image = <Coffee width={250} height={250} />
            } else {
                this.image = null;
            }
        }
    }

    render() {
        this.processIfGetColor();
        this.setImage();
        const { disabled, revealMode } = this.props;
        return (
            <TouchableOpacity onPress={this.onClick} style={this.style} disabled={disabled} activeOpacity={1}>
                {this.image ? this.image : <Text style={styles.textStyle}>{this.cardItem}</Text>}
            </TouchableOpacity>
        )
    }
}