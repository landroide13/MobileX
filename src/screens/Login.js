import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import EmailInput from '../components/inputs/EmailInput'
import PasswordInput from '../components/inputs/PasswordInput'
import theme from '../themes/theme'
import { login } from '../services/AuthServices'

import { useAuth } from '../providers/AuthProvider'

const Login = ({ navigation }) => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [secureEntry, setSecureEntry] = useState(true)
  const { control, handleSubmit, formState:{ errors } } = useForm()
  const { handleLogin } = useAuth()

  const toggleSecureEntry = () =>{
    setSecureEntry(!setSecureEntry)
}
 
  const _login = async(data) =>{
    try {
        setLoading(false)
        const res = await login(data)
        await handleLogin(res.data)
        Toast.show(
            res.message,
            {
                position: Toast.positions.CENTER,
            }
        )
        
    } catch (error) {
        setError(error.message)
        setLoading(false)
    }
  }


  return (
    <View style={ styles.container }>

      <Image 
        style={{ width: 100, height: 100, marginBottom: 10 }} 
        source={require('../../assets/educate.png')} />

      <Text style={ styles.title }>Login</Text> 

      <EmailInput 
        name='email' 
        control={control} 
        errors={errors} 
        errorValidationStyle={styles.erroValidation} 
        inputStyle={styles.input}
      />

      <PasswordInput
        name='password'
        control={control}
        errors={errors}
        errorValidationStyle={styles.erroValidation} 
        inputStyle={styles.input}
        secureEntry={secureEntry}
        toggleSecuryEntry={toggleSecureEntry}
      />   

      <TouchableOpacity style={styles.button} onPress={handleSubmit(_login)}>
        <Text style={ styles.textBtn }>Login</Text>
      </TouchableOpacity>

      <Text 
        style={styles.link} 
        onPress={() => navigation.navigate('Signup')}>Create Account</Text>
    </View>
  )
}

export default Login

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

  link:{
    color: theme.lightColors.gray,
    fontSize: 18,
  },

  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20,
    width: '50%',
    borderRadius: 8
  },

  textBtn:{
    fontSize: 25,
    color: theme.lightColors.gray,
    fontWeight: theme.fonts.$fontWeight900,
    marginBottom: 20
  },


})