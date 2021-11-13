const fs = require("fs")

let handler = async(m, { conn, usedPrefix, command, text }) => {
 let [ t1, t2 ] = text.split`!`
  if(!t1) return m.reply("Masukan nama file\nEx: #addsc namafile.copyright")
  
  if(!m.quoted.text) return m.reply(`Kodenya mana? direply lah bujang!!`)

  let filename = t1
  
  if(fs.existsSync("./plugins/" + filename + "")) return m.reply(`${filename} sudah ada!`)
  
let com = '//'
  let str = `${com}${t2}
${m.quoted.text}
${com}${t2}`

  fs.createWriteStream("./plugins/" + filename + "")
  fs.writeFileSync("./plugins/" + filename + "", str)
conn.fakeReply(m.chat, `Kode berhasil disimpan dengan nama ${filename}`, '0@s.whatsapp.net', 'Easy Code by Amirul Dev', 'status@broadcast')
}

handler.command = /^(addsc)/i

module.exports = handler