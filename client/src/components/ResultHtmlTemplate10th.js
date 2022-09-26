import React,{useState} from 'react';
import Pdf from "react-to-pdf";
import digitToWord from '../utils/digitToWord';
function ResultHtmlTemplate10th({name,fname,mname,roll,rollCode,collage,hindi,sanskrit,fm,pm,math,science,social_science,english}) {

    const ref = React.createRef();
    const total = hindi.marks + sanskrit.marks + math.marks + science.tm + science.pr + social_science.tm + social_science.pr
    console.log(total)
    const wordTotal = digitToWord(total)
    console.log(wordTotal)
    return (
        <div className='viewer' >
            <div className='page page10' ref={ref}  >
                
                <p className='name'>{name}</p>
                <p className="mname">{mname}</p>
                <p className="fname">{fname}</p>
                <p className="roll">0000{roll}</p>
                <p className="roll-code">{rollCode}</p>
                <p className="collage">{collage}</p>
                <div className="subject-container s1">
                    <p className="subject">{hindi.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{hindi.marks}</p>
                    <p className="p"></p> 
                    <p className="tm">0{hindi.marks}</p>
                </div>
                <div className="subject-container s2">
                    <p className="subject">{sanskrit.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{sanskrit.marks}</p>
                    <p className="p"></p>
                    <p className="tm">0{sanskrit.marks}</p>
                </div>
                <div className="subject-container s3">
                    <p className="subject">{math.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{math.marks}</p>
                    {/* <p className="p">0{math.pr}</p> */}
                    <p className="tm">0{math.marks}</p>
                </div>
                <div className="subject-container s4">
                    <p className="subject">{science.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{science.tm}</p>
                    <p className="p">0{science.pr}</p>
                    <p className="tm">0{science.tm+science.pr}</p>
                </div>
                <div className="subject-container s5">
                    <p className="subject">{social_science.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    {
                        social_science.pr ? 
                        <>
                            <p className="t">0{social_science.tm}</p>
                            <p className="p">0{social_science.pr}</p>
                            <p className="tm">0{(social_science.tm)+social_science.pr}</p>
                        </>:
                        <>
                            <p className="t">0{social_science.tm}</p>
                            <p className="tm">0{social_science.tm}</p>
                        </>
                    }
                    
                </div>
                {english && <div className="subject-container s6 english">
                    <p className="subject">{english.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    {
                        english.pr ? 
                        <>
                            <p className="t">0{english.tm}</p>
                            <p className="p">0{english.pr}</p>
                            <p className="tm">0{english.tm+english.pr}</p>
                        </>:
                        <>
                            <p className="t">0{english.marks}</p>
                            <p className="tm">0{english.marks}</p>
                        </>
                    }
                </div>}
                <p className="word-total">{wordTotal}</p>
                <p className="total">{total}</p>
                <p className="result">
                    {
                        total>299? 'first Division':total>229?'Second Division': total>150?'Third Division': 'Fail'
                    }
                </p>
                <p className="date">14-02-2022</p>
                <p className="pincode">824201</p>
                <img className='signature' src="https://i.ibb.co/9sMwHgY/output-onlinepngtools-1-removebg-preview.png" alt="" />
            </div>

            <Pdf targetRef={ref} filename={name+"_result.pdf"} options={{
                orientation:'portrait',
                unit: 'in',
                format:[6.77,9.57]
            }} >
                {({ toPdf }) => <div className='flex' >
                     <button  className='download-button' onClick={toPdf}>Generate Pdf</button>
                    </div>}
            </Pdf>
        </div>
    );
}

export default ResultHtmlTemplate10th;
