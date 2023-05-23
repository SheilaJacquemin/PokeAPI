import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonTitle = ({ title, action }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonTitle

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#7320d4',
    borderRadius: 5,
    alignItems: 'center'
  },
  title: {
    color: '#ffffff'
  }
})