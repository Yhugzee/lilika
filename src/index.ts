import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', () => {
    console.log(`Lilika est réveillée, connectée en tant que ${client.user?.tag} 🦇`);
});

client.login(process.env.DISCORD_TOKEN);
