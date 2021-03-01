module.exports = {
    name: '권한',
    aliases: [],
    permissions: [],
    description: "테스트 기능입니다.",
    execute(client, message, cmd, args, Discord){
        // 테스트 서버 관리자 ID: 798111692277284894
        // 메인 서버 관리자 ID: 451351322109935626 / 451355421152903178
        if (message.member.roles.cache.has('451351322109935626') || message.member.roles.cache.has('451355421152903178')) {
            message.channel.send("당신은 '관리자' 권한을 가지고 있습니다.");
        }
         
        // 테스트 서버 일반 유저 ID: 798123294917787650
        // 메인 서버 일반 유저 ID: 451355760396337152
        else if (message.member.roles.cache.has('451355760396337152')) {
            message.channel.send("당신은 '일반 유저' 권한을 가지고 있습니다.");
        } else {
            message.channel.send("당신은 유배 중이거나 권한이 없습니다.");
        }
    }
}