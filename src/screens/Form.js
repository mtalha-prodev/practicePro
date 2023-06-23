import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // navigate next page using hook
  const navigation = useNavigation();

  const formHandle = subValue => {
    // console.log(subValue)
    navigation.navigate(subValue, {
      userName: name,
      userEmail: email,
      userPassword: password,
    });
  };

  return (
    <View style={style.container}>
      <View>
        <Text>Form Submit</Text>
        <TextInput
          style={style.input}
          value={name}
          onChangeText={val => setName(val)}
          placeholder="Enter Your Name"
        />
        <TextInput
          style={style.input}
          value={email}
          onChangeText={val => setEmail(val)}
          placeholder="Enter Your Email"
        />
        <TextInput
          style={style.input}
          value={password}
          secureTextEntry={true}
          onChangeText={val => setPassword(val)}
          placeholder="Enter Your Password"
        />
        <TouchableOpacity
          style={style.submitBtn}
          onPress={() => formHandle('Profile')}>
          <Text style={style.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102818',
  },
  input: {
    borderWidth: 1,
    width: width - 20,
    borderRadius: 6,
    marginTop: 10,
    padding: 10,
  },
  submitBtn: {
    width: width - 20,
    marginTop: 15,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
});

export default Form;
