const memberCounter = require('../../counters/member-counter')

module.exports = async(Discord, client, message, guildMember) => {
    console.log(`Logged in as ${client.user.tag}!  \n ---------------------------------------------------------`);
    client.user.setActivity('..도움', { type: 'LISTENING' }).catch(console.error);
    memberCounter(client);
}