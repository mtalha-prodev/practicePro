import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ToastAndroid,
  RefreshControl,
} from 'react-native';

import React, {useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FilePicker from 'react-native-document-picker';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [isRefresh, setIsRefresh] = useState(false);

  const handleLink = screens => {
    // console.log(navigation);
    navigation.navigate(screens);
  };

  // file picker in galary
  const handlePicker = async () => {
    try {
      const respone = await FilePicker.pick({
        presentationStyle: 'fullScreen',
      });
      console.log(respone);
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = () => {
    Alert.alert('Warning', 'Are you sure to exit !', [
      {
        text: 'Yes',
        onPress: async () => {
          await AsyncStorage.clear();
          navigation.dispatch(StackActions.replace('Login'));
        },
      },
      {
        text: 'No',
      },
    ]);
  };

  const EventHandler = () => {
    // ToastAndroid.show('Hello Dear', 2000);
    // ToastAndroid.showWithGravity(
    //   'Welcom to',
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    // );
    ToastAndroid.showWithGravityAndOffset(
      'Welcome to ',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      100,
    );
  };

  const eventRefresh = () => {
    setIsRefresh(true);
    setTimeout(() => {
      setIsRefresh(false);
    }, 2000);
  };

  return (
    <ScrollView
      style={{backgroundColor: 'red', height: '100%', width: '100%'}}
      refreshControl={
        <RefreshControl
          refreshing={isRefresh}
          onRefresh={() => eventRefresh()}
        />
      }>
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => handleLink('Home')}
          style={style.textBtn}>
          <Text style={{fontWeight: 'bold'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLink('About')}
          style={style.textBtn}>
          <Text style={{fontWeight: 'bold'}}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Logout()} style={style.textBtn}>
          <Text style={{fontWeight: 'bold'}}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => EventHandler()} style={style.textBtn}>
          <Text style={{fontWeight: 'bold'}}>ToastMessage</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePicker()} style={style.textBtn}>
          <Text style={{fontWeight: 'bold'}}>Open Galary</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
        onPress={() => handleLink('Service')}
        style={style.textBtn}>
        <Text style={{fontWeight: 'bold'}}>Service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleLink('Form')}
        style={style.textBtn}>
        <Text style={{fontWeight: 'bold'}}>Form Details</Text>
      </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102818',
  },
  textBtn: {
    backgroundColor: 'gray',
    width: 150,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default HomeScreen;
