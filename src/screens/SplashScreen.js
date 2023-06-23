import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../../asset/Img/images.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      const isUserActive = await AsyncStorage.getItem('userActive');
      if (isUserActive) {
        navigation.dispatch(StackActions.replace('Home'));
      } else {
        navigation.dispatch(StackActions.replace('Login'));
      }
    }, 4000);
  }, []);

  return (
    <View style={style.container}>
      <StatusBar hidden={true} />
      <View></View>

      <View>
        <Image source={logo} style={style.logo} />
        <Text style={style.text}>SplashScreen</Text>
      </View>
      <View>
        <Text style={style.textBtm}>Made with ❤💕💖 Pakistan</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  textBtm: {
    fontSize: 20,
  },
});

export default SplashScreen;
