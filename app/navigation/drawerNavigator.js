import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from '../views/mainScreen/mainScreen';
import SettingsScreen from '../views/settingsScreen/settingsScreen';
import AboutScreen from '../views/aboutScreen/aboutScreen';
import DrawerComponent from './drawerComponent';

export default DrawerNavigator = createDrawerNavigator(
    {
        screen: createStackNavigator({
            Main: {
                screen: MainScreen,
            },
            Settings: {
                screen: SettingsScreen
            },
            About: {
                screen: AboutScreen
            },
        })
    },
    {
        contentComponent: DrawerComponent,
    }
);