let cp = require('child_process')
let { promisify } = require('util')
let fs = require('fs')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return
  let [ t1, t2 ] = text.split`|`
  m.reply(`Update new file & folder to github...`)
  // action git action file* or folder/*
  let textt = `git ${t1}* && git commit -m "${t2}" && git push origin main`



  let o
  try {
    o = await exec(textt.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    let ban = fs.readFileSync('tmp/l3.jpg')
    if (stdout.trim()) {
    conn.sendLoc(m.chat, ban, stdout, global.footer, 'OWNER', '#owner')
   }
    if(stderr.trim()) conn.sendLoc(m.chat, ban, stderr, global.footer, 'OWNER', '#owner')
  }
}
handler.help = ['act']
handler.tags = ['owner']
handler.command = /^(act)$/i
handler.owner = true
handler.register = true
module.exports = handler
