let fs = require('fs')
let handler = m => m


handler.all = async function (m, { isBlocked }) {
let bname = global.name
let foot = global.footer
let logo = global.logo
let name = this.getName(m.sender)
let img = rand(logo)
let fto = fs.readFileSync(`tmp/${img}.jpg`)
let fn = '```'
    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

/*// ketika ditag
try {
if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
await this.send2Loc(m.chat, fto, 
isBanned ? `Hai, *${name}* 👋
${fn}${bname} sedang tidak aktif di chat ini!!${fn}` : banned ? `${fn}Ops... nampaknya nomor kamu terbanned oleh bot. silahkan hubungi owner untuk unbanned${fn}` : `${fn}Halo, ${name} 👋
${bname} disini, klik menu untuk melihat list menu${fn}`, foot, isBanned ? 'UNBAN' : banned ? 'ABOUT' : 'MENU',
 isBanned ? '.unban' : banned ? '.about' : '.?',
 m.isGroup ? 'OWNER' : isBanned ? 'UNBAN' : 'ABOUT',
                m.isGroup ? '.owner' : isBanned ? '.unban' : '.about', m)
        }
    } catch (e) {
        return
    }*/

// invite bot
/*if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) { */

/*if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys) {
this.sendLoc(m.chat, fto, `${fn}〔 Undang Bot ke Grup 〕
Hai, ${name}
untuk saat ini, bot belum siap untuk masuk ke grup, silahkan tunggu bot 100% jadi${fn}`, foot, 'LIST MENU', '#menu', m)
    }*/

//salam
let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
let isSalam = reg.exec(m.text)
if (isSalam && !m.fromMe) {
m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ`)
    }
/*/|YASAAR|ALAIKA|Yasaar|yasaar|Alaika|Alex|ALEX|al|Al|alaika|maman|Maman|m alaika alyasaar|M ALAIKA ALYASAAR|yas|Yas
//Bot dipanggil
let breg = /(bot hageuy)/i
let isBot = breg.exec(m.text)
if (isBot && !m.fromMe){
m.reply('iya, ada yang bisa aku bantu??')
}


let it = /(bokep|bkp|anjing|ajg|asw|asu|kntl|kontol|kintil|memek|mmk|meki|cok|dancok|jancok|jnck|ngentot|ngentod|ngtnd|ngeue|ngewe)/i
let isTob = it.exec(m.text)
if (isTob && !m.fromMe){
    m.reply(`jangan ngomong kasar kak *${name}* dosa lho, nanti dimarahin mamanya🥺`)
}
*/

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

   /* // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Wabot Plus+ | Running: ${uptime}. Mode ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'}`).catch(_ => _)
        setting.status = new Date() * 1
    }*/

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function rand(list) {
    return list[Math.floor(Math.random() * list.length)]
}
