let handler = async function (m, { args }) {
  if (!args[0]) throw 'Silahkan masukan kode registermu'
  let user = global.db.data.users[m.sender]
  let a = require('axios')
let b = await a.get("https://hadi-api.herokuapp.com/api/base64?teks=m.sender&method=enc")
let sn = b.data.result.enc
  if (args[0] !== sn) throw 'Kode register salah!!'
  user.registered = false
  m.reply(`Unreg berhasil!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' *sn*')
handler.tags = ['main']
 
handler.command = /^unreg(ister)?$/i
handler.register = true
 
module.exports = handler
 
 