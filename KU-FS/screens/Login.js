import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { URL } from "../api/Configs";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { Actions } from "../redux/Store";

const Login = ({navigation}) => {
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const dispatch = useDispatch();
  const SubmitHandler = () => {
    axios.post(`${URL}/api/v1/users/login`,data).then(async resp=>{
        if(!resp.data.success){
            Alert.alert('Message',resp.data.message,[{text:"OK"}]);
        }else{
            await AsyncStorage.setItem('token',JSON.stringify(resp.data.token));
            dispatch(Actions.setAuth(true));
            navigation.replace('Main');
        }
    }).catch(err=>{
        console.log(err);
    })
  };
  const Auth = async () =>{
    const auth = await AsyncStorage.getItem('token');
    if(auth){
      dispatch(Actions.setAuth(true));
      navigation.replace('Main');
    }
  };
  useEffect(()=>{
    Auth();
  })
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../assets/logo.jpg")}
        style={{ width: "80%", height: 70 }}
      />
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter Email"
          style={styles.TextInput}
          onChangeText={(text) => {
            setData({ ...data, Email: text });
          }}
          value={data.Email}
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry
          style={styles.TextInput}
          onChangeText={(text) => {
            setData({ ...data, Password: text });
          }}
          value={data.Password}
        />
        <TouchableOpacity style={styles.btn} onPress={SubmitHandler}>
          <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 15 }} onPress={()=>{
            navigation.navigate('Signup');
        }}>
          No Account ? <Text style={{ color: "#003300" }}>Signup</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  TextInput: {
    width: "85%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderLeftColor: "white",
    borderRightColor: "white",
    borderLeftColor: "white",
    marginTop: 10,
    paddingLeft:10
  },
  btn: {
    width: "85%",
    padding: 10,
    marginTop: 5,
    backgroundColor: "#003300",
    borderRadius: 10,
  },
});

export default Login;
