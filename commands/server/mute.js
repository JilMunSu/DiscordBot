const ms = require('ms')

module.exports = {
    name: '유배',
    aliases: [],
    permissions: [],
    description: "유저 뮤트 기능입니다.",
    execute(client, message, cmd, args, Discord){
        // 테스트 서버 관리자 ID: 798111692277284894
        // 메인 서버 관리자 ID: 451351322109935626 / 451355421152903178
        if (message.member.roles.cache.has('451351322109935626') || message.member.roles.cache.has('451355421152903178')) {
            const target = message.mentions.users.first();

            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === '길드원');
                let muteRole = message.guild.roles.cache.find(role => role.name === '귀양살이 중');
                let memberTarget = message.guild.members.cache.get(target.id);

                if(!args[1]){
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}>를 유배 보냈습니다.`);
                    console.log(`<@${memberTarget.user.id}>를 유배 보냈습니다.`);
                    return;
                }

                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}>를 ${ms(ms(args[1]))}동안 유배 보냈습니다.`);
                    console.log(`<@${memberTarget.user.id}>를 ${ms(ms(args[1]))}동안 유배 보냈습니다.`);

                setTimeout(function() {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}>가 풀려났습니다.`);
                    console.log(`<@${memberTarget.user.id}>가 풀려났습니다.`);
                }, ms(args[1]));
            } else {
                message.channel.send("해당 유저를 찾을 수 없습니다.");
            }
        } else {
            message.channel.send("당신은 권한이 없습니다.");
        }
    }
}