import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({navigation}) => {
    const checLogIn= async ()=>{
        const login = await AsyncStorage.getItem('isLogedIn')
        console.log("🚀 ~ file: HomeScreen.js:11 ~ checLogIn ~ login:", login)
        if(login != null){
            navigation.navigate('second')
        }
        else{
            navigation.navigate('first')
        }
    }
    useEffect(()=>{
    checLogIn()
    },[])
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})