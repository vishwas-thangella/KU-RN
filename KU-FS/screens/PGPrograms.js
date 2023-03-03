import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListItem } from "@react-native-material/core";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PGProgram from "../JSON/PGPrograms";

const PGPrograms = props =>{
    return(
        <View style={style.container}>
            <ScrollView>
                {
                    PGProgram.map(item=>{
                        return(
                            <ListItem title={item.title} leading={<FontAwesome5 name="user-graduate" size={24} color="black"/>} key={item.title} trailing={<MaterialIcons name="arrow-right" size={24} color="black"/>} onPress={async ()=>{
                                await AsyncStorage.setItem('regular',JSON.stringify(item.regular));
                                await AsyncStorage.setItem('cbcs',JSON.stringify(item.cbcs));
                                props.navigation.navigate('UG_REG_CB');
                            }}/>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default PGPrograms;