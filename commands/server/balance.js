module.exports = {
    name: "총액",
    permissions: [],
    description: "총액 확인 시스템",
    execute(client, message, cmd, args, Discord, profileData) {
      message.channel.send(`당신은 ${profileData.coins}원을 가지고있습니다.`); //you banks bal is ${profileData.bank}
    },
  };