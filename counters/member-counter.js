module.exports = async (client) =>{
    const guild = client.guilds.cache.get('657959292514730004');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('815951742310809630');
        channel.setName(`전체 유저 수: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 500000);
}