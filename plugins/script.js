let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn }) => {
let img = fs.readFileSync('tmp/l3.jpg')
conn.sendLoc(m.chat, img, `*[+] SOURCE CODE [+]*
Base Default: wabot-aq
All Menu: No Api

Script ini dibuat dari pengodean ulang wabot-aq. dikode ulang mulai dari 0, 1/1 file di buat dan dipercanggih lagi dan dibuild tanpa menggunakan api

New update
- Send Button Text
- Send Button Image
- Send Button Video
- Send Button Document
- Support Multidevice
- Send Custom Group
- Fake Reply Toko
- Fake Reply Status
- Fake Reply Contact
- Fake Reply Button`, global.footer, 'BACK MENU', '#menu', m)

}

handler.help = ['script']

handler.tags = ['main']

handler.command = /^(sc|script)$/i

handler.register = true

module.exports = handler

