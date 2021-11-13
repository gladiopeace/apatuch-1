let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Ops.. nomor anda sudah terdaftar didalam bot
  
ingin daftar ulang?
ketik #unreg snkamu`

if (!text) throw `Untuk mendaftar silahkan ikuti contoh:
 
#register renz.20.madiun`

  let [name, age, kota] = text.split`.`

  if (!name) throw `*Command Salah*

Nama tidak boleh kosong
Contoh:
#register renz.20.madiun`

if (!age) throw `*Command Salah*

Umur tidak boleh kosong
Contoh:
#register renz.20.madiun`

  age = parseInt(age)
  if (age > 60) throw `*Ops Umur anda terlalu tua*
Silahkan isi umur dengan benar!!`

  if (age < 5) throw `*Ops Umur anda terlalu muda*
Bot ini tidak bisa digunakan orang dibawah umur`

if (!kota) throw `*Command Salah*

Kota tidak boleh kosong
Contoh:
#register renz.20.madiun`

  
  user.name = name.trim()
  user.age = age
  user.kota = kota
  user.regTime = + new Date
  user.registered = true
  let a = require('axios')
let b = await a.get("https://hadi-api.herokuapp.com/api/base64?teks=m.sender&method=enc")
let sn = b.data.result.enc
  m.reply(`*-=[ REGISTER SUCCESS ]=-*
┌─〔 DETAIL 〕
├ Nama: ${name}
├ Umur: ${age} tahun
├ Kota: ${kota}
└────
 
Pastikan data anda telah benar, guna agar mendapatkan teman terdekat lewat bot ini!!`.trim())
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', 'Dibawah ini adalah kode register kamu, silahkan bintangi pesan ini', 'status@broadcast')
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' *nama.umur*')
handler.tags = ['main']
 
handler.command = /^(daftar|reg(ister)?)$/i
 
module.exports = handler
 
 