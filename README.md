# WhatsAppChatGPT : Whatsapp Chatbot using OpenAPI ChatGPT

This project is a Whatsapp Chatbot using OpenAPI's ChatGPT. When someone send message using `!chatgpt ` will generate response from OpenAPI ChatGPT.
You can modify prefix of messages. This just need to prevent instant reponse of actual chat in whatsapp. 
I had create this example on Ubuntu 20.04 with Node v16.19.0.

![Example](https://idoctype.in/WhatsAppChatGPT.jpg)

## Requirements

- Node.js ( tested with v16.19.0)
- A recent version of npm
- An OpenAI API keys [Generate API](https://platform.openai.com/account/api-keys)

## .env File example

```
OPENAPI_KEY=OPENAPI_KEY
PORT=5000
```

## Installation

1. Clone this repository to your machine.
2. Install the required packages by running `npm install`
3. Update `.env` file and replace `OPENAPI_KEY` with your acutal key.
4. Run the bot using `node server.js` If you are using pm2 then `pm2 start server.js`
5. Wait for few second and you will get QR code on your terminal.
6. Scan the QR Code with Whatsapp (Link a device)
7. Wait, For WhatGPT message. `WhatsAppChatGPT is ready!`
8. Now we are ready to use WhatsAppChatGPT to your scanned number.

## Usage

To use the bot, simply send a message with `!chatgpt` command followed by your prompt. For example:

`!chatgpt send me some idea about valentine day.`

WhatsAppChatGPT only responds to messages that are received by you, not sent.
Need to discuss? [Let's connect on Telegram](https://t.me/idoctype)

## Used libraries
- [node-chatgpt-api](https://github.com/waylaidwanderer/node-chatgpt-api)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)