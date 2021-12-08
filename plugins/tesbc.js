let handler = async (m, { conn, text }) => {

await conn.send2BtnVid('623102050562@s.whatsapp.net', await (await require('node-fetch')("http://sansekai.my.id/ptl_repost/120575986_151816433263092_6600262966520398271_n.mp4")).buffer(), 'awali harimu dengan asupan', global.footer, 'MENU', '#menu', 'OWNER', '#owner', m)
m.reply("okeh")

}

handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')

handler.tags = ['owner']

handler.command = /^(tesbc)$/i

handler.owner = true

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))

