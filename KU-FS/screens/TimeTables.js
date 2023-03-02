import React from 'react';
import { View,Text, StyleSheet, Image, ScrollView } from 'react-native';
const TimeTables = () =>{
    return(
        <View style={styles.container}>
            <Text style={{textAlign:"center",marginTop:10}}>CSE TimeTables</Text>
            <View style={{marginTop:15}}>
                <ScrollView>
                    <Image source={require('../assets/CSE.jpeg')} style={{width:"100%",height:500}}/>
                    <Image source={require('../assets/CSEII.jpeg')} style={{width:"100%",height:500}}/>
                    <Image source={require('../assets/Timetable.jpeg')} style={{width:"100%",height:500}}/>
                </ScrollView>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});
export default TimeTables;