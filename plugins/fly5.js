//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('node-fetch')
let img = await (await fs('https://telegra.ph/file/963cbb5270d951949b011.jpg')).buffer()
let a = '```'
conn.send2BtnImg(m.chat, img, `🏪 *Payment E-wallet* 🏪
🍡 DANA: ~082391360347~ *LIMIT*
🍡OVO : 082391360347
🍡LinkAja : 082391360347
🍡Gopay : 082391360347
🍡ShopePay : 082391360347
🎲 Qris : Ada diatas

🏦 *Payment Bank* 🏦
✨BNI : 0898367024
✨BCA : 1630588924
✨BRI : 0270 01037778504
Semua payment A/n  : *ANGGUN YUNITA PUTRI*`, global.footer, 'BACK MENU', '#menu', 'ADMIN', '#owner')
}
handler.help = ['fly5']
handler.tags = ['main']
handler.command = /^(fly5)$/i
module.exports = handler
//@amirul.dev