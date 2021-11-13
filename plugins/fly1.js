//@amirul.dev
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn }) => {
let img = fs.readFileSync('tmp/l3.jpg')
let isi = fs.readFileSync('src/msg/fly1.txt', 'utf8')
conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '#menu', 'ADMIN', '#owner', m)

}

//handler.help = ['script']

//handler.tags = ['main']
handler.command = /^(fly1)$/i
module.exports = handler
//@amirul.dev