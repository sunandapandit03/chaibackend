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
const port=3000;


const githubData={
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations",
  "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
  "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
  "emails_url": "https://api.github.com/user/emails",
  "emojis_url": "https://api.github.com/emojis",
  "events_url": "https://api.github.com/events",
  "feeds_url": "https://api.github.com/feeds",
  "followers_url": "https://api.github.com/user/followers",
  "following_url": "https://api.github.com/user/following{/target}",
  "gists_url": "https://api.github.com/gists{/gist_id}",
  "hub_url": "https://api.github.com/hub",
  "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
  "issues_url": "https://api.github.com/issues",
  "keys_url": "https://api.github.com/user/keys",
  "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
  "notifications_url": "https://api.github.com/notifications",
  "organization_url": "https://api.github.com/orgs/{org}",
  "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
  "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
  "public_gists_url": "https://api.github.com/gists/public",
  "rate_limit_url": "https://api.github.com/rate_limit",
  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
  "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
  "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
  "starred_gists_url": "https://api.github.com/gists/starred",
  "topic_search_url": "https://api.github.com/search/topics?q={query}{&page,per_page}",
  "user_url": "https://api.github.com/users/{user}",
  "user_organizations_url": "https://api.github.com/user/orgs",
  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
}
app.get("/twitter",(req,res)=>{
    res.send("hello world");
})
app.get('/github',(req,res)=>{
    res.json(githubData);
})
app.listen(port,"0.0.0.0",()=>{
    console.log(`listening on port ${port}`);
})


