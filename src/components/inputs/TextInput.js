import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Input, Icon } from '@rneui/themed';

const TextInput = ({ name, required = true, minLength, maxLength, errors, inputStyle, errorValidationStyle, iconName, control }) => {
  return (
    <>
      <Controller 
        control={control} 
        rules= {{ required: true,  minLength, maxLength }}
        render={({ field: { onChange, onBlur, value }}) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={inputStyle}
            placeholderTextColor='black'
            leftIcon={
              <Icon name={iconName} type='ionicon' size={24} color={'black'} />
            }
          />
         )} 
        name={name} />

        {errors[name]?.type === 'required' && <Text style={errorValidationStyle}>Field Required</Text> }
        {errors[name]?.type === 'minLength' && <Text style={errorValidationStyle}>Text too short</Text> }
        {errors[name]?.type === 'maxLength' && <Text style={errorValidationStyle}>Text too long</Text> }
    </>
  )
}

export default TextInput

const styles = StyleSheet.create({})