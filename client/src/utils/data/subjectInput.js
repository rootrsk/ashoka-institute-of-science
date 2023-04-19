export default{


    title:{
        name:'title',
        label:'Title',
        type:'text',     
        required:true,
        pattern:"^[a-zA-Z0-9]{5,40}$"
    },
    pass_marks:{
        name:'pass_marks',
        label:'Pass Marks',
        type:'number',     
        required:true,
        
    },
    full_marks:{
        name:'full_marks',
        label:'Full Marks',
        type:'number',     
        required:true,
        
    },
    // has_practical:{
    //     name:'has_practical',
    //     label:'Do you have practical?',
    //     type:'boolean',     
    //     required:true,
        
    // },
    standard: {
        name:'standard',
        label:'Standard',
        type:'number',     
        required:true,
    },
}