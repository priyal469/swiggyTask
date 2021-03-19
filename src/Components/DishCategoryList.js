import React, { Component } from 'react';
import { Image,StyleSheet, View} from 'react-native';
import imagePath from '../constants/imagePath';

 export default function DishCategoryList (props){
    const {data}=props ;
   return(
       <View style={{backgroundColor:'green',flexDirection:'row'}}>
       <Image source={{uri:data.dish_image}} style={styles.dish_image}/>
       </View>
   )
 }
 const styles= StyleSheet.create({
     dish_image:{
         height:'100%',
         width:'100%',
         resizeMode:'contain'
     }
 })