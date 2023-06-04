const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT | 5000;
const hostName = "127.0.0.1";
  

const Server = http.createServer((req,res)=>{
      
    const handelReedFile = (statuse,fileName) => {
            fs.readFile(fileName,(err,data)=>{
            res.writeHead(statuse,{"Content-type" : "text/html"});
            res.write(data);
            res.end();
        })
        }
       if(req.url==="/"){
        handelReedFile (200,"./index.js")
        }
         
    else if(req.url==="/server.js"){
        handelReedFile(200,"./server.js")
    }
  else if(req.url==="/index.html"){
        handelReedFile(200,"./index.html")
    }
    else if(req.url==="/styel.css"){
        handelReedFile(200,"./styel.css")
    }
    else if(req.url==="/book"){
        handelReedFile(200,"./book.html")
    }
    else if(req.url==="/about"){
        handelReedFile(200,"./about.html")
    }
    else if(req.url==="/packegs"){
        handelReedFile(200,"./packegs.html")
       }
    else{
        handelReedFile(200,"./error.html")
       }
    })  ;
   
   


 
Server.listen(PORT,hostName,()=>{
    console.log(`server is running successfully at http://${hostName}:${PORT}`);
});
