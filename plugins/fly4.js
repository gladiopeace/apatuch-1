//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('fs')
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
let isi = fs.readFileSync('src/msg/fly4.txt', 'utf8')
let a = '```'
conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner')
}
handler.help = ['fly4']
handler.tags = ['main']
handler.command = /^(fly4)$/i
module.exports = handler
//@amirul.dev
