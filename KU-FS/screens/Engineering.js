import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from '@react-native-material/core';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import EngineeringSyllabus from '../JSON/Engineering';

const Engineering = ({navigation}) =>{
    return(
        <View style={Styles.container}>
            <ScrollView>
                {
                    EngineeringSyllabus.map(item=>{
                        return(
                            <ListItem title={item.title} key={item.title} onPress={async ()=>{
                                if(item.title==='BTech (CBCS)'){
                                    await AsyncStorage.setItem('semesters',JSON.stringify(item.semesters));
                                    navigation.navigate('semesters');
                                }else if(item.title==='BTech Regular (old)'){
                                    await AsyncStorage.setItem('regular',JSON.stringify(item.courses));
                                    navigation.navigate('regular');
                                }
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

export default Engineering;