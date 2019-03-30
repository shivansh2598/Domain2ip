var express=require('express')
var app=express();
const PORT=7005
var bodyParser=require('body-parser')
var cors=require('cors')

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

const { execFile } = require('child_process');

app.post('/',(req,res)=>{
  console.log(req.body.value)
  var name =req.body.value
  const child = execFile('nslookup', [`${name}`], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    else {
      console.log(stdout)
    res.send(stdout)
    }
  });
  
})



app.get('/',(req,res)=>{
   res.send("Hello world baby")
})


app.listen(PORT)
