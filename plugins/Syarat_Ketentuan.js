//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('fs')
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
let isi = fs.readFileSync('src/msg/syarat.txt', 'utf8')
let a = '```'
m.reply(isi)
/*conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner')*/
}
handler.help = ['syarat']
handler.tags = ['main']
handler.command = /^(syarat)$/i
module.exports = handler
//@amirul.dev
