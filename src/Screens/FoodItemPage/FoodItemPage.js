import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList } from "react-native";
import FoodList from "../../Components/FoodList";
import Header from "../../Components/Header";
import navigationStrings from "../../constants/navigationStrings";

import store from "../../redux/store";
import actions from "../../redux/actions"



  class FoodItemPage extends Component{
constructor(props){
    super(props);
    this.state={
        count:0,
    food_item_array:[
        {
            id:1,
            item_image:"http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg",
            item_name:'Veg Chow',
            item_description:'Fast Food,1.5Km',
            item_price:'150',
            item_quantity:0
        },
        {
            id:2,
            item_image:"http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg",
            item_name:'Veg Chow',
            item_description:'Fast Food,1.5Km',
            item_price:'150',
            item_quantity:0
        },
        {
            id:3,
            item_image:"http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg",
            item_name:'Veg Chow',
            item_description:'Fast Food,1.5Km',
            item_price:'150',
            item_quantity:0
        },
        {
            id:4,
            item_image:"http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg",
            item_name:'Veg Chow',
            item_description:'Fast Food,1.5Km',
            item_price:'150',
            item_quantity:0
        },
        {
            id:5,
            item_image:"http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg",
            item_name:'Veg Chow',
            item_description:'Fast Food,1.5Km',
            item_price:'150',
            item_quantity:0
        },
        {
            id:6,
            item_image:"http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg",
            item_name:'Veg Chow',
            item_description:'Fast Food,1.5Km',
            item_price:'150',
            item_quantity:0
        },
       
       
        
    ]
    }
}
onItemAdd=()=>{
    this.setState({
        count:count+1
    })
    
     
   
    
}
onAddToCart=(id)=>{
    
    const{food_item_array}=this.state;
   let elementIndex=food_item_array.findIndex(object=>object.id===id)
    
    actions.addToCart(food_item_array, elementIndex)   
   
   
}

onMove=()=>{
    const{navigation}=this.props;
    navigation.navigate(navigationStrings.ADD_CART_PAGE)
}
render(){
   
    const{food_item_array,count}=this.state;
    return(
        <View style={{flex:1}}>
            <Header headerText='Food List' incrementCount={count} onMove={this.onMove}/>
            <FlatList numColumns={2} 
            data={food_item_array}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={()=><View style={{width:10}}></View>}
            renderItem={({ item }) =>
              <FoodList data={item}  onAddToCart={this.onAddToCart}  />
            }

          />
          
        </View>
    )
}
}


export default FoodItemPage;
