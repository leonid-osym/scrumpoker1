import React, { Component } from 'react';
import { View, Share } from 'react-native';
import DrawerEntry from './entryComponent/drawerEntry';
import DrawerTitle from './titleComponent/drawerTitle';
import { styles } from './styles';
import { setGameMode } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { images } from './../img';
import PropTypes from 'prop-types';

class DrawerComponent extends Component {
    constructor(props) {
        super(props);
    }

    setStandard = () => {
        this.props.setGameMode('standard');
        this.props.navigation.closeDrawer();
    }
    setTShirt = () => {
        this.props.setGameMode('tshirt');
        this.props.navigation.closeDrawer();
    }
    setFibo = () => {
        this.props.setGameMode('fibo');
        this.props.navigation.closeDrawer();
    }
    setRisk = () => {
        this.props.setGameMode('risk');
        this.props.navigation.closeDrawer();
    }

    shareWithOthers = () => {
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
        const { gameMode } = this.props;
        console.log(gameMode);
        return (
            <View style={styles.container}>
                <View style={styles.divider} />
                <DrawerTitle text='Deck' />
                <View style={styles.divider} />
                <DrawerEntry imgSource={images['layers']} text='Fibonacci' onPress={this.setFibo} isActive={gameMode === 'fibo'}/>
                <View style={styles.divider} />
                <DrawerEntry imgSource={images['layers']} text='Standard' onPress={this.setStandard} isActive={gameMode === 'standard'}/>
                <View style={styles.divider} />
                <DrawerEntry imgSource={images['layers']} text='T-Shirt' onPress={this.setTShirt} isActive={gameMode === 'tshirt'}/>
                <View style={styles.divider} />
                <DrawerEntry imgSource={images['layers']} text='Risk Planning' onPress={this.setRisk} isActive={gameMode === 'risk'}/>
                <View style={styles.divider} />
                <DrawerTitle text='App' />
                <View style={styles.divider} />
                <DrawerEntry imgSource={images['settings']} text='Settings' onPress={() => this.props.navigation.navigate('Settings')} />
                <View style={styles.divider} />
                {/* <DrawerEntry imgSource={images['share']} text='Tell the world!' onPress={this.shareWithOthers}/>
                <View style={styles.divider} /> */}
                <DrawerEntry imgSource={images['info']} text='About' onPress={() => this.props.navigation.navigate('About')} />
                <View style={styles.divider} />
            </View >)
    }
};

DrawerComponent.propTypes = {
    navigation: PropTypes.object
};

const mapStateToProps = state => {
    return {
        gameMode: state.settings.gameMode,
    }
};

export default connect(mapStateToProps, { setGameMode })(DrawerComponent);