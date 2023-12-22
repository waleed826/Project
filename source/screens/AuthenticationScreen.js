import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import auth from '@react-native-firebase/auth';

const AuthenticationScreen = () => {
     // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Please Login again</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

export default AuthenticationScreen

const styles = StyleSheet.create({})




 

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }