import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import EmailInput from '../components/inputs/EmailInput'
import PasswordInput from '../components/inputs/PasswordInput'
import { ActivityLoader } from '../../src/components/shared/Shared'
import theme from '../themes/theme'
import { signup } from '../services/AuthServices'

const Signup = ({ navigation }) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [secureEntry, setSecureEntry] = useState(true)
  const { control, handleSubmit, formState:{ errors } } = useForm()

  const toggleSecureEntry = () =>{
    setSecureEntry(!setSecureEntry)
}

const _signup = async(data) =>{

  try {
      setLoading(true)
      const message = await signup(data)
      await navigation.navigate('Login')
      Toast.show(
          message,
          {}
      )
    } catch (error) {
        setError(error.message)
    }finally{
        setLoading(false)
    }

}

  return (
    <View style={ styles.container }>

      <Image 
        style={{ width: 100, height: 100, marginBottom: 10 }} 
        source={require('../../assets/educate.png')} />

      <Text style={ styles.title }>Signup</Text> 

      { loading ? <ActivityLoader /> : null}

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

       <PasswordInput
        name='password_confirmation'
        control={control}
        errors={errors}
        errorValidationStyle={styles.erroValidation} 
        inputStyle={styles.input}
        secureEntry={secureEntry}
        toggleSecuryEntry={toggleSecureEntry}
      />      

      <TouchableOpacity style={styles.button}  onPress={handleSubmit(_signup)}>
        <Text style={ styles.textBtn }>Signup</Text>
      </TouchableOpacity>

      <Text 
        style={styles.link} 
        onPress={() => navigation.navigate('Login')}>Already have an Account</Text>

    </View>
  )
}

export default Signup

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