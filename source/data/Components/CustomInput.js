import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const CustomInput = (props) => {
    
  return (
    <View style={{backgroundColor:'#d1d1d1',flexDirection:'row',justifyContent:'center',padding:5,margin:10,borderWidth:1,borderRadius:10}}>
    <TextInput 
    placeholder={props.placeholder}
    maxLength={props?.length}
    keyboardType={props?.keyboardType}
    placeholderTextColor={'black'}
    style={{width:'70%'}}
    secureTextEntry={props.secureTextEntry}
    onChangeText={props.onChangeText}
    />
    <AntDesign name={props.name} size={40} onPress={props.onPress}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})