//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('node-fetch')
let img = await (await fs('https://telegra.ph/file/f1c04c3f95f5b7a02c497.jpg')).buffer()

let a = '```'
conn.sendFile(m.chat, img, `🏪 *Payment E-wallet* 🏪`)

}

handler.help = ['fly5']
handler.tags = ['main']
handler.command = /^(rules)$/i
module.exports = handler
//@amirul.dev
