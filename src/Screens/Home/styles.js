import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';



export default StyleSheet.create({

    topView:{
        height:50,
     backgroundColor:colors.white,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:colors.lightgrey,
        borderBottomWidth:1
        
    },
    locationLogo:{
        height:25,
        width:25,
        resizeMode:'contain'
    },
    topView_text:{
        marginHorizontal:7
    },
    topView_addressText:{
        fontSize:10,
        color:colors.textGreyLight,
        marginHorizontal:7
    },
    home_screen_banner:{
        resizeMode:'contain',
        height:370,
    },
    itemList_image:{
        resizeMode:'contain',
        height:450,
    },
    thumbsUp_Logo:{
        resizeMode:'contain',
        height:40,
        width:40,
       
    },
    topPicks_text:
    {marginTop:7,fontSize:17,marginHorizontal:7}
    ,
    all_restaurants_text:{
        marginTop:7,fontSize:15,
        marginHorizontal:10
    }
})