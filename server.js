
import './fetch-polyfill.mjs'
import * as dotenv from 'dotenv';
dotenv.config();
import { ChatGPTAPI } from 'chatgpt';
import express from 'express';
import { Client } from 'whatsapp-web.js';
import { LocalAuth, qrcode } from './shell.cjs';

var app = express();

const clientWP = new Client({
  puppeteer: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--unhandled-rejections=strict'] }, authStrategy: new LocalAuth({
    clientId: 'WhatsAppChatGPT',
    dataPath: `./authFolder/WhatsAppChatGPT`,
  })
});

clientWP.on('loading_screen', (percent, message) => {
  console.log('LOADING SCREEN', percent, message);
});

clientWP.on("qr", (qr) => {
  console.log("qr> ", qr);
  qrcode.generate(qr, { small: true });
});

clientWP.on("authenticated", () => {
  console.log("Auth Completed!");
});
clientWP.on("ready", () => {
  console.log("WhatsAppChatGPT is ready!");
});

clientWP.on('auth_failure', msg => {
  console.error('Auth FAILURE', msg);
});

clientWP.initialize();

(async () => {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAPI_KEY
  })

  clientWP.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg.body);

    if (msg.body.startsWith('!chatgpt ')) {
      const chat = await msg.getChat();
      chat.sendStateTyping();
      let searchGPT = msg.body.slice(9);      
      const res = await api.sendMessage(searchGPT);
      chat.clearState();
      msg.reply(res.text);      
    }
  });
})();

app.listen(process.env.PORT, () => {
  console.log("Server Running Live on Port : " + process.env.PORT);
});
