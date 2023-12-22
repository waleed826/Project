import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import Article from './Article';
import NetflixScreen from '../screens/NetflixScreen';
import Home from './Home';
const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator >
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})





    
