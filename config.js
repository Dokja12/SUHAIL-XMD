const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_39_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEdW9kWTdpSUdmM3BZRWwzTE9YU2hoMWVOenY4M2VBZnFkdDBtdW5iMjI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTAxMDAxMTM1NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc2MzJDOEY1MkEwNEU2NzdBOENEOTY5QjgzRUQ1QzZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjM1MzU5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTAxMDAxMTM1NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFFQkJDMUREOEMxQkI4MzdGQUMxNUUwMjIwMzQwMDBCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjM1MzU5MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzR2VWLWhzWFNTV25fY0lod2p5am9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1MGE4OGYzLTU4MTQtNDdkNy04YzQxLTY2M2RkZGI3NTVkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDI2LFxuICAgICAgMTY3LFxuICAgICAgMTQzLFxuICAgICAgMTU1LFxuICAgICAgNjgsXG4gICAgICA0NCxcbiAgICAgIDExMixcbiAgICAgIDI0OSxcbiAgICAgIDgyLFxuICAgICAgNDIsXG4gICAgICAyMDksXG4gICAgICAyMzUsXG4gICAgICA5MSxcbiAgICAgIDExOSxcbiAgICAgIDEwNCxcbiAgICAgIDIxNCxcbiAgICAgIDEyMixcbiAgICAgIDIwOSxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDEwMSxcbiAgICAgIDIyNixcbiAgICAgIDU1LFxuICAgICAgMjUxLFxuICAgICAgMzYsXG4gICAgICA1OSxcbiAgICAgIDUxLFxuICAgICAgNTksXG4gICAgICAxMzEsXG4gICAgICAxODUsXG4gICAgICA4MyxcbiAgICAgIDExOSxcbiAgICAgIDEyOSxcbiAgICAgIDI1MCxcbiAgICAgIDksXG4gICAgICAxNTksXG4gICAgICAxNjEsXG4gICAgICA5MCxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEdNNFhBMUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTAxMDAxMTM1NDM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc1MjA1NDE0MjYwOTYzOjE4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRva2phLkxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYlQ4YVlHRUs2aG1MY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRnVExCb0V5WkM3Umxqa2UraE5XYkN0cHVHN2dPaFR5WUQ2OXgwQ1BqM1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZTRlakhGVmVlK0ZDZlROYlA2STZYeXBEUVl2cWNaUG9ZVys4cWJqa0ZjNi9ZWlNrNFpmOVNpRFNMQjIvYnZNNVVLYzZKSnFuUURxdVBJT1l3STJERFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVzN3ZVVNc2tIZUQ1aEI1OGdYUFg3eXJDb1NLdlQ3WllEYkZzVDlub25MOFpYZjdxMjgxQ0U1T1hidTA1TzROSlhPaHExMXNldlRKZlFJa0hKTGNRalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDEwMDExMzU0MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYzNTM1ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBiTC5qc29uIjogIntcImtleURhdGFcIjpcIjdsU01tTTU3Z1RZcGJ1aExPYmI4MEpJdzZ2WDZ2ZU9LcTVUbFpqWTJDYlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5MjE2NjU2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2MzUzNTkxNzEyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
