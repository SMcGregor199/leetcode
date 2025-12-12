function serveHTML(res,code,html){
    res.statusCode = code;
    res.setHeader("Content-Type","text/html");
    res.end(html);
}

export{serveHTML}