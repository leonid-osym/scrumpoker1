import React, { Component } from 'react';
import { View } from 'react-native';
import { setCardRevealMode, setDrawerIndicator } from '../../redux/actions/actions';
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
    }

    setCardRevealValue = (value) => {
        this.props.setCardRevealMode(value);
    }

    setDrawerIndicator = (value) => {
        this.props.setDrawerIndicator(value);
    }

    render() {
        const { cardRevealMode, drawerIndicator } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: '#000' }}>
                <MenuItemComponent text='Tap to reveal' initState={cardRevealMode} setValue={this.setCardRevealValue}/>
                <MenuItemComponent text='Menu drawer indicator' initState={drawerIndicator} setValue={this.setDrawerIndicator}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        cardRevealMode: state.settings.cardRevealMode,
        drawerIndicator: state.settings.drawerIndicator
    }
};

export default connect(mapStateToProps, { setCardRevealMode, setDrawerIndicator })(SettingsScreen);

