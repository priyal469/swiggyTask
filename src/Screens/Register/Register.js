
import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import BorderTextInput from '../../Components/BorderTextInput';
import Header from '../../Components/Header';
import RectangleBtn from '../../Components/RectangleBtn';
import api from '../../apis'
import { showMessage, hideMessage } from "react-native-flash-message";
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import Loader from '../../Components/Loader';
import validator from "../../utils/validation";



 export default class Register extends Component{
     constructor(props){
         super(props);
         this.state={
    isLoading:false
         }
     }

     isValidData = () => {
        const {
          userEmail,
          userName,
          userPassword,
          confirmPassword,
          dateOfBirth,
        } = this.state;
        const error = validator({
          name: userName,
          email: userEmail,
          password: userPassword,
          confirmPassword: confirmPassword,
        });
        if (error) {
          showMessage({
            type: 'info',
            icon: 'info',
            message: error,
          });
          return false;
        }
    
        return true;
      };
    onLogin=()=>{
        
        const{userPassword,userEmail}=this.state
        const {navigation}=this.props
        if(this.isValidData()){
         
            this.setState({
                isLoading:true
            })
    
            api.login({
                email:userEmail,
                password:userPassword
    
            }).then(res=>{
                
                    this.setState({   
                      isLoading: false,
                    });
                    showMessage({
                      type: 'success',
                      icon: 'success',
                      message: "Login success",
                    });
              
              navigation.navigate(navigationStrings.HOMEPAGE)
                  
            }).catch(error=>{
               
                  this.setState({  
                    isLoading: false,
                  });
                  showMessage({
                    type: 'danger', 
                    icon: 'danger',
                    message: "Enter correct username password",
                  });
      
                }
              );
    
        }
        
    }
     render(){
         const{isLoading}=this.state;
         const{navigation}=this.props;
         return(
             <View style={styles.mainView}>
                 {/* <Header headerText='Register'/> */}
                
                 
                 <Image source={imagePath.App_Logo} style={styles.app_Logo} />
                 <Text style={styles.create_account_text}>Create an account quickly to manage orders</Text>
              <BorderTextInput placeholder='Enter email'/>
              <BorderTextInput placeholder='Enter name'/>
              <BorderTextInput placeholder='Enter password'/>
              <BorderTextInput placeholder='Enter confirm password'/>
                 <RectangleBtn onText='REGISTER' onPress={()=>navigation.navigate(navigationStrings.HOME)} />
                 <Loader isLoading={isLoading} />
                <Text style={styles.already_account_text}>Already have an account? <Text style={styles.login_text} onPress={()=>navigation.navigate(navigationStrings.LOGIN)}>Login</Text></Text>
                
                <Text style={styles.or_text}>or</Text>
                <View style={styles.social_logo_view}>
                    <Image source={imagePath.googleLogo}  style={styles.social_logo} />
                    <Image source={imagePath.facebookLogo}  style={styles.social_logo} />
                </View>
                 
             </View>
         )
     }
 }