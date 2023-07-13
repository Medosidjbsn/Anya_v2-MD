// Q U E E N - A N Y A - M D  #v2

// • # Made by @PikaBotz [ GitHub.com/PikaBotz ]
// • # The script is Encrypted because users are not allowed to commit any changes without permission!
// • # To buy non enc version of Anya-pika-MD-v2 please contact wa.me/918811074852 [ $5 - $8 ]

// • T H A N K S - TO
// @NexusAt12
// @xeon
// @teamolduser

const fs = require('fs')
const chalk = require('chalk')
require('./lib/config')

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}
global.lApiKey = {// if this API key get expired then please go to https://api.lannn.me and get a new api key.
      one: 'uMSPCuLU',
      two: 'IOGaHu5S'
}


global.botname = "『🐉┇𝙼𝙴𝙳𝙾 𝙱𝙾𝚃』" 
global.author = "『🐉┇𝙼𝙴𝙳𝙾 𝙱𝙾𝚃』"  
global.packname = "🔱...𝑴𝑬𝑫𝑶..🐉"  
global.myweb = "https://telegra.ph/file/7f6c29cb9a210ff9c0095.jpg"
global.footer = "©\t" + "🔱...𝑴𝑬𝑫𝑶..🐉"
global.prefa = ['-'] // single prefix
global.themeemoji = "🐉"
global.socialText = `*⪧⪢ رقم مالك البوت.*`
global.socialLink = `*⪧⪢ http://wa.me/201016892396 *`


global.ownername = "🔱...𝑴𝑬𝑫𝑶..🐉"    
global.ownernumber = ["201016892396"]
global.ytname = "YT: no yt"
global.continent = "Africa" // your continent name 
global.region = "Egypt"
global.state = "Dakahlia" // your state name
global.timezone = "Asia/Kolkata" // search on google if you don't know the timezone of your country //
global.instagramId = "https://instagram.com/medo_ili?igshid=NGExMmI2YTkyZg=="
global.email = "mm99001144884477@gmail.com"


// Greeting messages
global.greet1 = "صباح الخير ☀️" // after 3 AM
global.greet2 = "مساء النور🏜️" // after 12 PM
global.greet3 = "مسائكم سعيد 🌆" // after 4 PM
global.greet4 = "نامو شوية 😴" // after 8:30 PM


//--------------- Tip ----------------\\
global.tip1 = `Type *${prefa}info* for more information....`
global.tip2 = `Type *${prefa}settings* to commit changes in the bot.`
global.tip3 = `If you got a bug or error, then please report to developer asap by *${prefa}report* command.`

//--------------- Menu images ----------------\\
global.nullImage = fs.readFileSync('https://instagram.com/medo_ili?igshid=NGExMmI2YTkyZg==')
global.Menuimage = fs.readFileSync("https://instagram.com/medo_ili?igshid=NGExMmI2YTkyZg==") // Thumbnail for Dashboard
global.thumnnaiIs = fs.readFileSync("https://instagram.com/medo_ili?igshid=NGExMmI2YTkyZg==")
global.allmenuImg = fs.readFileSync('https://instagram.com/medo_ili?igshid=NGExMmI2YTkyZg==') // Thumbnail for Allmenu command 

global.mess = {
    success: '*تم ✅*',
    admin: '*يجب ان تكون مشرف لي تنفيذ الامر ايها العضو*',
    botAdmin: '*يجب ان يكون البوت مشرف لي تنفيذ الامر*',
    owner: '*هاذا الامر لي مالك البوت فقط*',
    group: '*هاذا الامر مخصص لي الجروبات فقط*',
    private: '*هاذا الامر مخصص لي الخاص فقط*',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」جاري التحميل...```',
    link: '*يجب ان ترسل رابط لي تنفيذ الامر*',
    error: '```404 Error```',
    ban: `*لقد تم حظرك من استعمال اوامر البوت*`,
    nsfw: '*ليس مسموح بي هذه الاوامر في الجروب احترم نفسك*',
    banChat: '*هاذا الجروب محظور استعمال الاوامر فيه تواصل مع المالك لي فك الحظر*'
}


/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
	
