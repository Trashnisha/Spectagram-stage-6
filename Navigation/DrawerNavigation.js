import {createDrawerNavigator} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import StackNavigator from "../screens/StackNavigator";
import React from 'react';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={StackNavigator}/>
            <Drawer.Screen name="profile" component={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;