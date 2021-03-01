module.exports = {
    name: '제작자',
    description: "제작자 프로필입니다.",
    execute(client, message, cmd, args, Discord){
        const profileembed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('질문수(郅炆樹)')
        .setURL('https://www.youtube.com/channel/UCaZz_1roZj6UILtNSVAL9Wg')
        .setDescription('반갑습니다 :)')
        .setThumbnail(message.author.displayAvatarURL())
        .addFields(
            {name: '뭐가', value: '들어가야하지'},
            {name: 'ㅁㄴㅇㄹ', value: 'ASDF'},
            {name: 'lorem', value: 'ipsum'},
        )
        .setFooter("COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.");
        
        message.channel.send(profileembed);
    }
}