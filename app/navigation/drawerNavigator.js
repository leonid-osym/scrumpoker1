import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from '../views/mainScreen/mainScreen';
import SettingsScreen from '../views/settingsScreen/settingsScreen';
import DrawerComponent from './drawerComponent';

export default DrawerNavigator = createDrawerNavigator(
    {
        screen: createStackNavigator({
        Main: {
            screen: MainScreen,
        },
        Settings: {
            screen: SettingsScreen
        }
    })
    },
    {
        // Custom rendering component of drawer panel
        contentComponent: DrawerComponent,
        // () => {
        //     console.log('drawer', this.props);
        //     return (
        //         <DrawerComponent />
        //     )
        // },
    }
);