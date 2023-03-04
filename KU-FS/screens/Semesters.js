import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const Semesters = ({navigation}) =>{
    const [sems,setSems] = useState([]);
    const FetchSems = async () =>{
        const Sems = JSON.parse(await AsyncStorage.getItem('semesters'));
        setSems(Sems);
    };
    useEffect(()=>{
        FetchSems();
    },[]);
    return(
        <View style={Styles.container}>
            <ScrollView>
                {
                    sems.map(item=>{
                        return(
                            <ListItem title={item.name} key={item.name} onPress={async ()=>{
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

export default Semesters;