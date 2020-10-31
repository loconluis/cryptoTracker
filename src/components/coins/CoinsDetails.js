import React from 'react';
import { View, Text } from 'react-native';

const CoinsDetails = (props) => {
  console.log('COINS on detail', props.route.params);
  return (
    <View>
      <Text>Coins Details Screen</Text>
    </View>
  );
};

export default CoinsDetails;
