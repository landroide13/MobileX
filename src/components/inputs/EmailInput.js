import {Text, View } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Input, Icon } from '@rneui/themed';

const EmailInput = ({ name, control, errors, inputStyle, errorValidationStyle }) => {

   return (
    <>
      <Controller 
        control={control} 
        rules= {{ required: true,  pattern: /^\S+@\S+$/i }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={inputStyle}
            placeholderTextColor='black'
            leftIcon={
              <Icon name='at' type='ionicon' size={24} color={'black'} />
            }
            keyboardType='email-address'
          />
        )} 
        name={name} 
      />

        {errors[name]?.type === 'required' && <Text style={errorValidationStyle}>Field Required</Text> }
        {errors[name]?.type === 'pattern' && <Text style={errorValidationStyle}>Wrong Format</Text> }
    </>
  )
}

export default EmailInput
