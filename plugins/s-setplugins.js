//- Made by Amirul Dev
//- FB: fb.com/amiruldev.id - IG: @amirul.dev
 
let handler = async (m, { conn, usedPrefix, command, text, isOwner, isAdmin, isROwner }) => {
let fs = require('fs')
let [type, is] = text.split`|`
 
switch (type) {
 
//- MENU DEFAULT
case 'arminadaily':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/arminadaily.txt', is)
break

//-1◈ Produk Arminadaily - arminadaily
 case 'arminadaily':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/arminadaily.txt', is)
break

//-2◈ Drop Mobile Legend - ml
 case 'ml':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/fly1.txt', is)
break
 
//-3◈ Price Diamond FF -ff
 case 'ff':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/fly2.txt', is)
break
  
//-4◈ Drop Pubgm - pubg
 case 'pubg':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/fly3.txt', is)
break
  
//-5◈ Top Up Ovo Gopay Dana - topupdana
 case 'topupdana':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/topupdana.txt', is)
break
  
//-6◈ Pulsa - pulsa
 case 'pulsa':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/pulsa.txt', is)
break
  
//-7◈ kuota internet atau voucer - kuota
 case 'kuota':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/kuota.txt', is)
break
  
//-8◈ Token Listrik - token
 case 'token':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/token.txt', is)
break
  
//-9◈ Followers Instagram - folig
 case 'folig':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/folig.txt', is)
break
  
//-10◈ Like Post Instagram - likeig
 case 'likeig':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/likeig.txt', is)
break
  
//-11◈ Comment Post Instagram - comig
 case 'comig':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/comig.txt', is)
break

//-12◈ Followers Facebook - folfb
 case 'folfb':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/folfb.txt', is)
break
  
//-13◈ Like Post Facebook - likefb
 case 'likefb':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/likefb.txt', is)
break
  
 //-14◈ Comment Post Facebook - comfb
 case 'comfb':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/comfb.txt', is)
break
  
 //-15◈ Subcribe Channel Telegram - subtele
 case 'subtele':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/subtele.txt', is)
break

 //-16◈ Anggota Group Telegram - angtele
 case 'angtele':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/angtele.txt', is)
break
  
 //-17◈ Syarat & Ketentuan - syarat
 case 'syarat':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/syarat.txt', is)
break
  
 //-18◈ menu - menu
 case 'menu':
  if (!m.isGroup) {
  if (!isOwner) {
 
      }
}
fs.writeFileSync('src/msg/menu.txt', is)
break
  
 //-19◈ List Payment - fly5
case 'fly5':
if (!m.isGroup) {
if (!isOwner) {
 }
}
fs.writeFileSync('src/msg/fly5.txt')
break

default:
 
if (!/[01]/.test(command)) throw `*⎋ LIST EDITOR ⎋*
 
1◈ Produk Arminadaily - arminadaily
2◈ Drop Mobile Legend - ml
3◈ Price Diamond FF - ff
4◈ Drop Pubgm - pubg
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
18◈ menu - menu
19◈ List Payment - payment`.trim()
throw false
}
 
 
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
let msg = type.replace('arminadaily', 'Produk Arminadaily telah diubah').replace('ml', 'Drop Mobile Legend telah diubah').replace('ff', 'Price Diamond FF telah diubah').replace('pubg', 'Drop Pubgm telah diubah').replace('topupdana', 'Top Up Ovo Gopay Dana telah diubah').replace('Pulsa', 'Pulsa telah diubah').replace('kuota', 'kuota internet atau voucer telah diubah').replace('token', 'Token Listrik telah diubah').replace('folig', 'Followers Instagram telah diubah').replace('likeig', 'Like Post Instagram telah diubah').replace('comig', 'Comment Post Instagram telah diubah').replace('folfb', 'Followers Facebook telah diubah').replace('likefb', 'Like Post Facebook telah diubah').replace('comfb', 'Comment Post Facebook telah diubah').replace('subtele', 'Subcribe Channel Telegram telah diubah').replace('angtele', 'Anggota Group Telegram telah diubah').replace('syarat', 'Syarat & Ketentuan telah diubah').replace('menu', 'menu telah diubah').replace('payment', 'List Payment telah diubah')
 
await conn.sendLoc(m.chat, img, msg, global.footer, 'LIST MENU', '#menu', null)
 
await global.db.write()
process.send('reset')
 
}
handler.help = ['set *option*']
handler.tags = ['owner']
handler.command = /^(set)$/i
handler.owner = true
module.exports = handler
 
 
