import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { getSubjects } from '../services/SubjectsService';

const SubjectList = ({ navigation }) => {

const [ subjects, setSubjects ] = useState([])
const [loading, setLoading] = useState(false);

useEffect(() => {
  (async () => {
      const _subjects = await getSubjects()
      setSubjects(_subjects)
  })()
}, [])
  
  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.title }>Subjects List</Text>
        <ScrollView>
            <View>
              {
                subjects.map(subject => {
                  return(
                    <View key={subject.id} style={ styles.item }>
                      <Text style={ styles.title }>{ subject.lecture_name } text </Text>
                    </View>
                  )
                })
                }
            </View>
        </ScrollView>
    </SafeAreaView>
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
        color: theme.lightColors.background,
        fontWeight: '600'    
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
        borderRadius: 8
      },
})