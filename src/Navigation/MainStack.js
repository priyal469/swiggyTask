import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Home,FoodItemPage, AddCartPage} from "../Screens/index";

import navigationStrings from "../constants/navigationStrings";



const Stack=createStackNavigator();

export default function MainStack(){

    return(
        <React.Fragment>
             
                
                     <Stack.Screen name={navigationStrings.HOME} component={Home} options={{
                headerShown:false}} ></Stack.Screen>

<Stack.Screen name={navigationStrings.FOOD_ITEM_PAGE} component={FoodItemPage} options={{
                headerShown:false}} ></Stack.Screen>
  
  <Stack.Screen name={navigationStrings.ADD_CART_PAGE} component={AddCartPage} options={{
                headerShown:false}} ></Stack.Screen>
        </React.Fragment>
    )

}