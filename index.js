const fs = require('fs')
const ini = require('ini')
let client = require('discord-rich-presence')

try {
  const config = ini.parse(fs.readFileSync('./config.ini', 'utf8'))
  if(!config) console.log(new Error('Couldn\'t load config.ini'))

  client = client(config.ClientID)
  client.updatePresence({
    details: config.details,
    state: config.state,
    largeImageKey: config.largeImageKey || null,
    largeImageText: config.largeImageText || null,
    smallImageKey: config.smallImageKey || null,
    smallImageText: config.smallImageText || null,
    spectateSecret: config.spectateSecret || null,
    joinSecret: config.joinSecret || null
  })
} catch (err) {
  console.log('Error :', err)
}

console.log('Rich Presence Successfully Loaded \n')