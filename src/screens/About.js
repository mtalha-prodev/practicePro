import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const About = () => {
  const [inputVal, setInputVal] = useState('');

  const [getVal, setGetVal] = useState([]);

  useEffect(() => {
    const temp = async () => {
      await getStorage();
    };
    temp();
  }, []);

  const setStorage = async () => {
    try {
      getVal.push(inputVal);
      await AsyncStorage.setItem('list', JSON.stringify(getVal));
      setInputVal('');
      // getStorage();
    } catch (error) {
      console.log(error);
    }
  };
  const getStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('list');
      const outPut = JSON.parse(data);
      setGetVal(outPut);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <Text style={{color: 'red'}}>Welcome to About</Text>
      <TextInput
        style={style.inputField}
        value={inputVal}
        onChangeText={val => setInputVal(val)}
      />
      <TouchableOpacity style={style.btn} onPress={() => setStorage()}>
        <Text> Add LocalStorage Data</Text>
      </TouchableOpacity>
      <Text style={{color: 'green'}}>LocalStorage Data: {getVal}</Text>
      {/* {getVal.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        );
      })} */}
    </View>
  );
};

const {width} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    padding: 5,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'lightblue',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    color: '#000',
  },
});

export default About;
