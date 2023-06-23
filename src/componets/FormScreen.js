import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const FormScreen = () => {
  const [isPassShow, setIsPassShow] = useState(false);

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <FontAwesome style={style.font} name="envelope" />
        <TextInput
          style={style.textInput}
          // value="email"
          placeholder="Enter Your Email"
        />
      </View>
      <View style={style.inputContainer}>
        <FontAwesome style={style.font} name="lock" />
        <TextInput
          style={style.textInput}
          // value="email"
          placeholder="Enter Your Password"
          secureTextEntry={isPassShow ? false : true}
        />
        <TouchableOpacity onPress={() => setIsPassShow(!isPassShow)}>
          <FontAwesome
            style={style.font}
            name={isPassShow ? 'eye-slash' : 'eye'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 10,
    width: '90%',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    flex: 1,
  },
  font: {
    fontSize: 25,
  },
});

export default FormScreen;
