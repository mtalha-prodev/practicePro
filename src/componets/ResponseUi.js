import {View, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

const ResponseUi = () => {
  const [isRotate, setIsRotate] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      const orientation = isPotrait();
      setIsRotate(orientation);
    });
  }, []);

  const isPotrait = () => {
    const {height, width} = Dimensions.get('screen');

    return height > width ? false : true;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        flexDirection: isRotate ? 'row' : 'column',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}>
        <Text>BLUE COLOR</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text>RED COLOR</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Text>GREEN COLOR</Text>
      </View>
    </View>
  );
};

export default ResponseUi;
