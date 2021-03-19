import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Register,Login, SplashScreen, OtpVerfication} from "../Screens/index";

import navigationStrings from "../constants/navigationStrings";



const Stack=createStackNavigator();

export default function AuthStack(){

    return(
        <React.Fragment>
             <Stack.Screen name={navigationStrings.SPLASH_SCREEN} component={SplashScreen} options={{headerShown:false}}>

             </Stack.Screen>

             <Stack.Screen name={navigationStrings.OTP_VERFICATION} component={OtpVerfication} options={{headerShown:false}}></Stack.Screen>
             <Stack.Screen name={navigationStrings.REGISTER} component={Register} options={{headerShown:false}}>

             </Stack.Screen>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{
                headerShown:false}}/>
                
                
                     
           
        </React.Fragment>
    )

}