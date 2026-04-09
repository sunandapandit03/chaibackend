// console.log("backend");
// const express=require("express");
// const app=express();
// app.get("/",(req,res)=>{res.send("hello i m Sunanda")});
// app.listen(3000,()=>{console.log("server running")});

// const mysql=require("mysql2");
// console.log("backend");
// const express=require("express");

// const app=express();
// app.use(express.json());

// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Purkhoo@2007',
//     database:'testdb'
// });

// db.connect(err=>{
//     if (err){
//         console.log("error",err);
//     }else{
//         console.log("connected");
//     }
// });

//browser/postman sends get request..your server..mysql..response back(hey server give me all users..u taking data from db)

// app.get("/users",(req,res)=>{
//     const sql="SELECT *FROM users";
//     db.query(sql,(err,result)=>{
//         if (err){
//             console.log("err");
//             res.send("err");
//         }else{
//             res.send(result);
//         }
//     })
// })


// app.get("/user/:id",(req,res)=>{
//     res.send(req.params.id);
// })

// app.get("/search",(req,res)=>{
//     res.send(req.query.name);
// });

// //postman m put url ..sends data to server..to mysql..stored...response back(data gets stored in db..u sending data into database)
// app.post("/data",(req,res)=>{
//     const {name,email}=req.body;
//     console.log("INCOMING",name,email);
//     const sql="INSERT INTO users (name,email) VALUES (?,?)";
//     db.query(sql,[name,email],(err,result)=>{
//     if (err){
//         console.log("error");
//         res.send("err");
//     }else{
//         res.send("done");
//     }
// })
// });

// app.listen(3000,()=>{console.log("server running")});

// console.log("hello");


require('dotenv').config()

const express=require("express");
const app=express();
const port=4000;
app.get("/twitter",(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})


