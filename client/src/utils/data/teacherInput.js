export default{
    userName:{
        name:'userName',
        label:'Username',
        type:'text',
        required:true,
        pattern:"^[a-zA-Z0-9_]{3,10}$"

    },
    
    
    email:{
        name:'email',
        label:'Email',
        type:'email',
        required:true,
    }


}