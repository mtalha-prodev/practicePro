import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import Form from '../screens/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homes"
        component={HomeScreen}
        options={{
          tabBarIcon: data => {
            return <Ionicons name="home" size={22} color={'gray'} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: () => {
            return (
              <Ionicons name="information-circle" color={'gray'} size={22} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="person" color={'gray'} size={22} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
