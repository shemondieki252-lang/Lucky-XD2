
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0I1VlN0MllaMERuRytwRHZvaXpSbUM5ZWZ3c21pbnVUallQbE1WK09Faz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEJKcDJjZjNmSnRqS08yYUZBcHFxYkU1YkFRQ2lyTmc2M3hZUVJXZS9DUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTGNTNXVlZEU0VkV6VXJzell5Sm11MUpjV1FPK1I0S3R4Mm1PMXd2eEc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJma1pzcmJGbXI5KzVCcHcvd1JnN2lkaFBZNzNqbWZoZjZ2Nm9EME82YVJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPTThDQXlRNmZKTTVTcWNqM2M1Y2dWK3hET2xObG1sVGJiMXBIcDZrVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJPQ1I5bEZ1WEMwNVZ0QWltY3hUZEN6QWJ0bWFFTVprcG5zdWgwd3Z3a1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVXL2JiQ0JrYWl0MlhGNHZLVTR6Q3Vvd0RCaGVpNSt2SkVmT1BvK3VHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlA1dE5WRm5NaHJQVXdSUG5mTFVxeEFFWXN2RnI5NWcwVjFvSWxBMnNuST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhUUFM0djd2eWxHNHNRNUozVlZ4Q3QyMDdKNVFZeXV1TXR4Szd4bVV2K2tVczFBV3pZSmo2MXF5eXF6RmpRWE1xRVlGSUM5VGxzM0FsSVB1ZjAxMkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJQbWU1VHZiNzREODZ5V3ZIdFUyb2lSemV3cVVhbUJ3ME5STXREQUpQOTdvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4NzA0ODkwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMTk4MUQ1RTEyRTk5QzlGNEQ5QURDM0M4RkEwNzFDQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3MTM5NTE1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODcwNDg5MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjc1NDNDOUUxREZDMERDRThGRDFDQUQ2RURFOEU0RTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzEzOTUxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzg3MDQ4OTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAwRDVBOEE3MjY0ODE1RTFEMEYwNkREMzM2MzJBMkE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcxMzk1MjB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtLaWU5czI2VGNlQ1BoXzktdHhLdHciLCJwaG9uZUlkIjoiZWFkMGRjMWEtNThiYy00N2E2LWEzNWUtY2VjMWI4YzNhMDZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJCRXBUSmxYUEVXd0FrdFU4aHJGcmExdzBRdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdHFvL21uNW9OMm9YN2hxa3VXbmQ0OGVpMzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6IjI1NDc4NzA0ODkwNjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBlcyBtYXN0ZXIiLCJsaWQiOiIyMzcwMDk4NTE0NDEyNjQ6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tQOXh1TUhFS3VrNzhVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVhUjMvdnhZU1YwdnBlZ3RuWVNTYlAvZ2RuNlY3UVpYZ3VjMS9OajZDMXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InI1TzdNdEd4eG9kQXFoV3FpRWE3VXBnaGU0SEhtazVJczd6WTVxNW1ZcC9ERDVxWS84OXFvbVlKYmkzcW1OSnQ0V3ZPSWxEN0NRZGt2OXJvT1ltRkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOendHbW5wMlFwL0cxYUtxYjR3d0NpMjZDSHUzdHJESEN5OHdVZ2R1Y2ZnWkNGaUZGUGdnaHlDN2VnN2hvemZhWDFhdllQRis3aHVQeW96bFpTbzdBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4NzA0ODkwNjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZHa2QvNzhXRWxkTDZYb0xaMkVrbXovNEhaK2xlMEdWNExuTmZ6WStndGIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzEzOTUxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNbG8ifQ==",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SHEM-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "Shemal tech hub",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "254787058906",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "true",
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

      AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
