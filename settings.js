
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RySkNnb1dLdUpqaE95cldzbGJGTWhmSzhjWFhiWXFnR3hGV3NhVFBHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzQ0YWdxN1ZFSGJUd2h0S0JvMk5uL3J5QVlxYkJhMUZPMTRNNUZTM0FrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSWhueWJlMWVhZmY0NUJtN1hGa2VPbmdxemQxZitPNW40WSt0YVdYZGtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaVnZPSGVRUFo1cGRueEliY2ZDZGY3enBPMG5PazM3ZHdOWGMvNjVSTkg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNUW1ManNydEhTbW16bkc0QS9HNmhSZUlOZFplTGg4bjRhVUU2RHF1azA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNaFRDeG92S29sUDY3eW8wRmZOV1FxemRUVkpQcnBTN0lQVjBhKy9Rd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BuRklkS3VMb3VteTM3YndmZHE3aWpPZEhNZVpTcnk1bjZCc1R1NmJuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxCUmtDYnFYOTF5YTc5dklkR1BYYlZFaHk0a0VKeGxXUXBHOFl5T08wcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJpdUtZMzdONFV3ZHAxOHphRDdsM0orUWg2Z2M3aC9sWmg0UDdteU5CN2NRVFNRNmNqVE56Yk5HVEJWcEc3aGVxOGo5T0g2TkoraFR2dkg5MjFuamlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6ImhTUzVUKytxSG5QbVp3WDRQVStaejM2dlc1NzMzZlNJaFllblA0amVOVEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii0zeENmZFBHVGZDZFdhSzBXY21xMlEiLCJwaG9uZUlkIjoiZmIzYmMzODItYjcwZC00NTg3LWFlNWYtNjc4Mzg1ZjY3ODYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink4d0ExODNXUExVdmVuVlMrRjkrc0kxbjVTYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabURrVGhXYnlWQU80VHdBM2VhT1pKdFg4VE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6IjI1NDc5MjMzMTcyOTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNoZW1hbCIsImxpZCI6IjU3MjI2ODQ4OTI3OTg1OjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMzkrZEVHRUliMTZzVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFalVhZzZwbnlmK0NDRjlTbG10aVpZdVZYQUt0TDV6bFVrWVlNTGVGUjF3PSIsImFjY291bnRTaWduYXR1cmUiOiJvUEQyWXVRUHN5RUt6UjI4VnYvTTFjbXk2TGY4YjIraGpnQjQ5dURUdGo4T2JabURJTHFWYUdUdUQ2UEVrVGZIcmNzTGd4R2pwU3dWNDFOZ3VhT0ZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQmc1eU9RaXI0b3dqOFh2SjMvSUhldVhDM1JYQi9PajY0ODNKNWhQN3hTeThaU1ZQVnY3d2FrSkhNcmNudUsyd3JObnZyWVlLTndWbVhkd1pPRmhFZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTIzMzE3Mjk6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSSTFHb09xWjhuL2dnaGZVcFpyWW1XTGxWd0NyUytjNVZKR0dEQzNoVWRjIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTcwNjc5MjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlVNIn0=",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "Shemal tech hub",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "254792331729",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
