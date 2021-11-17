let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn }) => {
let img = fs.readFileSync('tmp/l3.jpg')
conn.sendLoc(m.chat, img, `*[+] SOURCE CODE [+]*
`, global.footer, 'BACK MENU', '#menu', m)

}

handler.help = ['script']

handler.tags = ['main']

handler.command = /^(sc|script)$/i

handler.register = true

module.exports = handler

