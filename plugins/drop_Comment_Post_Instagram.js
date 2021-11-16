//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('fs')
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
let isi = fs.readFileSync('src/msg/comig.txt', 'utf8')
let a = '```'
conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner')
}
handler.help = ['comig']
handler.tags = ['main']
handler.command = /^(comig)$/i
module.exports = handler
//@amirul.dev
