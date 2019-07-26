import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { images } from '../../img';
import Svg, { Image } from 'react-native-svg';
import LogoWizards from '../../img/svg/LogoWizards';
import LogoWizards2 from '../../img/svg/LogoWizards2';
import Doubts from '../../img/svg/Doubts';
import Coffee from '../../img/svg/Coffee';
import Infinity from '../../img/svg/Infinity';



export default class SplashScreen extends React.Component {

    static navigationOptions = {
        title: 'Main',
    };

    componentDidMount() {
        setTimeout(() => { this.props.navigation.navigate('App') }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                {/* <Text style={{ color: '#fff', fontSize: 30 }}>Scrum Poker</Text> */}
                <LogoWizards width={330} height={300}/>
                {/* <LogoWizards2 /> */}
                {/* <Doubts width={50} height={50}/> */}
                {/* <Coffee width={50} height={50}/> */}
                {/* <Infinity width={50} height={50}/> */}
            </View>
        );
    }
}
