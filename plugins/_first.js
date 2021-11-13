//- FIRST MESSAGE FIXED
//- MADE BY AMIRUL DEV
//- AMIRUL@SKYN.TECH

let moment = require('moment-timezone')
let handler = m => m
let fs = require('fs')

handler.all = async function (m) {
let bname = global.name
let foot = global.footer
let logo = global.logo

if (m.chat.endsWith('broadcast')) return
if (m.fromMe) return
if (m.isGroup) return
if (db.data.settings.groupOnly) return
let user = global.db.data.users[m.sender]
if (new Date - user.pc < 86400000) return // setiap 24 jam sekali

// RANDOM PICT
let ft = gs(logo)
let pict2 = fs.readFileSync(`tmp/${ft}.jpg`)
let name = conn.getName(m.sender)

// BAHASA INDO
if (user.bahasa == '') throw `Silahkan pilih bahasa terlebih dahulu
contoh:
#lang id atau en

Please select the language first
Example
#lang id or en`

if (user.bahasa == 'id'){
await this.send2Loc(m.chat, pict2, `Halo *${name}* 👋
${ucapan()} 😊
${user.banned ? 'Nampaknya nomor anda terbanned oleh bot. silahkan hubungi owner dengan klik button owner dibawah ini' : `Aku *${bname}*.\naku adalah bot whatsapp bisnis yang dirancang secara otomatis\nuntuk melihat menu silahkan ketik button *menu* dibawah

*NB:* silahkan pilih bahasa bot kamu dengan ketik
#lang id atau en`}
`.trim(), foot, 'MENU', '#menu', 'OWNER', '#owner', m)
    user.pc = new Date * 1
} else {
await this.send2Loc(m.chat, pict2, `Hello *${name}* 👋
${ucapan2()} 😊
${user.banned ? 'It seems that your number has been banned by a bot. please contact the owner by clicking the owner button below' : `I'm *${bname}*.\nI am an automatic whatsapp bot designed for free and paid.\nI am an automatic whatsapp bot designed for free and paid.\nTo see the menu, please type the *#menu* button below

*NB:* please select your bot language by typing
#lang id or en`}
`.trim(), foot, 'MENU', '#menu', 'OWNER', '#owner', m)
    user.pc = new Date * 1
}
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat Dini Hari"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}

function ucapan2() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Evening"
  if (time >= 4) {
    res = "Good Morning"
  }
  if (time > 10) {
    res = "Good Afternoon"
  }
  if (time >= 15) {
    res = "Good Afternoon"
  }
  if (time >= 18) {
    res = "Good Night"
  }
  return res
}

function gs(list) {
  return list[Math.floor(Math.random() * list.length)]
}