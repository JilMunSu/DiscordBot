module.exports = {
    name: 'dst_Character_Wilson',
    aliases: [],
    permissions: [],
    description: "돈스타브 투게더 캐릭터(윌슨)정보입니다.",
    async execute(client, message, cmd, args, Discord){
        const dstWilsonembed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('돈스타브 투게더 캐릭터(윌슨)정보입니다.')
        .setURL('https://namu.wiki/w/%EC%9C%8C%EC%8A%A8(Don\'t%20Starve)')
        .setThumbnail('https://w.namu.la/s/51c1a1aae88ef44785b39277165d577000d6d1efae1f45d63026857f8f4261d06a92ef9769fc17ca7d0d0118cdc212b8be239f9e145405e71c79ab0bcd7b13797c3032c49c6b637f46821602bd2a6120e303540e6398a140d4da1490d7be38f58f1db09916eb02adf4461e06fdf23591')
        .setDescription('난 내 정신력으로 이 세상을 지배할 거야!')
        .addFields(
            {name: '체력', value: `150`, inline: true},
            {name: '허기', value: `150`, inline: true},
            {name: '정신력', value: `200`, inline: true},
            {name: '공격력', value: `100%`, inline: true},
        )
        .setFooter("COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.");
        await message.channel.send(dstWilsonembed);
    }
}
