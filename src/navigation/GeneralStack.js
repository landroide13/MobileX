import { StyleSheet, Text, View, statusBarHidden } from 'react-native'
import React from 'react';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home';
import theme from '../themes/theme'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubjectList from '../screens/SubjectList';
import Attendance from '../screens/Attendance';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const GeneralStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: theme.lightColors.gray,
        headerStyle: { backgroundColor: theme.lightColors.background }
      }} 
      initialRouteName='Login'>
          <Stack.Screen  name='Login' component={Login}/>
          <Stack.Screen name='Signup' component={Signup} />
          {/* <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Subjects' component={SubjectList} />
          <Stack.Screen name='Attendance' component={Attendance} /> */}
    </Stack.Navigator>    
  )
}

export default GeneralStack

