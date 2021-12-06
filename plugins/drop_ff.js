//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('fs')
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
let isi = fs.readFileSync('src/msg/fly2.txt', 'utf8')
let format = fs.readFileSync('src/msg/formatff.txt', 'utf8')
m.reply(format)
m.reply(isi)
/*conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner', m)*/
}
handler.help = ['fly2']
handler.tags = ['main']
handler.command = /^(ff|Ff|FF)$/i
module.exports = handler
//@amirul.dev
