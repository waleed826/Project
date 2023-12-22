import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { getAuth, signOut } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeScreen = ({ navigation }) => {

    const snut = () => {
        const auth = getAuth();
        signOut(auth).then(
            // Sign-out successful.
            console.log("Succeess"),
            AsyncStorage.removeItem('isLogedIn'),
            navigation.navigate('first'),
            ToastAndroid.show("Logged Out Successfully", ToastAndroid.SHORT)
        ).catch((error) => {
            showToast(error)
            console.log("Failure")
            // An error happened.
        });
        const showToast = (error) => {
            ToastAndroid.show(error, ToastAndroid.SHORT);
        };
    }
    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={snut} style={styles.button}><Text style={styles.txt}>LogOut</Text></TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(0,0,255,0.5)',
        marginHorizontal: 25,
        paadign: 20,
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        margin: 20
    }
})