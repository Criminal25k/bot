const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "916282945816,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝐂𝐫𝐢𝐦𝐢𝐧𝐚𝐥_𝐁𝐎𝐓",
  ownername:process.env.OWNER_NAME|| "𝐂𝐫𝐢𝐦𝐢𝐦𝐚𝐥-𝐌𝐎𝐃",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_42_03_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaEo4M2FtL0s3VjFxd1JucWxNNzU5QWVJdjNTb1lWdjg1L2kyUERnMndiQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYyODI5NDU4MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY5NjU3Q0MzNkFBMzUzQjEyOUEzNkZFRTg2MjQ5QTRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzEwNDUzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNjI4Mjk0NTgxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjYyMDkxMTNGN0E2QzJGNEMzMjVENUY5MEYwM0EyNzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQzMTA0NTM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNZcHJMTVdVUW1pQmN6aDRycW9YWmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTMyNjA4MGItNzdkNC00ZTcwLTlhOTctNTk5MzExODVhOTNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDEyOCxcbiAgICAgIDIxNSxcbiAgICAgIDEyMyxcbiAgICAgIDIzNSxcbiAgICAgIDI0NSxcbiAgICAgIDEwMSxcbiAgICAgIDE2NixcbiAgICAgIDE3OCxcbiAgICAgIDIwOSxcbiAgICAgIDE3NyxcbiAgICAgIDE1MixcbiAgICAgIDI0OSxcbiAgICAgIDIwNCxcbiAgICAgIDcyLFxuICAgICAgMTQ2LFxuICAgICAgMTgxLFxuICAgICAgMTEyLFxuICAgICAgMjU0LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDIxMixcbiAgICAgIDEzMSxcbiAgICAgIDEyOSxcbiAgICAgIDIxOCxcbiAgICAgIDIwOCxcbiAgICAgIDE5MixcbiAgICAgIDUsXG4gICAgICA2OSxcbiAgICAgIDM0LFxuICAgICAgMTExLFxuICAgICAgMTI1LFxuICAgICAgMTY2LFxuICAgICAgMjU0LFxuICAgICAgODQsXG4gICAgICAzMixcbiAgICAgIDEzMSxcbiAgICAgIDEzOCxcbiAgICAgIDQyLFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1hFUlRWNU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjI4Mjk0NTgxNjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIzNDI0NzY5MjIwODIwOjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNyaW1pbmFsIFNlclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQVG40TUhFSlBVbHI4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOWs2SW9IbmRjdE54WWF4d3hrWlNCUVlNZUw5d0NNbFFUcm82Y1B2UVlFUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXZDIxQ0NlYkRNOHpLWitqVVBSZWtINlk2bkRLUWNEdndGbnk3OEM5enZMbklyK21rWnJHRHlndkFlUlNoZlVOTjE3Z2pHNWRlSGx1amN1VU95cVpEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpYTF6eUNCY0wvdXFvOVNRUGNoQ2lyb0s0T2hva1A3dlQwdnRaRERGRHRUMHg5bDZuQ0l2QXl1ODhZQjBMVlZtZkFldmVReVRVOE0rWkRyV25Yemxodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTYyODI5NDU4MTY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzEwNDUzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxDTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTENNLmpzb24iOiAie1wia2V5RGF0YVwiOlwieHFJZDd4VlBrVm15b0ZDM3h2UFk4ZWJNTFlWbjVXUVFRdWEzRHUyOWJCMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODg1ODU4MjkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDMxMDQ1MzY2NzRcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
