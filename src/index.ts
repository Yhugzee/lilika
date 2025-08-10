import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(
    `Lilika est réveillée, connectée en tant que ${client.user?.tag} 🦇`,
  );
});

async function start() {
  const token = process.env.DISCORD_TOKEN;

  if (!token) {
    console.error("❌ DISCORD_TOKEN manquant dans l'environnement");
    process.exit(1);
  }

  try {
    await client.login(token);
  } catch (err) {
    console.error("❌ Échec du login :", err);
    process.exit(1);
  }
}

// Appel de la fonction avec `void` pour indiquer qu'on gère déjà les erreurs à l'intérieur
void start();
