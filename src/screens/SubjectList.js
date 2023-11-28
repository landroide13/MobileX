import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubjectList = ({ navigation }) => {
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
})