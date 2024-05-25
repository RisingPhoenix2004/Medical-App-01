import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main'
import OTPverify from './components/OTPverify';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="OTPVerify" component={OTPverify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;