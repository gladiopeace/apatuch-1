//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('node-fetch')
const fs = require('fs')
let img = await (await fs('https://i.ibb.co/t2L1jbH/IMG-20211114-WA0008.jpg')).buffer()
let format = fs.readFileSync('src/msg/bayar.txt', 'utf8')
let a = '```'
conn.sendFile(m.chat, img, `silahkan discan`)
m.reply(format)
}
handler.help = ['fly5']
handler.tags = ['main']
handler.command = /^(tes)$/i
module.exports = handler
//@amirul.dev
