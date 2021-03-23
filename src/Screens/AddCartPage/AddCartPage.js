import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList } from "react-native";
import Header from "../../Components/Header";
import {connect} from 'react-redux';
import CartList from '../../Components/CartList'
import  actions from "../../redux/actions";

import store from '../../redux/store'
  class AddCartPage extends Component{
constructor(props){
    super(props);
  
}

componentDidMount=()=>{
    console.log("in did mount",this.props.TotalPrice)
    actions.forTotalPrice(this.props.cartArray)
}

onItemDelete=(id)=>{
       
    actions.deleteItem(id)
}

onAdd_Quantity=(id)=>{
     actions.increaseQuantity(id)
}

onSubtract_Quantity=(id)=>{
    actions.decreaseQuantity(id)
}

    render(){
        const{cartArray}=this.props;
       
        return(
           <View style={{flex:1}}>
               <Header headerText="CartList"/>
               <Text>Total Price: {this.props.TotalPrice}</Text>
           <FlatList  
            data={cartArray}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={()=><View style={{height:10}}></View>}
            renderItem={({ item} ) =>
              <CartList data={item}  onItemDelete={this.onItemDelete} onAdd_Quantity={this.onAdd_Quantity} onSubtract_Quantity={this.onSubtract_Quantity} 
              />
            }
              />
              
           </View>
        )
    }
}

const mapStateToProps=state=>({
    cartArray:state.home.cartArray,
    TotalPrice:state.home.TotalPrice
})
export default connect(mapStateToProps)(AddCartPage)