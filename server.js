//importing express packages
const express = require("express");
// instantianting a new express server
const app = express();
//importing uuid packages
const uuid = require('uuid')
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

// GET request to /, serves home page
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
            res.json(JSON.parse(data))
        }
    })
})
// POST request to save notes to db
app.post('/api/notes/',(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                msg:"oh no!",
                err:err
            })
        } else {  
            const dataArr = JSON.parse(data);
            req.body.id =uuid.v4();
            dataArr.push(req.body);
            fs.writeFile("./db/db.json",JSON.stringify(dataArr,null,4),(err,data)=>{
                if(err){
                    console.log(err);
                    res.status(500).json({
                        msg:"oh no!",
                        err:err
                    });
                }else {
                    res.json({
                      msg: "successfully added your note!",
                    });
                }
              }
            );
          }
        });
      });
  
//GET request to click on specific listed notes
app.get('/api/notes/:id',(req,res)=>{
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
                const id = dataArr[i];
                if(id[i]==req.params.id) {
                    return (id)
                }
            }
            res.status(404).json({
                msg:"note not found!"
            })
        }
    })
})
// catch all for all unhandled routes.-Sends back to homepage
app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"));
      });

//tells my server where to looks for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
