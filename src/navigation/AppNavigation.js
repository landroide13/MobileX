import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import GeneralStack from './GeneralStack'
import UserStack from './UserStack'
import theme from '../themes/index';
import { ThemeProvider } from '@rneui/themed';

const AppNavigation = ({ userToken }) => {
  return (
    <NavigationContainer>
         <ThemeProvider theme={theme}>
            { userToken == null ? <UserStack/> : <GeneralStack/>}
         </ThemeProvider>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})