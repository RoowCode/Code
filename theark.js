const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));




  //------------------------ KOMUTLAR ---------------------------\\


    //----------------------------- BOT KANALA YAZIYOR ------------------------------------\\ 

client.on('ready', ()=>{
  client.channels.cache.get('832919802753449995').startTyping()
  })
  
  //----------------------------- BOT KANALA YAZIYOR ------------------------------------\\ 
  
  
  //------------------------------ BOT SESLİ KANAL SOKMA ----------------------------------\\
  
  client.on("ready", () => {
    client.channels.cache.get("833494958451195924").join();
  })
  
  //------------------------------ BOT SESLİ KANAL SOKMA ----------------------------------\\
  
  
  //------------------------------ BOT YAYINDA OYNUYOR ------------------------------------\\
  
  client.on("ready", async () => {
     //log("Durum başarıyla ayarlandı")
        client.user.setActivity("♅・KNOVERDON・♅",  
          { url: 'https://twitch.tv/.',
          type: 'STREAMING' }); 
  })
  
  //------------------------------ BOT YAYINDA OYNUYOR ------------------------------------\\