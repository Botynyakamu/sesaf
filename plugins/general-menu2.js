import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, Hai kak aku zifabotz yang di buat oleh rozi\n\ndata: ${date}\nwaktu: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://youtube.com/channel/UCeUvY_fIVSAaQ1n5SAylI-A', 'YouTube owner', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\ngweh gay bang`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
