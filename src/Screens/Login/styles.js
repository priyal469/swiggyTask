import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';



export default StyleSheet.create({
    mainView:{
        flex:1,
       padding:20
        // alignItems:'center',
        // justifyContent:'center'
    },
    app_Logo:{
      resizeMode:'contain',
      height:'25%',
      width:'25%',
      alignSelf:'center',
      marginTop:20
    },
    create_account_text:{
      alignSelf:'center',
      color:colors.textGreyLight,
      fontSize:10
    },
    already_account_text:{
      alignSelf:'center',
      fontSize:13
    },
    login_text:{
      alignSelf:'center',
      fontSize:13,
      color:colors.themeColor,
    },
    or_text:{
      alignSelf:'center',
      color:colors.textGreyLight,
      marginTop:10
    },
    social_logo_view:{
      flexDirection:'row',
      marginVertical:20,
      marginHorizontal:'28%',
     
      
    },
    social_logo:{
      height:60,
      width:60,
      resizeMode:'contain',
      alignSelf:'center',
      marginHorizontal:10

    
    }
})