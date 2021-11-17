let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendBtn(m.chat, `
Terimakasih telah mengirim pesan kepada saya.
_saya akan membalasnya jika saya online._
silahkan klik tombol menu untuk melihat yang saya tawarkan.
${user.banned ? 'kamu dibanned' : ''}
`.trim(), '- *PESAN OTOMATIS*\nketik #menu bila tombol tidak muncul.', user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? ',owner' : '*menu', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
