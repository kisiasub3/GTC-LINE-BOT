import express from "express"
import http from "http"
import {Client} from "@line/bot-sdk"
import {TextMessage} from "@line/bot-sdk"
const app = express()
const server = http.createServer(app)


interface TokenType{
    channelSecret:String;
    channelAccessToken:String
}
const config = {
    channelSecret:"Ac1Cxy/XBo5PnTRimyGfOXKoRRys5T4EouYGi2Edrsxt/5uFpZy5rYphNmu9TJ0UyjtPDSgV3Z5f8x01HSs+pGrCKkTsiC99J8p50H9HRa9RppDHinzcqhhQIuTVUUSc6H1DQWicvryy29hL0zyzmgdB04t89/1O/w1cDnyilFU=",
    channelAccessToken:"a0a95804e41131afa6b7342053060f5e"
}
const client = new Client(config)
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
    sendMess()
})

server.listen(3000,()=>{
    console.log("server run")
})