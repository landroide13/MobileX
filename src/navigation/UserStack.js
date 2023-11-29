import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubjectList from '../screens/SubjectList'
import Attendance from '../screens/Attendance'
import Home from '../screens/Home';
import theme from '../themes/theme'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            headerTintColor: theme.lightColors.gray,
            headerStyle: { backgroundColor: theme.lightColors.background }
        }} 
        initialRouteName='Home'>

        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Subjects' component={SubjectList} />
        <Stack.Screen name='Attendance' component={Attendance} />
    </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})