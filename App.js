import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './source/Redux/Counter'
import { Provider } from 'react-redux'
import { store } from './source/Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
    <Counter/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View ,TextInput, Button,Image} from 'react-native'
// import React, { useEffect, useState } from 'react'
// import firestore from '@react-native-firebase/firestore';
// import AuthenticationScreen from './source/screens/AuthenticationScreen';
// import SignWithEmailScreen from './source/screens/SignWithEmailScreen';
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import HomeScreen from './source/screens/HomeScreen';
// import LogoutScreen from './source/screens/Splash';
// import Splash from './source/screens/Splash';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   // useEffect(() => {
//   //   getData()
//   // }, [])
//   // const [fireStoreData, setFirestoreData] = useState([])
//   // const [name , setName] = useState('')
//   // const [phone , setPhone] = useState('')
//   // const [user , setUser] = useState(0)
//   // const getData = async () => {
//   //   const usersCollection = firestore().collection('Users').doc('ABC');
//   //   const data = await usersCollection.get()
//   //   setFirestoreData(data?._data)
//   //   console.log("🚀 ~ file: App.js:7 ~ useEffect ~ usersCollection:", data._data)
//   // }

//   // const setData = () => {
//   //   firestore()
//   //     .collection('Users')
//   //     .doc(`User#3`)
//   //     .update({
//   //       num: 'Waleed',
//   //       ios: '0308753434',
//   //     })
//   //     .then(() => {
//   //       setUser(user+1)
//   //       console.log('User added!');
//   //     });
//   // }
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='third' screenOptions={{headerShown:false}}>
//         <Stack.Screen name='first' component={SignWithEmailScreen} />
//         <Stack.Screen name='second' component={HomeScreen} />
//         <Stack.Screen name='third' component={Splash} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     // <AuthenticationScreen/>
//     // <View>
//     //   <Text>{fireStoreData.name}</Text>
//     //   <Image style={{height:100,width:100}} resizeMode='contain' source={{uri : fireStoreData?.img}}/>
//     //   <TextInput
//     //   value={name}
//     //   style={{borderColor:'red',borderWidth:1}}
//     //   onChangeText={(val)=>setName(val)}
//     //   />
//     //    <TextInput
//     //   value={phone}
//     //   style={{borderColor:'red',borderWidth:1}}
//     //   onChangeText={(val)=>setPhone(val)}
//     //   />
//     //   <Button title='Save Data' onPress={setData}/>
//     // </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native'
// // import { createNativeStackNavigator } from '@react-navigation/native-stack'
// // import Contacts from './source/screens/ToDo/Contacts'
// // import Add from './source/screens/ToDo/Add'
// // import ContactDetails from './source/screens/ToDo/ContactDetails'

// // const App = () => {

// //   // const Stack = createNativeStackNavigator();

// //   return (
// //     <View style={{flex:1,zIndex:1}}>
// //       <View style={{height:200,backgroundColor:'red',borderBottomLeftRadius:30,borderBottomRightRadius:30,zIndex:20}}>
// //       </View>
// //       <View style={{backgroundColor:'green',borderBottomLeftRadius:30,borderBottomRightRadius:30,height:100,zIndex:9,bottom:30,elevation:70,shadowColor:'red'}}>

// // </View>
// //     </View>
// //     // <NavigationContainer>
// //     //   <Stack.Navigator initialRouteName='Contacts' >
// //     //   <Stack.Screen name={'Contacts'} component={Contacts} />
// //     //   <Stack.Screen name={'Add'} component={Add} 
// //     //   options={{
// //     //     headerShown:false
// //     //   }}
// //     //   />
// //     //   <Stack.Screen name={'Contact Details'} component={ContactDetails} />
// //     //   </Stack.Navigator>
// //     //   </NavigationContainer>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({})


