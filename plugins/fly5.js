//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('node-fetch')
let img = await (await fs('https://i.ibb.co/t2L1jbH/IMG-20211114-WA0008.jpg')).buffer()
let a = '```'
conn.send2BtnImg(m.chat, img, `🏪 *Payment E-wallet* 🏪
🍡 DANA: ~085155333010~ *LIMIT*
🍡 OVO : 085155333010
🍡 Gopay : 085155333010
🎲 Qris : Ada diatas
(Transaksi Dibawah 10k Dana Only)
Semua payment A/n  : *M. ALAIKA ALYASAAR*`, global.footer, 'BACK MENU', '#menu', 'ADMIN', '#owner')
}
handler.help = ['fly5']
handler.tags = ['main']
handler.command = /^(fly5)$/i
module.exports = handler
//@amirul.dev
