
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import BorderTextInput from '../../Components/BorderTextInput';
import Header from '../../Components/Header';
import RectangleBtn from '../../Components/RectangleBtn';
import { showMessage, hideMessage } from "react-native-flash-message";

import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import Loader from '../../Components/Loader';

import actions from "../../redux/actions"
import validator from '../../utils/validation'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userEmail: '',
      userPassword: '',
      userName: '',

      confirmPassword: '',
    }
  }

  isValidData = () => {

    const {userName,userEmail,userPassword,confirmPassword } = this.state;
    const error = validator({ name: userName, email: userEmail, password: userPassword, confirmPassword:confirmPassword })
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

onSignup = () => {
 
    const { userName, userEmail,userPassword } = this.state;
    if (this.isValidData()) {
        console.log('yes')
        this.setState({
            isLoading: true
        })
       actions.signup({
            name: userName, email: userEmail, languageCode: 'EN', signupType: 'APP',password:userPassword,
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
  _onChangeText = key => {
    return (value) => {
      this.setState({
        [key]: value
      })
    }
  }
  render() {
    const { isLoading } = this.state;
    const { navigation } = this.props;
    
    return (
      <View style={styles.mainView}>
        {/* <Header headerText='Register'/> */}


        <Image source={imagePath.App_Logo} style={styles.app_Logo} />

        <Text style={styles.create_account_text}>Create an account quickly to manage orders</Text>
        <BorderTextInput placeholder='Enter email' _onChangeText={this._onChangeText} inputKey='userEmail' />
        
        <BorderTextInput placeholder='Enter name' _onChangeText={this._onChangeText} inputKey='userName' />
        <BorderTextInput placeholder='Enter password' _onChangeText={this._onChangeText} inputKey='userPassword' />
        <BorderTextInput placeholder='Enter confirm password' _onChangeText={this._onChangeText} inputKey='confirmPassword' />

        <RectangleBtn onText='REGISTER' onPressBtn={()=>navigation.navigate(navigationStrings.LOGIN)} />

        <Loader isLoading={isLoading} />
        <Text style={styles.already_account_text}>Already have an account? <Text style={styles.login_text} onPress={() => navigation.navigate(navigationStrings.LOGIN)}>Login</Text></Text>

        <Text style={styles.or_text}>or</Text>
        <View style={styles.social_logo_view}>
          <Image source={imagePath.googleLogo} style={styles.social_logo} />
          <Image source={imagePath.facebookLogo} style={styles.social_logo} />
        </View>

      </View>
    )
  }
}