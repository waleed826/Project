import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <View style={styles.main}>
        <TouchableOpacity style={{ backgroundColor: props.color, height: 50, justifyContent: 'center', borderRadius: 20 }}>
          <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
      </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    main:{ 
        margin: 10 
    },
    txt:{
        color: 'white', 
        textAlign: 'center',
        fontSize:20, 
        fontWeight:'bold' }
})