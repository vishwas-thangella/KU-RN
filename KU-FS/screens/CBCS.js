import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from '@react-native-material/core';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
// import * as OpenAnything from 'react-native-openanything';

const CBCS = ({navigation}) =>{
    const [syllabus,setSyllabus] = useState([]);
    const FetchData = async () =>{
        const CBCS = JSON.parse(await AsyncStorage.getItem('cbcs'));
        setSyllabus(CBCS);
    }
    useEffect(()=>{
        FetchData();
    },[]);
    return(
        <View style={styles.container}>
            <ScrollView>
            {
                syllabus ? syllabus.map(item=>{
                    return(
                        <ListItem title={item.name} trailing={item.link ? <FontAwesome5 name="file-pdf" size={24} color="red"/> : ''} key={(item.name+item.link)} onPress={async ()=>{
                            // OpenAnything.Pdf(item.link);
                            await AsyncStorage.setItem('link',JSON.stringify(item.link));
                            navigation.navigate('pdfread');
                        }}/>
                    );
                }) : <Text>No Data Found !</Text>
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

export default CBCS;