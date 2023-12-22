import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const Animate = () => {
  return (
    <View style={{ flex: 1, padding:10, justifyContent:'space-around' }}>
      
      <View>
      <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
      <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', alignSelf: 'stretch' }}>❤️</Animatable.Text>
      </View>
      <View style={{flex:1,justifyContent:'space-between'}}>
        <Animatable.Text animation="bounce" easing="ease-out" iterationCount="infinite" style={styles.texaNim}>bounce</Animatable.Text>
        <Animatable.Text animation="flash" easing="ease-out" iterationCount="infinite" style={styles.textaNim}>flash</Animatable.Text>
        <Animatable.Text animation="jello" easing="ease-out" iterationCount="infinite" style={styles.textaNi}>jello</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.textaN}>pulse</Animatable.Text>
        <Animatable.Text animation="rubberBand" easing="ease-out" iterationCount="infinite" style={styles.texta}>rubberBand</Animatable.Text>
        <Animatable.Text animation="shake" easing="ease-out" iterationCount="infinite" style={styles.extaNime}>shake</Animatable.Text>
        <Animatable.Text animation="swing" easing="ease-out" iterationCount="infinite" style={styles.xtaNime}>swing</Animatable.Text>
        <Animatable.Text animation="tada" easing="ease-out" iterationCount="infinite" style={styles.textaNime}>tada</Animatable.Text>
        <Animatable.Text animation="wobble" easing="ease-out" iterationCount="infinite" style={styles.texaNime}>wobble</Animatable.Text>
      </View>
    </View>
  )
}

export default Animate

const styles = StyleSheet.create({
    texaNim:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 50, 
        backgroundColor: 'green',
        color:'white' 
      },
      textaNim:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'orange',
        color:'white' 
      },
      textaNi:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'black',
        color:'white' 
      },
      textaN:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'purple',
        color:'white' 
      },
      texta:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'brown',
        color:'white' 
      },
      extaNime:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'skyblue',
        color:'white' 
      },
      xtaNime:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'red',
        color:'white' 
      },
      textaNime:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'gray',
        color:'white' 
      },
      texaNime:{
        textAlign: 'center',
        alignSelf: 'stretch', 
        padding: 10, 
        backgroundColor: 'blue',
        color:'white' 
      },
})