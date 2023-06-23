import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import FormScreen from './src/componets/FormScreen';
import ResponseUi from './src/componets/ResponseUi';
import MainFromScreen from './src/screens/MainFromScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpForm from './src/componets/SignUpForm';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <Text style={{color: 'red'}}>welcom world</Text>
    </View>
    // <NavigationContainer>
    //   {/* <ScrollView> */}
    //   <Stack.Navigator>
    //     {/* <View style={{flex: 1}}> */}
    //     {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}

    //     <Stack.Screen
    //       name="Login"
    //       component={MainFromScreen}
    //       options={{headerShown: false}}
    //     />
    //     {/* <Stack.Screen
    //       name="Signup"
    //       component={SignUpForm}
    //       options={{headerShown: false}}
    //     /> */}
    //     <Stack.Screen
    //       name="Home"
    //       component={DrawerNavigation}
    //       options={{headerShown: false}}
    //     />
    //     {/* <StatusBar hidden={true} /> */}
    //     {/* <MainFromScreen /> */}

    //     {/* <FormScreen /> */}

    //     {/* <ResponseUi /> */}
    //     {/* <StackNavigator />; */}
    //     {/* </View> */}
    //   </Stack.Navigator>
    //   {/* </ScrollView> */}
    // </NavigationContainer>
  );
}

// In App.js in a new project

// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
