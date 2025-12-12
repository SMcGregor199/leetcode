import http from "node:http";
//Node actually parses the json array and turns it into a js array
import conceptsData from './concept-data.json' with { type: 'json' };
import stats from "./stats.json" with {type: 'json'};
import fs from "node:fs/promises";
import path from "node:path";
import {sendResponse} from "./utils/sendResponse.js";
const easy =stats.leetcode.easy;
const medium = stats.leetcode.medium;
const hard = stats.leetcode.hard;
const total =stats.leetcode.solved;
const concepts = conceptsData.concepts;
 
const PORT = 8080;

const server = http.createServer(async(req,res)=>{

    const url = new URL(req.url,`https://${req.headers.host}`); 
    const queryParams = Object.fromEntries(url.searchParams);
    const absPathToPublic = path.join(import.meta.dirname, "public");
    try{
        if(url.pathname === "/"){
            const html = await fs.readFile(path.join(absPathToPublic,"index.html"));
            sendResponse(res,200,"text/html",html);
        }
        else if(url.pathname === "/leetcode" && req.method === "GET"){
            if(Object.keys(queryParams).length !==0){
                if(queryParams.category){
                    const filteredConcepts = concepts.filter((concept)=> concept.category===queryParams.category);
                    sendResponse(res,200,"application/json",filteredConcepts);
                } else if(queryParams.name){
                    const filteredConcepts = concepts.filter((concept)=> concept.name===queryParams.name);
                    sendResponse(res,200,"application/json",filteredConcepts);
                } 
                else {
                    sendResponse(res,400,"application/json",{error: "bad request", message: "Invalid query parameters"});
                }
            } 
            else {
                sendResponse(res,200,"application/json",concepts);
            }
        }
        else if(req.url.startsWith("/leetcode/completed") && req.method === "GET"){
            sendResponse(res,200,"text/plain",`Shayne has completed a total of ${total} problems`);
        }
        else if(req.url.startsWith("/leetcode/easy") && req.method === "GET"){
            sendResponse(res,200,"text/plain",`Shayne has completed a total of ${easy} easy problems`);
        }
        else if(req.url==="/leetcode/medium" && req.method === "GET"){
            sendResponse(res,200,"text/plain",`Shayne has completed a total of ${medium} medium problems`);
        }
        else if(req.url==="/leetcode/hard" && req.method === "GET"){
            sendResponse(res,200,"text/plain",`Shayne has completed a total of ${hard} hard problems`);
        } else {
            sendResponse(res,404,"text/plain",{error: "not found", message: "The requested route does not exist"});
        }
    } //End of try block
    catch(err){
        console.log(err);
    }

});

server.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);})