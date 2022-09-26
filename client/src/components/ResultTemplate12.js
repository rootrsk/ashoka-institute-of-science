import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, PDFDownloadLink,PDFViewer, Font } from '@react-pdf/renderer';
import logo from '../assets/images/template2.png'
import { useEffect } from 'react';
import RobotoSlab_SemiBold from '../assets/fonts/RobotoSlab-SemiBold.ttf'
Font.register({
    family: 'RobotoSlab_SemiBold',
    src: RobotoSlab_SemiBold
})
function ResultTemplate12(props) {
    useEffect(()=>{
        
    },[])
    return (
        <div className='result-template'  style={{height:'80vh',width:'90%'}} >
            {/* <h2>Hello there</h2> */}
            {/* <PDFDownloadLink document={<MyDocument {...props} />} fileName={`${props.name}.pdf`}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>  */}
            <PDFViewer>
                <MyDocument 
                   {...props}
                
                />
            </PDFViewer>
            
        </div>
    )
}

export default ResultTemplate12
const MyDocument = ({name,roll,rollCode,total,pass,your,date,fname,mname,collage}) =>{
    return(
        <Document>
            <Page  
                size = "A4"
                orientation = 'portrait'
                style = {styles.page} 
            >
                {/* <View style={styles.section}>
                </View> */}
                <Image
                    src = 'https://i.ibb.co/vjxqbDY/Group-11-1.png'
                    style={styles.backgroundImage}
                />
                <Text style={styles.date}> {date} </Text>
                {name && <Text style={styles.name}>{name} </Text>}
                {name && <Text style={styles.mname}>{mname} </Text>}
                {name && <Text style={styles.fname}>{fname} </Text>}
                {name && <Text style={styles.roll}>{roll} </Text>}
                {name && <Text style={styles.rollCode}>{rollCode} </Text>}
                {name && <Text style={styles.collage}>{collage} </Text>}
                <Text style={styles.total}> {total} </Text>
                <Text style={styles.pass}>{pass} </Text>
                <Text style={styles.your}> {your} </Text>
            </Page>
        </Document>
    )
}
const styles = StyleSheet.create({
    doc:{
        width:'80%',
        maxWidth:1900,
        height:'80vh',
        margin:'auto',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'red'
    },
    // page: {
    //     flexDirection: 'coloum',
    //     backgroundColor: 'transparent',
    // },
    // section: {
    //     margin: 10,
    //     padding: 10,
    //     flexGrow: 1
    // },
    title:{
        color:'#ffffff',
        fontWeight:900,
    },
    image:{
        // width:'300px',
        // position:'absolute',
        // // top:'70',
        // left:'0',
        // right:'0',
        // margin: 'auto',
        // // zIndex:'-1',
        // alignItems:'center',
        // justifyContent:'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width:'100%',
        // height:'100%',
        opacity: 1,
        zIndex:-3,
    },
    name:{
        color:"#000",
        position:'absolute',
        top: 195,
        left:130,
        fontSize: 10,
        fontFamily: 'RobotoSlab_SemiBold',
        textTransform: 'uppercase',
        letterSpacing: .5
    },
    mname: {
        color: "#000",
        position: 'absolute',
        top: 225,
        left: 190,
        fontSize: 10,
        fontFamily: 'RobotoSlab_SemiBold',
        textTransform: 'uppercase',
        letterSpacing: .5
    },
    fname: {
        color: "#000",
        position: 'absolute',
        top: 255,
        left: 190,
        fontSize: 10,
        fontFamily: 'RobotoSlab_SemiBold',
        textTransform: 'uppercase',
        letterSpacing: .5
    },
     
    roll:{
        color: "#000",
        position: 'absolute',
        top: 283,
        left: 150,
        fontSize: 10,
        fontFamily: 'RobotoSlab_SemiBold',
        textTransform: 'uppercase',
        letterSpacing: .5
    },
    rollCode:{
        color: "#000",
        position: 'absolute',
        top: 283,
        left: 330,
        fontSize: 10,
        fontFamily: 'RobotoSlab_SemiBold',
        textTransform: 'uppercase',
        letterSpacing: .5
        
    },
    collage: {
        color: "#000",
        position: 'absolute',
        top: 311,
        left: 300,
        fontSize: 10,
        fontFamily: 'RobotoSlab_SemiBold',
        textTransform: 'uppercase',
        letterSpacing: .5

    },
    total:{
        color:"#ffffff",
        position:'absolute',
        top:265,
        left:305,
        fontSize: 14
    },
    pass:{
        color:"#ffffff",
        position:'absolute',
        top:300,
        left:305,
        fontSize: 14
    },
    your:{
        color:"#ffffff",
        position:'absolute',
        top:335,
        left:305,
        fontSize: 14
    },
    date:{
        color:"#ffffff",
        position:'absolute',
        top:15,
        left:50,
        fontSize:14
    }
});