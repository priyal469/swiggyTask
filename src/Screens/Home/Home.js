import React, {Component} from 'react';
import {View,Text,Image, ImageBackground,FlatList, ScrollView} from 'react-native';
import DishCategoryList from '../../Components/DishCategoryList';
import RectangleBtn from '../../Components/RectangleBtn';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import styles from './styles';


 export default class Home extends Component{
     constructor(props){
         super(props);
         this.state={
dish_category:[
    { 
        id:1,
        dish_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1200px-Thumbs_up_icon.svg.png'
    },
    { 
        id:2,
        dish_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1200px-Thumbs_up_icon.svg.png'
    },
    { 
        id:3,
        dish_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1200px-Thumbs_up_icon.svg.png'
    },
    { 
        id:4,
        dish_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1200px-Thumbs_up_icon.svg.png'
    },
    { 
        id:5,
        dish_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1200px-Thumbs_up_icon.svg.png'
    },
    { 
        id:6,
        dish_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1200px-Thumbs_up_icon.svg.png'
    },
    { 
        id:7,
        dish_image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1200px-Thumbs_up_icon.svg.png"
    }
]
         }
     }
     render(){
         const{dish_category}=this.state;
         return(
             <View style={{flex:1}}>
                 <View style={styles.topView}>
                 <View  style={{flexDirection:'column'}}>
                 <View style={{flexDirection:'row'}}>
                  <Image source={imagePath.locationLogo} style={styles.locationLogo}/>
                  <Text>Block A</Text>
                  </View>
                  <Text style={styles.topView_addressText}>271, Sector 21A,Block A,Sector 21..</Text>
                 </View>
                  <View style={{flexDirection:'row',marginTop:10}}>
                  <Image source={imagePath.offerLogo} style={styles.locationLogo}/>
                  <Text style={styles.topView_text}>Offers</Text>
                  </View>

                 </View>

              <ScrollView style={{flex:1}}>
              <ImageBackground source={imagePath.home_screen_banner} style={styles.home_screen_banner}/>
                 <View style={{flexDirection:'column',backgroundColor:colors.white,}}>
                 <View style={{flexDirection:'row',marginTop:10}}>
                 <Image source={imagePath.thumbsUp_Logo} style={styles.thumbsUp_Logo}/>
                 <Text style={styles.topPicks_text}>Top Picks For You</Text>
                 </View>

                 
                 {/* <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={dish_category}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            (<DishCategoryList data={item}  />)

          }/> */}
                 </View>

                 <View style={{backgroundColor:colors.white,marginTop:10}}>
                     <Text style={styles.all_restaurants_text}>
                         All Restaurants Nearby
                     </Text>
                   
              <Text style={styles.topView_addressText}> Discover unique taste near you</Text>
                 <View style={{flexDirection:'row'}}>
                     <Image source={imagePath.dish_1}  style={{height:60,width:'100%',resizeMode:'contain'}}/>

                 </View>
                 </View>

                 
                
                
                 {/* <ImageBackground source={imagePath.itemList_image} style={styles.itemList_image}/> */}
                 
          <View style={{padding:15}}>
          <RectangleBtn onText='See all restaurants'/>
          </View>
   
              </ScrollView>
             </View>
         )
     }
 }