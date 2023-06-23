import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bgImage from '../../asset/BackGround/bg.jpg';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import GoogleImg from '../../asset/BackGround/google.png';
import FacebookImg from '../../asset/BackGround/meta.png';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';

export default function MainFromScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {navigate} = navigation;

  const loginAuth = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Alert.alert('auth successfuly Login');
        navigation.dispatch(StackActions.replace('Home'));
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('user auth not find !');
      });
  };

  useEffect(() => {}, []);

  const userLogin = async () => {
    try {
      if (email && password) {
        const userData = {
          email: email,
          pass: password,
        };
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        await AsyncStorage.setItem('userActive', 'true');
        navigation.dispatch(StackActions.replace('Home'));

        console.log('succes');
      } else {
        console.log('Please Enter Correct !');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <View>
        <Image source={bgImage} style={style.img} />
      </View>
      <View style={style.formContainer}>
        <View style={style.formTop}>
          <FontAwesome
            style={{fontSize: 30, marginHorizontal: 10}}
            name="chevron-left"
          />

          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Hi..!</Text>
        </View>
        <View style={style.formBottom}>
          <View style={style.formInput}>
            <Text style={style.text}>Email </Text>
            <TextInput
              name={email}
              style={style.inputText}
              onChangeText={val => setEmail(val)}
            />
          </View>
          <View style={style.formInput}>
            <Text style={style.text}>Password</Text>
            <TextInput
              name={password}
              style={style.inputText}
              secureTextEntry={true}
              onChangeText={val => setPassword(val)}
            />
          </View>

          <TouchableOpacity
            onPress={() => loginAuth()}
            style={{
              backgroundColor: 'rgb(3, 171, 106)',
              padding: 15,
              alignItems: 'center',
              marginTop: 10,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Continue</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontSize: 25}}>or</Text>
          {/* Social media login start */}
          <TouchableOpacity style={style.socialMedia}>
            <View style={{width: 100}}>
              <Image source={GoogleImg} style={{width: 45, height: 45}} />
            </View>
            <Text style={style.socialText}>Continue With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.socialMedia}>
            <View style={{width: 100}}>
              <Image source={FacebookImg} style={{width: 45, height: 45}} />
            </View>
            <Text style={style.socialText}>Continue With Facebook</Text>
          </TouchableOpacity>
          {/* Social media login start */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Don't have an Account!{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate('Signup');
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(3, 171, 106)',
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(3, 171, 106)',
                }}>
                Forgot Your Password!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
  },

  formContainer: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  formTop: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  formBottom: {
    flex: 1.7,
    backgroundColor: 'rgba(50,50,50,0.7)',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  formInput: {
    width: '100%',
    borderRadius: 15,
    marginVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(250,250,250,0.8)',
  },
  text: {
    marginHorizontal: 10,
    color: '#000',
    marginTop: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  inputText: {
    padding: 0,
    marginTop: 0,
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 17,
    marginBottom: 5,
  },
  socialMedia: {
    marginVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(250,250,250,0.8)',
    paddingVertical: 5,
  },
  socialText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
