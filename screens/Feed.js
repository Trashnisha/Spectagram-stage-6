import React,{Component} from 'react'
import {Text,View,} from 'react-native';
import PostCard from "./PostCard";
import{FlatList} from "react-native-gesture-handler"

export default class Feed extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    renderItem=({item:post})=>{
        return <PostCard post={post} navigation={this.props.navigation}/>
    }
    render()
     {
         return (
             <View style={styles.container}>
                 <SafeAreaView style={styles.droidSafeArea} />
                  <View style={styles.appTitle}> 
                  <View style={styles.appIcon}>
                     <Image source={require("../assets/logo.png")} style={styles.iconImage} ></Image> 
                     </View> <View style={styles.appTitleTextContainer}> 
                     <Text style={styles.appTitleText}>Spectagram</Text>
                      </View> </View> <View style={styles.cardContainer}>
                         <FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem} /> 
                         </View> </View> ); 
}

}
