const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/huan",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    // eslint-disable-next-line no-console
    console.log("连接huan数据库成功")
});

let recommendShema = new Schema({
    category:{
        type:String,
        required:true
    },
    categoryList:[
        {
            id:{
                type:String,
                required:true
            },
            cover:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            }
        }
    ]
});

let recommendDatas=mongoose.model("recommenddatas",recommendShema);

function demo(req,res) {
    // eslint-disable-next-line no-console
    console.log("获取推荐数据被激活");
    recommendDatas.find({

    },{
        __v:false,
        _id:false
    }).then((data)=>{
        // eslint-disable-next-line no-console
        console.log(data);
        //res.send(JSON.stringify(data))
    }).catch((err)=>{
        if (err) throw  err;
    })
}
demo();