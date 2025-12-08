import http from "node:http";
//Node actually parses the json array and turns it into a js array
import conceptsData from './concept-data.json' with { type: 'json' };
import stats from "./stats.json" with {type: 'json'};

const easy =stats.leetcode.easy;
const medium = stats.leetcode.medium;
const hard = stats.leetcode.hard;
const total =stats.leetcode.solved;
const concepts = conceptsData.concepts;

const PORT = 8080;
//In Node, it's best practice to do everything explicitly (i.e set headers, status codes, etc.). We're essentially doing this imperatively
//where as express handles much of the headers and status codes for us.
const server = http.createServer((req,res)=>{
    if(req.url === "/leetcode" && req.method === "GET"){
        //therefore I need to use JSON.stringify here even though it looks like I'm importing json up top.
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(concepts));
    }
    if(req.url==="/leetcode/completed" && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${total} problems`)
    }
    if(req.url==="/leetcode/easy" && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${easy} easy problems`)
    }
    if(req.url==="/leetcode/medium" && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${medium} medium problems`)
    }
    if(req.url==="/leetcode/hard" && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${hard} hard problems`)
    }

});

server.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);})