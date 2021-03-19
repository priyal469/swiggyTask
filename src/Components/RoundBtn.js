import React,{Component} from "react";
import{View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";

import imagePath from "../constants/imagePath";
export default function RoundBtn(props){
const{onPressRoundBtn}=props;
    return(
       <View>
            <TouchableOpacity onPress={onPressRoundBtn}>
                        <Image source={imagePath.Round_Arrow_Btn}  style={styles.roundBtn} />

                    </TouchableOpacity>



       </View>
    )
}
const styles=StyleSheet.create({
    roundBtn:{
        height:50,
        width:50,
        resizeMode:'contain',
        // position:'absolute',
        // bottom:0,
        
        
        
        
        
    }
   
})