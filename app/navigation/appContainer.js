import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../views/splashScreen/splashScreen';
import DrawerNavigator from './drawerNavigator';

export default createAppContainer(createSwitchNavigator(
    {
        SplashScreen,
        App: DrawerNavigator,
    },
    {
        initialRouteName: 'SplashScreen',
    }
));

