import * as React from "react";
import * as firebase from "firebase";
import { firebaseConfig } from "../screens/config";
if(! firebase.apps.length){
    firebase.intializeApp(firebaseConfig);

}
 else{
    firebase.app()
 }
 