//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('node-fetch')
let img = await (await fs('https://i.ibb.co/t2L1jbH/IMG-20211114-WA0008.jpg')).buffer()

let a = '```'
conn.senFile(m.chat, img, `🏪 *Payment E-wallet* 🏪`)

}

handler.help = ['fly5']
handler.tags = ['main']
handler.command = /^(qris)$/i
module.exports = handler
//@amirul.dev
