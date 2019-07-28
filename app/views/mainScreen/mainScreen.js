import React, { Component } from 'react';
import { SafeAreaView, Animated, Easing, TouchableOpacity, Button, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import GameView from '../../components/gameView/gameView';
import OpenedCardView from '../../components/openedCardView/openedCardView';
import { styles } from './style';

class MainScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isShowAllCards: true,
            item: '',
            mainCardShown: false,
            changeCardBackground: false,
            //isHideCard: false,
            cardIsBusy: false,
            cardAppeared: false
        }
        this.cards = [];
        this.rotateGame = new Animated.Value(0);
        this.rotateCard = new Animated.Value(0);
        this.pullDrawer = new Animated.Value(0);
        this.extendDrawer = new Animated.Value(0);
    }

    onGameCardClick = (item) => {
        const { cardRevealMode } = this.props;
        const { isShowAllCards, cardIsBusy, cardAppeared } = this.state;
        if (!cardIsBusy) {
            this.setState({ item: item, cardIsBusy: true });
            if (cardRevealMode) {
                if (cardAppeared === true) {
                    this.animationOpenCardAppeared();
                    console.log('anim works');
                } else {
                    isShowAllCards ? this.animationOpenCardModeReveal() : this.animationCloseCardModeReveal();
                }
            } else {
                isShowAllCards ? this.animationOpenCard() : this.animationCloseCard();
            }
        }
    }

    animationOpenCard = () => {
        this.rotateGame.setValue(0);
        this.rotateCard.setValue(0);
        Animated.sequence([
            Animated.timing(this.rotateGame, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.rotateCard, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true })
        ]).start(this.animationCallback);
        this.setState({ isShowAllCards: false })
    }

    animationCloseCard = () => {
        Animated.sequence([
            Animated.timing(this.rotateCard, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.rotateGame, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true })
        ]).start(this.animationCallback);
        this.setState({ isShowAllCards: true })
    }

    // animationOpenCardModeReveal = () => {
    //     this.rotateGame.setValue(0);
    //     this.rotateCard.setValue(0);
    //     Animated.timing(this.rotateGame, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true }).start(this.animationCallback);
    //     this.setState({ isShowAllCards: false, isHideCard: true })
    // }


    animationOpenCardModeReveal = () => {
        this.rotateGame.setValue(0);
        this.rotateCard.setValue(0);
        Animated.sequence([
            Animated.timing(this.rotateGame, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.rotateCard, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true })
        ]).start(this.animationCallback);
        this.setState({ isShowAllCards: false, cardAppeared: true })
    }

    animationCloseCardModeReveal = () => {
        const { cardAppeared } = this.state;
        if (cardAppeared === false) {
            Animated.sequence([
                Animated.timing(this.rotateCard, { toValue: 5, duration: 500, easing: Easing.linear, useNativeDriver: true }),
                Animated.timing(this.rotateGame, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true })
            ]).start(this.animationCallback);
            this.setState({ isShowAllCards: true })
        }
    }

    animationOpenCardAppeared = () => {
        Animated.sequence([
            Animated.timing(this.rotateCard, { toValue: 3, duration: 0, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.rotateCard, { toValue: 4, duration: 500, easing: Easing.linear, useNativeDriver: true })
        ]).start(this.animationCallback);
        //Animated.timing(this.rotateCard, { toValue: 3, duration: 500, easing: Easing.linear, useNativeDriver: true }).start(this.animationCallback);
        this.setState({ isShowAllCards: false, cardAppeared: false })
    }

    showCard = () => {
        const { cardIsBusy } = this.state;
        if (!cardIsBusy) {
            this.setState({ cardIsBusy: true });
            this.setState({ isHideCard: false });
            Animated.timing(this.rotateCard, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true }).start(this.animationCallback);
        }
    }

    animationCallback = () => {
        this.setState({ cardIsBusy: false });
    }

    animateDrawerIndicator = () => {
        this.pullDrawer.setValue(0);
        this.extendDrawer.setValue(0);
        Animated.timing(this.pullDrawer, { toValue: 4, duration: 500, easing: Easing.linear, useNativeDriver: true }).start(() => { this.props.navigation.openDrawer() });
    }

    render() {
        let positionY = (Dimensions.get('window').height) / 2 - 34;
        let positionX = -50;
        const { item, isHideCard, cardIsBusy } = this.state;
        const { drawerIndicator, cardRevealMode } = this.props;
        const rotateGame = this.rotateGame.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ['0deg', '90deg', '0deg'],
        });
        const rotateCard = this.rotateCard.interpolate({
            inputRange: [0, 1, 2, 3, 4, 5],
            outputRange: ['-90deg', '0deg', '-90deg', '180deg', '0deg', '-90deg'],
        });
        const pullDrawerIndicator = this.pullDrawer.interpolate({
            inputRange: [0, 1, 2, 3, 4],
            outputRange: [0, 10, 0, 10, 0],
        });
        return (
            <SafeAreaView style={styles.container}>
                <Animated.View style={{ ...styles.gameViewAnimated, transform: [{ rotateY: rotateGame }] }}>
                    <GameView onGameCardClick={this.onGameCardClick} disabled={cardIsBusy} />
                </Animated.View>
                <Animated.View style={{ ...styles.cardViewAnimated, transform: [{ rotateY: rotateCard }] }}>
                    <OpenedCardView item={item} onMainCardClick={this.onGameCardClick} disabled={cardIsBusy} revealMode={cardRevealMode}/>
                </Animated.View>
                {
                    drawerIndicator ?
                        <TouchableOpacity onPress={this.animateDrawerIndicator} style={{ ...styles.circleButton, top: positionY, left: positionX }} >
                            <Animated.View style={{ ...styles.circleButton, top: 0, transform: [{ translateX: pullDrawerIndicator }] }} />
                        </TouchableOpacity >
                        : null
                }
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        cardRevealMode: state.settings.cardRevealMode,
        drawerIndicator: state.settings.drawerIndicator,
    }
};

export default connect(mapStateToProps)(MainScreen);

