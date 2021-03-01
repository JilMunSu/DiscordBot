module.exports = {
    name: 'dst',
    description: "돈스타브 투게더 정보입니다.",
    async execute(client, message, cmd, args, Discord){
        // 테스트 서버 채널 ID: 798114583054909503
        // 메인 서버 채널 ID: 628632370697863183
        const channel = '628632370697863183';
        const FirstEmoji = '1️⃣';
        const SecondEmoji = '2️⃣';
        const ThirdEmoji = '3️⃣';

        const FirstEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('무엇을 도와드릴까요?')
        .setURL('https://namu.wiki/w/Don\'t%20Starve')
        .setDescription('돈스타브 투게더 명령어는 \'..dst\'로 시작합니다.')
        .addFields(
            {name: '지형', value: `입력 시 '지형'정보를 표시합니다.`},
            {name: '천연자원', value: `입력 시 '천연자원'정보를 표시합니다.`},
            {name: '몬스터', value: `입력 시 '몬스터'정보를 표시합니다.`},
        )
        .setFooter("COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.");

        const SecondEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('무엇을 도와드릴까요?')
        .setURL('https://namu.wiki/w/Don\'t%20Starve')
        .setDescription('돈스타브 투게더 명령어는 \'..dst\'로 시작합니다.')
        .addFields(
            {name: '계절', value: `입력 시 '계절'정보를 표시합니다.`},
            {name: '가공아이템', value: `입력 시 '가공아이템'정보를 표시합니다.`},
            {name: '음식', value: `입력 시 '음식'정보를 표시합니다.`},
        )
        .setFooter("COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.");

        const ThirdEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('무엇을 도와드릴까요?')
        .setURL('https://namu.wiki/w/Don\'t%20Starve')
        .setDescription('돈스타브 투게더 명령어는 \'..dst\'로 시작합니다.')
        .addFields(
            {name: '캐릭터', value: `입력 시 '캐릭터'정보를 표시합니다.`},
            {name: '팁', value: `입력 시 '팁'을 표시합니다.`},
        )
        .setFooter("COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.");

        let messageEmbed = await message.channel.send(FirstEmbed);

        var Dictionary = new Array(FirstEmoji, SecondEmoji, ThirdEmoji);
        for (var i = 0; i < Dictionary.length; i++) {
            messageEmbed.react(Dictionary[i]);
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                switch (reaction.emoji.name) {
                    case FirstEmoji: 
                        await messageEmbed.edit(FirstEmbed);
                        break;
                    case SecondEmoji:
                        await messageEmbed.edit(SecondEmbed);
                        break;
                    case ThirdEmoji:
                        await messageEmbed.edit(ThirdEmbed);
                        break;
                    default:
                        return;
                } 
            }
        })
    }
}