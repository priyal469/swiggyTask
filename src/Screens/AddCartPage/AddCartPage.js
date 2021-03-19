import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList } from "react-native";
import Header from "../../Components/Header";



export default  class AddCartPage extends Component{
constructor(props){
    super(props);
    this.state={

    }
}
    render(){
        return(
            <View>
<Header onText='Order Bag' />
            </View>
        )
    }
}
