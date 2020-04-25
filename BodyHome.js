import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Playlist from './Playlist';

const BodyHome = (props) => {
    const data = [
        {imgUri:"https://cdn.pixabay.com/photo/2017/12/17/21/44/coffee-3025022__340.jpg",Name:"Coffee", Desc:"Playlisht created for lonely evenings"},
        {imgUri:"https://cdn.pixabay.com/photo/2018/09/26/01/06/piano-3703616__340.jpg", Name:"Jazz", Desc:"Songs for late evening"},
        {imgUri:"https://marketersmedia.com/wp-content/uploads/2018/02/Whiskey-Decanters-13-1-500x333.jpg", Name:"Whiskey Blues", Desc:"The classic blues"},
        {imgUri:"https://wallpaperaccess.com/full/518981.jpg", Name:"J Cole", Desc:"Just J Cole"},
        {imgUri:"data:image/jpeg;base64,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", Name:"Fly Lo", Desc:"Chill"},
        {imgUri:"https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", Name:"Morning", Desc:"Playlist to wake up"},
    ]
    return(
        <LinearGradient colors={["#2af598", "#009efd"]} style={styles.mainCont}>
           {/* Head */}
           <View style={styles.head} >
                <Text style={styles.headText}>Playlists for finding yourself</Text>
           </View>
           <ScrollView contentContainerStyle={styles.body} >
                {data.map((i,index)=>{
                   return <Playlist key={index} imgUri={i.imgUri} Name={i.Name} Desc={i.Desc} ></Playlist> 
                })}
           </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainCont:{
        width:"80%",
        height:"70%",
        borderRadius:50,
        overflow:"hidden",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    },
    head:{
        width:"100%",
        height:"20%",
        backgroundColor:"#035aa6",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    headText:{
        fontSize:24,
        fontWeight:"600",
        color:"#fcbf1e"
    },
    body:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around",
    },
});

export default BodyHome;