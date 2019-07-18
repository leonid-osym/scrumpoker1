import React, { Component } from 'react';
import { View } from 'react-native';
import { setCardRevealMode } from '../../redux/actions/cardsActions';
import { connect } from 'react-redux';
import MenuItemComponent from './menuItemComponent/menuItemComponent';

class SettingsScreen extends Component {

    static navigationOptions = {
        title: 'Settings',
        headerStyle: {
            backgroundColor: '#1F313D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            switchButtonValue: true
        }
    }

    setCardRevealValue = (value) => {
        this.props.setCardRevealMode(value);
    }

    setValue = (value) => {
        console.log('new PROPS value: ', this.props);
    }

    render() {
        const { cardRevealMode } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: '#000' }}>
                <MenuItemComponent text='Tap to reveal' initState={cardRevealMode} setValue={this.setCardRevealValue}/>
                <MenuItemComponent text='Menu drawer indicator' initState={false} setValue={this.setValue}/>
                <MenuItemComponent text='Something else' initState={true} setValue={this.setValue}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        cardRevealMode: state.rotate.cardRevealMode,
    }
};

export default connect(mapStateToProps, { setCardRevealMode })(SettingsScreen);

