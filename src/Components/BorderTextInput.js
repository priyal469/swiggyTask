import React,{Component} from "react";
import{View,Text,StyleSheet,TextInput} from "react-native";

import colors from "../styles/colors";


export default function BorderTextInput(props){
    const{placeholder,_onChangeText,inputKey}=props;
    return(
        <TextInput placeholder={placeholder} style={styles.text_input} onChangeText={()=>_onChangeText(inputKey)} 
        />
    )
}
const styles=StyleSheet.create({
    text_input:{
       borderBottomWidth:1,
       borderBottomColor:colors.themeColor,
        // height:30,
        width:'100%',
        marginVertical:6
    }
})
