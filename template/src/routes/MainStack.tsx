import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '@screens/Home';
import AnotherRoute from '@screens/AnotherRoute';

export type RootStackParamList = {
  Home: undefined;
  AnotherRoute: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator detachInactiveScreens={false}>
        <Screen name="Home" component={Home} />
        <Screen name="AnotherRoute" component={AnotherRoute} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
