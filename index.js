const Devex= require('./src/structures/Client');

const client = new Devex();

client.connect()

module.exports = client;