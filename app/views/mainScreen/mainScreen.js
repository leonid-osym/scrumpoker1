import React, { Component } from 'react';
import { SafeAreaView, Animated, Easing, TouchableOpacity, Button, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import GameView from '../../components/gameView/gameView';
import OpenedCardView from '../../components/openedCardView/openedCardView';
import { styles } from './style';
import LogoWizards2 from '../../img/svg/LogoWizards2';
import Doubts from '../../img/svg/Doubts';
import Infinity from '../../img/svg/Infinity';
import Coffee from '../../img/svg/Coffee';

class MainScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            allCardsShown: true,
            image: null,
            cardItem: '',
            cardIsBusy: false,
            cardAppeared: false,
            cardRotated: true
        }
        this.item = '';
        this.style = null;
        this.rotateGame = new Animated.Value(0);
        this.rotateCard = new Animated.Value(0);
        this.pullDrawer = new Animated.Value(0);
        this.extendDrawer = new Animated.Value(0);
    }

    onGameCardClick = (item) => {
        const { cardRevealMode } = this.props;
        const { allCardsShown, cardIsBusy, cardAppeared } = this.state;
        this.item=item;
        this.setState({ cardIsBusy: true });
        this.processInput(item);
        if (!cardIsBusy) {
            if (cardRevealMode) {
                if (cardAppeared) {
                    this.animationOpenCardAppeared();
                } else {
                    allCardsShown ? this.animationOpenCardModeReveal() : this.animationCloseCardModeReveal();
                }
            } else {
                allCardsShown ? this.animationOpenCard() : this.animationCloseCard();
            }
        }
    }

    animatedSequence = (firstValueToDrive, secondValueToDrive, firstToValue, secondToValue, firstDuration, secondDuration, animationCallback) => {
        Animated.sequence([
            Animated.timing(firstValueToDrive, { toValue: firstToValue, duration: firstDuration, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(secondValueToDrive, { toValue: secondToValue, duration: secondDuration, easing: Easing.linear, useNativeDriver: true })
        ]).start(animationCallback);
    }

    animationOpenCard = () => {
        this.rotateGame.setValue(0);
        this.rotateCard.setValue(0);
        this.animatedSequence(this.rotateGame, this.rotateCard, 1, 1, 500, 500, this.simpleAnimationCallback);
        this.setState({ allCardsShown: false })
    }

    animationCloseCard = () => {
        this.animatedSequence(this.rotateCard, this.rotateGame, 2, 2, 500, 500, this.simpleAnimationCallback);
        this.setState({ allCardsShown: true })
    }

    animationOpenCardModeReveal = () => {
        this.rotateGame.setValue(0);
        this.rotateCard.setValue(0);
        this.setState({ cardRotated: true, })
        this.animatedSequence(this.rotateGame, this.rotateCard, 1, 1, 500, 500, this.animationCallback);
    }

    animationCloseCardModeReveal = () => {
        const { cardAppeared } = this.state;
        if (!cardAppeared) {
            Animated.sequence([
                Animated.timing(this.rotateCard, { toValue: 5, duration: 0, easing: Easing.linear, useNativeDriver: true }),
                Animated.timing(this.rotateCard, { toValue: 6, duration: 500, easing: Easing.linear, useNativeDriver: true }),
                Animated.timing(this.rotateGame, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true })
            ]).start(this.animationCallbackCardClosed);
        }
    }

    animationOpenCardAppeared = () => {
        Animated.timing(this.rotateCard, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true }).start(
            () => {
                this.animationCallbackAppeared()
                this.animatedSequence(this.rotateCard, this.rotateCard, 3, 4, 0, 500, null);
            }
        );
    }

    simpleAnimationCallback = () => {
        this.setState({ cardIsBusy: false, cardAppeared: false });
    }

    animationCallback = () => {
        this.setState({ cardIsBusy: false, allCardsShown: false, cardAppeared: true });
    }

    animationCallbackAppeared = () => {
        this.setState({ cardRotated: false, cardIsBusy: false, allCardsShown: false, cardAppeared: false, animationIsEnded: false, }, () => {
            this.processInput();
        });
    }

    animationCallbackCardClosed = () => {
        this.setState({ cardIsBusy: false, cardAppeared: false, allCardsShown: true, cardRotated: true });
        this.processInput();
    }

    animateDrawerIndicator = () => {
        this.pullDrawer.setValue(0);
        this.extendDrawer.setValue(0);
        Animated.timing(this.pullDrawer, { toValue: 4, duration: 500, easing: Easing.linear, useNativeDriver: true }).start(() => { this.props.navigation.openDrawer() });
    }

    processInput = () => {
        const { cardRevealMode } = this.props;
        const { cardRotated } = this.state;
        this.style = { ...styles.cardView };
        let item = this.item;
        if (cardRevealMode && cardRotated) {
            this.setState({ cardItem: '', image: <LogoWizards2 width={250} height={250} /> });
        } else {
            if (item[0] === '#') {
                this.setState({ cardItem: '', image: null });
                this.style = { ...styles.cardView, backgroundColor: item };
            } else if (item === '?') {
                this.setState({ image: <Doubts width={250} height={250} /> });
            } else if (item === '∞') {
                this.setState({ image: <Infinity width={230} height={230} /> });
            } else if (item === '☕️') {
                this.setState({ image: <Coffee width={250} height={250} /> });
            } else {
                console.log('processInput - item', item);
                this.setState({ image: null, cardItem: item });
            }
        }
    }

    render() {
        let positionY = (Dimensions.get('window').height) / 2 - 34;
        let positionX = -50;
        const { cardIsBusy, cardItem, image } = this.state;
        const { drawerIndicator } = this.props;
        const rotateGame = this.rotateGame.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ['0deg', '90deg', '0deg'],
        });
        const rotateCard = this.rotateCard.interpolate({
            inputRange: [0, 1, 2, 3, 4, 5, 6],
            outputRange: ['-90deg', '0deg', '-90deg', '-270deg', '-360deg', '0deg', '-90deg'],
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
                    <OpenedCardView item={this.item} onMainCardClick={this.onGameCardClick} disabled={cardIsBusy} cardItem={cardItem} image={image} style={this.style}/>
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

