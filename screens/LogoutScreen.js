import React,{Component} from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import firebase from "firebase";
import {RFValue} from "react-native-responsive-fontsize"
import * as Font from "expo-font";

export default class LogoutScreen extends Component{
    render(){
        if(!this.state.fontsLoaded){
            return <Apploading/>;
        } else{
            return(
                <View
                  style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                  }}>
                    <Button
                      title="Sign in with Google"
                      onPress={()=> this.signInWithGoogleAsync()}></Button>
                  </View>
            )
        }
    }
}