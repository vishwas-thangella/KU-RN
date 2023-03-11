import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import { Table , Rows , Row  } from 'react-native-table-component';

const Sports = () =>{
    const [data,setData] = useState({
        head:['sno','event','AI/SZ','No of players'],
        rows:[
            ['1','archery','All india','03'],
            ['2','Athletics','All india','10'],
            ['3','Badminton (W)','South Zone','03'],
            ['4','Badminton (M)','South Zone','07'],
            ['5','Ball Badminton (M)','All india','10'],
            ['6','Basket Ball (W)','South Zone','09'],
            ['7','Basket Ball (M)','South Zone','12'],
            ['8','Boxing (M)','All india','08'],
            ['9','Boxing (W)','South Zone','05'],
            ['10','Chess (M)','South Zone','06'],
            ['11','Chess (W)','South Zone','06'],
            ['12','Cricket (M)','South Zone','16'],
            ['13','Cross Country Race (M & W)','All india','12'],
            ['14','Cycling (Road) Men','All india','12'],
            ['15','Foot Ball (M) ','South Zone','20'],
            ['16','Gymnastics (M)','All india','07'],
            ['17','Gymnastics (W)','All india','05'],
            ['18','Handball (M)','South Zone','16'],
            ['19','Handball (W)','South Zone','16'],
            ['20','Hockey (M)','SouthZone','18'],
        ],
        head2:['Women 13-15 sep at L.B College WGL','Phase I MEN 20-22 sep 2019 at KITSW ','Phase I MEN 13-15 OCT at VCPE Bollikunta WGL'],
        rows1:[
            ['Badminton','Basket Ball','Chess'],
            ['Basket Ball','Basket Ball','Hand Ball'],
            ['Chess','Chess','Hockey'],
            ['Cross Country Race (W)','Cross Country Race (M)','Kabaddi'],
            ['Hand Ball','Foot Ball','Kho-Kho'],
            ['Kabaddi','Table Tennis','Soft Ball'],
            ['Kho-Kho','Volley Ball',''],
            ['Table Tennis','',''],
            ['VolleyBall','',''],
        ]
    });
    return(
        <View style={Style.container}>
            <ScrollView>
                <Image source={require('../assets/clg.jpg')} style={{width:"100%",height:300}}/>
                <Text style={{padding:10,textAlign:"center",fontWeight:"bold"}}>🏏 Games & Sports 🏉</Text>
                <Text style={{padding:10}}>The Sports Board of Kakatiya University is existing since the inception of the University in the year 1976 with 18 colleges and meager strength has grown into a massive organization with 510 colleges spread in Under-Graduation, Post-Graduation, Engineering, Pharmaceutical, Education and Physical Education Colleges by 2019-2020. It has been active ever since it’s inception in matters of sports and games for rural, backward and tribal students and won laurels from all quarters.  A perusal of various programmes organized by the Kakatiya Sports Board during these years would enable to understand how the changing concept and function of education from mere dissemination of the theoretical knowledge to the assumption of responsibilities for physical, psychological and spiritual development of the society has sensitized the members of the University Community as to the realities around the campus.  We place on record that the Principals, Physical Directors, and the Players spread in the three districts of Northern Telangana have been there at the very root of the success of the Kakatiya Sports.  It is these functionaries who helped the Kakatiya Sports Board was awarded the prestigious</Text>
                <Text style={{fontStyle:"italic",fontWeight:"bold",padding:10}}>
                National Gold Medals (53), Silver Medals (44) and Bronze Medals (74) by Government of India, & Twelve (12) times Team Championships for its sportsmanship.
                </Text>
                <Table borderStyle={{borderWidth:1,borderColor:"black"}}>
                    <Row data={data.head} textStyle={Style.cellText}/>
                    <Rows data={data.rows} textStyle={Style.cellText}/>
                </Table>
                <Text style={{padding:10,fontWeight:"bold",fontSize:15,textAlign:"center"}}>University Sports Board is organizing the Inter-collegiate tournaments</Text>
                <Text style={{padding:10,fontWeight:"bold",fontSize:15,textAlign:"center"}}>In three phases, i.e., Men two phases and women-One Phase</Text>
                <Table borderStyle={{borderWidth:1,borderColor:"black"}}>
                    <Rows data={data.rows1} textStyle={Style.cellText}/>
                </Table>
            </ScrollView>
        </View>
    );
};

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    cellText:{
        margin:10
    }
});

export default Sports;