import React,{Component} from "react";
import{View,Text,StyleSheet} from "react-native";
import colors from "../styles/colors";


export default function Header(props){

    const{headerText}=props;
    return(
            
        <View>
        
        <Text style={styles.headerText}>{headerText}</Text>
        </View>
                  
                 
    )
}
const styles= StyleSheet.create({
   
      
       headerText:{
           
        padding:10,
        fontSize:18
       }
})