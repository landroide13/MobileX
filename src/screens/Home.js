import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../themes/theme'


const Home = ({ navigation }) => {

  const onExit = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={ styles.container }>

      <Image 
        style={{ width: 100, height: 100, marginBottom: 10 }} 
        source={require('../../assets/educate.png')} />

      <Text style={ styles.title }>Dashboard</Text> 

      <TouchableOpacity style={styles.button}>
        <Text style={ styles.textBtn } onPress={() => navigation.navigate('Subjects')}>Show Subjects</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={ styles.textBtn } onPress={() => navigation.navigate('Attendance')}>Take Attendance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onExit}>
        <Text style={ styles.textBtn }>Exit</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.lightColors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    marginTop: 0
  },

  title: {
    fontSize: 28,
    color: theme.lightColors.gray,
    fontWeight: theme.fonts.$fontWeight900    
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20,
    width: '70%'
  },

  textBtn:{
    fontSize: 25,
    color: theme.lightColors.background,
    fontWeight: theme.fonts.$fontWeight900
  },

})