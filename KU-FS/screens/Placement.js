import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const Placement = () =>{
    return(
        <View style={Styles.container}>
            <ScrollView>
                <Image source={require('../assets/placements.jpg')} style={{width:"100%",height:300}}/>
                <Text style={{textAlign:"center",marginTop:10,fontWeight:"bold"}}>🔵 Placement Cell</Text>
                <View>
                    <Text style={{padding:10,textAlign:"center",fontWeight:"bold"}}>The cell was established in 2002, with a primary goal to guide the students for various career and competitive opportunities .It guides the students with the skills essential for successful positions which leads to the expected career of students of arts, commerce, management, engineering science and social sciences.</Text>
                    <View style={{padding:10}}>
                        <Text style={{textAlign:"center",fontStyle:"italic"}}>The main vision of the placement cell is to develop a rapid access of the university with the government sector vis-a-vis various multinational corporate companies so as to enable the students of Kakatiya University to get placements at the national and international level.</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight:"bold",textAlign:"center"}}>🔷 RECRUITERS</Text>
                    <Image source={require('../assets/companygrid.jpeg')} style={{width:"100%",height:560,marginTop:10}}/>
                </View>
                <View>
                    <Text style={{textAlign:"center",fontWeight:"bold",padding:10}}>Objectives</Text>
                    <Text style={{padding:10}}>▶️ To provide comprehensive career services</Text>
                    <Text style={{padding:10}}>▶️ To motivate the students to enrich their personality and competitive skills</Text>
                    <Text style={{padding:10}}>▶️ To maintain close rapport with the various companies to conduct campus selections</Text>
                    <Text style={{padding:10}}>▶️ To conduct comprehensive career development programmes</Text>
                    <Text style={{padding:10}}>▶️ To accumulate employment data</Text>
                    <Text style={{padding:10}}>▶️ To identify students potentiality so as to map their competency</Text>
                    <Text style={{padding:10}}>▶️ To explore new horizons alongside the growing requirement of the corporate world</Text>
                    <Text style={{padding:10}}>▶️ To mold the students according to the requirements of corporate world and R&D departments</Text>
                </View>
                <View>
                    <Image source={require('../assets/companies.jpeg')} style={{width:"100%",height:200}}/>
                    <Text style={{padding:10,textAlign:"center",fontWeight:"bold"}}>Campus Selection Programmes</Text>
                    <Text style={{fontWeight:"bold",fontStyle:"italic",textAlign:"center"}}>🟢 Leading Employers visiting KU : -Genpact, HCL, TCS, Infosys, Global Logic, Amazon
                    -Oracle, Genpact, Cognizant, Mind tree, Cameo Infotech,C A Technologies,
                    -Thyocare , MTW Labs, Aurobindo Pharma, BioClinica,United Health Group, Sci-Forshen Ltd, Mylan Labs, GVK Biosciences, Dr Reddy's Laboratories
                    -Shantha Biotechnis Ltd, CP Aquaculture Ltd,</Text>
                    <Image source={require('../assets/people.jpeg')} style={{width:"100%",height:600}}/>
                    <Text style={{fontWeight:"bold",textAlign:"center",padding:10}}>Congratulations to the students...</Text>
                    <Image source={require('../assets/greet.jpeg')} style={{width:"100%",height:600}}/>
                    <Text style={{padding:10,fontWeight:"700"}}>🔶 The placement cell proposes to equip the students with the following programmes:
                        To impart corporate training programmes
                        To impart corporate training programmes
                        -presentation skills
                        -interview skills
                        -group discussion
                        impart employable skills
                        -basic computer skills
                        -data analysis
                        To impart language skills
                        - soft skills
                        -communication skills</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
});
export default Placement;