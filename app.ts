import express from "express"
import http from "http"
const app = express()
const server = http.createServer(app)

const acsessToken:string = "Ac1Cxy/XBo5PnTRimyGfOXKoRRys5T4EouYGi2Edrsxt/5uFpZy5rYphNmu9TJ0UyjtPDSgV3Z5f8x01HSs+pGrCKkTsiC99J8p50H9HRa9RppDHinzcqhhQIuTVUUSc6H1DQWicvryy29hL0zyzmgdB04t89/1O/w1cDnyilFU="
const secretToken:string = "a0a95804e41131afa6b7342053060f5e"



server.listen(3000,()=>{
    console.log("server run")
})