module.exports = {
  name: "shardDisconnect",
  run: async (client, event, id) => {
    client.logger.warn(`Shard #${id} Disconnected`);
  }
};