import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from '../assets/images/template2.png'
import { useEffect } from 'react';
function ResultTemplate({name,roll,rollCode,total,pass,your,onClose,date}) {
    useEffect(()=>{

    },[])
    return (
        <div className='result-template'>
            <button className='p-btn m0 close-btn' onClick={()=>window.location.reload()}>close</button>
            <PDFViewer style={styles.doc}>
                <Document>
                    <Page size="A5" orientation='landscape'  style={styles.page} >
                    <View style={styles.section}>
                    </View>
                    <Image
                        src={logo}
                        style={styles.backgroundImage}
                    />
                    <Text style={styles.date}> {date} </Text>
                    <Text style={styles.name}>{name} </Text>
                    <Text style={styles.roll}>{rollCode} </Text>
                    <Text style={styles.rollCode}>{roll} </Text>
                    <Text style={styles.total}> {total} </Text>
                    <Text style={styles.pass}>{pass} </Text>
                    <Text style={styles.your}> {your} </Text>
                    </Page>
                </Document>
            </PDFViewer> 
        </div>
    )
}

export default ResultTemplate

const styles = StyleSheet.create({
    doc:{
        width:'80%',
        maxWidth:700,
        height:'80vh',
        margin:'auto',
        alignItems:'center',
        alignSelf:'center'
    },
    page: {
        flexDirection: 'coloum',
        backgroundColor: 'transparent',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title:{
        color:'#ffffff',
        fontWeight:900,
    },
    image:{
        width:'300px',
        position:'absolute',
        top:'70',
        left:'0',
        right:'0',
        margin: 'auto',
        // zIndex:'-1',
        alignItems:'center',
        justifyContent:'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width:'100%',
        height:'100%',
        opacity: 1,
        zIndex:-3,
    },
    name:{
        color:"#ffffff",
        position:'absolute',
        top:160,
        left:305,
        fontSize: 14
    },
    roll:{
        color:"#ffffff",
        position:'absolute',
        top:195,
        left:305,
        fontSize: 14
    },
    rollCode:{
        color:"#ffffff",
        position:'absolute',
        top:230,
        left:305,
        fontSize: 14
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