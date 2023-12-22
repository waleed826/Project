import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const shoPassword = () => { 
    	setShowPassword(!showPassword)
    };
  return (
    <View>
    <CustomInput placeholder={'Enter Name'} name={'user'} />
    <CustomInput placeholder={'Enter Number'} name={'phone'} keyboardType={'number-pad'} maxlength={11} />
    <CustomInput placeholder={'Enter Password'} color={'white'} onChangeText={setPassword} onPress={shoPassword} name={showPassword ? 'eyeo' : 'eye'} maxlength={10} secureTextEntry={!showPassword} />
    <CustomButton title={'LogIn'} color={'skyblue'} />
  </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})