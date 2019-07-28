import React from 'react';
import { View } from 'react-native';
import LogoWizards from '../../img/svg/LogoWizards';



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
                <LogoWizards width={330} height={300}/>
            </View>
        );
    }
}
