import { ListItem } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
const UGPrograms = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <ListItem title='2022-23' onPress={()=>{
                navigation.navigate('courses');
            }}/>
            <ListItem title='2021-22' onPress={()=>{
                navigation.navigate('courses');
            }}/>
            <ListItem title='2020-21' onPress={()=>{
                navigation.navigate('courses');
            }}/>
            <ListItem title='2019-20' onPress={()=>{
                navigation.navigate('courses');
            }}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});
export default UGPrograms;