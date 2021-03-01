const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, guildMember) => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '길드원');
    guildMember.roles.add(welcomeRole);

    // 테스트 서버채널 ID: 798135952219570217
    // 메인 서버채널 ID: 628632370697863183
    guildMember.guild.channels.cache.get('628632370697863183').send(`환영합니다 <@${guildMember.user.id}>님!`);

    let profile = await profileModel.create({
        userID: guildMember.id,
        serverID: guildMember.guild.id,
        coins: 1000,
        bank: 0,
    });
    profile.save();
}