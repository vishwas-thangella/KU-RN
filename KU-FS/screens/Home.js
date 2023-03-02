import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { ListItem } from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About';

const MainHome = ({navigation}) =>{
    return(
        <View style={{flex:1,backgroundColor:"white"}}>
            <StatusBar style='auto'/>
            <View>
                <ListItem leading={<MaterialCommunityIcons name="timetable" size={24} color="orange" />} title="TimeTables" trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black" />} onPress={()=>{navigation.navigate('TimeTables')}}/>
                <ListItem leading={<Entypo name="clipboard" size={24} color="green" />} title="Exam Timetables" trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black" />}/>
                <ListItem title='Syllabus' leading={<AntDesign name="book" size={24} color="magenta" />} trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>} onPress={()=>{navigation.navigate('Syllabus')}}/>
            </View>
        </View>
    );
};

const Home = ({navigation}) =>{
    const Tab = createBottomTabNavigator();
    const Auth = async () =>{
        const auth = await AsyncStorage.getItem('token');
            if(!auth){
                navigation.navigate('Login');
            }
        };
    useEffect(()=>{
        Auth();
    });
    return(
        <Tab.Navigator initialRouteName='MainHome' screenOptions={({route})=>({
            tabBarIcon:({focused,size,color})=>{
                let icon ;
                if(route.name==='Home'){
                    icon = focused ? 'home' : 'home-outline'
                }else if(route.name==='About'){
                    icon = focused ? 'school' : 'school-outline'
                }
                return <Ionicons name={icon} size={size} color={color}/>
            }
        })}>
            <Tab.Screen name="Home" component={MainHome} options={{headerShown:false}}/>
            <Tab.Screen name="About" component={About} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
};

export default Home;
