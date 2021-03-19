import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';



export default StyleSheet.create({
    otp_screen_image:{
        resizeMode:'contain',
        height:260,
    },

    verify_text:{
        fontSize:15,
        padding:15
    },
otp_text:{
    fontSize:11,
    marginHorizontal:13,
    color:colors.textGreyLight
},
otp_number_view:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    marginTop:14
},
otp_number_textinput:{
    height:30,
    width:40,
    borderBottomWidth:1,
    borderBottomColor:colors.themeColor
},
roundBtn_view:{
    position:'absolute',bottom:40,right:30
}
       
    
})