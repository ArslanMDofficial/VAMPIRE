const axios = require('axios');

module.exports = {
  name: 'ping',
  description: 'Check if bot is online and show latency',
  async execute({ client, message, args, env }) {
    try {
      // 1) Télécharger l'image du bot
      const imageUrl = env?.DEFAULT_MEDIA_URL || 'https://files.catbox.moe/jvuqi0.jpg';
      const imgRes = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imgBuffer = Buffer.from(imgRes.data, 'binary');

      // 2) Générer la latence aléatoire
      const latency = Math.floor(Math.random() * 10001);

      // 3) Construire la légende
      const caption = `
┌───────────────────
│ 🅥︎🅐︎🅜︎🅟︎🅘︎🅡︎🅔︎  Ⓜ︎Ⓓ︎
└───────────────────
🌐 VERSION : *1.0*
🖊️ TYPE : MINI-BOT
🌹 Promu par Jenifer XM
➽ Pong : LATENCE ${latency}ms
      `.trim();

      // 4) Envoyer l'image avec la légende
      await client.sendMessage(message.from, {
        image: imgBuffer,
        caption
      });

    } catch (err) {
      console.error('Erreur dans ping.js:', err);
      await client.sendMessage(message.from, { text: '❌ Erreur lors du test de ping.' });
    }
  }
};
