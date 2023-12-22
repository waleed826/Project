import { StyleSheet, Text, View, FlatList, Image, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import LinearGradient from 'react-native-linear-gradient'

const imageArray = [
  { naeme: '', image: require('../assets/images/Sol.png') },
  { naeme: '', image: require('../assets/images/MaskGroups.png') },
  { naeme: '', image: require('../assets/images/fergus.png') },
  { naeme: '', image: require('../assets/images/MaskGroup.png') },
  { naeme: '', image: require('../assets/images/Kids.png') },
]

const GadgetsScreen = () => {
  return (

    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <TouchableOpacity style={{ opacity: 10 }}>
          <ImageBackground resizeMode='stretch' source={require('../assets/images/outerbanks.png')} style={{ height: 400, flexShrink: 0, color: 'lightgray' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
              <Image source={require('../assets/images/NETFLIXLOGO.png')} />
              <Text onPress={() => Alert.alert('Pressed TV SHOWS')} style={{ color: 'white' }}>TV SHOWS</Text>
              <Text onPress={() => Alert.alert('Pressed Movies')} style={{ color: 'white' }}>Movies</Text>

              <Text onPress={() => Alert.alert('Pressed My List')} style={{ color: 'white' }}>My List</Text>
            </View>
            <View style={{
              alignItems: 'center', marginTop: 180, background: ' rgba(217, 217, 217, 0.5)',
              backgroundColor: 'rgba(0,0,0,0.4)', borderBottomWidth: 40
            }}>
              <Image source={require('../assets/images/SERIES.png')} />

              <Image style={{}} source={require('../assets/images/LOGO.png')} />
              {/* <Text style={{color:'white', fontSize:40}}>OUTER{"\n"}BANKS</Text> */}
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
          <Text style={{ color: 'white', fontSize: 13 }}>Soapy</Text>
          <Text style={{ color: 'white', fontSize: 13 }}>Exciting</Text>
          <Text style={{ color: 'white', fontSize: 13 }}>Teen</Text>
          <Text style={{ color: 'white', fontSize: 13 }}>Action</Text>
          <Text style={{ color: 'white', fontSize: 13 }}>Drama</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name='plus' size={20} style={{ color: 'white' }} />
            <Text style={{ color: 'white' }}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'white', opacity: 10, width: '45%', height: '70%', flexDirection: 'row', justifyContent: 'center' }}>
            <Entypo name='controller-play' style={{ color: 'black' }} size={30} />
            <Text style={{ color: 'black', fontSize: 20 }}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column' }}>
            <AntDesign name='infocirlceo' size={20} style={{ color: 'white' }} />
            <Text style={{ color: 'white' }}>info</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white' }}>Previews</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ opacity: 10, flex: 1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginLeft: 10 }}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity >
            )
          }}
        />
        <Text style={{ color: 'white' }}>Movies</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ opacity: 10, flex: 1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginLeft: 10 }}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity >
            )
          }}
        />
        <Text style={{ color: 'white' }}>Trending Now</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ opacity: 10, flex: 1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginLeft: 10 }}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity >
            )
          }}
        />
        <Text style={{ color: 'white' }}>Favorites</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ opacity: 10, flex: 1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginLeft: 10 }}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity>
            )
          }}
        />




        {/* <FlatList
     inverted={true}
       data={userData}
       numColumns={2}
       ListHeaderComponent={()=>{
         return(
           <View>
             <Text>Header</Text>
           </View>
         )
       }}
       ListFooterComponent={()=>{
         return(
           <View>
             <Text>$20</Text>
           </View>
         )
       }}
       ListEmptyComponent={()=>{
         return(
           <View>
             <Text> No Data Found</Text>
           </View>
         )
       }}
       renderItem={({ item, index }) => {
         return (
           <View>
             <Text>{item.id}</Text>
             <Image style={{width:100,height:100}} source={item.image}/>
             <Text>{item.name}</Text>

             <Text>{item.number}</Text>
           </View>
         )
       }}
     /> */}
        {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <View style={{flexDirection:'row'}}>
         <Image/>
         <Text></Text>
       </View>
       <View style={{flexDirection:'row'}}>
         <Image/>
         <Image/>
       </View>
     </View> */}
        {/* <ScrollView horizontal>
     {userData.length > 0 ? (userData.map((item,id)=>{
       return (
         <View key={id}>
           <Image style={{width:100,height:100}} source={item.image}/>
           <Text>{item.name}</Text>
           <Text>{item.number}</Text>
         </View>
       )

     })):
     <View>
       <Text>No Data Found</Text>
     </View>
     }
     </ScrollView> */}
        {/* <Text>{userData[0].number}</Text> */}
      </ScrollView>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5 }}>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column', }}>
            <MaterialCommunityIcons name='home-outline' style={{ color: 'white' }} size={25} />
            <Text style={{ fontSize: 10 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column', }}>
            <EvilIcons name='search' style={{ color: 'white' }} size={31} />
            <Text style={{ fontSize: 10 }}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column',alignItems:'center' }}>
            <MaterialIcons name='video-library' style={{ color: 'white' }} size={25} />
            <Text style={{ fontSize: 10 }}>Coming soon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column',alignItems:'center'  }}>
            <Octicons name='download' style={{ color: 'white' }} size={25} />
            <Text style={{ fontSize: 10 }}>Downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column', }}>
            <Octicons name='three-bars' style={{ color: 'white' }} size={25} />
            <Text style={{ fontSize: 10 }}>More</Text>
          </TouchableOpacity>
        </View>


        
      </View>
    </View>

  )
}


export default GadgetsScreen

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
})