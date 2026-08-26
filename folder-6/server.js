const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://hemant:vzDN0pVwwL0dvvyx@backend.8ly0kzc.mongodb.net/file-6").then(()=>{
        console.log("Connected to Database")
    })
}
connectToDb()
app.listen(3000,()=>{
    console.log("server is running on port 30000")
})
