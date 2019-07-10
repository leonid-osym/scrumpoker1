import React from 'react';
import { View, Text } from 'react-native';

export default class SplashScreen extends React.Component {

    static navigationOptions = {
        title: 'Main',
      };

    componentDidMount(){
        setTimeout(()=>{this.props.navigation.navigate('App')}, 3000);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Text style={{ color: 'white', fontSize: 20 }}>Splash Screen</Text>
            </View>
        );
    }
}
