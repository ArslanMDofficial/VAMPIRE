const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })



global.SESSION_ID = process.env.SESSION_ID || 'ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9menBseDdrTEp3eksyd2pKRTFWVVlIYmhlQnR5ZUhMMUU2Yk1ObkhXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFFqWDdHa2NRNXVYQVdFbjhOT3ZYQ1RMSittSG5xeE9DblByMWtqbEhUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS1BFZWtxUyt0RERKUCtsSDVhUXRnVng0bm05eThuNkNZc1pQZUl6dzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNNlNacVJYMGNjakQ4bmxCRmpaZCtuWExBVFBzRzhqWkwwL0U0TThTYldrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJdjZXMkZmN1NYU09RRE9wSTV1eGZGRzJTWmpKQzJZZ0crc0pHYkRPWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhGaGpUUFFVY0JITW00b25wemVXOG9kNWpucWY2SzFDYVFXdjE4S3VsQzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1MaWVBMGpoMFdBMzlWY3Budnl1WHlxVnpUdTBNdWtqTGViQUpUSjNVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTBMd3had2tKZ0FpNlovZ2pIZnpXUFJWM3YyL1k5YUxpWEFSSTkvemNudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlzUmVXdUtEbzZXcm5sVnBvL2dkWnExSnBNZDBjNEVsTjAzN0c2eEwybXRKU0F1NmUrL1BaeWY4WHo3dWZlSVQwdjlqMWpqcG91dFhtSHF2ZFA3Q0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJycGJoZktVVVVHRXJ0Z0F2YUxwL0s4ZnBJekVyenNiSmhvR3dQVkZEUDI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM5MjYxNjI2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUY0MjY5NjlGOTZDNTNGQjBFMTJERTBCNDM4QkYzOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY4Mjg5NzkxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzOTI2MTYyNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUyMUNGNjFGNDU2OEM1NjBCMEM5RkIyM0IyQjA3MjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2ODI4OTc5Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzkyNjE2MjYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MjA3MzA5NTRFNDMzMjIxRTBBNEVCNTkzQjgyREVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjgyODk3OTN9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjkyMzM5MjYxNjI2Mzo1NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBcnNsYW4tTUQiLCJsaWQiOiIxNjMwODkwODU0Mjc4OTY6NTZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJVHYwcElIRU8zcmw4c0dHRGtnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCN0w2Q2ttYlJETE1sTHFydHIwTnJEcTdEVXpLZjdaRnB1Z3ovZ29JLzA4PSIsImFjY291bnRTaWduYXR1cmUiOiJSckZOOWpuKzdRbDI3Yms5L085WUk3V1lOcXh2c0FlYmtCUDBWT01jMXlzK3c2SDN4VktjWFI4QnZvMGxuY2MvT0d2SnRMYnZ5cC82Mm40OWdBYUxEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOXNDeCtYQXZ2VCtuVzNicW8reUJsdWhBSXFTcUJ4eE1TeUNCQXFiYStPTjFNMEN6YnB2VWpWUEk4VUx1YzREWlg5WXdQT2k5TVo1TjBnNEVEbVVxRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzOTI2MTYyNjM6NTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWV5K2dwSm0wUXl6SlM2cTdhOURhdzZ1dzFNeW4rMlJhYm9NLzRLQ1A5UCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY4Mjg5Nzg3LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmxSIn0=' 
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
