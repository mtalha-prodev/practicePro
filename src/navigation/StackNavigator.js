import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
// import HomeScreen from './src/screens/HomeScreen';

// import UseState from './src/componets/UseState';
// import Array from './src/componets/Array';
// import FatchData from './src/componets/FatchData';
// import About from './src/screens/About';
// import Service from './src/screens/Service';
// import Profile from './src/screens/Profile';
// import Form from './src/screens/Form';
// import BottomNavigation from './src/navigation/BottomNavigation';
// import DrawerNavigation from './src/navigation/DrawerNavigation';
// import MaterialBottomNav from './src/navigation/MaterialBottomNav';
// import MaterialTopNav from './MaterialTopNav';
import SplashScreen from '../screens/SplashScreen';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 4000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* splash screen */}
        {splashScreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}

        {/* login form */}
        <Stack.Screen
          name="Signin"
          component={Signin}
          //   options={{headerShown: false}}
        />

        {/* signup  */}
        {/* top material tab like whatsapp */}

        <Stack.Screen
          name="Signup"
          component={Signup}
          //   options={{headerShown: false}}
        />

        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
        name="Material"
        component={MaterialTopNav}
        options={{headerShown: false}}
      /> */}

        {/* bottom material tab */}
        {/* <Stack.Screen
        name="MaterialBottomTab"
        component={MaterialBottomNav}
        options={{headerShown: false}}
      /> */}

        {/* Drawer Navigation */}
        {/* <Stack.Screen
        name="DrawerNav"
        component={DrawerNavigation}
        options={{headerShown: false}}
      /> */}

        {/* bottom navigate */}
        {/* <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{headerShown: false}}
      /> */}

        {/* simple page navigate */}

        {/* <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
