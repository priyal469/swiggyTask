import React, { Component } from 'react';
import { Image, View,StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RoundBtn from '../../Components/RoundBtn';

import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';




export default class SplashScreen extends Component {
   constructor(props){
       super(props);
       this.state=({

       })
   }
   render(){
       const{navigation}=this.props;
    return (
      <View style={styles.splash_view}>
       <StatusBar backgroundColor={colors.themeColor}/>   
      
         
       
          <Image source={imagePath.App_Logo} style={styles.splash_Screen_Logo}/>
<View style={styles.roundBtnView}>
<RoundBtn  onPressRoundBtn={()=>navigation.navigate(navigationStrings.OTP_VERFICATION)} />
</View>
       </View>
      
       
    )
   }
}
