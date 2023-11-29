import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axiosInstance from '../axios-client';

const SubjectList = ({ navigation }) => {

const [ subjects, setSubjects ] = useState([])
const [loading, setLoading] = useState(false);

const getSubjects = () =>{
    setLoading(true)
    axiosInstance.get('/lectures')
    .then(({ data }) => {
    setSubjects(data.data)
    setLoading(false)
    })
    .catch(() => {
        const response = err.response;
    if (response && response.status === 422) {
        setErrors(response.data.errors)
    }
        setLoading(false)
    })
}

useEffect(() => {
    getSubjects();
})


  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Subjects List</Text>


    </View>
  )
}

export default SubjectList

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

      item: {
        backgroundColor: theme.lightColors.gray,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
})