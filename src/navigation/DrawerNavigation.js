import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import Form from '../screens/Form';
import MaterialTopNav from './MaterialTopNav';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={MaterialTopNav} />

      <Drawer.Screen name="About" component={HomeScreen} />
      {/* <Drawer.Screen name="About" component={About} /> */}

      <Drawer.Screen name="Profile" component={Profile} />

      {/* <Drawer.Screen name="Form" component={Form} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
