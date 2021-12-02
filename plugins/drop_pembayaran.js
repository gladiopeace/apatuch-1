//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('node-fetch')
let img = await (await fs('https://i.ibb.co/t2L1jbH/IMG-20211114-WA0008.jpg')).buffer()

let a = '```'
conn.sendBtn(m.chat, img, `🏪 *Payment E-wallet* 🏪
DANA: 085155333010
OVO : 085155333010
Gopay : 085155333010
Qris : Ada diatas(LIMIT)

PEMBAYARAN VIA ALFAMART
HUBUNGI ADMIN, AGAR ADMIN BUATKAN KODE PEMBAYARANNYA

TIDAK BISA MELALUI INDOMARET 

COD WILAYAH CIAMIS SEKITARNYA

( *transaksi dibawah _Rp.10.000_ wajib ke DANA* )

Semua payment A/n  : 
*M. ALAIKA ALYASAAR*`, global.footer, 'BACK MENU', '?menu')
conn.sendFile(m.chat, img, `silahkan discan`) 
}

handler.help = ['fly5']
handler.tags = ['main']
handler.command = /^(fly5)$/i
module.exports = handler
//@amirul.dev
