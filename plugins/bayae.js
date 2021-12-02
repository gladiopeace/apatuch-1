//@amirul.dev
let fetch = require('node-fetch')
/*let fs = require('fs')*/
let handler = async (m, { conn }) => {
let img = await (await fs('https://i.ibb.co/t2L1jbH/IMG-20211114-WA0008.jpg')).buffer()
let isi = fs.readFileSync('src/msg/bayar.txt', 'utf8')
conn.sendFile(m.chat, img)
m.reply(isi)
/*conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner', m)*/

}

//handler.help = ['script']

//handler.tags = ['main']
handler.command = /^(tes)$/i
module.exports = handler
//@amirul.dev
