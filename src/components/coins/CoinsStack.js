import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinsDetails from './CoinsDetails';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinsDetail" component={CoinsDetails} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
