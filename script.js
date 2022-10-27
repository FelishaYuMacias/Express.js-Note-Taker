//importing express packages
const express = require("express");
// instantianting a new express server
const app = express();
// selecting network port
const PORT = process.env.PORT || 3000;
// importing path package from standard library
const path = require("path");
const fs = require("fs");

//middle ware to serve static assets
app.use(express.static("public"));

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request to /notes, serves notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

// GET request to /, serves html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//GET request to api/notes returns db.json
app.get('/api/notes',(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                msg:"oh no!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data);
            res.json(dataArr)
        }
    })
})
// POST request to save notes to db
app.post('/api/notes/',(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                msg:"Oh shucks!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data);
            dataArr.push(req.body);
            fs.writeFile("./db/db.json",JSON.stringify(dataArr,null,4),(err,data)=>{
                if(err){
                    console.log(err);
                    res.status(500).json({
                        msg:"Oh shucks!",
                        err:err
                    })
                }
                else {
                    res.json({
                        msg:"Note successfully added!"
                    })
                }
            })
        }
    })
})
//GET request to click on specific listed notes
app.get('/api/notes/:title',(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                msg:"Oh shucks!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data);
            console.log(req.params.id);
            for (let i = 0; i < dataArr.length; i++) {
                const note = dataArr[i];
                if(note.title==req.params.id) {
                    return res.json(note)
                }
            }
            res.status(404).json({
                msg:"note not found!"
            })
        }
    })
})
// catch all for all unhandled routes
app.get("*", (req, res) => {
  res.send("not a valid route!");
});

//tells my server where to looks for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
