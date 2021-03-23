import React,{Component} from "react";
import{View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import colors from "../styles/colors";


export default function RectangleBtn(props){
const{onPressBtn,onText,onPressCloseModal,}=props;
return(
<TouchableOpacity onPress={onPressBtn} style={styles.touchable_btn}  >
    <Text style={styles.touchable_btn_text}>
{onText}
    </Text>
</TouchableOpacity>
)
}

const styles=StyleSheet.create({
touchable_btn:{
    height:45,
    width:'100%',
    backgroundColor:colors.themeColor,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:15
   
    
},
touchable_btn_text:{
    color:colors.white,
    fontSize:12
   
}
})