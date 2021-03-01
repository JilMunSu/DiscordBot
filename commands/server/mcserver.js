const util = require('minecraft-server-util');
 
module.exports = {
    name: '마크서버',
    aliases: [],
    permissions: [],
    description: '마인크래프트의 서버 정보를 불러옵니다.',
    execute(client, message, cmd, args, Discord){
        if(!args[0]) return message.channel.send('마인크래프트 서버 IP를 입력해주세요.');
        if(!args[1]) return message.channel.send('마인크래프트 서버 포트를 입력해주세요.');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle(`마인크래프트 서버 ${args[0]} 정보`)
            .addFields(
                {name: '서버 IP', value: response.host},
                {name: '접속유저 수', value: response.onlinePlayers},
                {name: '최대 플레이어', value: response.maxPlayers},
                {name: '버전', value: response.version}
            )
            .setFooter('COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('이 서버를 찾는 동안 오류가 발생했습니다.');
            throw error;
        })
    }
}