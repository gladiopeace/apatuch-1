//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('fs')
let img = fs.readFileSync('tmp/IMG_20211115_045706_693.jpg')
let isi = fs.readFileSync('src/msg/resff.txt', 'utf8')
conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner')
}
handler.help = ['fly3']
handler.tags = ['main']
handler.command = /^(resff|ResFf|RESFF)$/i
module.exports = handler
//@amirul.dev
