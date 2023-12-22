import { Alert, NativeModules, StyleSheet, Text, TextInput, TouchableOpacity, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignWithEmailScreen = ({navigation}) => {
    const loginfire=()=>{
auth()
  .createUserWithEmailAndPassword(email, passwords)
  .then(() => {
    showToast()
    navigation.navigate('second')
    AsyncStorage.setItem('isLogedIn',"true")
})
.catch(error => {
    if (error.code === 'auth/email-already-in-use') {
        showTast()
        // navigation.navigate('second')
    }
    
    if (error.code === 'auth/invalid-email') {
        // Alert.alert('Invalid Credentials')
        showTost()
    }
    
    //  console.error(error);
});
}
const showTost = () => {
    ToastAndroid.show('Invalid credentials !', 
    ToastAndroid.SHORT,
    // ToastAndroid.color'gray'
    );
};
const showTast = () => {
    ToastAndroid.show('the email is already registered !', ToastAndroid.SHORT);
};
const showToast = () => {
    ToastAndroid.show('email is registered already !', ToastAndroid.SHORT);
  };
const [email, setEmail] = useState('');
const [passwords, setPassword] = useState('');
  return (
    <View>
      <Text>SignWithEmailScreen</Text>
      <TextInput placeholder='Enter Eamail' onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder='Enter password' secureTextEntry onChangeText={setPassword} style={styles.input}/>
      <TouchableOpacity onPress={loginfire} style={styles.button}><Text style={{color:'white',textAlign:'center',fontSize:20,margin:20}}>Login</Text></TouchableOpacity>
    </View>
  )
}

export default SignWithEmailScreen

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        margin:10,
    },
    button:{
        backgroundColor:'rgba(0,0,255,0.5)',
        marginHorizontal:25,
        paadign:20,
    }
})
