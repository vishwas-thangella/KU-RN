import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../redux/Store";
import TimeTables from "./TimeTables";
import Syllabus from "./Syllabus";
import UGPrograms from "./UGPrograms";
import Courses from "./Courses";
import UG_Regular from "./UG_Regular";
import UG_REG_CB from "./UG_REG_CB";
import Regular from "./Regular";
import CBCS from "./CBCS";
import PDFRead from "./PDFRead";
import PGPrograms from "./PGPrograms";
import Engineering from "./Engineering";
import Semesters from "./Semesters";
import PHD from "./PHD";
import Law from "./Law";

const Main = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  const Auth = useSelector(state=>state.Auth);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        {Auth && <Stack.Screen
          name="Main"
          
          component={Home}
          options={{
            headerRight: () => (
              <TouchableOpacity
                onPress={async () => {
                  await AsyncStorage.removeItem("token");
                  dispatch(Actions.setAuth(false));
                }}>
                <Text>Logout</Text>
              </TouchableOpacity>
            ),
            headerTitle:"KAKATIYA UNIVERSITY"
          }}
        />}
        {Auth&&<Stack.Screen name="TimeTables" component={TimeTables}/>}
        {Auth && <Stack.Screen name="Syllabus" component={Syllabus}/>}
        {Auth && <Stack.Screen name="UGPrograms" component={UGPrograms}/>}
        {Auth && <Stack.Screen name="courses" component={Courses}/>}
        {Auth && <Stack.Screen name="UG_Regular" component={UG_Regular}/>}
        {Auth && <Stack.Screen name="UG_REG_CB" component={UG_REG_CB}/>}
        {Auth && <Stack.Screen name="regular" component={Regular}/>}
        {Auth && <Stack.Screen name="cbcs" component={CBCS}/>}
        {Auth && <Stack.Screen name="pdfread" component={PDFRead}/>}
        {Auth && <Stack.Screen name="pgprograms" component={PGPrograms}/>}
        {Auth && <Stack.Screen name="Engineering" component={Engineering}/>}
        {Auth && <Stack.Screen name="semesters" component={Semesters}/>}
        {Auth && <Stack.Screen name="phd" component={PHD}/>}
        {Auth && <Stack.Screen name="law" component={Law}/>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
