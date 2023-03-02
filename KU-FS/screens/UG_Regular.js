import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { ListItem } from '@react-native-material/core';
import React from 'react';
import { View , StyleSheet } from 'react-native';
import UG_Rg from '../JSON/UG_Reguar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UG_Regular = ({navigation}) =>{
    return(
        <View style={Styles.container}>
            {
                UG_Rg.map(item=>{
                    return(
                        <ListItem leading={<FontAwesome5 name="graduation-cap" size={24} color="black"/>} title={item.title} key={item.title} trailing={<MaterialIcons name="arrow-right" size={23} color="black"/>} onPress={async ()=>{
                            await AsyncStorage.setItem('regular',JSON.stringify(item.regular));
                            await AsyncStorage.setItem('cbcs',JSON.stringify(item.cbcs));
                            navigation.navigate('UG_REG_CB');
                        }}/>
                    );
                })
            }
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default UG_Regular;