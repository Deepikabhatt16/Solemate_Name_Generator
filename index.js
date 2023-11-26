import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath}from "url";
import {dirname} from "path";
const __dirname=dirname(fileURLToPath(import.meta.url));

const port=7000;
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.render(__dirname+"/view/home.ejs");
});
app.post("/submit",(req,res)=>{
  const result=crush[Math.floor(Math.random()*crush.length)];
    res.render(__dirname+"/view/home.ejs",{liveshow:result});
});

app.listen(port,()=>{
    console.log("serving on port = "+port);
    console.log("kyu ni chlra bhyii");
});
const crush=[
    "Rajan",
     "Ragav",
      "Rohit",
      "Perry",
      "Ronit",
      "Yogesh",
      "Rishab",
      "Sorav",
      "Saidev",
      "Yajit",
      "Balveer",
      "Ashutosh",
      "Vineet",
      "Ajant",
      "Baljeet"
    ];