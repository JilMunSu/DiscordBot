module.exports = {
    name: '도움',
    aliases: [],
    permissions: [],
    description: "명령어 도움 기능입니다.",
    async execute(client, message, cmd, args, Discord){
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('명령어 목록')
        .setDescription('모든 명령어는 \"..\"으로 시작합니다')
        .addFields(
            {name: '권한', value: '기본적인 테스트 명령어 입니다.'},
            {name: '노동', value: '돈을 법니다. 처음할 경우 데이터 입력을 위해 다시 입력하셔야 합니다. \n 이후부턴 정상적으로 표시됩니다.'},
            {name: '총액', value: '수중에 있는 돈과 통장잔고를 확인합니다. 기본적으로 1000원을 가지고 시작합니다.'},
            {name: '예금 [숫자]', value: '은행에 돈을 [숫자]만큼 예금합니다'},
            {name: '출금 [숫자]', value: '은행에서 돈을 [숫자]만큼 출금합니다'},
            {name: '기부 [유저] [숫자]', value: '다른 유저에게 돈을 기부합니다. 관리자만 이용가능합니다.'},
            {name: '투표', value: '투표를 생성합니다.'},
            {name: '이미지 [제목]', value: '구글에서 [제목]의 이미지를 불러옵니다.'},
            {name: '마크서버 [서버 IP] [서버 포트]', value: '마인크래프트 [서버 IP]의 정보를 불러옵니다.'},
            {name: '클리어 [숫자]', value: '해당 채널의 메시지를 [숫자] 만큼 삭제합니다. \n 단, 14일 이전의 메시지만 대량삭제 가능합니다.'},
            {name: '유배 [유저] [숫자+단위]', value: '[유저]의 행동을 제한합니다.([숫자+단위]는 선택사항입니다. ex.20s, 1m, 1h)'},
            {name: '두부먹자 [유저]', value: '[유저]의 행동 제한을 해제합니다.'},
            {name: '추방 [유저]', value: '[유저]를 서버에서 퇴장시킵니다.'},
            {name: '밴 [유저]', value: '[유저]를 밴합니다.'},
            {name: '재생 [곡 제목]', value: '입력한 [곡 제목]을 재생합니다.'},
            {name: '스킵', value: '재생중인 곡을 스킵합니다.'},
            {name: '그만', value: '재생중인 곡과 대기열에 있는 모든 곡을 지우고 음성채널에서 떠납니다.'},
            {name: 'dst', value: '돈스타브 투게더 도움 정보입니다.'},
            {name: '제작자', value: '제작자 프로필입니다.'},
        )
        .setFooter("COPYRIGHT ⓒ 2021 JILMUNSU ALL RIGHTS RESERVED.");
        
        message.channel.send(HelpEmbed);
    }
}