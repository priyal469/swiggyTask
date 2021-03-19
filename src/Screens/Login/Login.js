
import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import BorderTextInput from '../../Components/BorderTextInput';
import Header from '../../Components/Header';
import RectangleBtn from '../../Components/RectangleBtn';



import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';




 export default class Register extends Component{
     constructor(props){
         super(props);
         this.state={

         }
     }
    
     render(){
         const{navigation}=this.props;
         return(
             <View style={styles.mainView}>
                
                
                 
                 <Image source={imagePath.App_Logo} style={styles.app_Logo} />
                 <Text style={styles.create_account_text}>Login quickly to manage orders</Text>
              <BorderTextInput placeholder='Enter email'/>
              <BorderTextInput placeholder='Enter password'/>
              
              <RectangleBtn onText='LOGIN' onPress={()=>navigation.navigate(navigationStrings.HOME)} />
                <Text style={styles.already_account_text}>Create an account? <Text style={styles.login_text} onPress={()=>navigation.navigate(navigationStrings.HOME)}>Register</Text></Text>
                
                <Text style={styles.or_text}>or</Text>
                <View style={styles.social_logo_view}>
                    <Image source={imagePath.googleLogo}  style={styles.social_logo} />
                    <Image source={imagePath.facebookLogo}  style={styles.social_logo} />
                </View>
                 
             </View>
         )
     }
 }