import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Profile = () => {
  // route form value using hook
  const route = useRoute();
  // console.log(route);
  const {userName, userEmail, userPassword} = route.params;

  return (
    <View style={style.container}>
      <View></View>
      <Text>User Name: {userName}</Text>
      <Text>User Email: {userEmail}</Text>
      <Text>User Password: {userPassword}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102818',
  },
});

export default Profile;
