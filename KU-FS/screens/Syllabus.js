import { ListItem } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
const Syllabus = props =>{
    return(
        <View style={styles.container}>
            <ListItem leading={<Entypo name="graduation-cap" size={24} color="black" />} title="UG Programs" onPress={()=>{
                props.navigation.navigate('UGPrograms');
            }}/>
            <ListItem leading={<Entypo name="graduation-cap" size={24} color="black" />} title="UG Programs (Regular)" onPress={()=>{
                props.navigation.navigate('UG_Regular');
            }}/>
            <ListItem leading={<Entypo name="graduation-cap" size={24} color="black" />} title="PG Programs" onPress={()=>{
                props.navigation.navigate('pgprograms');
            }}/>
            <ListItem leading={<Entypo name="graduation-cap" size={24} color="black" />} title="Engineering" onPress={()=>{
                props.navigation.navigate('Engineering');
            }}/>
            <ListItem leading={<Entypo name="graduation-cap" size={24} color="black" />} title="PHD" onPress={()=>{
                props.navigation.navigate('phd');
            }}/>
            <ListItem leading={<Entypo name="graduation-cap" size={24} color="black" />} title="LAW Courses" onPress={()=>{
                props.navigation.navigate('law');
            }}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default Syllabus;