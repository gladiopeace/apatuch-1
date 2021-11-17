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
 
◈ Produk Arminadaily - arminadaily
◈ Drop Mobile Legend - fly1
◈ Price Diamond FF - fly2
◈ Drop Pubgm - fly3
◈ Top Up Ovo Gopay Dana - topupdana
◈ Pulsa - pulsa
◈ kuota internet atau voucer - kuota
◈ Token Listrik - token
◈ Followers Instagram - folig
◈ Like Post Instagram - likeig
◈ Comment Post Instagram - comig
◈ Followers Facebook - folfb
◈ Like Post Facebook - likefb
◈ Comment Post Facebook - comfb
◈ Subcribe Channel Telegram - subtele
◈ Anggota Group Telegram - angtele
◈ Syarat & Ketentuan - syarat
◈ List Payment - fly5`.trim()
throw false
}
 
 
let img = fs.readFileSync('tmp/code.jpeg')
let msg = type.replace('arminadaily', 'Produk Arminadaily telah diubah').replace('fly1', 'Drop Mobile Legend telah diubah').replace('fly2', 'Price Diamond FF telah diubah').replace('fly3', 'Drop Pubgm telah diubah').replace('topupdana', 'Top Up Ovo Gopay Dana telah diubah').replace('Pulsa', 'Pulsa telah diubah').replace('kuota', 'kuota internet atau voucer telah diubah').replace('token', 'Token Listrik telah diubah').replace('folig', 'Followers Instagram telah diubah').replace('likeig', 'Like Post Instagram telah diubah').replace('comig', 'Comment Post Instagram telah diubah').replace('folfb', 'Followers Facebook telah diubah').replace('likefb', 'Like Post Facebook telah diubah').replace('comfb', 'Comment Post Facebook telah diubah').replace('subtele', 'Subcribe Channel Telegram telah diubah').replace('angtele', 'Anggota Group Telegram telah diubah').replace('syarat', 'Syarat & Ketentuan telah diubah').replace('fly5', 'List Payment telah diubah')
 
await conn.sendLoc(m.chat, img, msg, global.footer, 'LIST MENU', '#menu', null)
 
await global.db.write()
process.send('reset')
 
}
handler.help = ['set *option*']
handler.tags = ['owner']
handler.command = /^(set)$/i
handler.owner = true
module.exports = handler
 
 
