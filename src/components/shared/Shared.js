import { View, ActivityIndicator } from 'react-native'
import React from 'react'

export const ActivityLoader = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
        <ActivityIndicator color="#f29866" size="large" />
      </View>
    )
}


