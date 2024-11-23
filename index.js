let express = require("express");
let app = express();
app.use(express.json())

require('./config')

let User = require('./user')

let cors = require("cors");
app.use(cors());

app.get( "", (req, resp)=>{
    resp.send("node working on browser")
} )

app.post( '/register', async (req, resp)=>{
    // resp.send("111")

    // resp.send(req.body);
    // console.log(req.body)

    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
    // console.log(req.body);
    console.log(result);
} )



app.listen(1000);