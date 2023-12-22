import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
                 <Button title={'Logout'} onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})