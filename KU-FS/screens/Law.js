import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from '@react-native-material/core';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import LawSyllabus from '../JSON/LAW';

const Law = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <ScrollView>
                {
                    LawSyllabus.map(item=>{
                        return(
                            <ListItem title={item.title} key={item.title} leading={<FontAwesome5 name="graduation-cap" size={24} color="black"/>} onPress={async ()=>{
                                await AsyncStorage.setItem('semesters',JSON.stringify(item.semesters));
                                navigation.navigate('semesters');
                            }}/>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default Law;