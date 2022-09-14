import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import { HomeScreen } from '../screens';

import {MarketScreen} from '../screens';


const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Market' component={MarketScreen} />
     
    </Stack.Navigator>

    
  );
};
