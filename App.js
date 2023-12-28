// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Svg, { Path,Circle } from 'react-native-svg';

// const App = () => {
//   return (
//     <View>
//       <Svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//         {/* Left Part of G in Red */}
//         <Path d='M20 10V70' stroke="rgba(234, 67, 53, 1)" strokeWidth="10" strokeLinejoin='round' strokeLinecap='butt'  />
//         {/* <Circle cx="50" cy="50" r="40" fill="rgba(251, 188, 5, 1)" /> */}
//         {/* Horizontal Part of G in Green */}
//         <Path d="M20 50H40" stroke="rgba(52, 168, 83, 1)" strokeWidth="10" strokeLinecap='square' strokeLinejoin='round' st strokeLinecap='square' />

//         {/* Right Part of G in Blue */}
//         <Path d="M80 50V10" stroke="rgba(66, 133, 244, 1)" strokeWidth="10" strokeLinecap="round" />
//       </Svg>
//       <Svg height="100" width="100">
//         <Path
//           d="M20 10V90H80V50H50V30H80V10H20ZM50 30H30V50H50V30Z"
//           fill="blue" strokeLinecap='square'
//         />
//       </Svg>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import OneSignal from 'react-native-onesignal';
const App = () => {

  useEffect(()=>{
    OneSignals()
  },[])
  const OneSignals = ()=>{
// OneSignal Initialization
OneSignal.setAppId('9446f177-17cd-4c86-8716-24250db9ec2d');

// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
OneSignal.promptForPushNotificationsWithUserResponse();

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification.body);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Counter from './source/Redux/Counter'
// import { Provider } from 'react-redux'
// import { store } from './source/Redux/Store'

// const App = () => {
//   return (
//     <Provider store={store}>
//     <Counter/>
//     </Provider>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

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


