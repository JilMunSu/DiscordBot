module.exports = {
    name: '클리어',
    description: "메시지 삭제 기능입니다.",
    async execute(client, message, cmd, args, Discord){
        // 테스트 서버 관리자 ID: 798111692277284894
        // 메인 서버 관리자 ID: 451351322109935626 / 451355421152903178
        if (message.member.roles.cache.has('451351322109935626') || message.member.roles.cache.has('451355421152903178')) {
            if(!args[0] || isNaN(args[0])) return message.channel.send("숫자를 입력해주세요.");
            if(args[0] > 100 || args[0] < 1) return message.channel.send("1~100까지의 숫자만 입력가능합니다.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            })
        } else {
            message.channel.send("당신은 권한이 없습니다.");
        }
    }
}