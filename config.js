

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
           "identifier": "PERSONAL",
            "password": "enteryourcustompass",
            "host": "180.188.226.76",
            "port": 7019,
            "secure": false
    },
  ]
}
