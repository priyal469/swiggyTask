import React, {Component} from 'react';
import {View,Text,Image, ImageBackground,FlatList, ScrollView} from 'react-native';
import DishCategoryList from '../../Components/DishCategoryList';
import RectangleBtn from '../../Components/RectangleBtn';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';


 export default class Home extends Component{
     constructor(props){
         super(props);
         this.state={
dish_category:[
    { 
        id:1,
        dish_image:'http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg'
    },
    { 
        id:2,
        dish_image:'https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/038/265/original/GSpremium-%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%82%AC%E3%83%BC1-1024x698.jpg?2018&d=750x400'
    },
    { 
        id:3,
        dish_image:'http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg'
    },
    { 
        id:4,
        dish_image:'http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg'
    },
    { 
        id:5,
        dish_image:'http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg'
    },
    { 
        id:6,
        dish_image:'http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg'
    },
    { 
        id:7,
        dish_image:"http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg"
    }
]
         }
     }
     onMove = () => {
        const { navigation } = this.props;
        navigation.navigate(navigationStrings.FOOD_ITEM_PAGE);
    
      }
     render(){
         const{dish_category,onMove}=this.state;
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

                 
                 <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={dish_category}
          keyExtractor={(item,index) => index.toString()}
          renderItem={( {item} ) =>
            (<DishCategoryList data={item} onMove={this.onMove}  />)

          }/>
                 </View>

                 {/* <View style={{backgroundColor:colors.white,marginTop:10}}>
                     <Text style={styles.all_restaurants_text}>
                         All Restaurants Nearby
                     </Text>
                   
              <Text style={styles.topView_addressText}> Discover unique taste near you</Text>
                 <View style={{flexDirection:'row'}}>
                     <Image source={imagePath.dish_1}  style={{height:60,width:'100%',resizeMode:'contain'}}/>

                 </View>
                 </View> */}

                 
                
                
                 {/* <ImageBackground source={imagePath.itemList_image} style={styles.itemList_image}/> */}
                 
          <View style={{padding:15}}>
          <RectangleBtn onText='See all restaurants'/>
          </View>
   
              </ScrollView>
             </View>
         )
     }
 }