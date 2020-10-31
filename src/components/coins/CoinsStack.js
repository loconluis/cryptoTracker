import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinsDetails from '../coinDetail/CoinsDetails';
import Colors from 'cryptoTracker2/src/res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowOpacity: 0,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinsDetail" component={CoinsDetails} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
