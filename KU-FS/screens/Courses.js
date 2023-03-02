import { ListItem } from '@react-native-material/core';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// import * as openAnything from 'react-native-openanything';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Courses = ({navigation}) =>{

    const courses = [
        {
            name:"BSC",
            link:"https://kakatiya.ac.in/web/course/83_DEGREEMODELPAPER.pdf"
        },
        {
            name:"BA",
            link:"https://kakatiya.ac.in/web/course/84_DEGREEMODELPAPER.pdf"
        },
        {
            name:"BCOM",
            link:"https://kakatiya.ac.in/web/course/85_DEGREEMODELPAPER.pdf"
        },
        {
            name:"Bio Medical",
            link:"https://kakatiya.ac.in/web/course/78_CertificateCourseinBioInstrumentation.pdf"
        },
        {
            name:"Renewable energy Resources",
            link:"https://kakatiya.ac.in/web/course/79_CertificateCourseinRenewableEnergyResources.pdf"
        },
        {
            name:"BSC DS",
            link:""
        
        }
    ];
    return(
        <View style={styles.container}>
            {
                courses.map(item=>{
                    return(
                        <ListItem leading={<FontAwesome5 name="user-graduate" size={24} color="black"/>} title={item.name} key={item.name} trailing={<FontAwesome5 name="angle-right" size={23} color="black"/>} onPress={async ()=>{
                            // openAnything.Pdf(item.link);
                            await AsyncStorage.setItem('link',JSON.stringify(item.link));
                            navigation.navigate('pdfread');
                        }}/>
                    );
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});


export default Courses;