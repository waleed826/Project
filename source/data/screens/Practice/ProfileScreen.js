import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native'
import React from 'react'



const oneData = [
    { txt: 'Transaction List', id: 1, image: require('../assets/images/check.png') },
    { txt: 'Wishlist', id: 2, image: require('../assets/images/peakpx.jpg') },
    { txt: 'Reviews', id: 3, image: require('../assets/images/peakpx.jpg') },
]
const twoData = [
    { txt: 'Notifications', id: 1, image: require('../assets/images/peakpx.jpg') },
    { txt: 'Set Password', id: 2, image: require('../assets/images/peakpx.jpg') },
    { txt: 'Theme', id: 3, image: require('../assets/images/peakpx.jpg') },
]
const threeData = [
    { txt: 'Help', id: 1, image: require('../assets/images/peakpx.jpg') },
    { txt: 'Store', id: 2, image: require('../assets/images/peakpx.jpg') },
    { txt: 'Language', id: 3, image: require('../assets/images/peakpx.jpg') },
]

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(229,229,229)' }}>
            <View style={{ flex: 0.4, backgroundColor: 'rgb(229,229,229)' }}>

                <View style={{ flex: 1, margin: 5, padding: 5, flexDirection: 'row' }}>
                    <Image style={{ marginTop: 5, height: 20, width: 20 }} source={require('../assets/images/Vector1.png')} />
                    <Text style={{ marginLeft: 13, fontSize: 16, color: 'black' }}>Profile</Text></View>
                <View style={{ alignItems: 'center', padding: 15 }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 40, padding: '1%' }}>
                        <ImageBackground style={{ justifyContent: 'flex-end', padding: 1, alignItems: 'flex-end', height: 70, width: 70 }} source={require('../assets/images/Ellipse9.png')}>
                            <View style={{ backgroundColor: 'white', borderRadius: 15 }}>
                                <Image style={{ height: 15, width: 15, margin: 8 }} resizeMode='contain' source={require('../assets/images/vecto.png')} />
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={{ color: 'rgba(0,0,0,0.8)', fontSize: 30, fontWeight: 'bold' }}>Mr. Irfan</Text>
                    <View style={{ backgroundColor: 'rgba(174,174,174,0.1)', borderRadius: 15, padding: 1 }}>
                        <Text style={{ margin: 5, }} >kartolo727@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.8, padding: 10, backgroundColor: 'white', borderRadius: 25 }}>
                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Activity</Text>
                            </View>
                        )
                    }}
                    data={oneData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image style={{backgroundColor:'black', height:20,width:20}} resizeMode='contain' source={item?.image}/>
                                <Text style={{fontSize:18}}>{item?.txt}</Text>
                                
                                <Image style={{marginLeft:20, height:15,width:15}} resizeMode='contain' source={require('../assets/images/vector4.png')}/>
                                </View>
                            </View>

                        )
                    }}
                />
                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Arrangement</Text>
                            </View>
                        )
                    }}
                    data={twoData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{flexDirection:'row'}}>
                                <Text>{item.txt}</Text>
                                <View>
                                <Image style={{marginLeft:20, height:15,width:15}} resizeMode='contain' source={require('../assets/images/vector4.png')}/>
                                </View>
                            </View>

                        )
                    }}
                />
                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Help Center</Text>
                            </View>
                        )
                    }}
                    data={threeData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{flexDirection:'row'}}>
                                <Text>{item.txt}</Text>
                                <View>
                                <Image style={{marginLeft:20, height:15,width:15}} resizeMode='contain' source={require('../assets/images/vector4.png')}/>
                                </View>
                            </View>

                        )
                    }}
                />
                <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'black', width: '80%', borderRadius: 5 }}>
                    <Text style={{ color: 'white', }}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})