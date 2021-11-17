//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('fs')
let img = fs.readFileSync('tmp/IMG_20211115_045616_543.jpg')
let isi = fs.readFileSync('src/msg/kuota.txt', 'utf8')
conn.send2Loc(m.chat, img,  isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner')
}
handler.help = ['kuota atau voucer']
handler.tags = ['main']
handler.command = /^(kuota|voucer)$/i
module.exports = handler
//@amirul.dev
