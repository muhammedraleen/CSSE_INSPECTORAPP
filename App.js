import React from 'react';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import AddHalt from './components/AddHalt';
import Report from './components/Report';
import Scan from './components/QrReader';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddHalt" component={AddHalt} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="Scanner" component={Scan} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
