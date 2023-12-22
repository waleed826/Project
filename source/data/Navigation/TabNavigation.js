import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import NetflixScreen from '../screens/NetflixScreen';

import Settings from './Settings';
import Profile from './Profile';
import More from '../screens/More';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator 
        initialRouteName='Netflitwo'
        screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: 'yellow'
        }}>
            <Tab.Screen name='Netflitwo' options={{
                tabBarIcon: (focused) => {
                    return (
                        <View>
                            <AntDesign name={'user'} color={focused ? 'blue' : 'grey'} size={30} />
                        </View>
                    )
                },
                tabBarBadge: 10,
                tabBarBadgeStyle: { backgroundColor: 'green' },


            }

            } component={NetflixScreen} />
            <Tab.Screen name='more' component={More} />
            {/* <Tab.Screen name='Settings' component={Settings} />
            <Tab.Screen name='Profile' component={Profile}  />*/}
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})