import { ListItem } from '@react-native-material/core';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const UG_REG_CB = ({navigation}) =>{
    return(
        <View style={style.container}>
            <ListItem title="Regular" onPress={()=>{
                navigation.navigate('regular');
            }}/>
            <ListItem title="CBCS" onPress={()=>{
                navigation.navigate('cbcs');
            }}/>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default UG_REG_CB;