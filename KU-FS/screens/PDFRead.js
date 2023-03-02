import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react'
import PDFReader from '@pachun/rn-pdf-reader-js'
import { Text, Dimensions } from 'react-native';

const PDFRead = () =>{
    const [pdf,setpdf] = React.useState();
    const [load,setload] = React.useState(true);
    const FetchPDF = async () =>{
        setload(true);
        const link = JSON.parse(await AsyncStorage.getItem('link'));
        setpdf(link);
        // console.log(link)
        setload(false);
    }
    React.useEffect(()=>{
        FetchPDF();
        console.log(pdf)
    },[]);
    return(
        <>
            {
                !load? <PDFReader source={{uri:pdf}} style={{
                    width:Dimensions.get('window').width,
                    height:Dimensions.get('window').height
                }}/> : <Text>Failed to load </Text>
            }
        </>
    );
};

export default PDFRead;