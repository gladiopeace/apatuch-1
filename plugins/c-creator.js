//@amirul.dev
let handler = async (m, { conn }) => {
m.reply('nih ownerku')
conn.sendContact(m.chat, '6282391360347', 'Anggun', m)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = /^(owner)$/i
module.exports = handler
//@amirul.dev