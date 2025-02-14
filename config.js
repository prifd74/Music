

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["796001480406466601", ""], 
  mongodbUri : "mongodb+srv://RTX:pokemon@cluster0.na7n4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
        {
      name: "AjieDev - Lavalink [Non SSL]",
      password: "",
      host: "lava-v3.ajieblogs.eu.org",
      port: 80,
      secure: false
    },
    {
      name: "Koi Node V4",
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port:  3000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
