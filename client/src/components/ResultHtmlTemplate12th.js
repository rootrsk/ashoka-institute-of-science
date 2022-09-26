import React,{useState} from 'react';
import Pdf from "react-to-pdf";
import digitToWord from '../utils/digitToWord';
function ResultHtmlTemplate12th({name,fname,mname,roll,rollCode,collage,c1,c2,fm,pm,o1,o2,o3,a1}) {

    const ref = React.createRef();
    const total = (c1.marks+c2.marks+o1.tm+o1.pr+o2.tm +o2.pr+o3.tm)+(o3.pr?o3.pr:0) 
    console.log(total)
    const wordTotal = digitToWord(total)
    console.log(wordTotal)
    return (
        <div className='viewer' >
            <div className='page' ref={ref} >
                
                <p className='name'>{name}</p>
                <p className="mname">{mname}</p>
                <p className="fname">{fname}</p>
                <p className="roll">0000{roll}</p>
                <p className="roll-code">{rollCode}</p>
                <p className="collage">{collage}</p>
                <div className="subject-container s1">
                    <p className="subject">{c1.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{c1.marks}</p>
                    <p className="p"></p> 
                    <p className="tm">0{c1.marks}</p>
                </div>
                <div className="subject-container s2">
                    <p className="subject">{c2.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{c2.marks}</p>
                    <p className="p"></p>
                    <p className="tm">0{c2.marks}</p>
                </div>
                <div className="subject-container s3">
                    <p className="subject">{o1.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{o1.tm}</p>
                    <p className="p">0{o1.pr}</p>
                    <p className="tm">0{o1.tm+o1.pr}</p>
                </div>
                <div className="subject-container s4">
                    <p className="subject">{o2.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    <p className="t">0{o2.tm}</p>
                    <p className="p">0{o2.pr}</p>
                    <p className="tm">0{o2.tm+o2.pr}</p>
                </div>
                <div className="subject-container s5">
                    <p className="subject">{o3.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    {
                        o3.pr ? 
                        <>
                            <p className="t">0{o3.tm}</p>
                            <p className="p">0{o3.pr}</p>
                            <p className="tm">0{(o3.tm)+o3.pr}</p>
                        </>:
                        <>
                            <p className="t">0{o3.tm}</p>
                            <p className="tm">0{o3.tm}</p>
                        </>
                    }
                    
                </div>
                {a1 && <div className="subject-container s6">
                    <p className="subject">{a1.subject}</p>
                    <p className="fm">{fm}</p>
                    <p className="pm">0{pm}</p>
                    {
                        a1.pr ? 
                        <>
                            <p className="t">0{a1.tm}</p>
                            <p className="p">0{a1.pr}</p>
                            <p className="tm">0{a1.tm+a1.pr}</p>
                        </>:
                        <>
                            <p className="t">0{a1.tm}</p>
                            <p className="tm">0{a1.tm}</p>
                        </>
                    }
                </div>}
                <p className="word-total">{wordTotal}</p>
                <p className="total">{total}</p>
                <p className="result">
                    {
                        total>299? 'first Division':total>199?'Second Division': total>199?'Third Division': 'Fail'
                    }
                </p>
                <p className="date">28-01-2022</p>
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

export default ResultHtmlTemplate12th;
