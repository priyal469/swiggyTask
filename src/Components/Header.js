import React,{Component} from "react";
import{View,Text,StyleSheet,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";
import colors from "../styles/colors";
import {connect} from 'react-redux'
 function Header(props){

    const{headerText,incrementCount,onMove,cartArray}=props;
    console.log("in header",cartArray)
    return(
            
        <View style={styles.headerView}>
        
        <Text style={styles.headerText}>{headerText}</Text>
       <TouchableOpacity onPress={onMove}>
       <Image source={imagePath.cartImage} style={styles.cartImage} />
       </TouchableOpacity>
        <Text style={styles.cartCount}>{cartArray.length}</Text>
        <Text></Text>
        </View>
                  
                 
    )
}
const mapStateToProps=state=>(
    {
        cartArray:state.home.cartArray
    }
   
)
 export default connect(mapStateToProps)(Header)

const styles= StyleSheet.create({
   headerView:{
height:50,
backgroundColor:colors.white,
alignItems:'center',
// justifyContent:'space-between',
flexDirection:'row'
   },
      
       headerText:{
           
        padding:10,
        fontSize:18
       },
       cartImage:{
           height:45,
           width:45,
           resizeMode:'contain',
           marginHorizontal:"50%",
          
       },
       cartCount:{
        position:'absolute',
        right:15,
        top:0,
        fontSize:16
    }
})