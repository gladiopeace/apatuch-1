//@amirul.dev
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn }) => {
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
let isi = fs.readFileSync('src/msg/giftml.txt', 'utf8')
let formatml = fs.readFileSync('src/msg/tanyabarang.txt', 'utf8')
m.reply(formatml)
m.reply(isi)
/*conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner', m)*/

}

//handler.help = ['script']

//handler.tags = ['main']
handler.command = /^(giftml)$/i
module.exports = handler
//@amirul.dev
