const EventEmitter = require('events');
const Gateway = require('./Gateway');
const { GatewayIntentBits } = require('../constants/GatewayIntentBits');

class KidNetClient extends EventEmitter {
  constructor(options = {}) {
    super();
    this.token = options.token || null;
    this.intents = options.intents || [];

    // Validate intents
    for (const intent of this.intents) {
      if (!Object.values(GatewayIntentBits).includes(intent)) {
        throw new Error(`Invalid intent provided: ${intent}`);
      }
    }

    this.gateway = new Gateway(this);
    this.user = null;
  }

  login(token) {
    this.token = token || this.token;
    if (!this.token) throw new Error('No bot token provided.');

    this.gateway.connect();
  }
}

module.exports = { KidNetClient };
