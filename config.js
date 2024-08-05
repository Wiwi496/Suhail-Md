const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2250150188641" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250150188641";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_44_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI2LFxuICAgICAgICA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDY0LFxuICAgICAgICA5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRVNIcG5vY3UzOTVnOC9JS2FaOWdsYVpTeWMvRjRtVjBNa3RPV3p1WmFEUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZnBNZC1tNEVSVGV4M00tZ3ZXWEV0d1wiLFxuICBcInBob25lSWRcIjogXCI5MmM4ZjI3OC01NWI0LTQ3NGYtOTljNC1kNzZjYzU5YmUwZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgNzgsXG4gICAgICAxMDQsXG4gICAgICAyOSxcbiAgICAgIDE1MSxcbiAgICAgIDEwOCxcbiAgICAgIDkyLFxuICAgICAgMTgxLFxuICAgICAgMTk4LFxuICAgICAgMjQ4LFxuICAgICAgMzAsXG4gICAgICAxNzUsXG4gICAgICAxMDksXG4gICAgICAzNixcbiAgICAgIDEzMixcbiAgICAgIDI1MyxcbiAgICAgIDExMyxcbiAgICAgIDIsXG4gICAgICAyMzUsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMTU5LFxuICAgICAgMTQ2LFxuICAgICAgODQsXG4gICAgICAyMDksXG4gICAgICA4MyxcbiAgICAgIDksXG4gICAgICAxNDMsXG4gICAgICAxNjEsXG4gICAgICA1LFxuICAgICAgMjEwLFxuICAgICAgMTcwLFxuICAgICAgMTEsXG4gICAgICAyNCxcbiAgICAgIDE0NyxcbiAgICAgIDQ2LFxuICAgICAgMjUxLFxuICAgICAgNTUsXG4gICAgICAxMDUsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1dGMUpFN0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTUwMTg4NjQxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZ6R8J2emPCdmYLwnZmS8J2emPCdnpzwnZ6c8J2eovCdnpJcIixcbiAgICBcImxpZFwiOiBcIjkyNDE1MDEyNjc1NzQxOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGZOeFdRUTl2akF0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZVm9ZS0VVNStLNkl2N0JCa3JqdU1oREZrbW5ScVlBd0dFNytBdWJ0Z3dZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZlUGxWUDlza1VUMjNIK1BTYkNqZ0JsWVNZeVJqU0VPWWcreEFDWlRMRUpFcTR4ZEFCbnVDYkNSTlBueEVXMy9JL3NaY091eThwMmw4RGIvNm9VUEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImN0RmQzdUFPZCtYczkvdVpEcXhpUjBjSkQ4em50b1dQc0JRZXY1bzUvT0F3MXNHV2VUTWovWGZubWNuVWFlZlpIUjlXdkgwWDl1SjN3eGxuaWhxR2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTUwMTg4NjQxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjgyNTg1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BIGWINNER",
  packname: process.env.PACK_NAME || "BIGWINNER",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BIGWINNER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
