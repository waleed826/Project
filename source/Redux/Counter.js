import { Button, StyleSheet, Text, View,TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addByValue, decrement, increment, toggleMode } from './Slice'

const Counter = () => {
    const [val, setVal] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.count.counter)
    const Darkmode = useSelector((state)=> state.dark.value)
    console.log("🚀 ~ file: Counter.js:11 ~ Counter ~ Darkmode:", Darkmode)
    console.log("🚀 ~ file: Counter.js:8 ~ Counter ~ count:", count)
  return (

    <View style={{backgroundColor:Darkmode ? 'black' : 'white',flex:1}}> 
          <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={Darkmode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>dispatch(toggleMode())}
        value={Darkmode}
      />
        <Button title='Increment' onPress={()=>dispatch(increment())}/>
      <Text style={{textAlign:'center',fontSize:50,fontWeight:'bold',color: Darkmode ? 'white' : 'black'}}>{count}</Text>
      <Button title='Decrement' onPress={()=>dispatch(decrement())}/>
    <TextInput
    style={{borderColor:'black',borderWidth:1,padding:20,margin:10,borderRadius:10}}
    onChangeText={(num)=>setVal(num)}
    placeholder='Enter Value'
    />
    <Button title='Add by Value' onPress={()=>dispatch(addByValue(Number(val)))}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})