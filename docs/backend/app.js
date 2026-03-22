const express = require ("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const blogRoutes = require("./routes/blog.routes")

app.use("/api/blogs",blogRoutes);

module.exports=app;

app.listen(3000,()=>{
    console.log("server is running at 3000 port rn")
})