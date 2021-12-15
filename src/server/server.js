let express = require("express");
let cors = require("cors");
let CitiesRouter = require("./router");

let app = express();
app.use(cors());
app.use(express.json());
app.use("/cities", CitiesRouter);

let PORT = 5000;

async function startApp(){
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});
};

startApp();
