import React,{Component} from 'react'
import {Text,View,} from 'react-native'
import { Switch } from 'react-native-paper'

export default class Profile extends Component{
    toggleSwitch() { 
        const previous_state = this.state.isEnabled;
         const theme = !this.state.isEnabled ? "dark" : "light";
          var updates = {}; updates[ "/users/" + firebase.auth().currentUser.uid + "/current_theme" ] = theme; firebase .database() .ref() .update(updates); this.setState({ isEnabled: !previous_state, light_theme: previous_state }); }
    render() {
  
          return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.iconImage}
                ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Spectagram</Text></View>
               </View>
              <View style={styles.screenContainer}>
                <View style={styles.profileImageContainer}>
                    <Image
                    source={{uri:this.state.profile_image}}
                    style={styles.profileImage}
                    ></Image>
                    <Text style={styles.nameText}>{this.state.name}</Text>
                </View>
               <View style={styles.themeContainer}>
                <Text style={styles.themeText}>Dark Theme</Text>
                <Switch style={{transform:[{scaleX:1.3},{scaleY:1.3}]}}
                trackColor={{false:"#767577",true:"white"}}
                thumbColor={this.state.isEnabled ? "#ee8249": "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={()=>this.toggleSwitch()}
                value={this.state.isEnabled}/>
               </View>
               <View style={{flex:0.3}}/>
               </View>
               <View style={{flex:0.08}}/>
               </View>
          );
    }}
                  
