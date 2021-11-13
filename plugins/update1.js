let { execSync } = require('child_process')
let handler = async (m, { conn, text, isROwner }) => {
if (global.conn.user.jid == conn.user.jid) {

// BAHASA INDO
let user = global.db.data.users[m.sender]
if (user.bahasa == 'id'){
await conn.fakeReply(m.chat, 'Update script dari github.com/scoder37/mybot.git (privat)', '0@s.whatsapp.net', 'Fast Update Github', 'status@broadcast')

let stdout = execSync('git pull https://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@github.com/scoder37/maxbot.git' + (isROwner && text ? ' ' + text : ''))

if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
let a = stdout.toString()
let b = a.replace('Updating ', 'Kode Update #').replace('Fast-forward', '\n*LOG FILE:*').replace('Already up to date.', 'Semua file sudah ter-update!!').replace('https://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@github.com/scoder37/maxbot.git', '')
m.reply(b)

} else {
await conn.fakeReply(m.chat, 'Update script from github.com/scoder37/mybot.git (privat)', '0@s.whatsapp.net', 'Fast Update Github', 'status@broadcast')

let stdout = execSync('git pull https://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@github.com/scoder37/maxbot.git' + (isROwner && text ? ' ' + text : ''))

if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
let a = stdout.toString()
let b = a.replace('Updating ', 'Code Update #').replace('Fast-forward', '\n*LOG FILE:*').replace('Already up to date.', 'All files have been updated!!').replace('https://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@github.com/scoder37/maxbot.git', '')
m.reply(b)
}
}

}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^update$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
module.exports = handler

