module.exports = {
    name: "총액",
    aliases: [],
    permissions: [],
    description: "총액 확인 시스템",
    execute(client, message, cmd, args, Discord, profileData) {
      message.channel.send(`당신은 ${profileData.coins}원을 가지고있습니다. \n당신의 계좌에 ${profileData.bank}원이 있습니다.`);
    },
  };