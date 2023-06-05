const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

   if(req.url==="/"){
        handelReedFile (200,"./index.html")
        }
         
    else if(req.url==="/server"){
        handelReedFile(200,"./server.js")
    }
    else if(req.url==="/styel"){
        handelReedFile(200,"./styel.css")
    }
    else if(req.url==="/marchandics"){
        handelReedFile(200,"./marchandics.html")
    }
    else if(req.url==="/media"){
        handelReedFile(200,"./media.html")
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
        handelReedFile(200,"./extras.html")
       }
    })  ;
   
   

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});
