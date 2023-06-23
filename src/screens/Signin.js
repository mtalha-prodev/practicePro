import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10}}
        onPress={() => navigation.navigate('DrawerNavigation')}>
        <Text>Signin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10, marginVertical: 5}}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={{fontSize: 20}}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
