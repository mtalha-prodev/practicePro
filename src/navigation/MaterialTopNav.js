import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import Form from '../screens/Form';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const MaterialTopTab = createMaterialTopTabNavigator();

const MaterialTopNav = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="Home" component={HomeScreen} />
      <MaterialTopTab.Screen name="About" component={About} />
      <MaterialTopTab.Screen name="Form" component={Form} />
    </MaterialTopTab.Navigator>
  );
};

export default MaterialTopNav;
