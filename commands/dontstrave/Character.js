module.exports = {
    name: 'dst_Character',
    description: "돈스타브 투게더 캐릭터정보입니다.",
    async execute(client, message, cmd, args, Discord){
        const dstCHembed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('돈스타브 투게더 캐릭터정보입니다.')
        .setURL('https://namu.wiki/w/Don\'t%20Starve/%EC%BA%90%EB%A6%AD%ED%84%B0')
        .setDescription('돈스타브 투게더 캐릭터 명령어는 \'..dst-캐릭터\'로 시작합니다.')
        .addFields(
            {name: '개요', value: `입력 시 개요로 이동합니다.`},
            {name: '윌슨', value: `입력 시 '윌슨'정보로 이동합니다.`},
            {name: '윌로우', value: `입력 시 '윌로우'정보로 이동합니다.`},
            {name: '볼프강', value: `입력 시 '볼프강'정보로 이동합니다.`},
        )
        .setFooter("COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.");
        await message.channel.send(dstCHembed);
    }
}