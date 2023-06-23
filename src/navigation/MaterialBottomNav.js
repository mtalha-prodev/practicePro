import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import Form from '../screens/Form';

const MaterialTab = createMaterialBottomTabNavigator();

const MaterialBottomNav = () => {
  return (
    <MaterialTab.Navigator>
      <MaterialTab.Screen name="Home" component={HomeScreen} />
      <MaterialTab.Screen name="About" component={About} />
      <MaterialTab.Screen name="Form" component={Form} />
    </MaterialTab.Navigator>
  );
};

export default MaterialBottomNav;
