//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('node-fetch')

let a = '```'
conn.sendBtn(m.chat, `🏪 *Payment E-wallet* 🏪
DANA: 085155333010
OVO : 085155333010
Gopay : 085155333010
Qris : Ada diatas(LIMIT)

PEMBAYARAN VIA ALFAMART
HUBUNGI ADMIN, AGAR ADMIN BUATKAN KODE PEMBAYARANNYA

TIDAK BISA MELALUI INDOMARET 
( *transaksi dibawah _Rp.10.000_ wajib ke DANA* )

Semua payment A/n  : 
*M. ALAIKA ALYASAAR*`, global.footer, 'BACK MENU', '?menu')

}

handler.help = ['fly5']
handler.tags = ['main']
handler.command = /^(fly5)$/i
module.exports = handler
//@amirul.dev
