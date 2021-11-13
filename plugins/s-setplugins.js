//- Made by Amirul Dev
//- FB: fb.com/amiruldev.id - IG: @amirul.dev
 
let handler = async (m, { conn, usedPrefix, command, text, isOwner, isAdmin, isROwner }) => {
let fs = require('fs')
let [type, is] = text.split`|`
 
switch (type) {
 
//- MENU DEFAULT
case 'fly1':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/fly1.txt', is)
break
 
//- DESC LIST MESSAGE MENU
case 'fly2':
if (!m.isGroup) {
if (!isOwner) {
}
}
fs.writeFileSync('src/msg/fly2.txt', is)
break
 
//- LIST MENU SELECT
case 'fly3':
if (!m.isGroup) {
if (!isOwner) {
 }
}
fs.readFileSync('src/msg/fly3.txt')
break

case 'fly4':
if (!m.isGroup) {
if (!isOwner) {
 }
}
fs.readFileSync('src/msg/fly4.txt')
break
 
case 'fly5':
if (!m.isGroup) {
if (!isOwner) {
 }
}
fs.readFileSync('src/msg/fly5.txt')
break

default:
 
if (!/[01]/.test(command)) throw `*⎋ LIST EDITOR ⎋*
 
◈ Drop Mobile Legend - fly1
◈ Price Diamond FF - fly2
◈ Drop Pubgm - fly3
◈ List game lain & vilog - fly4
◈ List Payment - fly5`.trim()
throw false
}
 
 
let img = fs.readFileSync('tmp/code.jpeg')
let msg = type.replace('fly1', 'Drop mobile legend telah diubah').replace('fly2', 'Price diamond ff telah diubah').replace('fly3', 'Drop pubgm telah diubah').replace('fly4', 'List game lain & vilog telah diubah').replace('fly5', 'List payment telah diubah')
 
await conn.sendLoc(m.chat, img, msg, global.footer, 'LIST MENU', '#menu', null)
 
await global.db.write()
process.send('reset')
 
}
handler.help = ['set *option*']
handler.tags = ['owner']
handler.command = /^(set)$/i
handler.owner = true
module.exports = handler
 
 