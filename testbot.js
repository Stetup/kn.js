const { KidNetClient, GatewayIntentBits } = require('./src');

const client = new KidNetClient({
  intents: [GatewayIntentBits.Messages, GatewayIntentBits.Users]
});

client.on('ready', () => {
  console.log(`${client.user.username} is online!`);
});

client.login('fake-bot-token');
