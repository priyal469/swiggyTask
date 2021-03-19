import React,{Component} from "react";
import{View,Text, ActivityIndicator,StyleSheet} from "react-native";



export default function Loader(props) {
    const{isLoading}=props;
        if(isLoading){
            return(
                <View style={styles.loaderView}>
                <ActivityIndicator color="red" size="large" /></View>
            )
        }
        else{
            return(
                <View>

                </View>
            )
        }

}
const styles = StyleSheet.create({
    loaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    
})

