const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBEUllHWkZIUDA4TzhQeThndGZzSEdkQkt6aER3REZlbDdYSG9qdHVWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhhZVFRWlI5cFZaVllndGtUYXJUM29scnJEYU9NYWwydzVYTWtaV2lSRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTlg1UkRERTZnSzVSQTdnYjNLOUhHQmV6NlF0V1ZMaXorYXFXWmNodjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJU0Fkdk04Z2JsKzUzWFFnTTkxRDFaNVpTOTVpSlQ0NkVBZ3RseXVYUFdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HeVBUUWVHaXpoK0FZd0Z6MjZjVC9nVDRRKzYxQ00vSzlwb29tR0VDMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVhMk9YOEFBYXo4aHhQZUhNekpyRUJSck1RdHB2eStZRUUvdENoV1UxSDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU0yV0xwLzRpM1JaeHIyMERKLy92V1lESGxBR2hPTU5naWE0N3BzYlZIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkIvTWREdnJtSDM1MmxDTGorc2ZsRjdHQ3dvWUlqaGxlakpRWnoxL1FCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNZL3ErOXd6V2tpc3RFSk5kWjVQMHlHRjlaYXdoejJ1bnN5REtJdFRMc2E3QjU1RnFIbDFORkJGOTVMQmpoOTN3UkRSeG1GZTdpQ2RXeEswNFlHUkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiIwWE1xdnRSekEzeCs2aE82MHZTMXg4QWtrbDJ1cFhXZDhYbVBkUFJhQVB3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM5MjYxNjI2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUYxMDNFM0ZBRThBRTgxQTcxRjE3OUU4QUNFNjBDQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY4MjQ4NDU3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzOTI2MTYyNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVGMDEyRTJENUM4NTVEMTA5OTJGQkRDQkMyRjMyMkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2ODI0ODQ1OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzkyNjE2MjYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NTg5NEZCQkQyNEYzMDFEQzVEMzAwM0JEQkUxOENCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjgyNDg0NTl9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjkyMzM5MjYxNjI2Mzo1NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBcnNsYW4tTUQiLCJsaWQiOiIxNjMwODkwODU0Mjc4OTY6NTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJVHYwcElIRVBpb2xjc0dHRGdnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCN0w2Q2ttYlJETE1sTHFydHIwTnJEcTdEVXpLZjdaRnB1Z3ovZ29JLzA4PSIsImFjY291bnRTaWduYXR1cmUiOiJVR1hYcjhVRHRnSEFXR1hqbUl6Zmx5dm0xMGVPeTRaZm5ZbHYySGUvUmgydTZxWVRYSVZ1SjJ0aGhlQWhBclk4TXNaU3F3UE5STzN6RUV4L1BCaEVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ09HTld1VS92Um9ZaDlSdHMvS1hBczRkLzhoM1BIRXBpYmk3OXkyQTh1R3IrOXl6TTNPQU1qMk9GR29QRFBpdkQ1V0wvM004T1VqSWV1OURlY0ZiQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzOTI2MTYyNjM6NTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWV5K2dwSm0wUXl6SlM2cTdhOURhdzZ1dzFNeW4rMlJhYm9NLzRLQ1A5UCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY4MjQ4NDUzLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmxSIn0=' 
//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.owner = "254104260236"
global.developer = "254104260236"
global.bot = ""
global.devname = "dave"
global.ownername = process.env.OWNER_NAME ||'dave'
global.botname = "vampire Md"
global.versisc = "2"
global.packname = "⎋dave Md"
//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/254104260236"
global.linkyt = "https://www.youtube.com/Davke"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me"

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.prefix = process.env.BOT_PREFIX ||'.'
global.autoRecording = false
global.autoTyping = true
global.autorecordtype = false
global.autoread = process.env.AUTO_READ || false
global.autobio = false
global.anti92 = false
global.owneroff = false
global.statusview = process.env.AUTO_STATUS || true

//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = "https://url.bwmxmd.online/Adams.poh4tuhs.jpg"
global.thumbown = "https://url.bwmxmd.online/Adams.poh4tuhs.jpg"

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363400480173280@newsletter*"
global.channelname = "ー UPDATES"
global.channel = "hatsapp.com/channel/00m"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: " `[ Developer Only!! ]` \n This feature is for developers only!!",
  owner: " `[ Owner Only!! ]` \n This feature is for owners only!!",
  group: " `[ Group Only!! ]` \n This feature is for group chats only!!",
  private: " `[ Private Only!! ]` \n This feature is for private chats only!!",
  admin: " `[ Admin Only!! ]` \n This feature is for admins only!!",
  botadmin: " `[ Bot Admin Only!! ]` \n This feature is for bot admins only!!",
  wait: " `[ Wait!! ]` \n Please wait, loading...",
  error: " `[ Error!! ]` \n An error occurred!!",
  done: " `[ Done!! ]` \n Process completed!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
