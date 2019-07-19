import React, { Component } from 'react';
import { View, Share } from 'react-native';
import DrawerEntry from './entryComponent/drawerEntry';
import DrawerTitle from './titleComponent/drawerTitle';
import { styles } from './styles';
import { setGameMode } from '../redux/actions/cardsActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DrawerComponent extends Component {
    constructor(props) {
        super(props);
    }

    setStandard = ()=>{
        this.props.setGameMode('standard');
        this.props.navigation.closeDrawer();
    }
    setTShirt = ()=>{
        this.props.setGameMode('tshirt');
        this.props.navigation.closeDrawer();
    }
    setFibo = ()=>{
        this.props.setGameMode('fibo');
        this.props.navigation.closeDrawer();
    }
    setRisk = ()=>{
        this.props.setGameMode('risk');
        this.props.navigation.closeDrawer();
    }

    shareWithOthers = ()=>{
        Share.share({
            message: "Windows? Mac? I don't give a f*ck!",
            url: 'http://someurl.here',
            title: 'You know what?'
          }, {
            // Android only:
            dialogTitle: 'Share Scrum Poker',
            // iOS only:
            excludedActivityTypes: [
              'com.apple.UIKit.activity.PostToTwitter'
            ]
          })
    }

    render() {
        console.log('state', this.state);
        console.log('props', this.props);
        return (
            <View style={styles.container}>
                <DrawerTitle text='Deck' />
                <View style={styles.divider} />
                <DrawerEntry imgSource={require('../img/baseline_layers_white_24dp.png')} text='Standard' onPress={this.setStandard} />
                <View style={styles.divider} />
                <DrawerEntry imgSource={require('../img/baseline_layers_white_24dp.png')} text='T-Shirt' onPress={this.setTShirt} />
                <View style={styles.divider} />
                <DrawerEntry imgSource={require('../img/baseline_layers_white_24dp.png')} text='Fibonacci' onPress={this.setFibo} />
                <View style={styles.divider} />
                <DrawerEntry imgSource={require('../img/baseline_layers_white_24dp.png')} text='Risk Planning' onPress={this.setRisk} />
                <View style={styles.divider} />
                <DrawerTitle text='App' />
                <View style={styles.divider} />
                <DrawerEntry imgSource={require('../img/baseline_settings_white_24dp.png')} text='Settings' onPress={() => this.props.navigation.navigate('Settings')}/>
                <View style={styles.divider} />
                <DrawerEntry imgSource={require('../img/baseline_share_white_24dp.png')} text='Tell the world!' onPress={this.shareWithOthers}/>
                <View style={styles.divider} />
                <DrawerEntry imgSource={require('../img/baseline_info_white_24dp.png')} text='About' />
                <View style={styles.divider} />
            </View >)
    }
};

DrawerComponent.propTypes = {
    navigation: PropTypes.object
  };

const mapStateToProps = state => {
    return {
        gameMode: state.rotate.gameMode,
    }
};

export default connect(mapStateToProps, { setGameMode })(DrawerComponent);