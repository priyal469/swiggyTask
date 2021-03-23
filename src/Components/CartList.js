import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import RectangleBtn from './RectangleBtn';

function CartList(props) {
  
    const { data, onPressBtn, onItemDelete, onAdd_Quantity, onSubtract_Quantity} = props;

    
    return (
        <View style={styles.mainView}>
            <Image source={{ uri: data.item_image }} style={styles.item_image} />
            <View style={{ flexDirection: 'column', marginHorizontal: 15 }}>
                <Text style={styles.item_name}>{data.item_name}</Text>
                <Text style={styles.item_description}>{data.item_description}</Text>
                <Text style={styles.item_price}>{data.item_price}</Text>
                <View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => onItemDelete(data.id)}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity >
                        <Text>Edit</Text>
                    </TouchableOpacity> */}
                </View>
                    <View style={{ flexDirection: 'row' }}>
                        
                        <TouchableOpacity onPress={() => onSubtract_Quantity(data.id)}>
                            <Text>-  | </Text>
                        </TouchableOpacity>
                        <Text> {data.item_quantity} | </Text>
                        <TouchableOpacity onPress={() => onAdd_Quantity(data.id)}>
                            <Text>+  |</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <RectangleBtn onText="Buy now" />
            </View>
        </View>
    )
}


export default CartList

const styles = StyleSheet.create({
    mainView:
    {
        marginHorizontal: 4,
        marginTop: 10,
        borderColor: colors.lightgrey,
        borderWidth: 1,
        flexDirection: 'row'

    },

    item_image: {
        resizeMode: 'cover',
        height: 150,
        width: 170,

    },
    item_name: {
        fontSize: 15,
        padding: 3,
        marginHorizontal: 7
    },
    item_price: {
        fontSize: 10,
        padding: 3,
        marginHorizontal: 10
    },
    item_description: {
        fontSize: 12,
        marginHorizontal: 10,
        color: colors.textGreyLight
    },
})
