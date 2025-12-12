import path from "node:path";
function getContentType(fileName){
    const extension = path.extname(fileName);
    switch(extension){
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "application/javascript";
        case ".json":
            return "application/json";
        default:
            return "text/plain";
    }
}

export {getContentType}