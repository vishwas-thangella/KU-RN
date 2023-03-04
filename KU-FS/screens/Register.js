import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { URL } from "../api/Configs";
import axios from "axios";

const Register = ({navigation}) =>{
    const [data,setData] = useState({
        Email:"",
        Password:"",
        Name:""
    });
    const SubmitHandler =  () =>{
        axios.post(`${URL}/api/v1/users/add`,data).then(resp=>{
            Alert.alert('Mesage',resp.data.message,[{
                text:"OK",
            }]);
        }).catch(err=>{
            console.log(err);
        })
    };
    return(   
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={require('../assets/logo.jpg')} style={{width:"80%",height:70}}/>
            <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <TextInput placeholder='Enter Name' style={styles.TextInput} onChangeText={text=>{
                setData({...data,Name:text});
            }} value={data.Name}/>
            <TextInput placeholder='Enter Email' style={styles.TextInput} onChangeText={text=>{
                setData({...data,Email:text});
            }} value={data.Email}/>
            <TextInput placeholder='Enter Password' secureTextEntry style={styles.TextInput} onChangeText={text=>{
                setData({...data,Password:text});
            }} value={data.Password}/>
            <TouchableOpacity style={styles.btn} onPress={()=>{
                SubmitHandler();
            }}>
                <Text style={{textAlign:'center',color:"white"}}>Register</Text>
            </TouchableOpacity>
            <Text style={{marginTop:15}} onPress={()=>{
                navigation.navigate('Login');
            }}>Have an  Account ? <Text style={{color:"#003300"}}>Signin</Text></Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection:"column",
      justifyContent: 'center',
    },
    TextInput:{
      width:"85%",
      height:40,
      borderColor:"gray",
      borderWidth:1,
      borderLeftColor:"white",
      borderRightColor:"white",
      borderLeftColor:"white",
      marginTop:10,
      paddingLeft:10
    },
    btn:{
      width:"85%",
      padding:10,
      marginTop:5,
      backgroundColor:"#003300",
      borderRadius:10,
    }
  });
  
export default Register;