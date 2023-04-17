export default {
    title: {
        name:"title",
        value:"",
        label:"Exam Title",
        error:"5-40 Char are allowed",
        pattern:".{5,50}",
        required:true,
        placeholder:"",
    },
    standard: {
        name:"standard",
        label:"Standard",
        value:"10th",
        error:"3-10 Char are allowed",
        pattern:".{3,10}",
        required:true,
        placeholder:"Standard",
        options: ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','All']
    },
    stream: {
        name:"stream",
        label:"Stream",
        value:"None",
        error:"3-10 Char are allowed",
        pattern:".{3,10}",
        required:true,
        placeholder:"Stream",
        options:['Science','Arts','Commerce','All','None',]
    },
    status:{
        name:"status",
        label:"Status",
        value: "",
        error:"",
        required:true,
        placeholder:"Stream",
        options:{'Publish':'publish','Upcoming':'upcoming','Hidden':'hidden'}
    },
    publish_time:{
        name:"publish_time",
        label:"Publish Time",
        value: "",
        error:"",
        required:true,
    }
}