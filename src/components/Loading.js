import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Getting the Current Weather..</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FFF6AB',
  },
  containerText: {
    fontSize: 30,
  },
})

export default Loading
