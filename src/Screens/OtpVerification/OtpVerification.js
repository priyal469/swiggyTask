import React, {Component} from 'react';
import {View,Text, ImageBackground,TextInput} from 'react-native';
import BorderTextInput from '../../Components/BorderTextInput';
import ModalView from '../../Components/ModalView';
import RectangleBtn from '../../Components/RectangleBtn';
import RoundBtn from '../../Components/RoundBtn';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';





 export default class OtpVerfication extends Component{
     constructor(props){
         super(props);
         this.state={
isModalVisible:false
         }
     }

     onOpenModal=()=>{
this.setState({
    isModalVisible:true
})
     }
onCloseModal=()=>{
    this.setState({
        isModalVisible:false
    })
     }
     render(){
         const{isModalVisible}=this.state;
         const{navigation}=this.props;
         return(
             <View style={{flex:1}}>
                 <ImageBackground source={imagePath.otp_screen_image} style={styles.otp_screen_image}/>
       
           <Text style={styles.verify_text}>Verify Details</Text>
           <Text style={styles.otp_text}>OTP sent to xxxxxxxxxx</Text>
           <View style={styles.otp_number_view}>
               <TextInput style={styles.otp_number_textinput}></TextInput>
               <TextInput style={styles.otp_number_textinput}></TextInput>
               <TextInput style={styles.otp_number_textinput}></TextInput>
               <TextInput style={styles.otp_number_textinput}></TextInput>
               <TextInput style={styles.otp_number_textinput}></TextInput>
               <TextInput style={styles.otp_number_textinput}></TextInput>
               

           </View>

         <View style={{padding:15}}>
         <RectangleBtn   onPressBtn={this.onOpenModal} onText='CONTINUE'/>
         
         </View>
     <View style={styles.roundBtn_view}>
     <RoundBtn onPressRoundBtn={()=>navigation.navigate(navigationStrings.REGISTER)} />
     </View>
         <ModalView isModalVisible={isModalVisible} onPressCloseModal={this.onCloseModal}/>
      
                 {/* <BorderTextInput placeholder='hello'/> */}
             </View>
         )
     }
    }