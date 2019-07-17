import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import MainScreen from '../views/mainScreen/mainScreen';
import DrawerComponent from './drawerComponent';

export default DrawerNavigator = createDrawerNavigator(
    {
        Main: {
            screen: MainScreen,
        },
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