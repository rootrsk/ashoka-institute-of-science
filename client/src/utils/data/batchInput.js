export default{

    title:{
        name:'title',
        label:'Title',
        type:'text',     
        required:true,
        pattern:"^[a-zA-Z0-9]{5,40}$"
    },
    start_date:{

        name:'start_date',
        label:'Start Date',
        type:'Date',
        required:true,
        
    },
    end_date:{
        name:'end_date',
        label:'End Date',
        type:'Date',
        required:true,
        


    },

    standard: {
        name:'standard',
        label:'Standard',
        type:'number',     
        required:true,
    },


    start_time:{
        name:'start_time',
        label:'Start Time',
        type:'time',
        required:true,
        
    },
    end_time:{
        name:'end_time',
        label:'End Time',
        type: 'time',
        required:true,
       

    },

    monthly_fee:{
        name:'monthly_fee',
        label:'Monthly Fee',
        type:'number',     
        required:true,
        
    }
    





}