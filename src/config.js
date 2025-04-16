require('dotenv').config();

module.exports = {
    token: process.env.TOKEN || "TOKEN_HERE",
    prefix:  process.env.PREFIX || "!",
    ownerID: process.env.OWNERID || "801478547893387345",
    mongourl: process.env.MONGO_URI || "MONGO_URI",
    embedColor: process.env.COLOR || 0x303236,
    logs: process.env.LOGS || "",
}