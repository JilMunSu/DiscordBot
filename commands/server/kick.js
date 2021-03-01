module.exports = {
    name: '추방',
    aliases: [],
    permissions: [],
    description: "유저 추방 기능입니다.",
    execute(client, message, cmd, args, Discord){
        // 테스트 서버 관리자 ID: 798111692277284894
        // 메인 서버 관리자 ID: 451351322109935626 / 451355421152903178
        if (message.member.roles.cache.has('451351322109935626') || message.member.roles.cache.has('451355421152903178')) {
            const member = message.mentions.users.first();
            
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`<@${member.id}>를 추방했습니다.`);
                console.log(`<@${member.id}>를 추방했습니다.`);
            } else {
                message.channel.send("당신은 해당 멤버를 추방하실 수 없습니다.");
            }
        } else {
            message.channel.send("당신은 권한이 없습니다.");
        }
    }
}