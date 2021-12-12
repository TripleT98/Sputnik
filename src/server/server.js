let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let CitiesRouter = require("./router");

let app = express();
app.use(cors());
app.use(express.json());
app.use("/cities", CitiesRouter);

let PORT = 5000;
let MONGO_URL = "mongodb+srv://Timur:timur1982T@cluster0.togdr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function startApp(){
await mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("Connection to mongoDB is complete!")},()=>{console.log("Cannot conncet to mongoDB!")});
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});
};

app.get("/",(req,res)=>{
  res.status(200).json({message: "good request"});
});


startApp();
