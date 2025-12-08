import http from "node:http";

const PORT = 8080;
const server = http.createServer((req,res)=>{
    res.end("Hello. This is the server");
});

server.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);})