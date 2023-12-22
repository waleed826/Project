import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View>
            <Button title={'Login'} onPress={() => navigation.navigate('Tab')} />

        </View>
    )
}

export default Login

const styles = StyleSheet.create({})