import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import RectangleBtn from './RectangleBtn';

 export default function FoodList (props){

    
    const {data,onAddToCart}=props;
    return(

        
           
              
                 
              <View style={styles.mainView}>
              <Image source={{uri:data.item_image}} style={styles.item_image}/>
              <Text style={styles.item_name}>{data.item_name}</Text>
              <Text style={styles.item_description}>{data.item_description}</Text>
              <Text style={styles.item_price}>{data.item_price}</Text>
              <RectangleBtn onText="Add to cart" onPressBtn={onAddToCart}/>
              </View>
            
           
                
           
       
    )
 }
 const styles=StyleSheet.create({
     mainView:
     {
         marginHorizontal:4,
         marginTop:10,
         borderColor:colors.lightgrey,
         borderWidth:1
        },

     item_image:{
         resizeMode:'cover',
         height:150,
         width:170,
         
     },
     item_name:{
         fontSize:15,
         padding:3,
         marginHorizontal:7
     },
     item_price:{
        fontSize:10,
        padding:3,
        marginHorizontal:10
     },
     item_description:{
        fontSize:12,
        marginHorizontal:10,
        color:colors.textGreyLight
    },
 })