//- List module

let fs = require('fs')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

//- Setting Bot
let a = '```'
global.pict = 'https://telegra.ph/file/bcc1fb3b041a46f7a64cc.jpg'
global.name = 'Hageuy Store'
global.footer = `${week} ${date}
`
global.sw = ["6283102050562", "6283102050562", "6283102050562"]
global.logo = ['l1', 'l2', 'l3']
global.dev = 'Hageuy Store'
global.desc = 'Hageuy Store'
global.browser = 'Firefox'
global.version = '1.0.4'
global.rules = `*RULES WABOT PLUS+

Halo users
silahkan patuhi rules sebelum menggunakan bot

β’ Dilarang Telfon & VC
β’ Dilarang Spam
β’ Dilarang Invite Bot Ke
 - Grup Rasis / Sara
 - Grup Judi
 - Grup penipuan
β’ Dilarang menjual belikan nomor bot

Apabila melanggar akan di banned permanen`,

global.capt = ['Halo, terimakasih telah menggunakan bot ini, jangan lupa dukung bot ini dengan cara donasi yah', 'Terimakasih telah menggunakan bot ini, dimohon mematuhi semua rules dan tidak spam ke bot, happy boters guys π', 'Hai π/nthanks uda menggunakan bot ini, apabila ada fitur yang eror atau bug, silahkan lapor ke owner langsung yah', 'Hai kak π\nHave a nice day. gunakan bot sewajarnya aja yah.. jangan spam dan jangan diperjual belikan, bot ini gratis tidak ada unsur sewaΒ²an kecuali fitur fitur tertentu!!']

// WM STIKER
global.packname = 'Hageuy Store'
global.author = 'π'

// RESPON
global.wait = 'Permintaan sedang diproses...'
global.eror = 'Server Error'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.CanvasAPI = '';

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

global.owner = ['6283102050562', '6283102050562'] // Owner

global.mods = [] // Moderator

global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium

global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
 my: 'https://hadi-api.herokuapp.com/api',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
 'https://hadi-api.herokuapp.com/api': 'hadkey',
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {

fs.unwatchFile(file)

console.log(chalk.redBright("Update 'config.js'"))

delete require.cache[file]
require(file)

})

