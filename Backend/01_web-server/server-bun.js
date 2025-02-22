import {serve} from 'bun';
import { hostname } from 'os';


serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname === "/") {
            return new Response("Hello, kaise hai aap log?", {status: 200})
        }
        else if (url.pathname === "/page") {
            return new Response("Hello, khana kha ke jana ha", {status: 200})
        }
        else {
            return new Response("404 not found", {status: 404})
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
})

// run code with - bun server-bun.js
// URL get request run in postman: http://127.0.0.1:3000