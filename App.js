/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  BiometricIsAvailable,
  BasicBiometricAuth,
  LoginBiometricAuth,
  SetUser,
  UpdateUser,
  GetUser,
  DeleteUser,
} from 'react-native-biometric-login';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Is there an available biometric sensor?
      </Text>
      <Button
        title="Execute"
        color="green"
        onPress={() => {
          BiometricIsAvailable().then(res => {
            Alert.alert(JSON.stringify(res))
            }).catch(e => {
              Alert.alert(e.toString())
              })
          }}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Basic Biometric Prompt
      </Text>
      <Button
        title="Execute"
        color="#f194ff"
        onPress={() => {
          BasicBiometricAuth().then(res => {
            Alert.alert(JSON.stringify(res))
            }).catch(e => {
              Alert.alert(e.toString())
              })
          }}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Biometric Prompt with stored credentials returned.
      </Text>
      <Button
        title="Execute"
        color="red"
        onPress={() => {
          LoginBiometricAuth().then(res => {
            Alert.alert(JSON.stringify(res))
            }).catch(e => {
              Alert.alert(e.toString())
              })
          }}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Credential Store Functions
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Set User"
          onPress={() => {
            SetUser("John", "1234Doe").then(res => {
              Alert.alert(JSON.stringify(res))
              }).catch(e => {
                Alert.alert(e.toString())
                })
            }}
        />
        <Button
          title="Update User"
          onPress={() => {
            UpdateUser("Jane", "Doe5678").then(res => {
              Alert.alert(JSON.stringify(res))
              }).catch(e => {
                Alert.alert(e.toString())
                })
            }}
        />
      </View>
    </View>
    <View style={{marginTop: 15}}>
      <View style={styles.fixToText}>
        <Button
          title="Get User"
          onPress={() => {
            GetUser().then(res => {
              Alert.alert(JSON.stringify(res))
              }).catch(e => {
                Alert.alert(e.toString())
                })
            }}
        />
        <Button
          title="Delete User"
          onPress={() => {
            DeleteUser().then(res => {
              Alert.alert(JSON.stringify(res))
              }).catch(e => {
                Alert.alert(e.toString())
                })
            }}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;


// import React, { useState } from 'react';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

// const HomeScreen = () => {
//   return(
//     <View><Text>HomeScreen</Text></View>
//   )
//   };

// const SettingsScreen = () => {
//   return(
//     <View><Text>HomeScreen</Text></View>
//   )
//   };

// const CustomDropdownLabel = ({ label, onPress }) => (
//   <TouchableOpacity onPress={onPress} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
//     <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{label}</Text>
//   </TouchableOpacity>
// );

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       {/* Additional drawer items */}
//       <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
//       <CustomDropdownLabel  label="Dropdown Label"  onPress={() => { /* Handle dropdown press */ }} />
//       <DrawerItem label="Settings" onPress={() => props.navigation.navigate('Settings')} />
//     </DrawerContentScrollView>
//   );
// };

// const App = () => {
//   const [hide,setHide] = useState(false);
//   return (
//     <NavigationContainer>

//     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


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


// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'
// import OneSignal from 'react-native-onesignal';
// const App = () => {

//   useEffect(()=>{
//     OneSignals()
//   },[])
//   const OneSignals = ()=>{
// // OneSignal Initialization
// OneSignal.setAppId('9446f177-17cd-4c86-8716-24250db9ec2d');

// // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
// OneSignal.promptForPushNotificationsWithUserResponse();

// //Method for handling notifications received while app in foreground
// OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
//   console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
//   let notification = notificationReceivedEvent.getNotification();
//   console.log("notification: ", notification.body);
//   // Complete with null means don't show a notification.
//   notificationReceivedEvent.complete(notification);
// });

// //Method for handling notifications opened
// OneSignal.setNotificationOpenedHandler(notification => {
//   console.log("OneSignal: notification opened:", notification);
// });
//   }
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

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


