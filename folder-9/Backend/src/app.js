const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())


app.post("/api/notes",async (req,res)=>{
    const {title,description} = req.body

   const note = await noteModel.create({
        title,description
     })

        res.status(201).json({
            message: "note created successfully",
            note
        })
})

app.get("/api/notes",async (req,res) => {
    const Notes =  await noteModel.find()

    res.status(200).json({
        message: "Notes fetch successfully",
        Notes
   })
})

/*
 - DELETE /api/notes/:id
 - delete note with the id rom req.params
*/

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;

    const deletedNote = await noteModel.findByIdAndDelete(id);

    if (!deletedNote) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.status(200).json({
        message: "Note deleted successfully",
        deletedNote
    });
});

app.patch("/api/notes/:id",async (req,res)=>{
    const id = req.params.id
    const {title} = req.body

    await noteModel.findByIdAndUpdate(id,{title})

    res.status(200).json({
        message : "note updated successfully"
    })
})



module.exports = app