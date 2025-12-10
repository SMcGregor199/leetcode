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
    const url = new URL(req.url,`https://${req.headers.host}`); 
    const queryParams = Object.fromEntries(url.searchParams);
    
    if(url.pathname === "/leetcode" && req.method === "GET"){
        if(Object.keys(queryParams).length !==0){
            if(queryParams.category){
               const filteredConcepts = concepts.filter((concept)=> concept.category===queryParams.category);
                res.setHeader("Content-Type","application/json");
                res.statusCode = 200;
                res.end(JSON.stringify(filteredConcepts));
            } else if(queryParams.name){
                const filteredConcepts = concepts.filter((concept)=> concept.name===queryParams.name);
                res.setHeader("Content-Type","application/json");
                res.statusCode = 200;
                res.end(JSON.stringify(filteredConcepts));
            } 
            else {
                res.setHeader("Content-Type","application/json");
                res.statusCode = 400;
                res.end(JSON.stringify({error: "bad request", message: "Invalid query parameters"}));
            }
        } else {
            res.setHeader("Content-Type","application/json");
            res.statusCode = 200;
            res.end(JSON.stringify(concepts));
        }

    }
    else if(req.url.startsWith("/leetcode/completed") && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${total} problems`)
    }
    else if(req.url.startsWith("/leetcode/easy") && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${easy} easy problems`)
    }
    else if(req.url==="/leetcode/medium" && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${medium} medium problems`)
    }
    else if(req.url==="/leetcode/hard" && req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(`Shayne has completed a total of ${hard} hard problems`)
    } else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404;
        res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
    }

});

server.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);})