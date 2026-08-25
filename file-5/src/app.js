const express = require("express")

const app = express

app.request(express.json())


const notes = [
    // {
    //     title: "Test title 1",
    //     description: "test description 1"
    // }
]
app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("Note created")
})


app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("Note deleted Successfully")
})


app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].Description = req.body.Description
    res.send("updated Succesfully")
})


module.exports = app;