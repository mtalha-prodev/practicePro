import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import bgImg from '../../asset/BackGround/bg.jpg';
import SignupStyle from '../StyleSheet/StyleSignup';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function SignUpForm() {
  const navigation = useNavigation();
  const {navigate} = navigation;

  const style = SignupStyle;
  return (
    <View style={style.container}>
      <View>
        <Image source={bgImg} style={style.bgImg} />
      </View>
      <View style={style.formContainer}>
        {/* Top form sign up view */}
        <View style={style.topForm}>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <FontAwesome style={style.topFormText} name="chevron-left" />
          </TouchableOpacity>

          <Text style={style.topFormText}>Sign Up</Text>
        </View>
        {/* bottom sign up form container */}
        <View style={style.bottomForm}>
          <View>
            <Text style={style.accountText}>
              Look like if you have don't an account let's create a new account
              for !
            </Text>
            <Text style={style.accountEmail}>jacksparow0077@gmail.com</Text>
          </View>
          {/* input email */}
          <View style={style.inputBox}>
            <Text style={style.text}>Email</Text>
            <TextInput style={style.input} />
          </View>
          {/* input password */}
          <View style={style.inputBox}>
            <Text style={style.text}>Password</Text>
            <TextInput style={style.input} secureTextEntry={true} />
          </View>
          {/* agree, terms and privacy policy */}
          <View style={style.policy}>
            <Text style={style.policyText}>
              By selecting agree and continue below,{' '}
            </Text>
            <View style={style.terms}>
              <Text style={style.termsText}>I agree to</Text>
              <TouchableOpacity>
                <Text style={style.privacyText}>
                  Terms of service and privacy policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Agree Button */}
          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Agree and Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
