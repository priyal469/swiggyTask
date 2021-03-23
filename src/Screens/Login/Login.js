
import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import BorderTextInput from '../../Components/BorderTextInput';
import Header from '../../Components/Header';
import RectangleBtn from '../../Components/RectangleBtn';
import { showMessage, hideMessage } from "react-native-flash-message";
import actions from '../../redux/actions'

import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import validator from '../../utils/validation';
import Loader from '../../Components/Loader';





 export default class Register extends Component{
     constructor(props){
         super(props);
         this.state={
             userEmail:'',
              userPassword:'',
              isLoading:false
         }
     }
     _onChangeText=(key)=>{
        return (values) => {
            this.setState({
                [key]: values
            })
        }
    }
    isValidData = () => {

        const { userEmail, userPassword} = this.state;
        const error = validator({  email: userEmail, password: userPassword })
        if (error) {

            showMessage({
                type: "danger",
                icon: "danger",
                message: error
            })
            return false;

        }
        else {

            return true;
        }
    };

    onLogin = () => {
       
        const {userEmail,userPassword }=this.state;
        if (this.isValidData()) {
            console.log('yes')
            this.setState({
                isLoading: true
            })
           actions.login({
               email: userEmail,password:userPassword,
            })
                .then((res) => {
          
                    this.setState({
                        isLoading: false
                    })
                    showMessage({
                        type: "success",
                        icon: "success",
                        message: "Registered successfully"
                    })
    
    
                })
                .catch(error => {
                    console.log("hiii")
                    this.setState({
                        isLoading: false
                    })
    
                    showMessage({
                        type: "danger",
                        icon: "danger",
                        message: error.message
                    })
                })
        }
    }
    
     render(){
        const { isLoading } = this.state;
         const{navigation}=this.props;
         return(
             <View style={styles.mainView}>
                
                
                 
                 <Image source={imagePath.App_Logo} style={styles.app_Logo} />
                 <Text style={styles.create_account_text}>Login quickly to manage orders</Text>
              <BorderTextInput placeholder='Enter email'  _onChangeText={this._onChangeText} inputKey='userEmail'/>
              <BorderTextInput placeholder='Enter password'  _onChangeText={this._onChangeText} inputKey='userPassword'/>
              
              <RectangleBtn onText='LOGIN' onPressBtn={()=>navigation.navigate(navigationStrings.HOME)} />
               
              <Loader isLoading={isLoading} />
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