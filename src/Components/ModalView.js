import React, { Component } from "react";
import {View,Text,StyleSheet,Modal, TextInput, TouchableOpacity} from "react-native";
import colors from "../styles/colors";
import BorderTextInput from "./BorderTextInput";
import RectangleBtn from "./RectangleBtn";
export default function ModalView(props){
const{onPressCloseModal,isModalVisible}=props;
    return(
<Modal  transparent={true} onRequestClose={onPressCloseModal}
               visible={isModalVisible} >

<View style={styles.modalView}>
    <BorderTextInput placeholder='Enter number' />
    <RectangleBtn onText='Send OTP' onPressBtn={onPressCloseModal} />

</View>
                   </Modal>
    )
}
const styles=StyleSheet.create({
    modalView:{
        backgroundColor:colors.white,
        width:'90%',
        marginHorizontal:10,
        alignSelf:'center',
        padding:8,
        borderWidth:1,
        borderColor:colors.lightgrey,
        marginVertical:'55%'
        
}
})