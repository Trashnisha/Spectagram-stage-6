import React,{Component} from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import firebase from "firebase";
import {RFValue} from "react-native-responsive-fontsize"
import * as Font from "expo-font";

export default class LonginScreen extends Component{
  constructor(props){
  super(props)
  this.state=(
    email:"",
    password:"",
    fontsLoaded:false,
    userSignedIn:false
  )
}
async _loadFontsAsync(){
  await Font.loadAsync(coustomFonts)
  this.setState({fontsLoaded:true})
}
componentDidMount(){
  this._loadFontsAsync()
}
{render() {
  if (
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.appIcon}
          ></Image>
          <Text style={styles.appTitleText}>{`Storytelling\nApp`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.signInWithGoogleAsync()}
          >
            <Image
              source={require("../assets/google_icon.png")}
              style={styles.googleIcon}
            ></Image>
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cloudContainer}>
          <Image
            source={require("../assets/cloud.png")}
            style={styles.cloudImage}
          ></Image>
        </View>
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#15193c"
},
droidSafeArea: {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
},
appTitle: {
  flex: 0.4,
  justifyContent: "center",
  alignItems: "center"
},
appIcon: {
  width: RFValue(130),
  height: RFValue(130),
  resizeMode: "contain"
},
appTitleText: {
  color: "white",
  textAlign: "center",
  fontSize: RFValue(40),
  fontFamily: "Bubblegum-Sans"
},
buttonContainer: {
  flex: 0.3,
  justifyContent: "center",
  alignItems: "center"
},
button: {
  width: RFValue(250),
  height: RFValue(50),
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: RFValue(30),
  backgroundColor: "white"
},
googleIcon: {
  width: RFValue(30),
  height: RFValue(30),
  resizeMode: "contain"
},
googleText: {
  color: "black",
  fontSize: RFValue(20),
  fontFamily: "Bubblegum-Sans"
},
cloudContainer: {
  flex: 0.3
},
cloudImage: {
  position: "absolute",
  width: "100%",
  resizeMode: "contain",
  bottom: RFValue(-5)
}
});


login = async (email, password) =>{
 firebase 
 .auth()
 . loginWithEmailAndPassword(email, password)
 .then(() =>{
   this.props.navigation.replace("Dashboard");
 })
 .catch(error =>{
   Alert.alert(error.message);
 });
}
}