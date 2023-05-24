import {View, Text, Button} from 'react-native';
import React from 'react';

const Screen1 = ({navigation}) => {
  return (
    <View>
      <Text>Screen1</Text>
      <Button
        title="next screen"
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      />
    </View>
  );
};

export default Screen1;
