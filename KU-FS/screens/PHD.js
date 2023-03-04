import { ListItem } from '@react-native-material/core';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import PHDSyllabus from '../JSON/PHD';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PHD = ({navigation}) =>{
    return(
        <View style={Styles.container}>
            <ScrollView>
                {
                    PHDSyllabus.map(item=>{
                        return(
                            <ListItem title={item.title} key={item.title} leading={<FontAwesome5 name="user-graduate" size={23} color="black"/>} onPress={async ()=>{
                                await AsyncStorage.setItem('regular',JSON.stringify(item.courses));
                                navigation.navigate('regular');
                            }}/>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default PHD;