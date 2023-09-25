import express from "express"
import http from "http"
const {Client} = require("messaging-api-line")
import {TextMessage} from "@line/bot-sdk"
const app = express()
const server = http.createServer(app)


interface TokenType{
    channelSecret:string;
    channelAccessToken:string
}
const config:TokenType = {
    channelSecret:"Ac1Cxy/XBo5PnTRimyGfOXKoRRys5T4EouYGi2Edrsxt/5uFpZy5rYphNmu9TJ0UyjtPDSgV3Z5f8x01HSs+pGrCKkTsiC99J8p50H9HRa9RppDHinzcqhhQIuTVUUSc6H1DQWicvryy29hL0zyzmgdB04t89/1O/w1cDnyilFU=",
    channelAccessToken:"a0a95804e41131afa6b7342053060f5e"
}
const client = new Client.connrct(config)
const sendMess = async()=>{
    const messages:TextMessage = {
        type: 'text',
        text: 'テストメッセージ'
    };
    try{
        const res = await client.broadcast(messages)
        console.log(res)
    }catch{
        console.log("送信に失敗しました")
    }
}
app.use(express.json())
app.use(
    express.urlencoded({
      extended: true,
    })
  );


app.get("/",async(req,res)=>{

})

server.listen(3000,()=>{
    sendMess()
    console.log("server run")
})