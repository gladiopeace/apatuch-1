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
  
 case 'syarat':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/fly4.txt', is)
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

case 'Syarat_Ketentuan':
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
 
1◈ Produk Arminadaily - arminadaily
2◈ Drop Mobile Legend - fly1
3◈ Price Diamond FF - fly2
4◈ Drop Pubgm - fly3
5◈ Top Up Ovo Gopay Dana - topupdana
6◈ Pulsa - pulsa
7◈ kuota internet atau voucer - kuota
8◈ Token Listrik - token
9◈ Followers Instagram - folig
10◈ Like Post Instagram - likeig
11◈ Comment Post Instagram - comig
12◈ Followers Facebook - folfb
13◈ Like Post Facebook - likefb
14◈ Comment Post Facebook - comfb
15◈ Subcribe Channel Telegram - subtele
16◈ Anggota Group Telegram - angtele
17◈ Syarat & Ketentuan - syarat
18◈ List Payment - fly5`.trim()
throw false
}
 
 
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
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
 
 
