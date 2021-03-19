import React, { Component } from 'react';
import { Image,StyleSheet, View,TouchableOpacity} from 'react-native';

import imagePath from '../constants/imagePath';

 export default function DishCategoryList (props){
    const {data,onMove}=props ;
   return(
       <View>
      <TouchableOpacity onPress={onMove}>
      <Image source={{uri:data.dish_image}} style={styles.dish_image}/>
      </TouchableOpacity>
       </View>
   )
 }
 const styles= StyleSheet.create({
     dish_image:{
         height:90,
         width:90,
         resizeMode:'contain',
        marginHorizontal:10
     }
 })